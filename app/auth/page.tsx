'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export default function AuthPage() {
  const { user, signIn, signUp, loading } = useAuth()
  const router = useRouter()

  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Redirect if already authenticated
  if (!loading && user) {
    router.push('/shop')
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    setIsSubmitting(true)

    try {
      if (mode === 'signin') {
        const res = await signIn(email, password)
        if (res.success) {
          router.push('/shop')
        } else {
          setErrorMsg(res.error || 'Invalid credentials.')
        }
      } else {
        const res = await signUp(email, password, name)
        if (res.success) {
          router.push('/shop')
        } else {
          setErrorMsg(res.error || 'Failed to register.')
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-fog">
      {/* Left Column - Brand Visual Panel (hidden on mobile, takes 5 columns on lg) */}
      <div className="lg:col-span-5 hidden lg:flex flex-col justify-between bg-royal-violet text-paper p-[48px] relative overflow-hidden select-none">
        
        {/* Top brand signature */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-[12px] group w-fit">
            <img
              src="/logo.svg"
              alt="punkrecords"
              className="h-[32px] w-auto group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="font-display text-[22px] font-bold text-paper tracking-tight">
              punkrecords<span className="text-lemon-zest font-light">*</span>
            </span>
          </Link>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-start gap-[28px] max-w-md text-left">
          <div className="flex flex-col gap-[16px]">
            <span className="text-lemon-zest font-body text-[10px] font-bold uppercase tracking-[2px]">
              DATABASE LICENSE DECK
            </span>
            <h2 className="font-display text-[36px] font-bold leading-tight text-paper">
              Secure & Recover Your Specimens.
            </h2>
            <p className="font-body text-[15px] text-paper/85 leading-relaxed">
              Registering a punk account ties your licensing keys directly to your profile. Download and recover specimens anytime, from any command deck.
            </p>
          </div>
          
          <div className="flex flex-col gap-[12px] pl-[4px] font-body text-[14px] text-paper/90 text-left">
            <div className="flex items-center gap-[12px]">
              <svg className="w-[18px] h-[18px] stroke-lemon-zest stroke-2 fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>punk account secure storage</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <svg className="w-[18px] h-[18px] stroke-lemon-zest stroke-2 fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Persistent license records database</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <svg className="w-[18px] h-[18px] stroke-lemon-zest stroke-2 fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant direct downloads & logs library</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 font-body text-[11px] text-paper/60 text-left">
          <span>© 2026 punkrecords™. Engineered for high-speed creative layouts.</span>
        </div>
      </div>

      {/* Right Column - Form Container (spans 7 columns on lg, 12 on mobile) */}
      <div className="lg:col-span-7 flex flex-col justify-center items-center p-[24px] sm:p-[48px] bg-fog relative overflow-y-auto min-h-screen">
        {/* Back link at the top right of form panel */}
        <div className="absolute top-[32px] right-[32px] z-20">
          <Link href="/" className="font-body text-[13px] text-slate hover:text-obsidian flex items-center gap-[6px] transition-colors">
            <svg className="w-[16px] h-[16px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Exit to Home</span>
          </Link>
        </div>

        <div className="w-full max-w-[440px] bg-paper rounded-cards border border-ash/50 p-[32px] sm:p-[40px] shadow-[0_8px_32px_rgba(18,18,23,0.03)] flex flex-col gap-[28px] text-left relative z-10 my-auto">
          {/* Brand Header (Only visible on mobile view) */}
          <div className="flex flex-col gap-[8px] items-center text-center lg:hidden">
            <Link href="/" className="flex items-center gap-[8px] group">
              <img
                src="/logo.svg"
                alt="punkrecords"
                className="h-[28px] w-auto group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="font-display text-[20px] font-bold text-obsidian tracking-tight">
                punkrecords<span className="text-lemon-zest font-light">*</span>
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-[6px]">
            <h2 className="font-display text-[26px] font-bold text-obsidian tracking-tight">
              {mode === 'signin' ? 'Welcome Back' : 'Create Library Deck'}
            </h2>
            <p className="font-body text-[12px] text-slate/85">
              {mode === 'signin' ? 'Sign in to access your digital download library' : 'Create an account to persist license keys'}
            </p>
          </div>

          {/* Tab switchers */}
          <div className="flex items-center gap-[4px] bg-fog p-[4px] border border-ash/40 rounded-full select-none">
            <button
              onClick={() => { setMode('signin'); setErrorMsg(''); }}
              className={`flex-1 font-body text-[14px] font-semibold py-[10px] rounded-full cursor-pointer text-center transition-all ${
                mode === 'signin'
                  ? 'bg-obsidian text-paper shadow-sm'
                  : 'text-slate hover:text-obsidian'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setMode('signup'); setErrorMsg(''); }}
              className={`flex-1 font-body text-[14px] font-semibold py-[10px] rounded-full cursor-pointer text-center transition-all ${
                mode === 'signup'
                  ? 'bg-obsidian text-paper shadow-sm'
                  : 'text-slate hover:text-obsidian'
              }`}
            >
              Sign Up
            </button>
          </div>

          {errorMsg && (
            <div className="bg-crimson/10 border border-crimson/30 rounded-input p-[12px] text-caption text-crimson font-body font-medium">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            {mode === 'signup' && (
              <div className="flex flex-col gap-[8px]">
                <label className="block font-body text-[11px] font-bold text-slate uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Alex Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-fog text-obsidian font-body text-[15px] px-[16px] py-[12px] rounded-input border border-ash/40 focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
                />
              </div>
            )}

            <div className="flex flex-col gap-[8px]">
              <label className="block font-body text-[11px] font-bold text-slate uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="alex@studio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-fog text-obsidian font-body text-[15px] px-[16px] py-[12px] rounded-input border border-ash/40 focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="block font-body text-[11px] font-bold text-slate uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-fog text-obsidian font-body text-[15px] px-[16px] py-[12px] rounded-input border border-ash/40 focus:outline-none focus:border-royal-violet focus:ring-1 focus:ring-royal-violet/30 transition-all placeholder-slate"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-royal-violet text-paper font-body text-[15px] font-semibold py-[14px] rounded-buttons mt-[8px] hover:bg-electric-iris active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-[8px] cursor-pointer shadow-sm text-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-[16px] w-[16px] text-paper" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
              )}
            </button>
          </form>

          <div className="text-center border-t border-ash/30 pt-[16px]">
            <span className="font-body text-[11px] text-slate">
              🔒 Powered by Neon Auth database integration.
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
