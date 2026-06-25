'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-40 w-full h-[64px] flex items-center justify-between px-[24px] md:px-[80px] transition-all duration-300 ${
        isHome
          ? 'bg-royal-violet text-paper'
          : 'bg-paper text-obsidian shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
      }`}
    >
      <div className="flex items-center gap-[32px] w-full max-w-[1400px] mx-auto justify-between relative">
        
        <div className="flex items-center gap-[32px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-[12px] group shrink-0">
            {/* Logo Icon */}
            <img
              src="/logo.svg"
              alt="punkrecords"
              className="h-[32px] w-auto group-hover:rotate-12 transition-transform duration-300 shrink-0"
            />
            
            {/* Wordmark and Subtext container */}
            <div className="flex flex-col items-start leading-none gap-[2px]">
              <span className={`font-display text-[20px] md:text-[22px] font-bold tracking-tight flex items-start leading-none ${
                isHome ? 'text-paper' : 'text-obsidian'
              }`}>
                punkrecords<span className="text-lemon-zest font-light">*</span>
              </span>
              <span className={`font-body text-[8px] font-medium tracking-[0.5px] uppercase opacity-75 whitespace-nowrap ${
                isHome ? 'text-paper/85' : 'text-slate'
              }`}>
                a superxepic company
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-[8px]">
            <Link
              href="/"
              className={`font-body text-[15px] font-medium px-[16px] py-[8px] rounded-navpills transition-all duration-200 ${
                isHome
                  ? pathname === '/'
                    ? 'bg-paper/15 text-paper'
                    : 'text-paper/80 hover:bg-paper/10 hover:text-paper'
                  : pathname === '/'
                  ? 'bg-royal-violet text-paper'
                  : 'text-slate hover:bg-fog hover:text-obsidian'
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`font-body text-[15px] font-medium px-[16px] py-[8px] rounded-navpills transition-all duration-200 ${
                isHome
                  ? pathname === '/shop'
                    ? 'bg-paper/15 text-paper'
                    : 'text-paper/80 hover:bg-paper/10 hover:text-paper'
                  : pathname === '/shop'
                  ? 'bg-royal-violet text-paper'
                  : 'text-slate hover:bg-fog hover:text-obsidian'
              }`}
            >
              Shop Resources
            </Link>
          </nav>
        </div>

        {/* Right Side Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-[16px]">
          <Link
            href="/shop"
            className={`font-body text-[15px] font-medium px-[8px] py-[4px] transition-colors ${
              isHome ? 'text-paper/80 hover:text-paper' : 'text-slate hover:text-obsidian'
            }`}
          >
            Sign in
          </Link>
          <Link
            href="/shop"
            className={`font-body text-[15px] font-medium px-[20px] py-[12px] rounded-navpills hover:-translate-y-[1px] active:translate-y-0 transition-all flex items-center gap-[8px] ${
              isHome
                ? 'bg-paper text-obsidian hover:bg-fog shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
                : 'bg-obsidian text-paper hover:opacity-90 shadow-[0_1px_2px_rgba(18,18,23,0.08)]'
            }`}
          >
            <span>Get started</span>
            <svg
              className="w-[16px] h-[16px] fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-[8px] rounded hover:bg-black/5 active:scale-95 transition-all text-current"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-[24px] h-[24px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-[24px] h-[24px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div
            className={`absolute top-[52px] right-0 w-[240px] rounded-cards p-[24px] shadow-[0_20px_40px_rgba(18,18,23,0.15)] flex flex-col gap-[16px] border md:hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50 ${
              isHome
                ? 'bg-royal-violet border-paper/20 text-paper'
                : 'bg-paper border-ash text-obsidian'
            }`}
          >
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-body text-[16px] font-medium py-[8px] px-[12px] rounded-input transition-colors ${
                pathname === '/'
                  ? isHome
                    ? 'bg-paper/15 text-paper'
                    : 'bg-royal-violet text-paper'
                  : 'hover:bg-fog hover:text-obsidian'
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-body text-[16px] font-medium py-[8px] px-[12px] rounded-input transition-colors ${
                pathname === '/shop'
                  ? isHome
                    ? 'bg-paper/15 text-paper'
                    : 'bg-royal-violet text-paper'
                  : 'text-slate hover:bg-fog hover:text-obsidian'
              }`}
            >
              Shop Resources
            </Link>
            <div className="border-t border-current/15 pt-[12px] flex flex-col gap-[12px]">
              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body text-[15px] font-medium py-[8px] px-[12px] transition-colors ${
                  isHome ? 'text-paper/80 hover:text-paper' : 'text-slate hover:text-obsidian'
                }`}
              >
                Sign in
              </Link>
              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body text-[15px] font-semibold text-center py-[12px] px-[16px] rounded-buttons flex items-center justify-center gap-[8px] ${
                  isHome
                    ? 'bg-paper text-obsidian hover:bg-fog'
                    : 'bg-obsidian text-paper hover:opacity-90'
                }`}
              >
                <span>Get started</span>
                <svg
                  className="w-[14px] h-[14px] fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
