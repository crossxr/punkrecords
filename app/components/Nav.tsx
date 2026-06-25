'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full bg-paper border-b border-ash h-64 flex items-center justify-between px-24 md:px-48 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-32">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-8 group">
          <div className="w-24 h-24 bg-lemon-zest rounded-full flex items-center justify-center relative overflow-hidden group-hover:rotate-12 transition-transform duration-300">
            {/* Minimalist Lemon SVG Leaf */}
            <svg
              className="absolute -top-1 -right-1 w-12 h-12 text-emerald fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <div className="w-8 h-8 bg-paper rounded-full absolute top-6 left-6" />
          </div>
          <span className="font-display text-subheading font-bold text-obsidian tracking-tight flex items-start">
            punkrecords<span className="text-royal-violet font-light">*</span>
          </span>
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-body text-[15px] font-medium px-16 py-8 rounded-navpills transition-all duration-200 ${
              pathname === '/'
                ? 'bg-royal-violet text-paper'
                : 'text-slate hover:bg-fog hover:text-obsidian'
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`font-body text-[15px] font-medium px-16 py-8 rounded-navpills transition-all duration-200 ${
              pathname === '/shop'
                ? 'bg-royal-violet text-paper'
                : 'text-slate hover:bg-fog hover:text-obsidian'
            }`}
          >
            Shop Resources
          </Link>
        </nav>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-16">
        <Link
          href="/shop"
          className="hidden sm:inline-block font-body text-[15px] font-medium text-slate hover:text-obsidian px-8 py-4 transition-colors"
        >
          Sign in
        </Link>
        <Link
          href="/shop"
          className="bg-obsidian text-paper font-body text-[15px] font-medium px-20 py-12 rounded-buttons hover:opacity-90 hover:-translate-y-1 active:translate-y-0 active:opacity-100 transition-all shadow-[0_1px_2px_rgba(18,18,23,0.08)] flex items-center gap-8"
        >
          Browse Shop
          <svg
            className="w-16 h-16 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </header>
  )
}
