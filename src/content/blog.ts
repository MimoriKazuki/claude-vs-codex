export type Blog = {
  slug: string
  title: string
  category: string
  author: string
  body: string
  relatedWorks?: string[]
}

export const blogs: Blog[] = [
  {
    slug: 'openai-cost-optimization',
    title: 'OpenAI APIのコスト最適化メモ',
    category: '実装TIPS',
    author: 'Team',
    body: 'トークン抑制設計、キャッシュ、要約粒度の最適化など。',
    relatedWorks: ['ai-line-first-interview'],
  },
]

