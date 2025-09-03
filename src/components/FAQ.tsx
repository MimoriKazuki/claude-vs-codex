export type QA = { q: string; a: string }

export function FAQ({ items }: { items: QA[] }) {
  return (
    <section className="mt-10" itemScope itemType="https://schema.org/FAQPage">
      <h2 className="text-xl font-semibold">FAQ</h2>
      <div className="mt-4">
        {items.map((qa, i) => (
          <details key={i} className="group border-b border-white/10 py-3" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="cursor-pointer list-none font-medium flex items-center justify-between" itemProp="name">
              <span>Q. {qa.q}</span>
              <span className="text-white/60 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="mt-2 text-white/80" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <div itemProp="text">{qa.a}</div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
