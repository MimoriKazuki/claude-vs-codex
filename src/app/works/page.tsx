import { works } from '@/content/works'
import { WorksExplorer } from '@/components/WorksExplorer'

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Works</h1>
      <p className="text-white/80 mt-2">タグ・検索で絞り込み（業界・技術・目的）</p>
      <div className="mt-6">
        <WorksExplorer items={works} />
      </div>
    </div>
  )
}
