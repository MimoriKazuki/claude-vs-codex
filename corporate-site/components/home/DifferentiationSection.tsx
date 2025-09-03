import { Cpu, MessageSquare, Zap } from 'lucide-react'

const differentiators = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'OpenAI API × コスト最適化',
    description: 'トークン抑制設計により、高品質を維持しながら運用コストを最大65%削減。ROIを最大化します。',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'LINEミニアプリ実装運用',
    description: 'LINE上で完結する業務システムを構築。ユーザー導線を最適化し、利用率向上を実現します。',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: '高速プロトタイピング',
    description: '要件定義から検証まで最短1週間。アジャイル開発で市場投入までの時間を大幅短縮します。',
  },
]

export function DifferentiationSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            選ばれる理由
          </h2>
          <p className="text-gray-600">
            技術力と実績に基づく、確かな価値提供
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}