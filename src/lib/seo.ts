import type { Metadata } from 'next'
import { site } from '@/content/settings'

export function pageMeta(opts: {
  title?: string
  description?: string
  path?: string
  image?: string
} = {}): Metadata {
  const url = new URL(opts.path ?? '/', site.url)
  const title = opts.title ? `${opts.title} | ${site.name}` : `${site.name}`
  const description = opts.description ?? site.description
  const image = opts.image ?? '/og.png'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: url.toString(),
      images: [{ url: image }],
    },
    alternates: { canonical: url.toString() },
  }
}

