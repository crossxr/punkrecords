'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian text-paper relative overflow-hidden pt-[80px] pb-[48px] border-t border-ash/10 mt-auto">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[400px] h-[200px] bg-royal-violet/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Row 1: Brand Info & Links Grid (Bounded max-width with responsive horizontal padding) */}
      <div className="w-full max-w-[1400px] mx-auto px-[24px] md:px-[80px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[48px] lg:gap-[64px]">
          
          {/* Left Block (Spans 5 columns): Logo, description, and socials */}
          <div className="lg:col-span-5 flex flex-col gap-[28px]">
            <Link href="/" className="flex items-center gap-[12px] group w-fit">
              <img
                src="/logo.svg"
                alt="punkrecords"
                className="h-[36px] w-auto group-hover:rotate-12 transition-transform duration-300 shrink-0"
              />
              <div className="flex flex-col items-start leading-none gap-[2px]">
                <span className="font-display text-[26px] font-bold text-paper tracking-tight">
                  punkrecords<span className="text-lemon-zest font-light">*</span>
                </span>
                <span className="font-body text-[9px] text-slate font-semibold uppercase tracking-[0.5px] whitespace-nowrap">
                  a superxepic company
                </span>
              </div>
            </Link>
            
            <p className="font-body text-body-lg text-slate max-w-md leading-relaxed">
              The premium command deck for designer assets. A curated repository of surgical grade resources for high-speed creative layouts.
            </p>

            {/* Social Icons list */}
            <div className="flex items-center gap-[16px] pt-[8px]">
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-paper/[0.03] hover:bg-paper/[0.08] hover:text-lemon-zest border border-ash/10 flex items-center justify-center text-slate transition-all" aria-label="LinkedIn">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-paper/[0.03] hover:bg-paper/[0.08] hover:text-lemon-zest border border-ash/10 flex items-center justify-center text-slate transition-all" aria-label="GitHub">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-paper/[0.03] hover:bg-paper/[0.08] hover:text-lemon-zest border border-ash/10 flex items-center justify-center text-slate transition-all" aria-label="Twitter">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Area (Spans 7 columns): Links in 3 tidy columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-[32px] sm:gap-[40px]">
            
            {/* Links Col 1: Explore */}
            <div className="flex flex-col gap-[20px]">
              <span className="font-body text-caption font-semibold tracking-[2.5px] text-orchid uppercase">
                Explore
              </span>
              <ul className="flex flex-col gap-[14px] font-body text-[15px] text-slate">
                <li><Link href="/" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Home</Link></li>
                <li><Link href="/shop" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Shop Resources</Link></li>
                <li><Link href="/shop?category=Font" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Fonts & Specimen</Link></li>
                <li><Link href="/shop?category=UI Kit" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">UI & Figma Kits</Link></li>
                <li><Link href="/shop?category=Icons" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Vector Icons</Link></li>
                <li><Link href="/shop?category=3D Asset" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">3D Clay Shapes</Link></li>
              </ul>
            </div>

            {/* Links Col 2: Company */}
            <div className="flex flex-col gap-[20px]">
              <span className="font-body text-caption font-semibold tracking-[2.5px] text-orchid uppercase">
                Company
              </span>
              <ul className="flex flex-col gap-[14px] font-body text-[15px] text-slate">
                <li>
                  <Link href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all flex items-center gap-[6px]">
                    <img
                      src="/punkdrive.svg"
                      alt="punkdrive logo"
                      className="h-[15px] w-auto object-contain select-none pointer-events-none inline-block shrink-0"
                    />
                    <span>punkdrive™</span>
                  </Link>
                </li>
                <li><Link href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Knowledge Base</Link></li>
                <li><Link href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">FAQ & Help</Link></li>
                <li><Link href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Careers</Link></li>
                <li><a href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Podcast</a></li>
                <li><a href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">YouTube Channel</a></li>
              </ul>
            </div>

            {/* Links Col 3: Licenses & Docs */}
            <div className="flex flex-col gap-[20px]">
              <span className="font-body text-caption font-semibold tracking-[2.5px] text-orchid uppercase">
                License & Docs
              </span>
              <ul className="flex flex-col gap-[14px] font-body text-[15px] text-slate">
                <li><a href="/license.txt" target="_blank" rel="noopener noreferrer" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Commercial License</a></li>
                <li><Link href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Support Desk</Link></li>
                <li><Link href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-lemon-zest hover:translate-x-[2px] transition-all inline-block">Privacy Policy</Link></li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Row 2: Mid section showing ONLY the underlying logotype (escapes horizontal screen padding to connect separator edge-to-edge) */}
      <div className="w-full overflow-hidden select-none border-t border-ash/10 mt-[64px] flex justify-center items-center pt-[24px] relative z-10">
        <span className="font-display text-[15vw] sm:text-[14vw] lg:text-[12vw] font-bold text-paper/[0.03] tracking-tighter leading-none whitespace-nowrap select-none pointer-events-none">
          punkrecords<span className="text-lemon-zest/10 font-light">*</span>
        </span>
      </div>
    </footer>
  )
}
