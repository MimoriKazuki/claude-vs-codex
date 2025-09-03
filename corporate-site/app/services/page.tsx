import { Metadata } from 'next'
import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceCategories } from '@/components/services/ServiceCategories'
import { ServiceFAQ } from '@/components/services/ServiceFAQ'

export const metadata: Metadata = {
  title: 'サービス | TechSolutions',
  description: 'Web開発、モバイルアプリ、AI開発、LINEミニアプリ、業務DXなど、幅広い技術領域でソリューションを提供',
}

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceCategories />
      <ServiceFAQ />
    </>
  )
}