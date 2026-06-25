'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian text-paper pt-[80px] pb-[48px] px-[24px] md:px-[48px] border-t border-ash/10 mt-auto">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[40px] pb-[64px] border-b border-ash/10">
        
        {/* Brand Block */}
        <div className="flex flex-col gap-[16px] md:col-span-2">
          <Link href="/" className="flex items-center gap-[12px] group w-fit">
            <div className="w-[32px] h-[32px] bg-lemon-zest rounded-full flex items-center justify-center relative overflow-hidden shrink-0">
              <div className="w-[8px] h-[8px] bg-paper rounded-full absolute top-[6px] left-[6px]" />
            </div>
            <div className="flex flex-col items-start leading-none gap-[2px]">
              <span className="font-display text-[24px] font-bold text-paper tracking-tight">
                punkrecords<span className="text-lemon-zest">*</span>
              </span>
              <span className="font-body text-[8px] text-slate font-medium uppercase tracking-[0.5px] whitespace-nowrap">
                a superxepic company
              </span>
            </div>
          </Link>
          <p className="font-body text-body-lg text-slate max-w-sm">
            The premium command deck for designer assets. A curated repository of surgical grade resources for high-speed creative layouts.
          </p>
          <div className="flex items-center gap-[16px] mt-[8px]">
            {/* Social Icons mock */}
            <a href="#" className="text-slate hover:text-paper transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-[20px] h-[20px] fill-current" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-slate hover:text-paper transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-[20px] h-[20px] fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="flex flex-col gap-[16px]">
          <span className="font-body text-caption font-semibold tracking-[2px] text-lemon-zest uppercase">
            Resources
          </span>
          <ul className="flex flex-col gap-[12px] font-body text-[15px] text-slate">
            <li>
              <Link href="/shop?category=Font" className="hover:text-paper transition-colors">
                Typography & Fonts
              </Link>
            </li>
            <li>
              <Link href="/shop?category=UI Kit" className="hover:text-paper transition-colors">
                UI & Figma Kits
              </Link>
            </li>
            <li>
              <Link href="/shop?category=Icons" className="hover:text-paper transition-colors">
                Vector Icons
              </Link>
            </li>
            <li>
              <Link href="/shop?category=3D Asset" className="hover:text-paper transition-colors">
                3D Clay Shapes
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div className="flex flex-col gap-[16px]">
          <span className="font-body text-caption font-semibold tracking-[2px] text-lemon-zest uppercase">
            License & Docs
          </span>
          <ul className="flex flex-col gap-[12px] font-body text-[15px] text-slate">
            <li>
              <Link href="#" className="hover:text-paper transition-colors">
                Commercial License
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-paper transition-colors">
                Support Desk
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-paper transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-paper transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        
      </div>

      <div className="max-w-[1200px] mx-auto pt-[32px] flex flex-col sm:flex-row items-center justify-between gap-[16px] font-body text-caption text-slate">
        <span>&copy; {new Date().getFullYear()} punkrecords Inc. All rights reserved.</span>
        <span className="flex items-center gap-[4px]">
          Built with precision by developers for designers.
        </span>
      </div>
    </footer>
  )
}
