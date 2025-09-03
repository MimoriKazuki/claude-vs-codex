import { works as allWorks, type Work } from '@/content/works'
import { WorkCard } from '@/components/WorkCard'

export function RelatedWorks({ bySlugs, byTags }: { bySlugs?: string[]; byTags?: string[] }) {
  let items: Work[] = []
  if (bySlugs && bySlugs.length) {
    items = allWorks.filter((w) => bySlugs.includes(w.slug))
  } else if (byTags && byTags.length) {
    items = allWorks.filter((w) => byTags.some((t) => w.tags.includes(t)))
  }
  if (items.length === 0) return null
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">関連事例</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((w) => (
          <WorkCard key={w.slug} work={w} />
        ))}
      </div>
    </section>
  )
}

