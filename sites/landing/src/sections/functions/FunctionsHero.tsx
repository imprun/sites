import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'

export function FunctionsHero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32 bg-gradient-to-br from-green-900 via-emerald-800 to-slate-900">
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
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-green-500/20 rounded-2xl border border-green-400/30"
          >
            <Code2 className="h-12 w-12 text-green-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
          >
            Code to API
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              in Seconds
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg leading-8 text-green-100"
          >
            함수를 작성하면 즉시 API 엔드포인트가 됩니다.
            <br />
            배포, 인프라, 설정 없이 코드에만 집중하세요.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#" // TODO: https://console.imprun.dev
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-400 transition-colors"
            >
              무료로 시작하기
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://docs.imprun.dev/functions"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur px-6 py-3 text-base font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              문서 보기
            </a>
          </motion.div>

          {/* Key metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-3xl"
          >
            {[
              { value: '3ms', label: '평균 응답' },
              { value: '50ms', label: 'Cold Start' },
              { value: 'Zero', label: 'Config' },
              { value: 'MCP', label: 'Bridge' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-green-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
