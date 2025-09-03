import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export function CTASection() {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            課題解決の第一歩を踏み出しませんか？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            まずは無料相談から。貴社の課題に最適なソリューションをご提案します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-medium text-primary-600 shadow-lg hover:bg-gray-50 transition-colors group"
            >
              無料で相談する
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-4 text-base font-medium text-white hover:bg-white hover:text-primary-600 transition-colors">
              <Download className="mr-2 h-5 w-5" />
              資料ダウンロード
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}