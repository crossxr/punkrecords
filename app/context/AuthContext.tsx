'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { createClient } from '@neondatabase/neon-js'

const authUrl = process.env.NEXT_PUBLIC_NEON_AUTH_URL || 'https://ep-misty-art-atdteoxi.neonauth.c-9.us-east-1.aws.neon.tech/neondb/auth'

// Initialize Neon Client
export const neonClient = createClient({
  auth: {
    url: authUrl
  },
  dataApi: {
    url: 'https://ep-misty-art-atdteoxi.c-9.us-east-1.aws.neon.tech/neondb'
  }
})

export interface NeonUser {
  id: string
  email: string
  name?: string
  createdAt?: string
}

export interface NeonSession {
  user: NeonUser
  token?: string
}

interface AuthContextType {
  user: NeonUser | null
  session: NeonSession | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (email: string, password: string, name?: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<NeonSession | null>(null)
  const [user, setUser] = useState<NeonUser | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch session on mount
  const checkSession = async () => {
    try {
      const response = await neonClient.auth.getSession()
      if (response && response.data) {
        setSession(response.data as unknown as NeonSession)
        setUser((response.data as any).user as NeonUser)
      } else {
        setSession(null)
        setUser(null)
      }
    } catch (error) {
      console.error('Error fetching Neon Auth session:', error)
      setSession(null)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkSession()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      const response = await neonClient.auth.signIn.email({
        email: email.trim(),
        password
      })
      if ((response as any).error) {
        return { success: false, error: (response as any).error.message || 'Invalid credentials' }
      }
      // Re-fetch session to populate state
      await checkSession()
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message || 'Sign in failed' }
    }
  }

  const signUp = async (email: string, password: string, name?: string) => {
    try {
      const response = await neonClient.auth.signUp.email({
        email: email.trim(),
        password,
        name: name?.trim() || email.split('@')[0]
      })
      if ((response as any).error) {
        return { success: false, error: (response as any).error.message || 'Registration failed' }
      }
      // Re-fetch session
      await checkSession()
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message || 'Sign up failed' }
    }
  }

  const signOut = async () => {
    try {
      await neonClient.auth.signOut()
    } catch (error) {
      console.error('Error during sign out:', error)
    } finally {
      setSession(null)
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
