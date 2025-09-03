import { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'お問い合わせ | TechSolutions',
  description: 'お気軽にご相談ください。専門スタッフが対応いたします。',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600">
              お気軽にご相談ください。
              <br />
              1営業日以内に担当者よりご連絡いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  お問い合わせ方法
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">メール</p>
                      <p className="text-sm text-gray-600">info@techsolutions.jp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">電話</p>
                      <p className="text-sm text-gray-600">03-1234-5678</p>
                      <p className="text-xs text-gray-500 mt-1">
                        受付時間: 平日 9:00-18:00
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">所在地</p>
                      <p className="text-sm text-gray-600">
                        〒150-0001
                        <br />
                        東京都渋谷区神宮前1-1-1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  よくあるご相談内容
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 既存システムのAI導入</li>
                  <li>• LINEミニアプリ開発</li>
                  <li>• 業務効率化のご相談</li>
                  <li>• 技術選定のアドバイス</li>
                  <li>• 概算お見積もり</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}