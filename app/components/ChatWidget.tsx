'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Message {
  id: number
  sender: 'bot' | 'user'
  text: string
  time: string
}

export default function ChatWidget() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: 'Hey there! Looking for specific design resources to finish your layout?',
      time: '15:00',
    },
    {
      id: 2,
      sender: 'bot',
      text: 'I can recommend top-tier typography specimen, minimalist wireframes, or geometric 3D shapes. Let me know what you need!',
      time: '15:00',
    },
  ])
  const [inputVal, setInputVal] = useState('')

  const handleSend = () => {
    if (!inputVal.trim()) return
    const userMsg: Message = {
      id: Date.now(),
      sender: 'user',
      text: inputVal,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages((prev) => [...prev, userMsg])
    setInputVal('')

    // Auto reply mock
    setTimeout(() => {
      let botText = "That's awesome! We have excellent resources in that category. I recommend jumping straight into our shop page to browse the details."
      const lower = inputVal.toLowerCase()
      if (lower.includes('font') || lower.includes('type') || lower.includes('letter')) {
        botText = "Typography is key! We have the legendary Telegraf Grotesk specimen. Try clicking 'Browse Fonts' in our chat chip or head over to the Shop."
      } else if (lower.includes('icon') || lower.includes('vector') || lower.includes('svg')) {
        botText = "We have a neo-brutalist custom stroke vector icon pack. They are 100% vector SVG files, fully customisable. Check them out under Icons category in the Shop!"
      } else if (lower.includes('ui') || lower.includes('kit') || lower.includes('figma')) {
        botText = "Looking for UI layouts? The Figma Vermillion Kit is extremely popular, and we also have a free Minimalist Wireframe Kit."
      } else if (lower.includes('free') || lower.includes('zero')) {
        botText = "No budget? No problem. Toggle the 'Free' filter on the Shop page to see resources you can download immediately."
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
    }, 1000)
  }

  const navigateCategory = (cat: string) => {
    router.push(`/shop?category=${cat}`)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-24 right-24 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] h-[460px] bg-paper rounded-cards border border-ash shadow-[0_20px_60px_rgba(18,18,23,0.15)] flex flex-col overflow-hidden mb-16 animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-royal-violet p-20 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="w-32 h-32 rounded-full bg-lemon-zest flex items-center justify-center font-bold text-obsidian text-micro">
                PR
              </div>
              <div>
                <h4 className="font-display text-[15px] font-bold text-paper leading-tight">
                  punkrecords Assistant
                </h4>
                <p className="font-body text-[11px] text-paper/70 font-medium">
                  Online &bull; Ready to Assist
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-paper/80 hover:text-paper transition-colors"
            >
              <svg className="w-16 h-16 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-20 flex flex-col gap-12 bg-fog">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[80%] flex flex-col gap-4 ${
                  msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                }`}
              >
                <div
                  className={`p-12 rounded-lg font-body text-caption leading-relaxed shadow-[0_1px_2px_rgba(18,18,23,0.04)] ${
                    msg.sender === 'user'
                      ? 'bg-royal-violet text-paper rounded-tr-none'
                      : 'bg-paper text-obsidian rounded-tl-none border border-ash/40'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="font-body text-[10px] text-slate px-4">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Mini CTA Chips */}
          <div className="px-16 py-8 border-t border-ash/30 flex gap-8 flex-wrap bg-paper">
            <button
              onClick={() => navigateCategory('Font')}
              className="bg-fog hover:bg-ash/20 font-body text-[12px] font-medium text-slate hover:text-obsidian px-12 py-4 rounded-navpills transition-colors border border-ash/20"
            >
              Browse Fonts
            </button>
            <button
              onClick={() => navigateCategory('UI Kit')}
              className="bg-fog hover:bg-ash/20 font-body text-[12px] font-medium text-slate hover:text-obsidian px-12 py-4 rounded-navpills transition-colors border border-ash/20"
            >
              Browse UI Kits
            </button>
          </div>

          {/* Input Box */}
          <div className="p-16 border-t border-ash bg-paper flex items-center gap-8">
            <input
              type="text"
              placeholder="Ask anything..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-fog font-body text-caption px-12 py-8 rounded-input border border-ash focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all text-obsidian placeholder-slate"
            />
            <button
              onClick={handleSend}
              className="w-36 h-36 bg-royal-violet hover:bg-electric-iris text-paper flex items-center justify-center rounded-input active:scale-95 transition-all shadow-[0_1px_2px_rgba(18,18,23,0.08)]"
            >
              <svg className="w-16 h-16 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-56 h-56 rounded-full bg-royal-violet hover:bg-electric-iris text-paper shadow-[0_20px_60px_rgba(18,18,23,0.15)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
      >
        {isOpen ? (
          <svg className="w-24 h-24 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-24 h-24 fill-none stroke-current stroke-2 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  )
}
