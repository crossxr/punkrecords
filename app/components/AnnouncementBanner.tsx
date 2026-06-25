'use client'

import Link from 'next/link'

export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-lemon-zest py-10 px-16 flex flex-col sm:flex-row items-center justify-center gap-12 border-b border-ash/30 z-50">
      <span className="font-body text-caption font-medium tracking-[2px] text-obsidian text-center uppercase">
        ⚡ SPECIAL RELEASE: THE TELEGRAF GROTESK COMPACT SPECIMEN IS NOW AVAILABLE
      </span>
      <Link
        href="/shop?category=Font"
        className="bg-paper text-obsidian font-body text-caption font-medium px-16 py-8 rounded-navpills hover:opacity-90 active:scale-95 transition-all text-center whitespace-nowrap shadow-[0_1px_2px_rgba(18,18,23,0.08)]"
      >
        View Specimen
      </Link>
    </div>
  )
}
