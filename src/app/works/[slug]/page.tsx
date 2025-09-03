import { notFound } from 'next/navigation'
import { works } from '@/content/works'
import { JsonLd } from '@/lib/structuredData'
import { blogs } from '@/content/blog'
import Link from 'next/link'
import { RelatedWorks } from '@/components/RelatedWorks'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export default function Page({ params }: Props) {
  const work = works.find((w) => w.slug === params.slug)
  if (!work) return notFound()
  const sd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.title,
    about: work.summary,
  }
  return (
    <div>
      <article className="prose prose-invert max-w-none">
        <JsonLd data={sd} />
        <h1>{work.title}</h1>
        <p>{work.summary}</p>
        <h2>成果（KPI）</h2>
        <ul>
          {work.kpi.map((k) => (
            <li key={k.label}>{k.label}: {k.value}</li>
          ))}
        </ul>
        <h2>概要</h2>
        <ul>
          <li>目的・背景: {work.summary}</li>
          <li>期間: {work.period ?? '-'}</li>
          <li>体制: {work.team ? `PM ${work.team.pm ?? 0}/ Eng ${work.team.engineers ?? 0}/ Des ${work.team.designer ?? 0}` : '-'}</li>
          <li>技術: {work.techStack.join(', ')}</li>
        </ul>
        <h2>課題</h2>
        <ul>
          {work.problems.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <h2>解決</h2>
        <ul>
          {work.solutions.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <h2>主要機能・アーキテクチャ</h2>
        <p>{work.architecture ?? '-'}</p>
        <h2>担当範囲</h2>
        <p>{work.scope ?? '-'}</p>
      </article>

      <RelatedWorks byTags={work.tags} />

      <section className="mt-10 rounded border border-white/10 p-6 bg-white/5">
        <h2 className="text-lg font-semibold">同様の案件を相談</h2>
        <p className="text-white/80 text-sm mt-1">要件の整理から伴走します。最短で“動く”まで。</p>
        <div className="mt-3">
          <Link href="/contact" className="rounded bg-brand px-4 py-2 text-black font-medium">相談する</Link>
        </div>
      </section>

      {blogs.filter((b) => b.relatedWorks?.includes(work.slug)).length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">関連ブログ</h2>
          <ul className="mt-3 list-disc list-inside text-white/80">
            {blogs.filter((b) => b.relatedWorks?.includes(work.slug)).map((b) => (
              <li key={b.slug}><Link href={`/blog/${b.slug}`}>{b.title}</Link></li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
