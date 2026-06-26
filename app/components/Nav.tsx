'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '../context/AuthContext'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, signOut } = useAuth()

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
                  ? 'bg-paper/15 text-paper'
                  : 'text-slate hover:bg-fog hover:text-obsidian'
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`font-body text-[15px] font-medium px-[16px] py-[8px] rounded-navpills transition-all duration-200 ${
                isHome
                  ? 'text-paper/80 hover:bg-paper/10 hover:text-paper'
                  : pathname.startsWith('/shop')
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
          {user ? (
            <>
              <Link
                href="/account"
                className={`font-body text-[15px] font-semibold px-[16px] py-[8px] rounded-navpills transition-all duration-200 ${
                  isHome
                    ? 'text-paper hover:bg-paper/10'
                    : 'text-obsidian hover:bg-fog'
                }`}
              >
                My Library
              </Link>
              <span className={`font-body text-[13px] opacity-75 ${isHome ? 'text-paper/80' : 'text-slate'}`}>
                {user.email}
              </span>
              <button
                onClick={() => signOut()}
                className={`font-body text-[14px] font-medium px-[16px] py-[8px] rounded-navpills transition-colors cursor-pointer border ${
                  isHome
                    ? 'border-paper/20 hover:bg-paper/10 text-paper'
                    : 'border-ash/50 hover:bg-fog text-obsidian'
                }`}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth"
                className={`font-body text-[15px] font-medium px-[8px] py-[4px] transition-colors ${
                  isHome ? 'text-paper/80 hover:text-paper' : 'text-slate hover:text-obsidian'
                }`}
              >
                Sign in
              </Link>
              <Link
                href="/auth"
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
            </>
          )}
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

      </div>

      {/* Mobile Menu Dropdown Drawer (Full width, flat, no curves) */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-[64px] left-0 w-full shadow-[0_16px_32px_rgba(18,18,23,0.08)] flex flex-col gap-[20px] p-[24px] border-b border-t border-x-0 md:hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50 ${
            isHome
              ? 'bg-royal-violet border-paper/10 text-paper'
              : 'bg-paper border-ash/40 text-obsidian'
          }`}
        >
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-body text-[16px] font-semibold py-[10px] px-[12px] rounded-none border-l-2 transition-all ${
              isHome
                ? 'bg-paper/10 border-paper text-paper'
                : 'border-royal-violet text-royal-violet bg-royal-violet/5'
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-body text-[16px] font-semibold py-[10px] px-[12px] rounded-none border-l-2 transition-all ${
              pathname.startsWith('/shop')
                ? 'bg-paper/10 border-paper text-paper'
                : 'border-transparent text-slate hover:text-obsidian hover:bg-fog'
            }`}
          >
            Shop Resources
          </Link>
          <div className="border-t border-current/10 pt-[16px] flex flex-col gap-[16px]">
            {user ? (
              <>
                <div className="flex flex-col gap-[4px] px-[12px]">
                  <span className="font-body text-[11px] uppercase tracking-wider opacity-60">Logged in</span>
                  <span className="font-body text-[14px] font-bold truncate">
                    {user.email}
                  </span>
                </div>
                <Link
                  href="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body text-[15px] font-medium py-[10px] px-[12px] rounded-none transition-colors ${
                    isHome ? 'hover:bg-paper/10' : 'hover:bg-fog hover:text-obsidian'
                  }`}
                >
                  My Library
                </Link>
                <button
                  onClick={() => {
                    signOut()
                    setIsMobileMenuOpen(false)
                  }}
                  className={`font-body text-[15px] font-medium py-[10px] px-[12px] text-left rounded-none transition-colors cursor-pointer w-full ${
                    isHome ? 'hover:bg-paper/10' : 'hover:bg-fog hover:text-obsidian'
                  }`}
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body text-[15px] font-medium py-[10px] px-[12px] transition-colors rounded-none ${
                    isHome ? 'text-paper/85 hover:text-paper' : 'text-slate hover:text-obsidian hover:bg-fog'
                  }`}
                >
                  Sign in
                </Link>
                <Link
                  href="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body text-[15px] font-bold text-center py-[14px] px-[20px] rounded-none flex items-center justify-center gap-[8px] transition-all ${
                    isHome
                      ? 'bg-paper text-obsidian hover:bg-paper/95'
                      : 'bg-obsidian text-paper hover:bg-obsidian/90'
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
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
