"use client"
import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold focus-ring">Studio</Link>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          <Link className="hover:text-white focus-ring" href="/services">Services</Link>
          <Link className="hover:text-white focus-ring" href="/works">Works</Link>
          <Link className="hover:text-white focus-ring" href="/blog">Blog</Link>
          <Link className="hover:text-white focus-ring" href="/company">Company</Link>
          <Link className="hover:text-white focus-ring rounded bg-brand px-3 py-1 text-black" href="/contact">相談する</Link>
        </nav>
      </div>
    </header>
  )
}

