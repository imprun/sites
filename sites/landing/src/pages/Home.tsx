import { HeroSection } from '../sections/home/HeroSection'
import { ProductsSection } from '../sections/home/ProductsSection'
import { WhySection } from '../sections/home/WhySection'
import { UseCasesSection } from '../sections/home/UseCasesSection'
import { CTASection } from '../sections/home/CTASection'

export function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <WhySection />
      <UseCasesSection />
      <CTASection />
    </>
  )
}
