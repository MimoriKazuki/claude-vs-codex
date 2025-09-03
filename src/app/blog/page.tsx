import Link from 'next/link'
import { blogs } from '@/content/blog'

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Blog/News</h1>
      <p className="text-white/80 mt-2">実装TIPS、アーキ構成解説、事例裏側</p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((b) => (
          <li key={b.slug} className="rounded border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-white/60">{b.category}</div>
            <h2 className="font-medium"><Link href={`/blog/${b.slug}`}>{b.title}</Link></h2>
            <p className="text-sm text-white/80">{b.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

