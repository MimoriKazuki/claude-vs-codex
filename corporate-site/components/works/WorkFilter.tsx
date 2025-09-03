interface WorkFilterProps {
  industries: string[]
  technologies: string[]
  tags: string[]
  selectedIndustry: string
  selectedTech: string
  selectedTag: string
  onIndustryChange: (value: string) => void
  onTechChange: (value: string) => void
  onTagChange: (value: string) => void
}

export function WorkFilter({
  industries,
  technologies,
  tags,
  selectedIndustry,
  selectedTech,
  selectedTag,
  onIndustryChange,
  onTechChange,
  onTagChange,
}: WorkFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            業界
          </label>
          <select
            id="industry"
            value={selectedIndustry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="all">すべて</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="technology" className="block text-sm font-medium text-gray-700 mb-2">
            技術
          </label>
          <select
            id="technology"
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="all">すべて</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-2">
            タグ
          </label>
          <select
            id="tag"
            value={selectedTag}
            onChange={(e) => onTagChange(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="all">すべて</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}