import { motion } from 'framer-motion'
import { useState } from 'react'
import { Globe, ArrowRight, Check, Layers, RefreshCw, Shield } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: '멀티 프로바이더',
    description: 'Apify, ScrapingBee, Bright Data 등 여러 스크래핑 서비스를 통합',
  },
  {
    icon: Globe,
    title: '통합 API',
    description: '하나의 API로 모든 프로바이더에 접근',
  },
  {
    icon: RefreshCw,
    title: '자동 로테이션',
    description: '프로바이더별 할당량 관리와 자동 로테이션으로 안정적인 스크래핑',
  },
  {
    icon: Shield,
    title: '폴백 지원',
    description: '프로바이더 장애 시 자동으로 백업 서비스로 전환',
  },
]

export function ComingSoonSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 실제 구독 처리
    setSubmitted(true)
  }

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 lg:px-8 lg:py-32 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
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
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-teal-500/20 backdrop-blur rounded-full border border-teal-400/30"
          >
            <span className="text-teal-300 font-semibold">Coming Soon</span>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-4 bg-teal-500/20 rounded-2xl border border-teal-400/30"
          >
            <Globe className="h-12 w-12 text-teal-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
          >
            Open Scraping
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Gateway
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-lg leading-8 text-slate-300"
          >
            여러 스크래핑 프로바이더를 통합하여 단일 API로 제공합니다.
            <br />
            자동 로테이션과 폴백으로 안정적인 웹 스크래핑을 지원합니다.
          </motion.p>

          {/* Email Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-md"
          >
            {submitted ? (
              <div className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500/20 backdrop-blur rounded-xl border border-green-400/30">
                <Check className="h-5 w-5 text-green-400" />
                <span className="text-green-300 font-medium">
                  감사합니다! 출시 시 알려드리겠습니다.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력하세요"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-colors flex items-center gap-2"
                >
                  알림 받기
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10"
                >
                  <Icon className="h-8 w-8 text-teal-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-300/70">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </motion.div>

          {/* Providers preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-sm text-slate-400 mb-4">지원 예정 프로바이더</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Apify', 'ScrapingBee', 'Bright Data', 'Crawlee', 'Playwright'].map((provider) => (
                <div
                  key={provider}
                  className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm text-white font-medium border border-white/20"
                >
                  {provider}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
