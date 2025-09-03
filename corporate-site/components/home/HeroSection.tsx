import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            生成AI × LINE × 現場DXで
            <br />
            <span className="text-primary-600">"動く"まで最短に。</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 animate-fade-up animation-delay-200">
            実績ベースの課題解決を、一気通貫で。
            <br />
            要件定義から運用まで、すべてのフェーズをサポートします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Link href="/contact" className="btn-primary group">
              相談する
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="btn-secondary">
              <Download className="mr-2 h-4 w-4" />
              資料ダウンロード
            </button>
          </div>
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  )
}