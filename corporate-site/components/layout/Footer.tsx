import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TechSolutions</h3>
            <p className="text-gray-400 mb-4">
              生成AI × LINE × 現場DXで"動く"まで最短に。
              <br />
              実績ベースの課題解決を、一気通貫で。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li><Link href="/services#web" className="text-gray-400 hover:text-white transition-colors">Web開発</Link></li>
              <li><Link href="/services#mobile" className="text-gray-400 hover:text-white transition-colors">モバイルアプリ</Link></li>
              <li><Link href="/services#ai" className="text-gray-400 hover:text-white transition-colors">AI開発</Link></li>
              <li><Link href="/services#line" className="text-gray-400 hover:text-white transition-colors">LINEミニアプリ</Link></li>
              <li><Link href="/services#dx" className="text-gray-400 hover:text-white transition-colors">業務DX</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li><Link href="/company" className="text-gray-400 hover:text-white transition-colors">会社概要</Link></li>
              <li><Link href="/works" className="text-gray-400 hover:text-white transition-colors">実績</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">利用規約</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 TechSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}