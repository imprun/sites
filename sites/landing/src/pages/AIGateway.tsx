import { AIGatewayHero } from '../sections/ai-gateway/AIGatewayHero'
import { FeaturesSection } from '../sections/ai-gateway/FeaturesSection'
import { ProvidersSection } from '../sections/ai-gateway/ProvidersSection'
import { UseCasesSection } from '../sections/ai-gateway/UseCasesSection'
import { CTASection } from '../sections/home/CTASection'

export function AIGateway() {
  return (
    <>
      <AIGatewayHero />
      <FeaturesSection />
      <ProvidersSection />
      <UseCasesSection />
      <CTASection />
    </>
  )
}
