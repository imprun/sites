import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg shadow-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              B2B API Gateway Platform
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl"
          >
            API를 제품으로,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              제품을 수익으로
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg leading-8 text-slate-600"
          >
            기존 API를 상품화하고, 고객을 관리하고, DevPortal을 제공하세요.
            <br />
            Kubernetes Native 기반의 모던 API Gateway 플랫폼입니다.
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
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
            >
              무료로 시작하기
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://docs.imprun.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-200 transition-colors"
            >
              문서 보기
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-4xl"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-xl shadow-blue-500/10"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                4
              </div>
              <div className="text-sm text-slate-600 mt-2">Products</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-xl shadow-purple-500/10"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                K8s
              </div>
              <div className="text-sm text-slate-600 mt-2">Native</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-xl shadow-green-500/10"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                B2B
              </div>
              <div className="text-sm text-slate-600 mt-2">Ready</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-xl shadow-orange-500/10"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Self
              </div>
              <div className="text-sm text-slate-600 mt-2">Hosted</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
