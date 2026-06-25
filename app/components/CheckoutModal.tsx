'use client'

import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function CheckoutModal() {
  const { checkoutItem, closeCheckout, ownedItems, markAsOwned } = useCart()
  
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [licenseKey, setLicenseKey] = useState('')
  const [txHash, setTxHash] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (checkoutItem) {
      setEmail('')
      setCardNumber('')
      setCardExpiry('')
      setCardCvc('')
      setErrorMsg('')
      setStep('form')
      setIsProcessing(false)
    }
  }, [checkoutItem])

  if (!checkoutItem) return null

  const isFree = checkoutItem.price === 0

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    
    // Basic validation
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

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      markAsOwned(checkoutItem.id)
      
      // Generate keys for display
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
      
      setStep('success')
    }, 2000)
  }

  // Formatting helpers
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-16 md:p-32 bg-obsidian/75 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Outer Card - 48px roundness */}
      <div className="relative w-full max-w-lg bg-paper rounded-cards shadow-[0_20px_60px_rgba(18,18,23,0.25)] border border-ash/40 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Close button */}
        <button
          onClick={closeCheckout}
          className="absolute top-24 right-24 text-slate hover:text-obsidian p-8 rounded-full hover:bg-fog transition-colors z-10"
        >
          <svg className="w-20 h-20 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-40 overflow-y-auto flex-1">
          {step === 'form' ? (
            <div>
              {/* Header */}
              <div className="mb-24">
                <span className="font-body text-caption font-semibold tracking-[2px] text-royal-violet uppercase block mb-4">
                  {isFree ? 'FREE ACCESS' : 'SECURE SECURE CHECKOUT'}
                </span>
                <h3 className="font-display text-subheading font-bold text-obsidian tracking-tight">
                  Acquire Resource
                </h3>
              </div>

              {/* Product Info Specimen */}
              <div className="flex items-center gap-16 p-16 bg-fog rounded-input border border-ash/40 mb-24">
                <div className={`w-48 h-48 rounded-input bg-gradient-to-br ${checkoutItem.gradient} flex items-center justify-center text-paper font-bold text-[14px]`}>
                  {checkoutItem.type.substring(0, 2)}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-[15px] font-bold text-obsidian leading-tight">
                    {checkoutItem.title}
                  </h4>
                  <p className="font-body text-caption text-slate mt-2">
                    by {checkoutItem.author} &bull; {checkoutItem.fileSize}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-display text-caption font-bold text-obsidian">
                    {isFree ? 'FREE' : `$${checkoutItem.price.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {errorMsg && (
                <div className="bg-crimson/10 border border-crimson/30 rounded-input p-12 text-caption text-crimson mb-24 font-body">
                  {errorMsg}
                </div>
              )}

              {/* Checkout Form */}
              <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-16">
                <div>
                  <label className="block font-body text-caption font-medium text-slate mb-6">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="designer@studio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-paper text-obsidian font-body text-caption px-16 py-12 rounded-input border border-ash focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                  />
                  <p className="font-body text-[11px] text-slate mt-4">
                    Your license key and download link will be dispatched here.
                  </p>
                </div>

                {!isFree && (
                  <div className="flex flex-col gap-16 border-t border-ash/50 pt-16 mt-8">
                    <div>
                      <label className="block font-body text-caption font-medium text-slate mb-6">
                        CARD NUMBER
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="4111 2222 3333 4444"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full bg-paper text-obsidian font-body text-caption px-16 py-12 rounded-input border border-ash focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                      <div>
                        <label className="block font-body text-caption font-medium text-slate mb-6">
                          EXPIRY DATE
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={handleExpiryChange}
                          className="w-full bg-paper text-obsidian font-body text-caption px-16 py-12 rounded-input border border-ash focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-caption font-medium text-slate mb-6">
                          CVC / CVV
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="321"
                          value={cardCvc}
                          onChange={handleCvcChange}
                          className="w-full bg-paper text-obsidian font-body text-caption px-16 py-12 rounded-input border border-ash focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit button - 8px radius */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-royal-violet text-paper font-body text-[15px] font-medium py-14 rounded-buttons mt-16 hover:bg-electric-iris active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-8 shadow-[0_1px_2px_rgba(18,18,23,0.08)] cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-20 w-20 text-paper" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {isFree ? 'Generating Download Link...' : 'Processing Transaction...'}
                    </>
                  ) : (
                    <>
                      {isFree ? 'Acquire for Free' : `Purchase Specimen — $${checkoutItem.price.toFixed(2)}`}
                      <svg className="w-16 h-16 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-24 text-center">
                <span className="font-body text-[11px] text-slate">
                  🔒 SSL encrypted mock payment. No actual currency is charged.
                </span>
              </div>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-16 animate-in zoom-in-95 duration-300">
              
              {/* Success Checkmark Circle */}
              <div className="w-64 h-64 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto mb-24">
                <svg className="w-32 h-32 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <span className="font-body text-caption font-semibold tracking-[2px] text-emerald uppercase block mb-4">
                TRANSACTION COMPLETE
              </span>
              <h3 className="font-display text-subheading font-bold text-obsidian tracking-tight mb-8">
                Ready to Deploy
              </h3>
              <p className="font-body text-caption text-slate max-w-sm mx-auto mb-32">
                We have generated the assets and dispatched details to <strong className="text-obsidian">{email}</strong>.
              </p>

              {/* Download card */}
              <div className="bg-fog rounded-input p-20 border border-ash/40 text-left mb-32 flex flex-col gap-12 font-body text-caption">
                <div className="flex justify-between border-b border-ash/40 pb-8 text-[11px] text-slate">
                  <span>ITEM</span>
                  <span>SIZE</span>
                </div>
                <div className="flex justify-between font-bold text-obsidian">
                  <span>{checkoutItem.title}</span>
                  <span>{checkoutItem.fileSize}</span>
                </div>
                
                {!isFree && (
                  <>
                    <div className="border-t border-ash/40 pt-12 flex flex-col gap-4">
                      <span className="text-[11px] text-slate">LICENSE KEY</span>
                      <code className="bg-paper p-8 rounded border border-ash/40 font-mono text-[13px] text-obsidian break-all">
                        {licenseKey}
                      </code>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[11px] text-slate">TRANSACTION HASH</span>
                      <code className="text-[10px] text-slate font-mono break-all line-clamp-1">
                        {txHash}
                      </code>
                    </div>
                  </>
                )}
              </div>

              {/* Direct Simulated Download Button */}
              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                  `punkrecords Assets: ${checkoutItem.title}\nLicense: ${isFree ? 'Free Commercial' : 'Single Developer Premium'}\nKey: ${licenseKey || 'N/A'}\nMock download success!`
                )}`}
                download={`${checkoutItem.title.toLowerCase().replace(/\s+/g, '-')}-punkrecords.txt`}
                className="w-full bg-obsidian text-paper hover:bg-obsidian/90 font-body text-[15px] font-medium py-14 rounded-buttons flex items-center justify-center gap-8 shadow-[0_1.5px_3px_rgba(18,18,23,0.12)] hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Download Assets</span>
                <svg className="w-18 h-18 fill-none stroke-current stroke-2 animate-bounce" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              <button
                onClick={closeCheckout}
                className="mt-20 font-body text-[14px] font-medium text-slate hover:text-obsidian px-16 py-8 transition-colors"
              >
                Close & Return
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
