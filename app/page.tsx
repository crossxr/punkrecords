'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex-1 flex flex-col bg-fog">
      
      {/* 1. Hero Section - Full-bleed Royal Violet */}
      <section className="relative bg-royal-violet text-paper min-h-[calc(100vh-64px)] flex items-center py-[64px] lg:py-0 px-[24px] md:px-[80px] overflow-hidden">
        
        {/* Background shapes / Orchid glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orchid/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-[384px] -left-[48px] w-[400px] h-[400px] bg-lilac-mist/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-center relative z-10">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h1 className="font-display text-[32px] sm:text-[48px] md:text-display font-bold text-paper tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3.2px] leading-[1.2] sm:leading-[1.1] md:leading-[1.0] mb-[24px] max-w-[560px]">
              Design resources, fonts & wireframes for layout masters
            </h1>
            <p className="font-body text-body sm:text-body-lg text-paper/80 leading-relaxed mb-[32px] sm:mb-[40px] max-w-[460px]">
              Selling digital downloads, specimen assets, and designer wireframe licenses has never been easier, faster, or more secure.
            </p>
            
            <div className="flex items-center gap-[16px] w-full sm:w-auto">
              <Link
                href="/shop"
                className="bg-paper text-obsidian hover:bg-fog hover:-translate-y-[2px] active:translate-y-0 font-body text-[15px] font-semibold px-[28px] py-[14px] rounded-full transition-all flex items-center justify-center gap-[8px] shadow-[0_4px_12px_rgba(18,18,23,0.15)] w-full sm:w-auto group"
              >
                <span>Get started</span>
                <svg
                  className="w-[16px] h-[16px] fill-none stroke-current stroke-2 group-hover:translate-x-[4px] transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Angled Mockup Tablet */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative w-full overflow-hidden lg:overflow-visible py-[20px]">
            <div
              className="w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[580px] aspect-[16/11] bg-obsidian rounded-[24px] sm:rounded-[28px] p-[8px] sm:p-[12px] shadow-[0_30px_80px_rgba(18,18,23,0.35)] relative overflow-hidden select-none"
              style={{
                transform: isMobile
                  ? 'perspective(1000px) rotateY(-8deg) rotateX(6deg) rotateZ(2deg)'
                  : 'perspective(1200px) rotateY(-18deg) rotateX(12deg) rotateZ(6deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Inner bezel wrapper */}
              <div className="w-full h-full bg-paper rounded-[16px] sm:rounded-[20px] overflow-hidden flex flex-col relative text-[10px] sm:text-[11px] font-body text-obsidian">
                
                {/* Simulated App Header */}
                <div className="h-[32px] sm:h-[36px] border-b border-ash bg-fog px-[12px] sm:px-[16px] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-[4px] sm:gap-[6px]">
                    <span className="w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] rounded-full bg-crimson" />
                    <span className="w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] rounded-full bg-lemon-zest" />
                    <span className="w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] rounded-full bg-emerald" />
                    <div className="h-[12px] sm:h-[14px] w-[90px] sm:w-[140px] bg-ash/50 rounded ml-[6px] flex items-center px-[6px] text-[7px] sm:text-[8px] text-slate/85 font-medium border border-ash/20">
                      punkrecords.com/store
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px] sm:gap-[8px]">
                    <div className="h-[12px] sm:h-[14px] w-[28px] sm:w-[36px] bg-royal-violet/10 rounded border border-royal-violet/20" />
                    <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-slate/40" />
                  </div>
                </div>

                {/* Simulated Content Area */}
                <div className="flex-1 flex overflow-hidden">
                  
                  {/* Simulated Left Sidebar */}
                  <div className="w-[70px] sm:w-[100px] border-r border-ash bg-fog p-[8px] sm:p-[12px] flex flex-col gap-[8px] sm:gap-[10px] shrink-0 text-left text-[9px] sm:text-[10px]">
                    <div className="font-semibold text-royal-violet tracking-wide text-[8px] sm:text-[9px] uppercase mb-[2px]">Dashboard</div>
                    <div className="h-[14px] sm:h-[16px] px-[4px] sm:px-[6px] bg-royal-violet/15 text-royal-violet rounded font-semibold flex items-center">Home</div>
                    <div className="h-[14px] sm:h-[16px] px-[4px] sm:px-[6px] text-slate hover:bg-ash/20 rounded flex items-center">Store</div>
                    <div className="pl-[8px] sm:pl-[12px] flex flex-col gap-[4px] sm:gap-[6px] border-l border-ash/70 py-[2px] text-[8px] sm:text-[9px]">
                      <div className="text-slate">Products</div>
                      <div className="text-slate">Orders</div>
                    </div>
                    <div className="h-[14px] sm:h-[16px] px-[4px] sm:px-[6px] text-slate hover:bg-ash/20 rounded flex items-center">Email</div>
                  </div>

                  {/* Simulated Main Content */}
                  <div className="flex-1 p-[12px] sm:p-[16px] overflow-hidden flex flex-col gap-[10px] sm:gap-[12px] bg-paper text-left">
                    
                    {/* Header Bar */}
                    <div className="flex justify-between items-center pb-[6px] border-b border-ash/40 shrink-0">
                      <div>
                        <h4 className="font-display text-[12px] sm:text-[14px] font-bold text-obsidian leading-tight">Home</h4>
                      </div>
                      <div className="flex items-center gap-[4px] sm:gap-[6px]">
                        <div className="px-[6px] sm:px-[8px] py-[2px] sm:py-[3px] bg-fog border border-ash/60 rounded text-[7px] sm:text-[9px] text-slate font-medium">
                          26 Sep — 26 Oct
                        </div>
                      </div>
                    </div>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-[8px] sm:gap-[10px] flex-1 overflow-y-auto">
                      
                      {/* Metric Card 1: Revenue */}
                      <div className="bg-paper border border-ash/50 rounded-input p-[8px] sm:p-[10px] flex flex-col justify-between shadow-[0_1px_2px_rgba(18,18,23,0.02)] h-[75px] sm:h-[90px]">
                        <div className="flex justify-between items-start leading-none">
                          <span className="text-[8px] sm:text-[10px] text-slate font-medium uppercase tracking-wide">Revenue</span>
                          <span className="px-[3px] sm:px-[4px] py-[0.5px] sm:py-[1px] bg-emerald/10 text-emerald text-[7px] sm:text-[9px] font-bold rounded">
                            +16%
                          </span>
                        </div>
                        <span className="font-display text-[12px] sm:text-[16px] font-bold text-obsidian tracking-tight my-[1px] sm:my-[2px]">
                          $22,499.44
                        </span>
                        {/* Sparkline */}
                        <svg className="w-full h-[18px] sm:h-[24px] text-royal-violet fill-none" viewBox="0 0 100 30">
                          <path
                            d="M0,25 Q15,10 30,18 T60,5 T90,2 T100,10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Metric Card 2: Orders */}
                      <div className="bg-paper border border-ash/50 rounded-input p-[8px] sm:p-[10px] flex flex-col justify-between shadow-[0_1px_2px_rgba(18,18,23,0.02)] h-[75px] sm:h-[90px]">
                        <div className="flex justify-between items-start leading-none">
                          <span className="text-[8px] sm:text-[10px] text-slate font-medium uppercase tracking-wide">Orders</span>
                          <span className="px-[3px] sm:px-[4px] py-[0.5px] sm:py-[1px] bg-emerald/10 text-emerald text-[7px] sm:text-[9px] font-bold rounded">
                            +11%
                          </span>
                        </div>
                        <span className="font-display text-[12px] sm:text-[16px] font-bold text-obsidian tracking-tight my-[1px] sm:my-[2px]">
                          1,457
                        </span>
                        <svg className="w-full h-[18px] sm:h-[24px] text-royal-violet fill-none" viewBox="0 0 100 30">
                          <path
                            d="M0,28 Q20,15 40,25 T80,10 T100,2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Metric Card 3: MRR */}
                      <div className="bg-paper border border-ash/50 rounded-input p-[8px] sm:p-[10px] flex flex-col justify-between shadow-[0_1px_2px_rgba(18,18,23,0.02)] h-[75px] sm:h-[90px]">
                        <div className="flex justify-between items-start leading-none">
                          <span className="text-[8px] sm:text-[10px] text-slate font-medium uppercase tracking-wide">MRR</span>
                          <span className="px-[3px] sm:px-[4px] py-[0.5px] sm:py-[1px] bg-emerald/10 text-emerald text-[7px] sm:text-[9px] font-bold rounded">
                            +33%
                          </span>
                        </div>
                        <span className="font-display text-[12px] sm:text-[16px] font-bold text-obsidian tracking-tight my-[1px] sm:my-[2px]">
                          $25,488.55
                        </span>
                        <svg className="w-full h-[18px] sm:h-[24px] text-royal-violet fill-none" viewBox="0 0 100 30">
                          <path
                            d="M0,29 Q25,29 50,15 T80,5 T100,0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Metric Card 4: Avg Order */}
                      <div className="bg-paper border border-ash/50 rounded-input p-[8px] sm:p-[10px] flex flex-col justify-between shadow-[0_1px_2px_rgba(18,18,23,0.02)] h-[75px] sm:h-[90px]">
                        <div className="flex justify-between items-start leading-none">
                          <span className="text-[8px] sm:text-[10px] text-slate font-medium uppercase tracking-wide">Avg. Order</span>
                          <span className="px-[3px] sm:px-[4px] py-[0.5px] sm:py-[1px] bg-emerald/10 text-emerald text-[7px] sm:text-[9px] font-bold rounded">
                            +8%
                          </span>
                        </div>
                        <span className="font-display text-[12px] sm:text-[16px] font-bold text-obsidian tracking-tight my-[1px] sm:my-[2px]">
                          $99.23
                        </span>
                        <svg className="w-full h-[18px] sm:h-[24px] text-royal-violet fill-none" viewBox="0 0 100 30">
                          <path
                            d="M0,20 Q30,22 60,10 T100,5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Logo Strip (Trust Bar) */}
      <section className="w-full bg-paper border-b border-ash py-[48px] px-[24px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <span className="font-body text-caption font-semibold tracking-[2px] text-slate/60 uppercase mb-[24px]">
            COMMITTED TO CREATIVE SYSTEMS WORLDWIDE
          </span>
          
          <div className="flex flex-wrap justify-center items-center gap-x-[24px] sm:gap-x-[48px] gap-y-[16px] sm:gap-y-[24px] opacity-60">
            <span className="font-display text-[18px] sm:text-[20px] font-bold text-obsidian tracking-tighter">FIGMA</span>
            <span className="font-display text-[18px] sm:text-[20px] font-bold text-obsidian tracking-tighter">FRAMER</span>
            <span className="font-display text-[18px] sm:text-[20px] font-bold text-obsidian tracking-tighter">VERCEL</span>
            <span className="font-display text-[18px] sm:text-[20px] font-bold text-obsidian tracking-tighter">LINEAR</span>
            <span className="font-display text-[18px] sm:text-[20px] font-bold text-obsidian tracking-tighter">SPLINE</span>
            <span className="font-display text-[18px] sm:text-[20px] font-bold text-obsidian tracking-tighter">WEBFLOW</span>
          </div>
        </div>
      </section>

      {/* 3. Section Header & Feature Card Grid */}
      <section className="w-full py-[64px] sm:py-[80px] px-[24px] md:px-[48px] bg-fog">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px] sm:gap-[64px]">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <span className="font-body text-caption font-semibold tracking-[2px] text-slate uppercase mb-[8px]">
              CURATED REPOSITORY
            </span>
            <h2 className="font-display text-subheading sm:text-heading font-bold text-obsidian tracking-tight leading-tight mb-[16px] max-w-xl">
              Engineered for absolute visual authority.
            </h2>
            <p className="font-body text-body sm:text-body-lg text-slate max-w-lg leading-relaxed">
              We collaborate with premier digital craftspeople to package layouts, vectors, and font specimen under surgical compliance.
            </p>
          </div>

          {/* 3-Column Feature Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] sm:gap-[32px]">
            
            {/* Feature Card 1 */}
            <div className="bg-paper rounded-[32px] sm:rounded-cards p-[24px] sm:p-[40px] border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.04)] flex flex-col justify-between items-start gap-[24px] sm:gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <div className="w-[48px] h-[48px] bg-royal-violet/10 rounded-input flex items-center justify-center text-royal-violet shrink-0">
                  <svg className="w-[24px] h-[24px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </svg>
                </div>
                <h3 className="font-display text-[20px] sm:text-subheading font-bold text-obsidian tracking-tight">
                  Specimen Typography
                </h3>
                <p className="font-body text-caption sm:text-body text-slate leading-relaxed">
                  Rigorous geometric sans-serif specimen built to resolve display scale rules. High readability registers optimized for print and canvas rendering.
                </p>
              </div>
              <Link
                href="/shop?category=Font"
                className="font-body text-caption font-semibold text-royal-violet hover:text-electric-iris flex items-center gap-[4px] group"
              >
                <span>Explore Specimen</span>
                <span className="group-hover:translate-x-[4px] transition-transform">&rarr;</span>
              </Link>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-paper rounded-[32px] sm:rounded-cards p-[24px] sm:p-[40px] border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.04)] flex flex-col justify-between items-start gap-[24px] sm:gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <div className="w-[48px] h-[48px] bg-royal-violet/10 rounded-input flex items-center justify-center text-royal-violet shrink-0">
                  <svg className="w-[24px] h-[24px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.473L21 9l-3.486-3.486L9.813 15.904zM9.813 15.904L13.5 12" />
                  </svg>
                </div>
                <h3 className="font-display text-[20px] sm:text-subheading font-bold text-obsidian tracking-tight">
                  Figma Wireframe Kits
                </h3>
                <p className="font-body text-caption sm:text-body text-slate leading-relaxed">
                  Achromatic command deck frames with pre-configured spatial auto-layout systems. Stop constructing primitives; jump straight into structural details.
                </p>
              </div>
              <Link
                href="/shop?category=UI Kit"
                className="font-body text-caption font-semibold text-royal-violet hover:text-electric-iris flex items-center gap-[4px] group"
              >
                <span>Explore UI Kits</span>
                <span className="group-hover:translate-x-[4px] transition-transform">&rarr;</span>
              </Link>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-paper rounded-[32px] sm:rounded-cards p-[24px] sm:p-[40px] border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.04)] flex flex-col justify-between items-start gap-[24px] sm:gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <div className="w-[48px] h-[48px] bg-royal-violet/10 rounded-input flex items-center justify-center text-royal-violet shrink-0">
                  <svg className="w-[24px] h-[24px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
                  </svg>
                </div>
                <h3 className="font-display text-[20px] sm:text-subheading font-bold text-obsidian tracking-tight">
                  Tactile 3D & Vectors
                </h3>
                <p className="font-body text-caption sm:text-body text-slate leading-relaxed">
                  Premium abstract shapes styled with matte clay gradients, accompanied by a robust vector stroke icon package. 100% editable vector nodes.
                </p>
              </div>
              <Link
                href="/shop?category=Icons"
                className="font-body text-caption font-semibold text-royal-violet hover:text-electric-iris flex items-center gap-[4px] group"
              >
                <span>Explore Assets</span>
                <span className="group-hover:translate-x-[4px] transition-transform">&rarr;</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Testimonial / Case Study Card Section */}
      <section className="w-full py-[64px] sm:py-[80px] px-[24px] md:px-[48px] bg-paper">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-[40px] sm:gap-[56px]">
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-[24px] sm:gap-[48px]">
            {/* Custom Mesh Avatar */}
            <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-[32px] sm:rounded-cards bg-gradient-to-tr from-royal-violet via-orchid to-lemon-zest shadow-[0_4px_24px_rgba(18,18,23,0.1)] shrink-0 flex items-center justify-center font-display text-[24px] sm:text-[36px] text-paper font-bold tracking-tighter select-none">
              J&bull;H
            </div>

            {/* Testimonial body */}
            <div className="flex flex-col gap-[16px] text-left">
              <span className="font-body text-caption font-semibold tracking-[2px] text-royal-violet uppercase">
                TESTIMONIAL SPECIMEN
              </span>
              <p className="font-display text-[20px] sm:text-subheading md:text-heading-sm font-bold text-obsidian tracking-tight leading-tight">
                &ldquo;Implementing the Telegraf Grotesk specimen shaved weeks off our typography styling. The layout grids are surgical. We will never purchase mockups elsewhere.&rdquo;
              </p>
              <div className="flex flex-col">
                <strong className="font-body text-caption sm:text-body font-semibold text-obsidian">Jonathan H.</strong>
                <span className="font-body text-[12px] sm:text-caption text-slate">Lead Systems Architect, Vercel Core Team</span>
              </div>
            </div>
          </div>

          {/* 3-Up Stat Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px] sm:gap-[16px] border-t border-ash/50 pt-[32px] sm:pt-[48px] mt-[16px] text-left">
            <div>
              <span className="font-display text-[40px] sm:text-heading-lg md:text-display font-bold text-obsidian tracking-tight leading-none block mb-[8px]">
                150K+
              </span>
              <span className="font-body text-[11px] sm:text-caption font-semibold tracking-[2px] text-slate uppercase">
                DESIGNERS ENROLLED
              </span>
            </div>
            <div>
              <span className="font-display text-[40px] sm:text-heading-lg md:text-display font-bold text-obsidian tracking-tight leading-none block mb-[8px]">
                1.2M+
              </span>
              <span className="font-body text-[11px] sm:text-caption font-semibold tracking-[2px] text-slate uppercase">
                FILES DOWNLOADED
              </span>
            </div>
            <div>
              <span className="font-display text-[40px] sm:text-heading-lg md:text-display font-bold text-obsidian tracking-tight leading-none block mb-[8px]">
                99.4%
              </span>
              <span className="font-body text-[11px] sm:text-caption font-semibold tracking-[2px] text-slate uppercase">
                SATISFACTION RATING
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Section CTA Band - Full-bleed Violet */}
      <section className="bg-royal-violet text-paper py-[64px] sm:py-[96px] px-[24px] md:px-[48px] text-center relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lemon-zest/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-[32px] relative z-10">
          <span className="font-body text-caption font-semibold tracking-[2px] text-lemon-zest uppercase">
            DEPLOY INSTANTLY
          </span>
          <h2 className="font-display text-subheading sm:text-heading md:text-heading-lg font-bold text-paper tracking-tight leading-tight max-w-xl mx-auto">
            Upgrade your typography and layouts today.
          </h2>
          <p className="font-body text-caption sm:text-body-lg text-paper/85 max-w-md mx-auto">
            Acquire single developer licenses or complete organizational specimen folders. Full commercial licensing covers web, app, and print channels.
          </p>
          <div className="pt-[8px] w-full sm:w-auto">
            <Link
              href="/shop"
              className="bg-paper text-obsidian hover:bg-fog hover:scale-105 active:scale-95 font-body text-[16px] font-semibold px-[32px] py-[16px] rounded-largecta transition-all shadow-[0_10px_30px_rgba(18,18,23,0.15)] flex items-center justify-center gap-[8px] w-full sm:w-auto"
            >
              <span>Explore Resource Shop</span>
              <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
