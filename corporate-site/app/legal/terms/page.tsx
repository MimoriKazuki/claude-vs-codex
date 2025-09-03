import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | TechSolutions',
  description: 'TechSolutionsサービス利用規約',
}

export default function TermsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            利用規約
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              この利用規約（以下「本規約」）は、TechSolutions株式会社（以下「当社」）が提供するサービスの利用条件を定めるものです。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第1条（適用）
            </h2>
            <p className="text-gray-700 mb-6">
              本規約は、当社が提供するすべてのサービス（以下「本サービス」）の利用に関し、当社とお客様との間の権利義務関係を定めることを目的とし、お客様と当社との間の本サービスの利用に関わる一切の関係に適用されます。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第2条（定義）
            </h2>
            <p className="text-gray-700 mb-4">
              本規約において、以下の用語は次の意味を有するものとします：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>「本サービス」：当社が提供するシステム開発、コンサルティング、その他関連サービス</li>
              <li>「お客様」：本サービスを利用する法人または個人</li>
              <li>「成果物」：本サービスにより作成されるプログラム、ドキュメント等</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第3条（サービスの提供）
            </h2>
            <p className="text-gray-700 mb-6">
              当社は、お客様に対し、別途合意した内容に基づき本サービスを提供します。サービスの詳細、料金、納期等については、個別の契約書または発注書にて定めるものとします。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第4条（知的財産権）
            </h2>
            <p className="text-gray-700 mb-6">
              成果物に関する著作権その他の知的財産権は、別途定めがない限り、料金の完済をもってお客様に移転するものとします。ただし、当社が従前から保有していた知的財産権および汎用的な技術・ノウハウは除きます。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第5条（秘密保持）
            </h2>
            <p className="text-gray-700 mb-6">
              当社およびお客様は、本サービスの提供・利用にあたり知り得た相手方の秘密情報を、相手方の事前の書面による承諾なく第三者に開示または漏洩してはならないものとします。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第6条（保証および免責）
            </h2>
            <p className="text-gray-700 mb-6">
              当社は、本サービスを善良な管理者の注意をもって提供しますが、本サービスが特定の目的に適合することを保証するものではありません。当社の責任は、故意または重大な過失がある場合を除き、お客様が当社に支払った料金を上限とします。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第7条（禁止事項）
            </h2>
            <p className="text-gray-700 mb-4">
              お客様は、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>法令または公序良俗に違反する行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>本サービスの正常な運営を妨げる行為</li>
              <li>その他当社が不適切と判断する行為</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第8条（規約の変更）
            </h2>
            <p className="text-gray-700 mb-6">
              当社は、必要と判断した場合、お客様への事前通知により本規約を変更することができます。変更後の規約は、当社ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              第9条（準拠法および管轄）
            </h2>
            <p className="text-gray-700 mb-6">
              本規約は日本法に準拠し、本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>

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