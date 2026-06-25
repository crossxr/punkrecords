'use server'

const KEY_ID = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

/**
 * Creates a payment order with Razorpay.
 * If credentials are not set, falls back to a simulated mock order structure.
 */
export async function createRazorpayOrderAction(amount: number, receiptId: string) {
  if (!KEY_ID || !KEY_SECRET || KEY_ID.includes('YOUR_KEY') || KEY_SECRET.includes('YOUR_SECRET')) {
    console.warn('Razorpay API keys are not configured or contain placeholder templates. Initializing simulated flow.')
    return {
      success: true,
      isMock: true,
      keyId: 'rzp_test_MOCK_KEY_ID',
      order: {
        id: 'order_mock_' + Math.random().toString(36).substring(2, 9).toUpperCase(),
        amount: amount * 100, // In paise
        currency: 'INR'
      }
    }
  }

  try {
    const authString = Buffer.from(`${KEY_ID.trim()}:${KEY_SECRET.trim()}`).toString('base64')

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // In paise
        currency: 'INR',
        receipt: receiptId.substring(0, 40) // Receipt length limit check
      }),
      cache: 'no-store'
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Razorpay Order API failure:', errText)
      throw new Error(`Razorpay API responded with status ${response.status}`)
    }

    const data = await response.json()
    return {
      success: true,
      isMock: false,
      keyId: KEY_ID.trim(),
      order: {
        id: data.id,
        amount: data.amount,
        currency: data.currency
      }
    }
  } catch (error: any) {
    console.error('Error creating Razorpay Order:', error)
    return {
      success: false,
      error: error.message || 'Payment gateway initialization failed.'
    }
  }
}
