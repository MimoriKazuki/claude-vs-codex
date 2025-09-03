export type KPI = { label: string; value: string; direction?: 'up' | 'down' }
export type Work = {
  slug: string
  title: string
  summary: string
  industry: string
  techStack: string[]
  period?: string
  team?: { pm?: number; engineers?: number; designer?: number }
  kpi: KPI[]
  problems: string[]
  solutions: string[]
  results: string[]
  architecture?: string
  scope?: string
  images?: string[]
  tags: string[]
}

export const works: Work[] = [
  {
    slug: 'ai-line-first-interview',
    title: 'AI面接官（LINE上で一次対応を自動化）',
    summary: '担当者稼働を70%削減。面接一次対応を自動化。',
    industry: 'HR',
    techStack: ['Next.js', 'OpenAI API', 'LINE Messaging API'],
    period: '2024-02–2024-06',
    team: { pm: 1, engineers: 3, designer: 1 },
    kpi: [
      { label: '工数', value: '-70%', direction: 'down' },
      { label: '一次対応速度', value: '+200%', direction: 'up' },
    ],
    problems: ['応募増に伴う一次対応の遅延', '標準化されない対応品質'],
    solutions: ['LINE上に対話フロー構築', 'OpenAI×トークン抑制でコスト最適化'],
    results: ['候補者体験の改善', '担当者の夜間対応ゼロ'],
    architecture: 'Next.js + LINE Bot + Vercel',
    scope: '要件/設計/実装/運用',
    images: ['/images/works/next-hr/flow.png'],
    tags: ['AI', 'LINE', 'CostOptimization'],
  },
  {
    slug: 'vr-safety-training',
    title: 'VR危険体験研修（Unity/MetaQuest3）',
    summary: '現場教育向けVR。危険体験の安全なシミュレーション。',
    industry: '教育/製造',
    techStack: ['Unity', 'MetaQuest3'],
    kpi: [{ label: '事故発生率', value: '-30%', direction: 'down' }],
    problems: ['安全教育の定着', '現場負荷の高さ'],
    solutions: ['VR教材の開発', '操作ログによる習熟度可視化'],
    results: ['現場負荷削減', '教育効果の定量把握'],
    tags: ['VR', 'Training'],
  },
]

