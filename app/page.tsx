'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LOGO_DEV_PUBLIC_KEY = process.env.NEXT_PUBLIC_LOGO_DEV_KEY;

function BrandItem({ domain, name }: { domain: string; name: string }) {
  return (
    <div className="flex items-center gap-[10px] shrink-0">
      <div className="w-[28px] h-[28px] flex items-center justify-center shrink-0 relative">
        <Image
          src={`https://img.logo.dev/${domain}?token=${LOGO_DEV_PUBLIC_KEY}`}
          alt={`${name} logo`}
          width={28}
          height={28}
          className="w-full h-full object-contain select-none pointer-events-none"
          unoptimized
        />
      </div>
      <span className="font-display text-[16px] sm:text-[18px] font-bold text-obsidian tracking-tight leading-none">
        {name}
      </span>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'punkdrive'>('marketplace')

  return (
    <div className="flex-1 flex flex-col bg-fog">

      {/* 1. Hero Section - Full-bleed Royal Violet */}
      <section className="relative bg-royal-violet text-paper min-h-[calc(100vh-64px)] flex items-center py-[64px] lg:py-0 px-[24px] md:px-[80px] overflow-hidden">

        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-center relative z-10">

          {/* Left Column: Headline & Action */}
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-1 lg:row-end-2 flex flex-col items-start text-left relative z-20">
            <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[96px] font-bold text-paper tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-4.5px] leading-[1.05] lg:leading-[1.0] mb-[32px] max-w-[840px]">
              Design resources, fonts & wireframes for layout masters
            </h1>
            <p className="font-body text-body-lg sm:text-[20px] lg:text-[22px] text-paper/85 leading-relaxed mb-[40px] max-w-[620px]">
              Selling digital downloads, specimen assets, and designer wireframe licenses has never been easier, faster, or more secure.
            </p>

            <div className="flex items-center gap-[16px] w-full sm:w-auto">
              <Link
                href="/shop"
                className="bg-paper text-obsidian hover:bg-fog hover:-translate-y-[2px] active:translate-y-0 font-body text-[16px] sm:text-[18px] font-semibold px-[36px] py-[18px] rounded-full transition-all flex items-center justify-center gap-[8px] shadow-[0_4px_12px_rgba(18,18,23,0.15)] w-full sm:w-auto group"
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

          {/* Right Column: Hero Showcase Image */}
          <div className="lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-2 flex justify-center lg:justify-end relative w-full overflow-hidden lg:overflow-visible py-[20px] z-10">
            <div className="w-full max-w-[340px] sm:max-w-[540px] lg:max-w-[960px] relative select-none lg:translate-x-[64px]">
              <img
                src="/hero.png"
                alt="Punkrecords Showcase"
                className="w-full h-auto"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 75%)',
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Logo Strip (Trust Bar) */}
      <section className="w-full bg-fog py-[64px] px-[24px] md:px-[80px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px]">

          {/* Top Row: Heading (Aligned to Hero Right Column widths, to the right) */}
          <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[32px] lg:gap-[64px] items-center relative">

            {/* Right Column: Text Group */}
            <div className="lg:col-start-4 lg:col-end-13 flex flex-col gap-[8px] text-left lg:text-right">
              <h2 className="font-display text-subheading sm:text-heading-sm font-bold text-obsidian tracking-tight leading-tight">
                Trusted by creative systems worldwide
              </h2>
              <p className="font-body text-caption sm:text-body text-slate leading-tight max-w-[800px] lg:ml-auto">
                From independent creators to global agencies, designers use punkrecords to scale libraries and prototype with surgical compliance.
              </p>
            </div>

          </div>

          {/* Bottom Row: Marquee Logos in True Color */}
          <div className="relative w-full overflow-hidden py-[12px]">
            {/* Edge Fades */}
            <div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-fog via-fog/85 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-[15%] bg-gradient-to-l from-fog via-fog/85 to-transparent z-20 pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex gap-[48px] w-max animate-marquee relative z-10">
              {/* Set 1 */}
              <div className="flex items-center gap-[48px] shrink-0">
                <BrandItem domain="figma.com" name="Figma" />
                <BrandItem domain="framer.com" name="Framer" />
                <BrandItem domain="vercel.com" name="Vercel" />
                <BrandItem domain="linear.app" name="Linear" />
                <BrandItem domain="spline.design" name="Spline" />
                <BrandItem domain="dribbble.com" name="Dribbble" />
                <BrandItem domain="webflow.com" name="Webflow" />
                <BrandItem domain="adobe.com" name="Adobe" />
                <BrandItem domain="sketch.com" name="Sketch" />
                <BrandItem domain="canva.com" name="Canva" />
                <BrandItem domain="notion.so" name="Notion" />
                <BrandItem domain="github.com" name="GitHub" />
              </div>
              {/* Set 2 (Duplicate for loop) */}
              <div className="flex items-center gap-[48px] shrink-0" aria-hidden="true">
                <BrandItem domain="figma.com" name="Figma" />
                <BrandItem domain="framer.com" name="Framer" />
                <BrandItem domain="vercel.com" name="Vercel" />
                <BrandItem domain="linear.app" name="Linear" />
                <BrandItem domain="spline.design" name="Spline" />
                <BrandItem domain="webflow.com" name="Webflow" />
                <BrandItem domain="adobe.com" name="Adobe" />
                <BrandItem domain="sketch.com" name="Sketch" />
                <BrandItem domain="canva.com" name="Canva" />
                <BrandItem domain="dribbble.com" name="Dribbble" />
                <BrandItem domain="notion.so" name="Notion" />
                <BrandItem domain="github.com" name="GitHub" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Section Header & Feature Card Grid */}
      <section className="w-full py-[80px] sm:py-[120px] px-[24px] md:px-[80px] bg-fog">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col">
          
          {/* Header Split Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] mb-[48px] items-end">
            {/* Left Column: Badge and Headline */}
            <div className="lg:col-start-1 lg:col-end-9 flex flex-col items-start text-left">
              {/* Badge/Pill */}
              <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-paper border border-ash/80 rounded-full text-[13px] font-semibold tracking-[0.5px] text-slate mb-[24px] select-none">
                <span className="w-[8px] h-[8px] rounded-full bg-[#00d1c1] animate-pulse" />
                {activeTab === 'marketplace' ? 'Resource marketplace' : 'Asset automation'}
              </div>
              <h2 className="font-display text-[38px] sm:text-[54px] lg:text-[64px] font-bold text-obsidian tracking-[-1.5px] sm:tracking-[-2.5px] leading-[1.1]">
                {activeTab === 'marketplace' ? 'Download high-quality design resources' : 'Process and convert design files instantly'}
              </h2>
            </div>
            {/* Right Column: Description */}
            <div className="lg:col-start-9 lg:col-end-13 text-left lg:pb-[8px]">
              <p className="font-body text-[16px] sm:text-[18px] text-slate leading-relaxed lg:max-w-[360px] lg:ml-auto">
                {activeTab === 'marketplace'
                  ? 'Acquire specimen assets, wireframes, and licensing folders instantly with seamless checkout solutions.'
                  : 'Convert, upscale, and organize assets in bulk with surgical precision.'}
              </p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-[4px] bg-paper p-[4px] border border-ash/40 rounded-full w-fit mb-[48px] select-none">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`font-body text-[14px] font-semibold px-[24px] py-[10px] rounded-full cursor-pointer transition-all duration-200 ${
                activeTab === 'marketplace'
                  ? 'bg-obsidian text-paper shadow-sm'
                  : 'text-slate hover:text-obsidian'
              }`}
            >
              Marketplace
            </button>
            <button
              onClick={() => setActiveTab('punkdrive')}
              className={`font-body text-[14px] font-semibold px-[24px] py-[10px] rounded-full cursor-pointer transition-all duration-200 flex items-center gap-[8px] ${
                activeTab === 'punkdrive'
                  ? 'bg-obsidian text-paper shadow-sm'
                  : 'text-slate hover:text-obsidian'
              }`}
            >
              <div className="w-[15px] h-[18px] relative flex items-center shrink-0 select-none pointer-events-none">
                <Image
                  src="/punkdrive.svg"
                  alt="punkdrive logo"
                  width={15}
                  height={18}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>punkdrive™</span>
              <span className={`text-[9px] px-[6px] py-[2px] rounded-full uppercase tracking-wider font-bold transition-colors ${
                activeTab === 'punkdrive'
                  ? 'bg-paper/25 text-paper'
                  : 'bg-royal-violet/10 text-royal-violet'
              }`}>
                Soon
              </span>
            </button>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] sm:gap-[32px] w-full">
            {activeTab === 'marketplace' ? (
              <>
                {/* Marketplace Card 1: Easy Payments */}
                <div className="bg-paper rounded-cards p-[32px] sm:p-[48px] border border-ash/30 flex flex-col justify-between items-start min-h-[480px] sm:min-h-[520px] overflow-hidden relative group hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(84,35,231,0.06)] transition-all duration-300">
                  <div className="flex flex-col items-start text-left w-full relative z-10">
                    <span className="text-[11px] font-semibold tracking-[1px] text-royal-violet uppercase mb-[12px]">
                      Secure Checkouts
                    </span>
                    <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-obsidian tracking-tight mb-[12px] leading-tight">
                      Easy Payments
                    </h3>
                    <p className="font-body text-[15px] sm:text-[16px] text-slate leading-relaxed max-w-[320px]">
                      Pay seamlessly with global credit cards or grab free resource specimens instantly.
                    </p>
                  </div>
                  
                  {/* Visual: Marketplace Image 1 */}
                  <div className="w-full absolute bottom-[36px] left-1/2 -translate-x-1/2 max-w-[280px] transition-all duration-300 group-hover:bottom-[48px] pointer-events-none flex items-center justify-center">
                    <Image
                      src="/marketplace1.png"
                      alt="Easy Payments Visual"
                      width={280}
                      height={180}
                      className="w-full h-auto object-contain select-none pointer-events-none border-0 outline-none ring-0"
                      style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                    />
                  </div>
                </div>

                {/* Marketplace Card 2: Instant Download */}
                <div className="bg-paper rounded-cards p-[32px] sm:p-[48px] border border-ash/30 flex flex-col justify-between items-start min-h-[480px] sm:min-h-[520px] overflow-hidden relative group hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(84,35,231,0.06)] transition-all duration-300">
                  <div className="flex flex-col items-start text-left w-full relative z-10">
                    <span className="text-[11px] font-semibold tracking-[1px] text-royal-violet uppercase mb-[12px]">
                      Zero Wait Time
                    </span>
                    <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-obsidian tracking-tight mb-[12px] leading-tight">
                      Instant Download
                    </h3>
                    <p className="font-body text-[15px] sm:text-[16px] text-slate leading-relaxed max-w-[320px]">
                      Access your design resources and files immediately after checkout with direct download links.
                    </p>
                  </div>
                  
                  {/* Visual: Marketplace Image 2 */}
                  <div className="w-full absolute bottom-[36px] left-1/2 -translate-x-1/2 max-w-[280px] transition-all duration-300 group-hover:bottom-[48px] pointer-events-none flex items-center justify-center">
                    <Image
                      src="/marketplace2.png"
                      alt="Instant Download Visual"
                      width={280}
                      height={180}
                      className="w-full h-auto object-contain select-none pointer-events-none border-0 outline-none ring-0"
                      style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                    />
                  </div>
                </div>

                {/* Marketplace Card 3: Cloud Storage */}
                <div className="bg-paper rounded-cards p-[32px] sm:p-[48px] border border-ash/30 flex flex-col justify-between items-start min-h-[480px] sm:min-h-[520px] overflow-hidden relative group hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(84,35,231,0.06)] transition-all duration-300">
                  <div className="flex flex-col items-start text-left w-full relative z-10">
                    <span className="text-[11px] font-semibold tracking-[1px] text-royal-violet uppercase mb-[12px]">
                      Secured Assets
                    </span>
                    <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-obsidian tracking-tight mb-[12px] leading-tight">
                      Cloud Storage
                    </h3>
                    <p className="font-body text-[15px] sm:text-[16px] text-slate leading-relaxed max-w-[320px]">
                      Re-download any purchased wireframes, fonts, or assets anytime from your dashboard.
                    </p>
                  </div>
                  
                  {/* Visual: Marketplace Image 3 */}
                  <div className="w-full absolute bottom-[36px] left-1/2 -translate-x-1/2 max-w-[280px] transition-all duration-300 group-hover:bottom-[48px] pointer-events-none flex items-center justify-center">
                    <Image
                      src="/marketplace3.png"
                      alt="Cloud Storage Visual"
                      width={280}
                      height={180}
                      className="w-full h-auto object-contain select-none pointer-events-none border-0 outline-none ring-0"
                      style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* punkdrive Card 1: Asset Library */}
                <div className="bg-paper rounded-cards p-[32px] sm:p-[48px] border border-ash/30 flex flex-col justify-between items-start min-h-[480px] sm:min-h-[520px] overflow-hidden relative group hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(84,35,231,0.06)] transition-all duration-300 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col items-start text-left w-full relative z-10">
                    <span className="text-[11px] font-semibold tracking-[1px] text-royal-violet uppercase mb-[12px]">
                      Organize Creatives
                    </span>
                    <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-obsidian tracking-tight mb-[12px] leading-tight">
                      Asset Library
                    </h3>
                    <p className="font-body text-[15px] sm:text-[16px] text-slate leading-relaxed max-w-[320px]">
                      Keep all your design assets, vectors, and font files organized in a single, high-speed vault.
                    </p>
                  </div>
                  
                  {/* Visual: punkdrive Image 1 */}
                  <div className="w-full absolute bottom-[36px] left-1/2 -translate-x-1/2 max-w-[280px] transition-all duration-300 group-hover:bottom-[48px] pointer-events-none flex items-center justify-center">
                    <Image
                      src="/drive1.png"
                      alt="Asset Library Visual"
                      width={280}
                      height={180}
                      className="w-full h-auto object-contain select-none pointer-events-none border-0 outline-none ring-0"
                      style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                    />
                  </div>
                </div>

                {/* punkdrive Card 2: Batch Conversions */}
                <div className="bg-paper rounded-cards p-[32px] sm:p-[48px] border border-ash/30 flex flex-col justify-between items-start min-h-[480px] sm:min-h-[520px] overflow-hidden relative group hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(84,35,231,0.06)] transition-all duration-300 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col items-start text-left w-full relative z-10">
                    <span className="text-[11px] font-semibold tracking-[1px] text-royal-violet uppercase mb-[12px]">
                      Automate Formats
                    </span>
                    <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-obsidian tracking-tight mb-[12px] leading-tight">
                      Batch Image Conversions
                    </h3>
                    <p className="font-body text-[15px] sm:text-[16px] text-slate leading-relaxed max-w-[320px]">
                      Convert SVG vectors to PNG, WebP, or high-res JPG formats in bulk in seconds.
                    </p>
                  </div>
                  
                  {/* Visual: punkdrive Image 2 */}
                  <div className="w-full absolute bottom-[36px] left-1/2 -translate-x-1/2 max-w-[280px] transition-all duration-300 group-hover:bottom-[48px] pointer-events-none flex items-center justify-center">
                    <Image
                      src="/drive2.png"
                      alt="Batch Image Conversions Visual"
                      width={280}
                      height={180}
                      className="w-full h-auto object-contain select-none pointer-events-none border-0 outline-none ring-0"
                      style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                    />
                  </div>
                </div>

                {/* punkdrive Card 3: AI Processing */}
                <div className="bg-paper rounded-cards p-[32px] sm:p-[48px] border border-ash/30 flex flex-col justify-between items-start min-h-[480px] sm:min-h-[520px] overflow-hidden relative group hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(84,35,231,0.06)] transition-all duration-300 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col items-start text-left w-full relative z-10">
                    <span className="text-[11px] font-semibold tracking-[1px] text-royal-violet uppercase mb-[12px]">
                      AI Enhancements
                    </span>
                    <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-obsidian tracking-tight mb-[12px] leading-tight">
                      Upscaling & Bulk Background Removal
                    </h3>
                    <p className="font-body text-[15px] sm:text-[16px] text-slate leading-relaxed max-w-[320px]">
                      Upscale textures and remove image backgrounds in bulk using surgical precision.
                    </p>
                  </div>
                  
                  {/* Visual: punkdrive Image 3 */}
                  <div className="w-full absolute bottom-[36px] left-1/2 -translate-x-1/2 max-w-[280px] transition-all duration-300 group-hover:bottom-[48px] pointer-events-none flex items-center justify-center">
                    <Image
                      src="/drive3.png"
                      alt="AI Processing Visual"
                      width={280}
                      height={180}
                      className="w-full h-auto object-contain select-none pointer-events-none border-0 outline-none ring-0"
                      style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                    />
                  </div>
                </div>
              </>
            )}
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
