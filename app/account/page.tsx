'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { getLicensesAction, DBUserLicense } from '../actions/licenses'
import { RESOURCES } from '../data/resources'

export default function AccountPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  const [licenses, setLicenses] = useState<DBUserLicense[]>([])
  const [isLoadingLicenses, setIsLoadingLicenses] = useState(true)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user?.email) {
      setIsLoadingLicenses(true)
      getLicensesAction(user.email)
        .then((res) => {
          if (res.success && res.data) {
            setLicenses(res.data)
          }
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoadingLicenses(false))
    }
  }, [user])

  if (loading || !user) {
    return (
      <div className="flex-1 flex flex-col bg-fog items-center justify-center py-[120px]">
        <div className="animate-spin h-[32px] w-[32px] text-royal-violet border-4 border-current border-t-transparent rounded-full" />
        <span className="font-body text-caption text-slate mt-4">Verifying session...</span>
      </div>
    )
  }

  // Find original resource object helper to get gradients
  const getResourceGradient = (resId: string) => {
    const res = RESOURCES.find((r) => r.id === resId)
    return res ? res.gradient : 'from-slate to-ash'
  }

  return (
    <div className="flex-1 flex flex-col bg-fog pt-[48px] pb-[96px] px-[24px] md:px-[80px]">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-[40px]">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px] text-left border-b border-ash/30 pb-[32px]">
          <div className="flex flex-col items-start gap-[12px]">
            <span className="font-body text-caption font-semibold tracking-[2px] text-royal-violet uppercase">
              USER LIBRARY DECK
            </span>
            <h1 className="font-display text-heading md:text-heading-lg font-bold text-obsidian tracking-tight leading-none">
              My Specimen Library
            </h1>
            <p className="font-body text-body text-slate mt-[4px]">
              Logged in as <strong className="text-obsidian">{user.email}</strong>
            </p>
          </div>
          <Link
            href="/shop"
            className="bg-obsidian text-paper hover:bg-obsidian/90 font-body text-caption font-semibold px-[24px] py-[12px] rounded-buttons shadow-sm transition-all text-center self-start md:self-auto shrink-0"
          >
            Explore Shop Catalog
          </Link>
        </div>

        {/* Licenses Grid */}
        {isLoadingLicenses ? (
          <div className="py-[64px] text-center flex flex-col items-center">
            <div className="animate-spin h-[28px] w-[28px] text-royal-violet border-4 border-current border-t-transparent rounded-full mb-4" />
            <span className="font-body text-caption text-slate">Querying purchases database...</span>
          </div>
        ) : licenses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {licenses.map((lic, index) => {
              const gradient = getResourceGradient(lic.resource_id)
              
              return (
                <div
                  key={index}
                  className="bg-paper rounded-cards border border-ash/50 shadow-[0_4px_24px_rgba(18,18,23,0.02)] overflow-hidden flex flex-col justify-between hover:shadow-[0_8px_32px_rgba(18,18,23,0.05)] transition-all duration-300 relative text-left"
                >
                  {/* Card visual preview */}
                  <div className={`aspect-[16/6] bg-gradient-to-br ${gradient} p-[20px] flex items-center justify-between relative overflow-hidden select-none`}>
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px]" />
                    <span className="bg-paper/20 backdrop-blur-sm text-paper font-body text-[10px] font-semibold uppercase tracking-wider px-[10px] py-[3px] rounded-full border border-paper/10 relative z-10">
                      SECURED LICENSE
                    </span>
                    <span className="font-body text-[10px] text-paper/80 font-medium relative z-10">
                      {new Date(lic.purchased_at).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-[32px] flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[6px]">
                      <span className="font-body text-[10px] text-slate font-bold uppercase tracking-wider">RESOURCE</span>
                      <h3 className="font-display text-[20px] font-bold text-obsidian tracking-tight line-clamp-1">
                        {lic.resource_title}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-[6px]">
                      <span className="font-body text-[10px] text-slate font-bold uppercase tracking-wider">LICENSE KEY</span>
                      <code className="bg-fog p-[10px] rounded border border-ash/40 font-mono text-[12px] text-obsidian break-all font-semibold select-all block">
                        {lic.license_key}
                      </code>
                    </div>

                    {/* Download Button */}
                    <a
                      href={`/api/download/${lic.resource_id}`}
                      download=""
                      className="w-full bg-obsidian text-paper hover:bg-obsidian/90 font-body text-caption font-semibold py-[12px] rounded-buttons flex items-center justify-center gap-[8px] transition-all cursor-pointer text-center mt-[8px]"
                    >
                      <span>Download Assets</span>
                      <svg className="w-[14px] h-[14px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Empty Library State */
          <div className="bg-paper rounded-cards border border-ash/50 p-[64px] text-center flex flex-col items-center gap-[16px] shadow-[0_4px_24px_rgba(18,18,23,0.02)]">
            <div className="w-[56px] h-[56px] bg-fog text-slate rounded-full flex items-center justify-center">
              <svg className="w-[28px] h-[28px] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="font-display text-[22px] font-bold text-obsidian tracking-tight">
              Your Library is Empty
            </h3>
            <p className="font-body text-body text-slate max-w-sm">
              You haven&apos;t purchased or registered any premium specimens under this account.
            </p>
            <Link
              href="/shop"
              className="bg-royal-violet text-paper hover:bg-electric-iris font-body text-caption font-semibold px-[24px] py-[12px] rounded-buttons mt-[8px] shadow-sm transition-colors cursor-pointer"
            >
              Browse Resources Shop
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}
