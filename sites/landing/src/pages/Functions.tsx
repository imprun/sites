import { FunctionsHero } from '../sections/functions/FunctionsHero'
import { FeaturesSection } from '../sections/functions/FeaturesSection'
import { CodeExampleSection } from '../sections/functions/CodeExampleSection'
import { UseCasesSection } from '../sections/functions/UseCasesSection'
import { CTASection } from '../sections/home/CTASection'

export function Functions() {
  return (
    <>
      <FunctionsHero />
      <FeaturesSection />
      <CodeExampleSection />
      <UseCasesSection />
      <CTASection />
    </>
  )
}
