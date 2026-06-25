'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const closed = localStorage.getItem('pr_banner_closed')
    if (closed === 'true') {
      setIsVisible(false)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('pr_banner_closed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="w-full bg-lemon-zest py-[6px] px-[12px] sm:px-[16px] flex items-center justify-between gap-[8px] sm:gap-[12px] border-b border-ash/30 z-50 relative shrink-0">
      {/* Spacer to align center text */}
      <div className="w-[16px] hidden md:block" />

      {/* Main Promo Text & Button */}
      <div className="flex-1 flex items-center justify-center gap-[8px] sm:gap-[12px] overflow-hidden">
        <span className="font-body text-[9px] sm:text-[11px] md:text-[12px] font-semibold tracking-[0.5px] sm:tracking-[1.5px] text-obsidian text-center uppercase truncate">
          ⚡ GRAFFITI RECORD MACHINE PSD IS NOW LIVE
        </span>
        <Link
          href="/shop/graffiti-record-machine"
          className="bg-paper text-obsidian font-body text-[9px] sm:text-[11px] font-semibold px-[8px] sm:px-[12px] py-[2px] sm:py-[4px] rounded-navpills hover:opacity-90 active:scale-95 transition-all text-center whitespace-nowrap shadow-[0_1px_2px_rgba(18,18,23,0.08)] shrink-0"
        >
          Acquire PSD
        </Link>
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="text-obsidian/75 hover:text-obsidian p-[2px] sm:p-[4px] transition-colors rounded hover:bg-obsidian/5 shrink-0"
        aria-label="Close banner"
      >
        <svg className="w-[12px] sm:w-[14px] h-[12px] sm:h-[14px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
