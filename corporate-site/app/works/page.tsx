import { Metadata } from 'next'
import { WorksList } from '@/components/works/WorksList'

export const metadata: Metadata = {
  title: '実績 | TechSolutions',
  description: 'AI開発、LINEミニアプリ、Web/モバイルアプリ開発など、数多くのプロジェクト実績をご紹介',
}

export default function WorksPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            実績紹介
          </h1>
          <p className="text-xl text-gray-600">
            課題解決の実例と具体的な成果をご覧ください
          </p>
        </div>
        
        <WorksList />
      </div>
    </section>
  )
}