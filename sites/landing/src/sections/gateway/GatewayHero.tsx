import { motion } from 'framer-motion'
import { ArrowRight, Server } from 'lucide-react'

export function GatewayHero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
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
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
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
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-blue-500/20 rounded-2xl border border-blue-400/30"
          >
            <Server className="h-12 w-12 text-blue-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
          >
            Modern API Gateway
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              for B2B
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg leading-8 text-blue-100"
          >
            API를 Product로 만들고, Customer를 관리하고, DevPortal을 제공하세요.
            <br />
            Envoy Gateway 기반 Kubernetes Native API Gateway 플랫폼입니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* TODO: Enable when console.imprun.dev is ready */}
            {/* <a
              href="https://console.imprun.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-400 transition-colors"
            >
              무료로 시작하기
              <ArrowRight className="h-5 w-5" />
            </a> */}
            <a
              href="https://docs.imprun.dev/gateway"
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
              { value: 'Envoy', label: 'Gateway 기반' },
              { value: 'K8s', label: 'Native' },
              { value: 'B2B', label: 'Ready' },
              { value: 'OIDC', label: '& API Key' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
