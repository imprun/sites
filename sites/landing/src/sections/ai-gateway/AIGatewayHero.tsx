import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit } from 'lucide-react'

export function AIGatewayHero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-purple-500/20 rounded-2xl border border-purple-400/30"
          >
            <BrainCircuit className="h-12 w-12 text-purple-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
          >
            AI Gateway
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              멀티 LLM 통합
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg leading-8 text-purple-100"
          >
            여러 AI 모델을 하나의 OpenAI 호환 API로 통합 관리합니다.
            <br />
            비용 최적화, 응답 캐싱, 폴백을 자동으로 처리합니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="https://console.imprun.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-purple-400 transition-colors"
            >
              무료로 시작하기
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://docs.imprun.dev/ai-gateway"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur px-6 py-3 text-base font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              문서 보기
            </a>
          </motion.div>

          {/* Supported providers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            {['OpenAI', 'Anthropic', 'Google AI', 'Local LLM'].map((provider) => (
              <div
                key={provider}
                className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm text-white font-medium border border-white/20"
              >
                {provider}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
