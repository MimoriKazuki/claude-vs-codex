"use client"
import { useMemo, useState } from 'react'
import type { Work } from '@/content/works'
import { WorkCard } from '@/components/WorkCard'

export function WorksExplorer({ items }: { items: Work[] }) {
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState<string[]>([])

  const tags = useMemo(() => {
    const s = new Set<string>()
    items.forEach((w) => w.tags?.forEach((t) => s.add(t)))
    return Array.from(s).sort()
  }, [items])

  const toggleTag = (t: string) => {
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  const filtered = items.filter((w) => {
    const q = query.trim().toLowerCase()
    const matchQ = !q || [w.title, w.summary, w.industry, w.techStack.join(' '), w.tags?.join(' ')].join(' ').toLowerCase().includes(q)
    const matchTags = activeTags.length === 0 || activeTags.every((t) => w.tags?.includes(t))
    return matchQ && matchTags
  })

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          placeholder="検索（案件名・技術・タグ）"
          className="w-full md:w-80 rounded border border-white/20 bg-transparent p-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => toggleTag(t)}
              className={`rounded px-3 py-1 text-sm border ${activeTags.includes(t) ? 'bg-brand text-black border-brand' : 'border-white/20 bg-white/5'}`}
            >
              {t}
            </button>
          ))}
          {tags.length > 0 && activeTags.length > 0 && (
            <button onClick={() => setActiveTags([])} className="text-sm underline">
              クリア
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((w) => (
          <WorkCard key={w.slug} work={w} />
        ))}
        {filtered.length === 0 && (
          <div className="text-white/60">該当する事例がありません。</div>
        )}
      </div>
    </div>
  )
}

