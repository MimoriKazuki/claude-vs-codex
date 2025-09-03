import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SkipLink } from '@/components/SkipLink'
// No external analytics per request
import { JsonLd } from '@/lib/structuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: '生成AI × LINE × 現場DX | Studio',
    template: '%s | Studio',
  },
  description: '生成AI × LINE × 現場DXで“動く”まで最短に。実績ベースの課題解決を、一気通貫で。',
  openGraph: {
    type: 'website',
    title: '生成AI × LINE × 現場DX | Studio',
    description: '実績ベースの課題解決を一気通貫で',
    url: 'https://example.com',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen antialiased">
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Studio',
          url: 'https://example.com',
        }} />
        <SkipLink />
        <Header />
        <main id="main" className="container py-10 lg:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
