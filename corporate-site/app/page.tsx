import { HeroSection } from '@/components/home/HeroSection'
import { AchievementsSection } from '@/components/home/AchievementsSection'
import { DifferentiationSection } from '@/components/home/DifferentiationSection'
import { ServiceAreaSection } from '@/components/home/ServiceAreaSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <DifferentiationSection />
      <ServiceAreaSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}
