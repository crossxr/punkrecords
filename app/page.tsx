'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-fog">
      
      {/* 1. Hero Section - Full-bleed Royal Violet */}
      <section className="relative bg-royal-violet text-paper pt-80 pb-96 px-24 md:px-48 overflow-hidden">
        
        {/* Background shapes / Orchid glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orchid/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-96 -left-48 w-[400px] h-[400px] bg-lilac-mist/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-64 items-center relative z-10">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-body text-caption font-semibold tracking-[2px] text-lemon-zest uppercase mb-16">
              NOW OPEN TO ALL CREATIVES
            </span>
            <h1 className="font-display text-heading-lg md:text-display font-bold text-paper tracking-[-2.24px] md:tracking-[-3.2px] leading-[1.1] mb-24 max-w-[560px]">
              Surgical grade resources for layout masters.
            </h1>
            <p className="font-body text-body-lg text-paper/80 leading-relaxed mb-40 max-w-[460px]">
              Access premium geometric specimen, neo-brutalist wireframe kits, tactile 3D components, and vector strokes. Built to deploy speed and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-16 w-full sm:w-auto">
              <Link
                href="/shop"
                className="bg-paper text-obsidian hover:bg-fog hover:-translate-y-2 active:translate-y-0 font-body text-[15px] font-medium px-24 py-16 rounded-buttons transition-all flex items-center justify-center gap-8 shadow-[0_4px_12px_rgba(18,18,23,0.15)] group"
              >
                <span>Browse the Marketplace</span>
                <svg
                  className="w-16 h-16 fill-none stroke-current stroke-2 group-hover:translate-x-4 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/shop?price=free"
                className="border border-paper/40 hover:border-paper hover:bg-paper/10 text-paper font-body text-[15px] font-medium px-24 py-16 rounded-buttons text-center transition-all"
              >
                Get Free Assets
              </Link>
            </div>
          </div>

          {/* Right Column: Angled Mockup Tablet */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div
              className="w-full max-w-[580px] aspect-[4/3] bg-obsidian rounded-[28px] p-12 shadow-[0_30px_80px_rgba(18,18,23,0.35)] relative overflow-hidden"
              style={{
                transform: 'perspective(1200px) rotateY(-18deg) rotateX(12deg) rotateZ(6deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Inner bezel wrapper */}
              <div className="w-full h-full bg-paper rounded-[20px] overflow-hidden flex flex-col relative">
                
                {/* Simulated App Header */}
                <div className="h-40 border-b border-ash bg-fog px-16 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <span className="w-8 h-8 rounded-full bg-crimson" />
                    <span className="w-8 h-8 rounded-full bg-lemon-zest" />
                    <span className="w-8 h-8 rounded-full bg-emerald" />
                    <div className="h-16 w-120 bg-ash/40 rounded ml-8" />
                  </div>
                  <div className="h-16 w-32 bg-royal-violet/20 rounded" />
                </div>

                {/* Simulated Content Area */}
                <div className="flex-1 flex overflow-hidden">
                  
                  {/* Simulated Left Sidebar */}
                  <div className="w-80 border-r border-ash bg-fog p-12 flex flex-col gap-12">
                    <div className="h-20 bg-royal-violet/10 rounded" />
                    <div className="h-16 bg-ash/30 rounded" />
                    <div className="h-16 bg-ash/30 rounded" />
                    <div className="h-16 bg-ash/30 rounded" />
                    <div className="mt-auto h-24 bg-obsidian/10 rounded" />
                  </div>

                  {/* Simulated Content Grid */}
                  <div className="flex-1 p-16 overflow-hidden flex flex-col gap-16">
                    <div className="flex justify-between items-center">
                      <div className="h-24 w-120 bg-obsidian/10 rounded" />
                      <div className="h-20 w-80 bg-royal-violet rounded" />
                    </div>
                    
                    {/* Simulated Products Grid */}
                    <div className="grid grid-cols-2 gap-12 flex-1">
                      
                      {/* Product Item 1 */}
                      <div className="bg-fog border border-ash/40 rounded-input p-12 flex flex-col justify-between">
                        {/* Gradient Thumb */}
                        <div className="w-full h-64 rounded-input bg-gradient-to-br from-royal-violet to-orchid" />
                        <div className="mt-8 flex flex-col gap-4">
                          <div className="h-12 w-[80%] bg-obsidian/20 rounded" />
                          <div className="h-8 w-[40%] bg-slate/30 rounded" />
                        </div>
                      </div>

                      {/* Product Item 2 */}
                      <div className="bg-fog border border-ash/40 rounded-input p-12 flex flex-col justify-between">
                        {/* Gradient Thumb */}
                        <div className="w-full h-64 rounded-input bg-gradient-to-tr from-lemon-zest to-ember" />
                        <div className="mt-8 flex flex-col gap-4">
                          <div className="h-12 w-[70%] bg-obsidian/20 rounded" />
                          <div className="h-8 w-[30%] bg-slate/30 rounded" />
                        </div>
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
      <section className="w-full bg-paper border-b border-ash py-48 px-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <span className="font-body text-caption font-semibold tracking-[2px] text-slate/60 uppercase mb-24">
            COMMITTED TO CREATIVE SYSTEMS WORLDWIDE
          </span>
          
          <div className="flex flex-wrap justify-center items-center gap-x-48 gap-y-24 opacity-60">
            {/* Logo items rendered as flat SVG style text */}
            <span className="font-display text-[20px] font-bold text-obsidian tracking-tighter">FIGMA</span>
            <span className="font-display text-[20px] font-bold text-obsidian tracking-tighter">FRAMER</span>
            <span className="font-display text-[20px] font-bold text-obsidian tracking-tighter">VERCEL</span>
            <span className="font-display text-[20px] font-bold text-obsidian tracking-tighter">LINEAR</span>
            <span className="font-display text-[20px] font-bold text-obsidian tracking-tighter">SPLINE</span>
            <span className="font-display text-[20px] font-bold text-obsidian tracking-tighter">WEBFLOW</span>
          </div>
        </div>
      </section>

      {/* 3. Section Header & Feature Card Grid */}
      <section className="w-full py-80 px-24 md:px-48 bg-fog">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-64">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <span className="font-body text-caption font-semibold tracking-[2px] text-slate uppercase mb-8">
              CURATED REPOSITORY
            </span>
            <h2 className="font-display text-heading font-bold text-obsidian tracking-[-1.92px] leading-none mb-16 max-w-xl">
              Engineered for absolute visual authority.
            </h2>
            <p className="font-body text-body-lg text-slate max-w-lg leading-relaxed">
              We collaborate with premier digital craftspeople to package layouts, vectors, and font specimen under surgical compliance.
            </p>
          </div>

          {/* 3-Column Feature Card Grid (48px rounded cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
            
            {/* Feature Card 1 */}
            <div className="bg-paper rounded-cards p-40 border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.04)] flex flex-col justify-between items-start gap-32">
              <div className="flex flex-col gap-16">
                {/* Icon wrapper */}
                <div className="w-48 h-48 bg-royal-violet/10 rounded-input flex items-center justify-center text-royal-violet">
                  <svg className="w-24 h-24 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </svg>
                </div>
                <h3 className="font-display text-subheading font-bold text-obsidian tracking-[-0.78px]">
                  Specimen Typography
                </h3>
                <p className="font-body text-body text-slate leading-relaxed">
                  Rigorous geometric sans-serif specimen built to resolve display scale rules. High readability registers optimized for print and canvas rendering.
                </p>
              </div>
              <Link
                href="/shop?category=Font"
                className="font-body text-caption font-semibold text-royal-violet hover:text-electric-iris flex items-center gap-4 group"
              >
                <span>Explore Specimen</span>
                <span className="group-hover:translate-x-4 transition-transform">&rarr;</span>
              </Link>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-paper rounded-cards p-40 border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.04)] flex flex-col justify-between items-start gap-32">
              <div className="flex flex-col gap-16">
                {/* Icon wrapper */}
                <div className="w-48 h-48 bg-royal-violet/10 rounded-input flex items-center justify-center text-royal-violet">
                  <svg className="w-24 h-24 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.473L21 9l-3.486-3.486L9.813 15.904zM9.813 15.904L13.5 12" />
                  </svg>
                </div>
                <h3 className="font-display text-subheading font-bold text-obsidian tracking-[-0.78px]">
                  Figma Wireframe Kits
                </h3>
                <p className="font-body text-body text-slate leading-relaxed">
                  Achromatic command deck frames with pre-configured spatial auto-layout systems. Stop constructing primitives; jump straight into structural details.
                </p>
              </div>
              <Link
                href="/shop?category=UI Kit"
                className="font-body text-caption font-semibold text-royal-violet hover:text-electric-iris flex items-center gap-4 group"
              >
                <span>Explore UI Kits</span>
                <span className="group-hover:translate-x-4 transition-transform">&rarr;</span>
              </Link>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-paper rounded-cards p-40 border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.04)] flex flex-col justify-between items-start gap-32">
              <div className="flex flex-col gap-16">
                {/* Icon wrapper */}
                <div className="w-48 h-48 bg-royal-violet/10 rounded-input flex items-center justify-center text-royal-violet">
                  <svg className="w-24 h-24 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
                  </svg>
                </div>
                <h3 className="font-display text-subheading font-bold text-obsidian tracking-[-0.78px]">
                  Tactile 3D & Vectors
                </h3>
                <p className="font-body text-body text-slate leading-relaxed">
                  Premium abstract shapes styled with matte clay gradients, accompanied by a robust vector stroke icon package. 100% editable vector nodes.
                </p>
              </div>
              <Link
                href="/shop?category=Icons"
                className="font-body text-caption font-semibold text-royal-violet hover:text-electric-iris flex items-center gap-4 group"
              >
                <span>Explore Assets</span>
                <span className="group-hover:translate-x-4 transition-transform">&rarr;</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Testimonial / Case Study Card Section */}
      <section className="w-full py-80 px-24 md:px-48 bg-paper">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-56">
          
          <div className="flex flex-col md:flex-row items-center gap-48">
            {/* Custom Mesh Avatar (Gradients only) */}
            <div className="w-120 h-120 rounded-cards bg-gradient-to-tr from-royal-violet via-orchid to-lemon-zest shadow-[0_4px_24px_rgba(18,18,23,0.1)] shrink-0 flex items-center justify-center font-display text-[36px] text-paper font-bold tracking-tighter select-none">
              J&bull;H
            </div>

            {/* Testimonial body */}
            <div className="flex flex-col gap-16">
              <span className="font-body text-caption font-semibold tracking-[2px] text-royal-violet uppercase">
                TESTIMONIAL SPECIMEN
              </span>
              <p className="font-display text-subheading md:text-heading-sm font-bold text-obsidian tracking-[-1.52px] leading-tight">
                &ldquo;Implementing the Telegraf Grotesk specimen shaved weeks off our typography styling. The layout grids are surgical. We will never purchase mockups elsewhere.&rdquo;
              </p>
              <div className="flex flex-col">
                <strong className="font-body text-body font-semibold text-obsidian">Jonathan H.</strong>
                <span className="font-body text-caption text-slate">Lead Systems Architect, Vercel Core Team</span>
              </div>
            </div>
          </div>

          {/* 3-Up Stat Row (no card chrome) */}
          <div className="grid grid-cols-3 gap-16 border-t border-ash/50 pt-48 mt-16 text-left">
            <div>
              <span className="font-display text-heading-lg md:text-display font-bold text-obsidian tracking-[-3.2px] leading-none block mb-8">
                150K+
              </span>
              <span className="font-body text-caption font-semibold tracking-[2px] text-slate uppercase">
                DESIGNERS ENROLLED
              </span>
            </div>
            <div>
              <span className="font-display text-heading-lg md:text-display font-bold text-obsidian tracking-[-3.2px] leading-none block mb-8">
                1.2M+
              </span>
              <span className="font-body text-caption font-semibold tracking-[2px] text-slate uppercase">
                FILES DOWNLOADED
              </span>
            </div>
            <div>
              <span className="font-display text-heading-lg md:text-display font-bold text-obsidian tracking-[-3.2px] leading-none block mb-8">
                99.4%
              </span>
              <span className="font-body text-caption font-semibold tracking-[2px] text-slate uppercase">
                SATISFACTION RATING
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Section CTA Band - Full-bleed Violet */}
      <section className="bg-royal-violet text-paper py-96 px-24 md:px-48 text-center relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lemon-zest/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-32 relative z-10">
          <span className="font-body text-caption font-semibold tracking-[2px] text-lemon-zest uppercase">
            DEPLOY INSTANTLY
          </span>
          <h2 className="font-display text-heading md:text-heading-lg font-bold text-paper tracking-[-2.24px] leading-tight max-w-xl mx-auto">
            Upgrade your typography and layouts today.
          </h2>
          <p className="font-body text-body-lg text-paper/85 max-w-md mx-auto">
            Acquire single developer licenses or complete organizational specimen folders. Full commercial licensing covers web, app, and print channels.
          </p>
          <div className="pt-8">
            <Link
              href="/shop"
              className="bg-paper text-obsidian hover:bg-fog hover:scale-105 active:scale-95 font-body text-[16px] font-semibold px-32 py-16 rounded-largecta transition-all shadow-[0_10px_30px_rgba(18,18,23,0.15)] flex items-center gap-8"
            >
              <span>Explore Resource Shop</span>
              <svg className="w-18 h-18 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
