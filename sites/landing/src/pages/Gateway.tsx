import { GatewayHero } from '../sections/gateway/GatewayHero'
import { FeaturesSection } from '../sections/gateway/FeaturesSection'
import { ArchitectureSection } from '../sections/gateway/ArchitectureSection'
import { PricingSection } from '../sections/gateway/PricingSection'
import { CTASection } from '../sections/home/CTASection'

export function Gateway() {
  return (
    <>
      <GatewayHero />
      <FeaturesSection />
      <ArchitectureSection />
      <PricingSection />
      <CTASection />
    </>
  )
}
