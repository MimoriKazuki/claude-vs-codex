import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | TechSolutions',
  description: 'TechSolutionsのプライバシーポリシー',
}

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            プライバシーポリシー
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              TechSolutions株式会社（以下「当社」）は、お客様の個人情報保護の重要性を認識し、以下のプライバシーポリシーに従い、適切な取り扱いと保護に努めます。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. 個人情報の収集
            </h2>
            <p className="text-gray-700 mb-4">
              当社は、以下の場合に個人情報を収集することがあります：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>お問い合わせフォームからのご連絡時</li>
              <li>サービスのご利用登録時</li>
              <li>セミナー・イベントへのお申し込み時</li>
              <li>採用応募時</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. 個人情報の利用目的
            </h2>
            <p className="text-gray-700 mb-4">
              収集した個人情報は、以下の目的で利用いたします：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>お問い合わせへの回答</li>
              <li>サービスの提供および改善</li>
              <li>新サービスや更新情報のご案内</li>
              <li>統計データの作成（個人を特定できない形式）</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. 個人情報の第三者提供
            </h2>
            <p className="text-gray-700 mb-6">
              当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. 個人情報の安全管理
            </h2>
            <p className="text-gray-700 mb-6">
              当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために、適切な技術的・組織的措置を講じます。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Cookie（クッキー）について
            </h2>
            <p className="text-gray-700 mb-6">
              当サイトでは、サービス向上のためCookieを使用しています。Cookieは、お客様のコンピュータを識別することはできますが、個人を特定することはできません。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. お問い合わせ
            </h2>
            <p className="text-gray-700 mb-6">
              個人情報の取り扱いに関するお問い合わせは、以下の連絡先までお願いいたします：
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                TechSolutions株式会社<br />
                個人情報保護管理者<br />
                Email: privacy@techsolutions.jp<br />
                電話: 03-1234-5678
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                制定日：2020年4月1日<br />
                最終改訂日：2024年1月1日
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}