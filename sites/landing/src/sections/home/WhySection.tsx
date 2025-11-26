import { motion } from 'framer-motion'
import { Boxes, Shield, Layers, Globe, Zap, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Boxes,
    title: 'Kubernetes Native',
    description: 'Envoy Gateway + Gateway API 표준 기반. CRD로 인프라를 선언적으로 관리합니다.',
    highlight: 'Envoy Gateway',
  },
  {
    icon: Layers,
    title: '환경별 독립 운영',
    description: 'dev/staging/prod 환경을 완전히 분리하여 각각 독립적인 정책과 인증을 운영합니다.',
    highlight: 'dev → staging → prod',
  },
  {
    icon: Shield,
    title: 'B2B Ready',
    description: 'Customer, Subscription, Consumer, Credential 계층으로 B2B 운영에 최적화되어 있습니다.',
    highlight: 'Customer Management',
  },
  {
    icon: Globe,
    title: 'Self-hosted 옵션',
    description: 'SaaS로 사용하거나, 기업 내부 Kubernetes 클러스터에 직접 설치할 수 있습니다.',
    highlight: 'On-premise 지원',
  },
  {
    icon: Zap,
    title: 'GitOps 배포',
    description: 'Agent 기반으로 Desired State를 CRD로 자동 동기화합니다. Drift 감지와 롤백을 지원합니다.',
    highlight: 'Desired State Sync',
  },
  {
    icon: Heart,
    title: '한국어 우선 지원',
    description: '한국어 문서, 한국 시간대 지원, 한국 개발 문화를 이해하는 플랫폼입니다.',
    highlight: 'Korean First',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function WhySection() {
  return (
    <section className="px-6 py-24 bg-slate-50 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Why imprun?
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            왜 imprun인가?
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            대기업 플랫폼의 복잡함 없이, 필요한 모든 기능을 제공합니다
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={item}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Highlight Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                    {reason.highlight}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
