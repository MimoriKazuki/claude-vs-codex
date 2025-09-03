import Link from 'next/link'

export function Hero() {
  return (
    <section className="py-10 lg:py-16">
      <h1 className="text-3xl/tight md:text-5xl/tight font-semibold">
        生成AI × LINE × 現場DXで“動く”まで最短に。
      </h1>
      <p className="mt-4 max-w-3xl text-white/80">
        実績ベースの課題解決を、一気通貫で。
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/contact" className="rounded bg-brand px-4 py-2 text-black font-medium">相談する</Link>
        <Link href="/contact" className="rounded border border-white/20 px-4 py-2">資料ダウンロード</Link>
      </div>
    </section>
  )
}

