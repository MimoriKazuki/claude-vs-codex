import Link from 'next/link'

export function ArticleFooterCta() {
  return (
    <section className="mt-10 rounded border border-white/10 p-6 bg-white/5">
      <h2 className="text-lg font-semibold">資料DL / 相談はこちら</h2>
      <p className="text-white/80 text-sm mt-1">記事のテーマに関連する事例もご紹介します。</p>
      <div className="mt-3 flex gap-3">
        <Link href="/contact" className="rounded bg-brand px-4 py-2 text-black font-medium">相談する</Link>
        <Link href="/contact" className="rounded border border-white/20 px-4 py-2">資料ダウンロード</Link>
      </div>
    </section>
  )
}

