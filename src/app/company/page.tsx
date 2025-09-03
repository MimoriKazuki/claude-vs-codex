import { company } from '@/content/company'

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Company</h1>
      <p className="text-white/80 mt-2">{company.info}</p>
      <h2 className="mt-6 text-xl font-semibold">メンバー</h2>
      <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {company.members.map((m) => (
          <li key={m.name} className="rounded border border-white/10 p-4 bg-white/5">
            <div className="font-medium">{m.name}</div>
            <div className="text-sm text-white/80">{m.role}</div>
            <p className="text-sm text-white/60 mt-1">{m.note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

