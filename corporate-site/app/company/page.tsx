import { Metadata } from 'next'
import { MapPin, Users, Calendar, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: '会社概要 | TechSolutions',
  description: 'TechSolutionsの会社概要、ビジョン、メンバー情報',
}

const companyInfo = {
  name: 'TechSolutions株式会社',
  established: '2020年4月',
  capital: '1,000万円',
  employees: '25名',
  ceo: '山田 太郎',
  address: '〒150-0001 東京都渋谷区神宮前1-1-1',
  email: 'info@techsolutions.jp',
  phone: '03-1234-5678',
}

const milestones = [
  { year: '2020', event: '会社設立' },
  { year: '2021', event: 'AI開発事業を開始' },
  { year: '2022', event: 'LINE公式パートナー認定' },
  { year: '2023', event: '累計プロジェクト100件突破' },
  { year: '2024', event: '海外展開を開始' },
]

const members = [
  {
    name: '山田 太郎',
    role: 'CEO / エンジニア',
    description: '大手IT企業で10年の開発経験。AI・機械学習のスペシャリスト。',
  },
  {
    name: '佐藤 花子',
    role: 'CTO / リードエンジニア',
    description: 'フルスタックエンジニア。Web/モバイル開発のエキスパート。',
  },
  {
    name: '鈴木 一郎',
    role: 'デザインディレクター',
    description: 'UX/UIデザイナー。ユーザー中心設計のプロフェッショナル。',
  },
]

export default function CompanyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              会社概要
            </h1>
            <p className="text-xl text-gray-600">
              技術の力で、ビジネスと社会に新しい価値を創造します
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">企業情報</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm font-medium text-gray-600">会社名</dt>
                  <dd className="mt-1 text-lg text-gray-900">{companyInfo.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">設立</dt>
                  <dd className="mt-1 text-lg text-gray-900">{companyInfo.established}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">資本金</dt>
                  <dd className="mt-1 text-lg text-gray-900">{companyInfo.capital}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">従業員数</dt>
                  <dd className="mt-1 text-lg text-gray-900">{companyInfo.employees}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">代表取締役</dt>
                  <dd className="mt-1 text-lg text-gray-900">{companyInfo.ceo}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">所在地</dt>
                  <dd className="mt-1 text-lg text-gray-900">{companyInfo.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">メール</dt>
                  <dd className="mt-1 text-lg text-gray-900">{companyInfo.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">電話番号</dt>
                  <dd className="mt-1 text-lg text-gray-900">{companyInfo.phone}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">沿革</h2>
            
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-lg font-semibold text-primary-600">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 bg-primary-600 rounded-full"></div>
                  <div className="flex-grow">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">メンバー</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}