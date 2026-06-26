import { RESOURCES } from '../../../data/resources'

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params
  const product = RESOURCES.find((r) => r.id === id)

  if (!product || !product.downloadUrl) {
    return new Response('Resource not found', { status: 404 })
  }

  try {
    const res = await fetch(product.downloadUrl)
    if (!res.ok) {
      return new Response('Failed to download file from storage', { status: res.status })
    }

    const filename = decodeURIComponent(product.downloadUrl.split('/').pop() || 'resource.zip')

    // Create custom headers to force browser file download
    const headers = new Headers()
    headers.set('Content-Disposition', `attachment; filename="${filename}"`)
    
    // Copy content-type and content-length if present from R2 response
    const contentType = res.headers.get('content-type')
    const contentLength = res.headers.get('content-length')
    if (contentType) headers.set('Content-Type', contentType)
    if (contentLength) headers.set('Content-Length', contentLength)

    return new Response(res.body, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error('Download proxy error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
