import { motion } from 'framer-motion'
import { Building2, Rocket, Factory } from 'lucide-react'

const useCases = [
  {
    icon: Building2,
    title: '기존 API를 가진 기업',
    description: 'API를 Product로 상품화하고 B2B 고객을 관리하세요',
    scenario: '내부 API를 외부 파트너에게 제공하고, 사용량 기반 과금을 적용',
    benefits: [
      'Product & Plan으로 상품화',
      'Customer Subscription 관리',
      'DevPortal 자동 생성',
      '사용량 모니터링',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: '스타트업',
    description: '빠르게 API 백엔드를 구축하고 AI를 통합하세요',
    scenario: 'MVP를 48시간 안에 배포하고, AI 기능을 손쉽게 추가',
    benefits: [
      'Cloud Functions로 빠른 개발',
      'AI Gateway로 LLM 통합',
      'MCP Bridge로 AI Tool 제공',
      '무료 티어로 시작',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Factory,
    title: '엔터프라이즈',
    description: '멀티테넌트 API 플랫폼을 안전하게 운영하세요',
    scenario: '여러 부서와 파트너사에 독립적인 API 환경을 제공',
    benefits: [
      '멀티테넌트 격리',
      'RBAC & OIDC 인증',
      'Self-hosted 설치',
      'SLA & 전담 지원',
    ],
    color: 'from-purple-500 to-pink-500',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function UseCasesSection() {
  return (
    <section className="px-6 py-24 bg-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Use Cases
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            당신의 단계에 맞는 솔루션
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            스타트업부터 엔터프라이즈까지, 성장 단계별 최적화된 사용 사례
          </p>
        </div>

        {/* Use Cases Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.title}
                variants={item}
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br ${useCase.color} p-3`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {useCase.description}
                </p>

                {/* Scenario */}
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-slate-700 italic">
                    "{useCase.scenario}"
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
