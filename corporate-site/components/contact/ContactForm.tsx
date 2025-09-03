'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    consultType: '',
    budget: '',
    timeline: '',
    message: '',
    agreement: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // ここで実際のフォーム送信処理を実装
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('お問い合わせありがとうございます。1営業日以内にご連絡いたします。')
    setIsSubmitting(false)
    
    // フォームをリセット
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      consultType: '',
      budget: '',
      timeline: '',
      message: '',
      agreement: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            会社名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label htmlFor="consultType" className="block text-sm font-medium text-gray-700 mb-2">
            相談区分 <span className="text-red-500">*</span>
          </label>
          <select
            id="consultType"
            name="consultType"
            required
            value={formData.consultType}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="">選択してください</option>
            <option value="new">新規開発</option>
            <option value="improvement">既存システム改善</option>
            <option value="consultation">技術相談</option>
            <option value="estimate">お見積もり</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            予算感
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="">選択してください</option>
            <option value="under-50">〜50万円</option>
            <option value="50-100">50〜100万円</option>
            <option value="100-300">100〜300万円</option>
            <option value="300-500">300〜500万円</option>
            <option value="500-1000">500〜1000万円</option>
            <option value="over-1000">1000万円〜</option>
            <option value="undecided">未定</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
            希望時期
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            placeholder="例：3ヶ月以内、来年4月まで"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            ご相談内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="プロジェクトの背景、解決したい課題、実現したいことなどをお聞かせください"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreement"
              required
              checked={formData.agreement}
              onChange={handleChange}
              className="mt-1"
            />
            <span className="text-sm text-gray-700">
              <a href="/legal/privacy" className="text-primary-600 hover:underline">
                プライバシーポリシー
              </a>
              に同意します <span className="text-red-500">*</span>
            </span>
          </label>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            '送信中...'
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              送信する
            </>
          )}
        </button>
      </div>
    </form>
  )
}