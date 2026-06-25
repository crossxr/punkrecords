'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '../../context/CartContext'
import { RESOURCES } from '../../data/resources'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProductCheckoutPage({ params }: PageProps) {
  const { id } = use(params)
  const { ownedItems, markAsOwned } = useCart()

  // Find the resource
  const product = RESOURCES.find((r) => r.id === id)

  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvc, setCardCvc] = useState('')

  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [licenseKey, setLicenseKey] = useState('')
  const [txHash, setTxHash] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (product && ownedItems.includes(product.id)) {
      setIsSuccess(true)
    }
  }, [product, ownedItems])

  if (!product) {
    return (
      <div className="flex-1 flex flex-col bg-fog items-center justify-center py-[120px] px-[24px]">
        <h2 className="font-display text-heading-sm font-bold text-obsidian tracking-tight">Resource Not Found</h2>
        <p className="font-body text-body text-slate mt-4 mb-8">The requested design resource does not exist.</p>
        <Link href="/shop" className="bg-obsidian text-paper font-body text-caption font-semibold px-24 py-12 rounded-buttons hover:bg-obsidian/90 transition-all">
          Return to Shop
        </Link>
      </div>
    )
  }

  const isFree = product.price === 0

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!email) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    if (!isFree) {
      if (cardNumber.replace(/\s/g, '').length < 16) {
        setErrorMsg('Please enter a valid 16-digit card number.')
        return
      }
      if (cardExpiry.length < 5) {
        setErrorMsg('Please enter card expiration (MM/YY).')
        return
      }
      if (cardCvc.length < 3) {
        setErrorMsg('Please enter a valid 3-digit CVC.')
        return
      }
    }

    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      markAsOwned(product.id)

      if (!isFree) {
        const randKey = 'PR-' + Array.from({ length: 3 }, () =>
          Math.random().toString(36).substring(2, 7).toUpperCase()
        ).join('-')
        const randHash = '0x' + Array.from({ length: 40 }, () =>
          Math.floor(Math.random() * 16).toString(16)
        ).join('')
        setLicenseKey(randKey)
        setTxHash(randHash)
      }

      setIsSuccess(true)
    }, 2000)
  }

  // Input formatters
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '')
    const formatted = val.match(/.{1,4}/g)?.join(' ') || val
    setCardNumber(formatted.substring(0, 19))
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '')
    let formatted = val
    if (val.length >= 2) {
      formatted = val.substring(0, 2) + '/' + val.substring(2, 4)
    }
    setCardExpiry(formatted.substring(0, 5))
  }

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '')
    setCardCvc(val.substring(0, 3))
  }

  return (
    <div className="flex-1 flex flex-col bg-fog pt-[48px] pb-[96px] px-[24px] md:px-[80px]">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-[32px]">
        {/* Back Link */}
        <Link href="/shop" className="group flex items-center gap-[8px] font-body text-[14px] text-slate hover:text-obsidian w-fit transition-colors">
          <svg className="w-[16px] h-[16px] stroke-current stroke-2 fill-none group-hover:-translate-x-[4px] transition-transform" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Shop Resources</span>
        </Link>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-start mt-[16px]">
          
          {/* Left Column: Product Logo and Information (Spans 7) */}
          <div className="lg:col-span-7 flex flex-col gap-[32px]">
            {/* Visual Preview Container */}
            <div className={`w-full aspect-[16/10] bg-gradient-to-br ${product.gradient} rounded-cards border border-ash/40 shadow-md relative overflow-hidden flex items-center justify-center p-[48px] select-none`}>
              {/* Background grid */}
              <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Central Specimen Graphics */}
              <div className="flex-1 flex items-center justify-center relative z-10">
                {product.type === 'Font' && (
                  <div className="text-center flex flex-col items-center">
                    <span className="font-display text-[96px] sm:text-[120px] font-bold text-paper tracking-tighter leading-none mb-[12px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.15)] animate-pulse">
                      Aa
                    </span>
                    <span className="font-body text-[13px] tracking-[4px] text-paper/85 uppercase font-semibold">
                      {product.title.split(' ')[0]} SPECIMEN
                    </span>
                  </div>
                )}

                {product.type === 'UI Kit' && (
                  <div className="w-full max-w-[280px] bg-paper/15 backdrop-blur-md rounded-cards p-[28px] border border-paper/20 flex flex-col gap-[16px] shadow-lg">
                    <div className="flex justify-between items-center border-b border-paper/10 pb-[12px]">
                      <div className="h-[14px] w-[60px] bg-paper/40 rounded" />
                      <div className="h-[12px] w-[30px] bg-paper/30 rounded" />
                    </div>
                    <div className="h-[18px] bg-paper/30 rounded" />
                    <div className="h-[14px] bg-paper/20 rounded w-[80%]" />
                    <div className="grid grid-cols-3 gap-[10px] mt-[8px]">
                      <div className="h-[36px] bg-paper/40 rounded" />
                      <div className="h-[36px] bg-paper/40 rounded" />
                      <div className="h-[36px] bg-paper/40 rounded" />
                    </div>
                  </div>
                )}

                {product.type === 'Icons' && (
                  <div className="grid grid-cols-3 gap-[28px] text-paper opacity-95 scale-[1.3] drop-shadow-md">
                    <svg className="w-[36px] h-[36px] stroke-current stroke-[1.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <svg className="w-[36px] h-[36px] stroke-current stroke-[1.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <svg className="w-[36px] h-[36px] stroke-current stroke-[1.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    </svg>
                    <svg className="w-[36px] h-[36px] stroke-current stroke-[1.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4" />
                    </svg>
                    <svg className="w-[36px] h-[36px] stroke-current stroke-[1.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                    </svg>
                    <svg className="w-[36px] h-[36px] stroke-current stroke-[1.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                )}

                {product.type === '3D Asset' && (
                  <div className="relative w-[120px] h-[120px] flex items-center justify-center scale-110">
                    <div className="w-[100px] h-[100px] rounded-full bg-paper/20 backdrop-blur-md border border-paper/30 shadow-2xl relative flex items-center justify-center">
                      <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-tr from-lemon-zest to-orchid shadow-lg animate-pulse" />
                    </div>
                  </div>
                )}
              </div>

              {/* Tag overlay */}
              <div className="absolute bottom-[24px] right-[24px] bg-paper/10 backdrop-blur-md border border-paper/20 rounded-full px-[16px] py-[6px] text-paper text-[12px] font-medium font-body select-none">
                {product.fileSize}
              </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-col gap-[20px] text-left">
              <div className="flex flex-wrap items-center gap-[12px]">
                <span className="bg-royal-violet/10 text-royal-violet font-body text-[11px] font-bold uppercase tracking-wider px-[12px] py-[6px] rounded-full border border-royal-violet/20">
                  {product.type}
                </span>
                <span className="font-body text-caption font-semibold tracking-[1px] text-slate">
                  by {product.author}
                </span>
              </div>

              <h1 className="font-display text-[32px] sm:text-[44px] font-bold text-obsidian tracking-tight leading-tight">
                {product.title}
              </h1>

              <p className="font-body text-[16px] sm:text-body text-slate leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specification Grid Table */}
            <div className="bg-paper rounded-cards border border-ash/50 p-[32px] shadow-[0_4px_24px_rgba(18,18,23,0.02)] flex flex-col gap-[20px] mt-[16px]">
              <h3 className="font-display text-[18px] font-bold text-obsidian tracking-tight border-b border-ash/30 pb-[12px] text-left">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] text-left font-body">
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[11px] text-slate font-medium uppercase tracking-wider">File Size</span>
                  <span className="text-[16px] font-bold text-obsidian">{product.fileSize}</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[11px] text-slate font-medium uppercase tracking-wider">Downloads</span>
                  <span className="text-[16px] font-bold text-obsidian">{product.downloads}</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[11px] text-slate font-medium uppercase tracking-wider">Rating</span>
                  <span className="text-[16px] font-bold text-obsidian">★ {product.rating} / 5.0</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[11px] text-slate font-medium uppercase tracking-wider">License Type</span>
                  <span className="text-[16px] font-bold text-obsidian">{isFree ? 'Free Specimen' : 'Commercial Standard'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Checkout & Billing / Success (Spans 5) */}
          <div className="lg:col-span-5 bg-paper rounded-cards border border-ash/50 p-[32px] sm:p-[40px] shadow-[0_8px_32px_rgba(18,18,23,0.04)] text-left relative overflow-hidden flex flex-col">
            {isSuccess ? (
              /* Success & Download State */
              <div className="animate-in zoom-in-95 duration-300 flex flex-col gap-[24px] py-[12px]">
                {/* Success checkmark */}
                <div className="w-[64px] h-[64px] bg-emerald/10 text-emerald rounded-full flex items-center justify-center mb-[8px]">
                  <svg className="w-[32px] h-[32px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <span className="font-body text-caption font-semibold tracking-[2px] text-emerald uppercase block">
                    TRANSACTION COMPLETE
                  </span>
                  <h3 className="font-display text-[28px] font-bold text-obsidian tracking-tight">
                    Ready to Deploy
                  </h3>
                </div>

                <p className="font-body text-caption text-slate leading-relaxed">
                  The specimen files are compiled. We have registered your license key and sent receipt logs to <strong className="text-obsidian">{email || 'your email'}</strong>.
                </p>

                {/* Receipt Details Card */}
                <div className="bg-fog rounded-input p-[20px] border border-ash/40 flex flex-col gap-[12px] font-body text-caption">
                  <div className="flex justify-between border-b border-ash/40 pb-8 text-[11px] text-slate">
                    <span>ASSET INFO</span>
                    <span>SIZE</span>
                  </div>
                  <div className="flex justify-between font-bold text-obsidian text-[15px]">
                    <span className="truncate pr-[8px]">{product.title}</span>
                    <span>{product.fileSize}</span>
                  </div>
                  
                  {!isFree && (
                    <>
                      <div className="border-t border-ash/40 pt-12 flex flex-col gap-4">
                        <span className="text-[11px] text-slate font-medium">LICENSE KEY</span>
                        <code className="bg-paper p-[10px] rounded border border-ash/40 font-mono text-[13px] text-obsidian break-all font-semibold">
                          {licenseKey || 'PR-7D8E2-K3N8P-M4T9X'}
                        </code>
                      </div>
                      <div className="flex flex-col gap-4">
                        <span className="text-[11px] text-slate font-medium">TRANSACTION HASH</span>
                        <code className="text-[10px] text-slate font-mono break-all font-medium leading-none">
                          {txHash || '0x5b38da6a701c568545dcfcb03fcb875f56beddc4'}
                        </code>
                      </div>
                    </>
                  )}
                </div>

                {/* Download Button */}
                <a
                  href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                    `punkrecords Specimen Download: ${product.title}\nLicense: ${isFree ? 'Free Commercial Standard' : 'Single Developer Premium'}\nKey: ${licenseKey || 'N/A'}\nFile size: ${product.fileSize}\nTimestamp: ${new Date().toISOString()}\nMock download success!`
                  )}`}
                  download={`${product.title.toLowerCase().replace(/\s+/g, '-')}-punkrecords.txt`}
                  className="w-full bg-obsidian text-paper hover:bg-obsidian/90 hover:scale-[1.01] active:scale-[0.99] font-body text-[16px] font-semibold py-[16px] rounded-buttons flex items-center justify-center gap-[8px] shadow-[0_4px_12px_rgba(18,18,23,0.15)] transition-all cursor-pointer text-center"
                >
                  <span>Download Assets</span>
                  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2 animate-bounce" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>

                <Link
                  href="/shop"
                  className="w-full bg-fog text-obsidian hover:bg-ash/35 font-body text-[15px] font-semibold py-[14px] rounded-buttons text-center transition-colors border border-ash/30"
                >
                  Return to Shop Catalog
                </Link>
              </div>
            ) : (
              /* Checkout Form State */
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <span className="font-body text-caption font-semibold tracking-[2px] text-royal-violet uppercase">
                    {isFree ? 'FREE ACCESS' : 'SECURE CHECKOUT'}
                  </span>
                  <h3 className="font-display text-[28px] font-bold text-obsidian tracking-tight">
                    Acquire Resource
                  </h3>
                </div>

                {/* Pricing Summary */}
                <div className="flex items-center justify-between border-b border-ash/30 pb-[16px] font-body">
                  <span className="text-slate font-medium text-[15px]">Unit Price:</span>
                  <span className="font-display text-[22px] font-bold text-obsidian">
                    {isFree ? 'FREE' : `$${product.price.toFixed(2)}`}
                  </span>
                </div>

                {errorMsg && (
                  <div className="bg-crimson/10 border border-crimson/30 rounded-input p-[12px] text-caption text-crimson font-body font-medium">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-[20px]">
                  {/* Email Input */}
                  <div className="flex flex-col gap-[8px]">
                    <label className="block font-body text-[11px] font-bold text-slate uppercase tracking-wider">
                      Delivery Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="designer@studio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-fog text-obsidian font-body text-[15px] px-[16px] py-[14px] rounded-input border border-ash/50 focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                    />
                    <p className="font-body text-[11px] text-slate/85 leading-normal mt-[2px]">
                      Your mock licensing key and download link will be dispatched here.
                    </p>
                  </div>

                  {/* Payment Inputs (For paid items) */}
                  {!isFree && (
                    <div className="flex flex-col gap-[16px] border-t border-ash/30 pt-[20px] mt-[8px]">
                      <div className="flex flex-col gap-[8px]">
                        <label className="block font-body text-[11px] font-bold text-slate uppercase tracking-wider">
                          Card Number
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="4111 2222 3333 4444"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className="w-full bg-fog text-obsidian font-body text-[15px] px-[16px] py-[14px] rounded-input border border-ash/50 focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-[16px]">
                        <div className="flex flex-col gap-[8px]">
                          <label className="block font-body text-[11px] font-bold text-slate uppercase tracking-wider">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="MM/YY"
                            value={cardExpiry}
                            onChange={handleExpiryChange}
                            className="w-full bg-fog text-obsidian font-body text-[15px] px-[16px] py-[14px] rounded-input border border-ash/50 focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                          />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                          <label className="block font-body text-[11px] font-bold text-slate uppercase tracking-wider">
                            CVC / CVV
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="321"
                            value={cardCvc}
                            onChange={handleCvcChange}
                            className="w-full bg-fog text-obsidian font-body text-[15px] px-[16px] py-[14px] rounded-input border border-ash/50 focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-royal-violet text-paper font-body text-[16px] font-semibold py-[16px] rounded-buttons mt-[12px] hover:bg-electric-iris active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-[8px] shadow-[0_4px_12px_rgba(84,35,231,0.2)] cursor-pointer text-center"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin h-[18px] w-[18px] text-paper" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{isFree ? 'Generating Specimen...' : 'Processing Transaction...'}</span>
                      </>
                    ) : (
                      <>
                        <span>{isFree ? 'Acquire Specimen for Free' : `Purchase Specimen — $${product.price.toFixed(2)}`}</span>
                        <svg className="w-[16px] h-[16px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center font-body text-[11px] text-slate mt-[12px] border-t border-ash/30 pt-[16px]">
                  <span>🔒 SSL encrypted checkout simulation. No real credit card or cash is charged.</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
