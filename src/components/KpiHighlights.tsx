type KPI = { label: string; value: string }

export function KpiHighlights({ items }: { items: KPI[] }) {
  const top3 = items.slice(0, 3)
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">実績ハイライト</h2>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {top3.map((k, i) => (
          <li key={i} className="rounded border border-white/10 p-4 bg-white/5">
            <div className="text-2xl font-semibold">{k.value}</div>
            <div className="text-white/80 text-sm mt-1">{k.label}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

