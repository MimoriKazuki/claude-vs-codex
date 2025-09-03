'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '契約形態について教えてください',
    answer: '請負契約、準委任契約、派遣契約など、プロジェクトの性質やお客様のご要望に応じて柔軟に対応いたします。月額固定、時間単価、成果報酬など、様々な料金体系をご用意しています。',
  },
  {
    question: 'セキュリティ対策はどのようになっていますか？',
    answer: 'ISO27001相当のセキュリティ基準に準拠し、データの暗号化、アクセス制御、定期的な脆弱性診断を実施しています。必要に応じてNDA締結や、お客様のセキュリティポリシーに準拠した開発も可能です。',
  },
  {
    question: '保守・運用サービスはありますか？',
    answer: '24時間365日の監視体制から、月次メンテナンスまで、お客様のニーズに応じた保守・運用サービスを提供しています。SLA（サービスレベル契約）の締結も可能です。',
  },
  {
    question: '概算費用を教えてもらえますか？',
    answer: '無料でお見積もりいたします。プロジェクトの規模や要件により異なりますが、小規模案件は50万円〜、中規模案件は300万円〜、大規模案件は1000万円〜が目安となります。まずはお気軽にご相談ください。',
  },
  {
    question: '開発期間はどれくらいかかりますか？',
    answer: 'プロトタイプは最短1週間、MVPは1ヶ月〜、本格的なシステム開発は3ヶ月〜が目安です。アジャイル開発により、段階的にリリースしながら改善していくことも可能です。',
  },
]

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            よくあるご質問
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}