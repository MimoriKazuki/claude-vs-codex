import Link from 'next/link'

export function CtaBanner() {
  return (
    <section className="mt-12 rounded border border-white/10 p-6 bg-gradient-to-br from-white/10 to-white/5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">まずは相談ください</h2>
          <p className="text-white/80 text-sm">課題整理から伴走します。資料DLもご用意。</p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className="rounded bg-brand px-4 py-2 text-black font-medium">問い合わせ</Link>
          <Link href="/contact" className="rounded border border-white/20 px-4 py-2">資料DL</Link>
        </div>
      </div>
    </section>
  )
}

