'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Resource {
  id: string
  title: string
  type: 'Font' | 'UI Kit' | 'Icons' | '3D Asset' | 'Template'
  price: number // 0 for free
  description: string
  rating: number
  downloads: string
  fileSize: string
  gradient: string // CSS class or gradient style
  author: string
  image?: string
  downloadUrl: string
}

interface CartContextType {
  checkoutItem: Resource | null
  openCheckout: (item: Resource) => void
  closeCheckout: () => void
  ownedItems: string[]
  markAsOwned: (id: string) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [checkoutItem, setCheckoutItem] = useState<Resource | null>(null)
  const [ownedItems, setOwnedItems] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('punkrecords_owned')
    if (saved) {
      try {
        setOwnedItems(JSON.parse(saved))
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  const openCheckout = (item: Resource) => {
    setCheckoutItem(item)
  }

  const closeCheckout = () => {
    setCheckoutItem(null)
  }

  const markAsOwned = (id: string) => {
    if (ownedItems.includes(id)) return
    const updated = [...ownedItems, id]
    setOwnedItems(updated)
    localStorage.setItem('punkrecords_owned', JSON.stringify(updated))
  }

  return (
    <CartContext value={{ checkoutItem, openCheckout, closeCheckout, ownedItems, markAsOwned }}>
      {children}
    </CartContext>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
