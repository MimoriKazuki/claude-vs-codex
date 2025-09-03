"use client"
import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_ID
    if (!id) return
    // gtag loader
    const s1 = document.createElement('script')
    s1.async = true
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(s1)
    const s2 = document.createElement('script')
    s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config','${id}');`
    document.head.appendChild(s2)
  }, [])
  return null
}

export function track(event: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return
  // @ts-ignore
  window.gtag?.('event', event, params)
}

