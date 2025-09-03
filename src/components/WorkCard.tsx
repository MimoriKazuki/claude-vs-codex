import Link from 'next/link'
import type { Work } from '@/content/works'

export function WorkCard({ work }: { work: Work }) {
  const kpi = work.kpi?.[0]
  return (
    <Link href={`/works/${work.slug}`} className="rounded border border-white/10 p-4 bg-white/5 hover:border-brand focus-ring block">
      <div className="text-sm text-white/60">{work.industry} / {work.techStack.join(', ')}</div>
      <h3 className="mt-1 font-medium">{work.title}</h3>
      <p className="text-sm text-white/80 mt-1">{work.summary}</p>
      {kpi && (
        <div className="mt-2 text-sm">
          <span className="rounded bg-white/10 px-2 py-1">{kpi.label}: {kpi.value}</span>
        </div>
      )}
      <div className="mt-3 text-sm text-brand">詳しく見る →</div>
    </Link>
  )
}

