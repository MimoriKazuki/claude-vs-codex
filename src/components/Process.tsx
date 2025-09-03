const steps = ['要件整理', '設計', '実装', '運用']

export function Process() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">導入プロセス</h2>
      <ol className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <li key={s} className="rounded border border-white/10 p-4 bg-white/5">
            <div className="text-sm text-white/60">STEP {i + 1}</div>
            <div className="text-lg font-medium mt-1">{s}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}

