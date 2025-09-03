export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8 text-sm text-white/60">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Studio</p>
          <nav className="flex gap-4">
            <a className="hover:text-white" href="/legal/privacy">プライバシーポリシー</a>
            <a className="hover:text-white" href="/legal/transmission">外部送信ポリシー</a>
            <a className="hover:text-white" href="/legal/terms">利用規約</a>
            <a className="hover:text-white" href="/legal/security">セキュリティ</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

