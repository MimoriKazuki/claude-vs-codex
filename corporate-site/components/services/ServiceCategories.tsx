'use client'

import { useState } from 'react'
import { ChevronRight, Globe, Smartphone, Bot, MessageSquare, Zap } from 'lucide-react'
import Link from 'next/link'

const serviceDetails = {
  web: {
    icon: <Globe className="w-12 h-12" />,
    title: 'Web開発',
    description: 'Next.js/React/Vue.jsによる高速・高品質なWebアプリケーション開発',
    challenges: [
      'ページの表示速度が遅く、離脱率が高い',
      'モバイル対応が不十分で、スマホユーザーの体験が悪い',
      'SEO対策が不足しており、検索順位が上がらない',
    ],
    solutions: [
      'Next.jsのSSR/SSG活用で表示速度を大幅改善',
      'レスポンシブデザインとPWA化でモバイルUX向上',
      '構造化データとCore Web Vitals最適化でSEO強化',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    relatedWorks: ['大手新聞社のフロント実装'],
  },
  mobile: {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'モバイルアプリ',
    description: 'React Native/Flutterによるクロスプラットフォームアプリ開発',
    challenges: [
      'iOS/Android両対応のコストが高い',
      'ネイティブアプリの開発・保守が複雑',
      'アプリのパフォーマンスが期待値に達しない',
    ],
    solutions: [
      'クロスプラットフォーム開発で開発コスト50%削減',
      'コードベース統一により保守性を大幅向上',
      'ネイティブモジュール活用で高速動作を実現',
    ],
    technologies: ['React Native', 'Flutter', 'Expo', 'Firebase'],
    relatedWorks: ['推し活アプリ開発'],
  },
  ai: {
    icon: <Bot className="w-12 h-12" />,
    title: 'AI開発',
    description: 'OpenAI API活用による業務効率化・自動化ソリューション',
    challenges: [
      'APIコストが想定を大幅に超過',
      'AI導入したが精度が低く実用に耐えない',
      '複雑な業務フローへのAI組み込みが困難',
    ],
    solutions: [
      'トークン最適化でコスト65%削減を実現',
      'ファインチューニングとプロンプト最適化で精度向上',
      '段階的導入と継続的改善で確実な成果創出',
    ],
    technologies: ['OpenAI API', 'Python', 'LangChain', 'Vector DB'],
    relatedWorks: ['AI面接官システム', 'OpenAI APIコスト最適化'],
  },
  line: {
    icon: <MessageSquare className="w-12 h-12" />,
    title: 'LINEミニアプリ',
    description: 'LINE上で動作する業務アプリケーションの開発・運用',
    challenges: [
      'ユーザーに新しいアプリをダウンロードしてもらえない',
      'メールやSMSの開封率が低い',
      '予約や問い合わせの対応に人手がかかる',
    ],
    solutions: [
      'LINE上で完結するためダウンロード不要',
      'LINEの高い開封率（60%以上）を活用',
      'チャットボットと自動応答で24時間対応',
    ],
    technologies: ['LINE Messaging API', 'LIFF', 'Node.js', 'AWS Lambda'],
    relatedWorks: ['歯科医院向けLINE CRM'],
  },
  dx: {
    icon: <Zap className="w-12 h-12" />,
    title: '業務DX',
    description: 'kintone/Salesforceなど業務システムの導入・カスタマイズ',
    challenges: [
      'Excelでの業務管理が限界に達している',
      '部門間の情報共有がスムーズでない',
      'レポート作成に多大な時間を要する',
    ],
    solutions: [
      'クラウド型業務システムで情報を一元管理',
      'リアルタイムでの情報共有と権限管理',
      '自動レポート生成で工数90%削減',
    ],
    technologies: ['kintone', 'Salesforce', 'Google Apps Script', 'Power Automate'],
    relatedWorks: ['kintone業務アプリ導入'],
  },
}

export function ServiceCategories() {
  const [activeService, setActiveService] = useState<string>('web')
  const service = serviceDetails[activeService as keyof typeof serviceDetails]

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">
                サービスカテゴリ
              </h3>
              <nav className="space-y-2">
                {Object.entries(serviceDetails).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setActiveService(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeService === key
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{value.icon.props.children}</span>
                      <span>{value.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                {service.icon}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">よくある課題</h3>
                  <ul className="space-y-3">
                    {service.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">×</span>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">解決策</h3>
                  <ul className="space-y-3">
                    {service.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">使用技術</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/works"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  関連実績を見る
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}