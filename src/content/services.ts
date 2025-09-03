import type { QA } from '@/components/FAQ'

export type Service = {
  category: string
  problems: string[]
  solutions: string[]
  diagram?: string
  faq?: QA[]
  relatedTags?: string[]
}

export const services: Service[] = [
  {
    category: 'AI',
    problems: ['コストの読めないAPI運用', 'PoC止まりで本番化できない'],
    solutions: ['トークン抑制設計', '運用設計を含む高速PoC→本番'],
    diagram: '/images/diagrams/ai-architecture.png',
    faq: [
      { q: 'セキュリティは？', a: 'CSP/監査ログ/権限設計に準拠。PIIは保存しません。' },
      { q: '概算の考え方？', a: '要件/現場の制約から、段階見積もりで提示します。' },
    ],
    relatedTags: ['AI', 'OpenAI'],
  },
  {
    category: 'LINE miniアプリ',
    problems: ['店舗/現場オペが分散', 'CRMと連携できていない'],
    solutions: ['LIFF/ミニアプリ設計', 'CRM/MA連携と運用ハンドブック'],
    relatedTags: ['LINE'],
  },
]

