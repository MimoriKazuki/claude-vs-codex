import { MetadataRoute } from 'next'
import { works } from '@/content/works'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  const routes = ['', '/services', '/works', '/blog', '/company', '/contact', '/legal/privacy', '/legal/transmission', '/legal/terms', '/legal/security']
  const pages: MetadataRoute.Sitemap = routes.map((r) => ({ url: base + r, lastModified: new Date() }))
  const workPages = works.map((w) => ({ url: `${base}/works/${w.slug}`, lastModified: new Date() }))
  return [...pages, ...workPages]
}

