import { motion } from 'framer-motion'
import { ArrowRight, Rocket } from 'lucide-react'

export function CTASection() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-blue-600 to-purple-700 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            지금 시작하세요
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            무료로 시작하고, 필요에 따라 확장하세요.
            <br />
            5분 안에 첫 API를 배포할 수 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#" // TODO: https://console.imprun.dev
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              무료로 시작하기
              <Rocket className="h-5 w-5" />
            </a>
            <a
              href="https://docs.imprun.dev"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              문서 보기
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 text-sm text-blue-200">
            신용카드 불필요 • 무료 티어 제공 • 언제든 취소 가능
          </p>
        </motion.div>
      </div>
    </section>
  )
}
