'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { RESOURCES } from '../data/resources'

export default function Shop() {
  const { ownedItems } = useCart()

  // State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedPriceType, setSelectedPriceType] = useState<'all' | 'free' | 'paid'>('all')
  const [sortBy, setSortBy] = useState<string>('popular')
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false)

  // Listen to router query on mount if any
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const cat = params.get('category')
      const price = params.get('price')
      if (cat) setSelectedCategory(cat)
      if (price === 'free') setSelectedPriceType('free')
    }
  }, [])

  // Filtered and sorted resources
  const filteredResources = useMemo(() => {
    let list = [...RESOURCES]

    // Category Filter
    if (selectedCategory !== 'All') {
      list = list.filter((item) => item.type === selectedCategory)
    }

    // Price Filter
    if (selectedPriceType === 'free') {
      list = list.filter((item) => item.price === 0)
    } else if (selectedPriceType === 'paid') {
      list = list.filter((item) => item.price > 0)
    }

    // Search Query Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.author.toLowerCase().includes(query)
      )
    }

    // Sort logic
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating)
    } else {
      list.sort((a, b) => {
        const aDl = parseFloat(a.downloads.replace('K', '')) * (a.downloads.includes('K') ? 1000 : 1)
        const bDl = parseFloat(b.downloads.replace('K', '')) * (b.downloads.includes('K') ? 1000 : 1)
        return bDl - aDl
      })
    }

    return list
  }, [searchQuery, selectedCategory, selectedPriceType, sortBy])

  return (
    <div className="flex-1 flex flex-col bg-fog pt-[48px] pb-[96px] px-[24px] md:px-[80px]">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-[40px]">
        
        {/* Header Block */}
        <div className="flex flex-col items-start gap-[12px] text-left">
          <span className="font-body text-caption font-semibold tracking-[2px] text-royal-violet uppercase">
             punkrecords* SPECIMEN REPOSITORY
          </span>
          <h1 className="font-display text-heading md:text-heading-lg font-bold text-obsidian tracking-tight leading-tight">
            Deploy precision to your layout viewports.
          </h1>
          <p className="font-body text-body text-slate max-w-xl leading-relaxed">
            Acquire developer licenses for typographic spec, vector symbols, and spatial auto-layouts. Download specimen files immediately upon verification.
          </p>
        </div>

        {/* Controls Section: Search, Category, Price & Sort */}
        <div className="bg-paper p-[24px] md:p-[32px] rounded-cards border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.04)] flex flex-col gap-[24px]">
          
          {/* Top Row: Search and Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-[16px] justify-between">
            
            {/* Search Input field */}
            <div className="relative flex-1 max-w-md">
              <svg className="w-[20px] h-[20px] text-slate absolute left-[16px] top-1/2 -translate-y-1/2 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search typography, icons, templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-fog font-body text-caption text-obsidian pl-[48px] pr-[16px] py-[12px] rounded-input border border-ash focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
              />
            </div>

            {/* Price Filter Toggle (Free vs Paid) */}
            <div className="flex items-center gap-[8px] bg-fog p-[4px] rounded-input border border-ash/40 self-start md:self-auto shrink-0 font-body text-caption font-medium">
              <button
                onClick={() => setSelectedPriceType('all')}
                className={`px-[16px] py-[8px] rounded-input transition-colors cursor-pointer ${
                  selectedPriceType === 'all'
                    ? 'bg-paper text-obsidian shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                    : 'text-slate hover:text-obsidian'
                }`}
              >
                All Price
              </button>
              <button
                onClick={() => setSelectedPriceType('free')}
                className={`px-[16px] py-[8px] rounded-input transition-colors cursor-pointer ${
                  selectedPriceType === 'free'
                    ? 'bg-paper text-obsidian shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                    : 'text-slate hover:text-obsidian'
                }`}
              >
                Free Specimen
              </button>
              <button
                onClick={() => setSelectedPriceType('paid')}
                className={`px-[16px] py-[8px] rounded-input transition-colors cursor-pointer ${
                  selectedPriceType === 'paid'
                    ? 'bg-paper text-obsidian shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                    : 'text-slate hover:text-obsidian'
                }`}
              >
                Paid / Premium
              </button>
            </div>

            {/* Sort Select */}
            <div className="relative flex items-center gap-[8px] self-start md:self-auto shrink-0 font-body text-caption z-20">
              <span className="text-slate font-medium uppercase tracking-wider text-micro">SORT BY</span>
              
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  className="bg-fog text-obsidian font-medium px-[16px] py-[12px] rounded-input border border-ash hover:border-ash/80 focus:outline-none focus:border-royal-violet transition-all flex items-center gap-[8px] cursor-pointer select-none min-w-[170px] justify-between text-left"
                >
                  <span>
                    {sortBy === 'popular' && 'Most Popular'}
                    {sortBy === 'rating' && 'Top Rated'}
                    {sortBy === 'price-low' && 'Price: Low to High'}
                    {sortBy === 'price-high' && 'Price: High to Low'}
                  </span>
                  <svg className={`w-[12px] h-[12px] text-slate transition-transform duration-200 ${isSortDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isSortDropdownOpen && (
                  <>
                    {/* Backdrop to close dropdown on click outside */}
                    <div 
                      className="fixed inset-0 z-20 cursor-default" 
                      onClick={() => setIsSortDropdownOpen(false)}
                    />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-[6px] w-full min-w-[180px] bg-paper border border-ash/80 rounded-input shadow-[0_8px_32px_rgba(18,18,23,0.08)] py-[6px] z-30 animate-in fade-in slide-in-from-top-2 duration-150 flex flex-col text-left">
                      {[
                        { value: 'popular', label: 'Most Popular' },
                        { value: 'rating', label: 'Top Rated' },
                        { value: 'price-low', label: 'Price: Low to High' },
                        { value: 'price-high', label: 'Price: High to Low' }
                      ].map((opt) => {
                        const isSelected = sortBy === opt.value
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setSortBy(opt.value)
                              setIsSortDropdownOpen(false)
                            }}
                            className={`w-full px-[16px] py-[10px] text-[13px] font-medium transition-colors text-left cursor-pointer flex items-center justify-between ${
                              isSelected 
                                ? 'bg-royal-violet/10 text-royal-violet font-semibold' 
                                : 'text-obsidian hover:bg-fog hover:text-royal-violet'
                            }`}
                          >
                            <span>{opt.label}</span>
                            {isSelected && (
                              <svg className="w-[14px] h-[14px] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Row: Category Pills */}
          <div className="border-t border-ash/40 pt-[20px] flex items-center gap-[8px] overflow-x-auto pb-[4px] scrollbar-thin">
            {['All', 'Font', 'UI Kit', 'Icons', '3D Asset'].map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-[20px] py-[8px] rounded-navpills font-body text-caption font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-royal-violet text-paper shadow-[0_2px_8px_rgba(84,35,231,0.25)]'
                      : 'bg-fog text-slate hover:text-obsidian border border-ash/20 hover:border-ash/50'
                  }`}
                >
                  {cat === 'All' ? 'All Categories' : cat + 's'}
                </button>
              )
            })}
          </div>

        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {filteredResources.map((item) => {
              const isOwned = ownedItems.includes(item.id)

              return (
                <div
                  key={item.id}
                  className="bg-paper rounded-cards border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.04)] overflow-hidden flex flex-col justify-between hover:shadow-[0_8px_32px_rgba(18,18,23,0.06)] hover:-translate-y-[2px] transition-all duration-300 relative"
                >
                  {/* Card Visual Header */}
                  <div className={`aspect-[16/10] bg-gradient-to-br ${item.gradient} p-[24px] flex flex-col justify-between relative overflow-hidden select-none`}>
                    
                    {/* Background noise grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px] z-0 pointer-events-none" />
                    
                    {item.image ? (
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-obsidian/10" />
                      </div>
                    ) : null}

                    {/* Badge */}
                    <span className="self-start bg-paper/20 backdrop-blur-sm text-paper font-body text-[11px] font-semibold uppercase tracking-wider px-[12px] py-[4px] rounded-full border border-paper/10 relative z-10">
                      {item.type}
                    </span>

                    {/* Custom Typographic/Design Specimen Preview */}
                    <div className="flex-1 flex items-center justify-center relative z-10">
                      {!item.image && item.type === 'Font' && (
                        <div className="text-center flex flex-col items-center">
                          <span className="font-display text-[64px] font-bold text-paper tracking-tighter leading-none mb-[4px] select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                            Aa
                          </span>
                          <span className="font-body text-[11px] tracking-[2px] text-paper/80 uppercase font-medium">
                            {item.title.split(' ')[0]} Specimen
                          </span>
                        </div>
                      )}

                      {!item.image && item.type === 'UI Kit' && (
                        <div className="w-full max-w-[160px] bg-paper/15 backdrop-blur-sm rounded-input p-[12px] border border-paper/10 flex flex-col gap-[8px] shadow-sm">
                          <div className="flex justify-between items-center">
                            <div className="h-[10px] w-[40px] bg-paper/40 rounded" />
                            <div className="h-[8px] w-[20px] bg-paper/30 rounded" />
                          </div>
                          <div className="h-[12px] bg-paper/30 rounded" />
                          <div className="grid grid-cols-3 gap-[6px] mt-[4px]">
                            <div className="h-[20px] bg-paper/40 rounded" />
                            <div className="h-[20px] bg-paper/40 rounded" />
                            <div className="h-[20px] bg-paper/40 rounded" />
                          </div>
                        </div>
                      )}

                      {!item.image && item.type === 'Icons' && (
                        <div className="grid grid-cols-3 gap-[16px] text-paper/95 opacity-90 scale-110">
                          {/* Minimal Stroke Icons */}
                          <svg className="w-[24px] h-[24px] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                          <svg className="w-[24px] h-[24px] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          <svg className="w-[24px] h-[24px] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                          </svg>
                          <svg className="w-[24px] h-[24px] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4" />
                          </svg>
                          <svg className="w-[24px] h-[24px] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                          </svg>
                          <svg className="w-[24px] h-[24px] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </div>
                      )}

                      {!item.image && item.type === '3D Asset' && (
                        <div className="relative w-[80px] h-[80px] flex items-center justify-center">
                          <div className="w-[64px] h-[64px] rounded-full bg-paper/20 backdrop-blur-md border border-paper/30 shadow-lg relative flex items-center justify-center animate-pulse">
                            <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-tr from-lemon-zest to-orchid shadow-md" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Metadata Header */}
                    <div className="flex justify-between items-center text-paper/90 font-body text-[12px] font-medium relative z-10">
                      <span>{item.fileSize}</span>
                      <span className="flex items-center gap-[4px]">
                        ★ {item.rating}
                      </span>
                    </div>

                  </div>

                  {/* Card Description and details - 40px padding */}
                  <div className="p-[40px] flex flex-col justify-between flex-1 gap-[24px]">
                    
                    <div className="flex flex-col gap-[12px] text-left">
                      <span className="font-body text-caption font-semibold tracking-[2px] text-slate uppercase">
                        by {item.author}
                      </span>
                      <h3 className="font-display text-subheading font-bold text-obsidian tracking-tight line-clamp-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-body text-body text-slate leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-ash/40 pt-[20px] mt-[8px]">
                      <div className="flex flex-col items-start">
                        <span className="font-body text-[10px] text-slate font-medium uppercase tracking-wider">PRICE</span>
                        <span className="font-display text-subheading font-bold text-obsidian">
                          {item.price === 0 ? 'FREE' : `₹${item.price}`}
                        </span>
                      </div>

                      {/* Buy / Download Button - 8px radius */}
                      <Link
                        href={`/shop/${item.id}`}
                        className={`font-body text-caption font-semibold px-[20px] py-[12px] rounded-buttons flex items-center gap-[8px] transition-all cursor-pointer shadow-[0_1px_2px_rgba(18,18,23,0.08)] ${
                          isOwned
                            ? 'bg-emerald text-paper hover:bg-emerald/90'
                            : 'bg-obsidian text-paper hover:bg-obsidian/90 active:scale-95'
                        }`}
                      >
                        {isOwned ? (
                          <>
                            <svg className="w-[14px] h-[14px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Download Again</span>
                          </>
                        ) : (
                          <>
                            <span>{item.price === 0 ? 'Get Specimen' : 'Acquire'}</span>
                            <svg className="w-[14px] h-[14px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </Link>

                    </div>

                  </div>

                </div>
              )
            })}
          </div>
        ) : (
          /* Empty Search results state */
          <div className="bg-paper rounded-cards border border-ash/50 p-[80px] text-center flex flex-col items-center gap-[16px] shadow-[0_4px_24px_rgba(18,18,23,0.04)]">
            <div className="w-[64px] h-[64px] bg-fog text-slate rounded-full flex items-center justify-center">
              <svg className="w-[32px] h-[32px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-subheading font-bold text-obsidian tracking-tight">
              No Resource Found
            </h3>
            <p className="font-body text-body text-slate max-w-sm">
              We couldn't find any design resource matching your query &ldquo;<strong className="text-obsidian">{searchQuery}</strong>&rdquo;. Try searching for something else or clearing the search text.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
                setSelectedPriceType('all')
              }}
              className="bg-royal-violet text-paper hover:bg-electric-iris font-body text-caption font-semibold px-[24px] py-[12px] rounded-buttons mt-[8px] active:scale-95 transition-all shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
