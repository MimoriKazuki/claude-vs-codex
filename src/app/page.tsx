import { Hero } from '@/components/Hero'
import { KpiHighlights } from '@/components/KpiHighlights'
import { Differentiators } from '@/components/Differentiators'
import { Process } from '@/components/Process'
import { LogoWall } from '@/components/LogoWall'
import { CtaBanner } from '@/components/CtaBanner'
import { works } from '@/content/works'

export default function Page() {
  const kpis = works.flatMap(w => w.kpi)
  return (
    <div>
      <Hero />
      <KpiHighlights items={kpis} />
      <Differentiators />
      <section className="mt-10">
        <h2 className="text-xl font-semibold">提供領域</h2>
        <p className="text-white/80 mt-2">Web / モバイル / AI / LINE / 内部業務DX / フロント高速化</p>
      </section>
      <Process />
      <LogoWall />
      <CtaBanner />
    </div>
  )
}

