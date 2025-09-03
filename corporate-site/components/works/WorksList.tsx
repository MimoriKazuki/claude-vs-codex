'use client'

import { useState } from 'react'
import worksData from '@/data/works.json'
import { WorkCard } from './WorkCard'
import { WorkFilter } from './WorkFilter'

export function WorksList() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
  const [selectedTech, setSelectedTech] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  const allIndustries = Array.from(new Set(worksData.works.map(w => w.industry)))
  const allTechnologies = Array.from(
    new Set(worksData.works.flatMap(w => w.technologies))
  )
  const allTags = Array.from(new Set(worksData.works.flatMap(w => w.tags)))

  const filteredWorks = worksData.works.filter(work => {
    const industryMatch = selectedIndustry === 'all' || work.industry === selectedIndustry
    const techMatch = selectedTech === 'all' || work.technologies.includes(selectedTech)
    const tagMatch = selectedTag === 'all' || work.tags.includes(selectedTag)
    
    return industryMatch && techMatch && tagMatch
  })

  return (
    <>
      <WorkFilter
        industries={allIndustries}
        technologies={allTechnologies}
        tags={allTags}
        selectedIndustry={selectedIndustry}
        selectedTech={selectedTech}
        selectedTag={selectedTag}
        onIndustryChange={setSelectedIndustry}
        onTechChange={setSelectedTech}
        onTagChange={setSelectedTag}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredWorks.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
      
      {filteredWorks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">該当する実績が見つかりませんでした</p>
        </div>
      )}
    </>
  )
}