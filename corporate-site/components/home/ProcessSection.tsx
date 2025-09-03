import { FileText, PenTool, Code, Settings } from 'lucide-react'

const processSteps = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: '要件整理',
    description: '課題と目標を明確化',
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: '設計',
    description: '最適なアーキテクチャを構築',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: '実装',
    description: '高品質なコードで実現',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: '運用',
    description: '継続的な改善とサポート',
  },
]

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            導入プロセス
          </h2>
          <p className="text-gray-600">
            一気通貫のサポートで、確実な成果を実現
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4 relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-primary-200 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}