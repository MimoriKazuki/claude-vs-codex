import { services } from '@/content/services'
import { ServicesTabs } from '@/components/ServicesTabs'

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Services</h1>
      <p className="text-white/80 mt-2">カテゴリ別に課題→解決パターンを提示します。</p>
      <div className="mt-6">
        <ServicesTabs services={services} />
      </div>
    </div>
  )
}
