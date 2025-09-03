"use client"
import { useState } from 'react'
import type { Service } from '@/content/services'
import { FAQ } from '@/components/FAQ'

export function ServicesTabs({ services }: { services: Service[] }) {
  const [active, setActive] = useState(services[0]?.category ?? '')
  const current = services.find((s) => s.category === active) ?? services[0]
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {services.map((s) => (
          <button
            key={s.category}
            onClick={() => setActive(s.category)}
            className={`rounded px-3 py-1 text-sm border ${active === s.category ? 'bg-brand text-black border-brand' : 'border-white/20 bg-white/5'}`}
          >
            {s.category}
          </button>
        ))}
      </div>
      {current && (
        <div className="mt-6 rounded border border-white/10 p-4 bg-white/5">
          <h2 className="font-medium">{current.category}</h2>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-white/60">課題</div>
              <ul className="list-disc list-inside text-sm text-white/80">
                {current.problems.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm text-white/60">解決</div>
              <ul className="list-disc list-inside text-sm text-white/80">
                {current.solutions.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          {current.faq && <FAQ items={current.faq} />}
        </div>
      )}
    </div>
  )}

