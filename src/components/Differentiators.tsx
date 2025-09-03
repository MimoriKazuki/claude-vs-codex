const items = [
  { title: 'OpenAI API×コスト最適化', desc: 'トークン抑制設計で運用コストを抑制' },
  { title: 'LINE実装運用', desc: 'ミニアプリ/メッセージAPIの実装から運用まで' },
  { title: '高速プロトタイピング', desc: '要件→検証まで最短で回す' },
]

export function Differentiators() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">差別化</h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((it) => (
          <li key={it.title} className="rounded border border-white/10 p-4 bg-white/5">
            <h3 className="font-medium">{it.title}</h3>
            <p className="text-sm text-white/80 mt-1">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

