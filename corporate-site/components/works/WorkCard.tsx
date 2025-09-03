import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface WorkCardProps {
  work: {
    id: string
    title: string
    summary: string
    kpi: {
      label: string
      value: string
      prefix: string
    }
    technologies: string[]
    tags: string[]
  }
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all group">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {work.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {work.summary}
        </p>
        
        <div className="mb-4">
          <div className="inline-flex items-baseline bg-primary-50 rounded-lg px-3 py-2">
            <span className="text-2xl font-bold text-primary-600">
              {work.kpi.prefix}{work.kpi.value}
            </span>
            <span className="ml-2 text-sm text-primary-700">
              {work.kpi.label}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {work.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {work.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
              +{work.technologies.length - 3}
            </span>
          )}
        </div>
        
        <Link
          href={`/works/${work.id}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
        >
          詳しく見る
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}