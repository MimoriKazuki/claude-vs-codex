import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export function ServiceAreaSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            提供領域
          </h2>
          <p className="text-gray-600">
            幅広い技術領域で、最適なソリューションを提供
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-primary-600 text-sm font-medium">
                詳しく見る
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}