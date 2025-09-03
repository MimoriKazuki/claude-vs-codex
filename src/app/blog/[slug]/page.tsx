import { notFound } from 'next/navigation'
import { blogs } from '@/content/blog'
import { JsonLd } from '@/lib/structuredData'
import { RelatedWorks } from '@/components/RelatedWorks'
import { ArticleFooterCta } from '@/components/ArticleFooterCta'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

export default function Page({ params }: Props) {
  const b = blogs.find((x) => x.slug === params.slug)
  if (!b) return notFound()
  const sd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: b.title,
    author: { '@type': 'Person', name: b.author },
  }
  return (
    <div>
      <article className="prose prose-invert max-w-none">
        <JsonLd data={sd} />
        <h1>{b.title}</h1>
        <p>{b.body}</p>
      </article>
      <RelatedWorks bySlugs={b.relatedWorks} />
      <ArticleFooterCta />
    </div>
  )
}
