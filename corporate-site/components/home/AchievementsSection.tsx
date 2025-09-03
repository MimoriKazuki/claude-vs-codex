'use client'

import { useEffect, useState } from 'react'
import worksData from '@/data/works.json'

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const latestWorks = worksData.works.slice(0, 3)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            最新の実績
          </h2>
          <p className="text-gray-600">
            数値で見る課題解決の成果
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestWorks.map((work, index) => (
            <div
              key={work.id}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary-600">
                  {work.kpi.prefix}{work.kpi.value}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {work.kpi.label}
              </h3>
              <p className="text-gray-600 mb-4">
                {work.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}