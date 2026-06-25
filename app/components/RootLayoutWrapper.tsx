'use client'

import { usePathname } from 'next/navigation'
import AnnouncementBanner from '@/app/components/AnnouncementBanner'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import ChatWidget from '@/app/components/ChatWidget'

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/auth'

  if (isAuthPage) {
    return <main className="flex-1 flex flex-col min-h-screen">{children}</main>
  }

  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  )
}
