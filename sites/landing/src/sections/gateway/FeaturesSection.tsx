import { motion } from 'framer-motion'
import { Server, Users, LayoutDashboard, Package, Shield, Gauge, GitBranch, Key } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'API Gateway',
    description: 'Envoy Gateway 기반 Kubernetes Native API Gateway. HTTPRoute, Backend, Policy를 선언적으로 관리합니다.',
    items: [
      'Envoy Gateway 기반',
      'Gateway API 표준',
      'HTTPRoute / Backend 관리',
      '환경별 독립 도메인',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: LayoutDashboard,
    title: 'Developer Portal',
    description: '화이트라벨 개발자 포털을 자동으로 생성합니다. API 문서, Try-it, 셀프서비스 온보딩을 제공합니다.',
    items: [
      '화이트라벨 포털',
      'OpenAPI 문서 자동 생성',
      'Try-it 기능',
      '셀프서비스 온보딩',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'B2B Customer를 등록하고 Subscription을 관리합니다. Consumer와 Credential 발급을 자동화합니다.',
    items: [
      'Customer 등록/관리',
      'Subscription 워크플로우',
      'Consumer/Credential 발급',
      '사용량 대시보드',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Package,
    title: 'Product & Plan',
    description: 'API를 Product로 상품화하고 Plan을 구성합니다. Rate Limit, Quota, 환경별 인증 모드를 설정합니다.',
    items: [
      'Product 상품화',
      'Plan 구성 (Free/Pro)',
      'Rate Limit / Quota',
      '환경별 인증 모드',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
]

const additionalFeatures = [
  {
    icon: Shield,
    title: '멀티 인증',
    description: 'API Key, OIDC, JWT 등 다양한 인증 방식을 환경별로 독립 운영',
  },
  {
    icon: Gauge,
    title: 'Rate Limiting',
    description: 'Plan별 Rate Limit과 Quota를 Envoy RateLimitPolicy로 강제',
  },
  {
    icon: GitBranch,
    title: 'GitOps 배포',
    description: 'Agent 기반 Desired State 동기화. Drift 감지와 롤백 지원',
  },
  {
    icon: Key,
    title: 'Credential 관리',
    description: 'API Key 발급, 회전, 폐기. OIDC Client 자동 생성',
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

export function FeaturesSection() {
  return (
    <section className="px-6 py-24 bg-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            4가지 핵심 모듈
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            API Gateway부터 Customer Management까지, B2B API 운영에 필요한 모든 것
          </p>
        </div>

        {/* Main Features */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className="relative rounded-2xl border-2 border-slate-200 bg-white p-8 hover:shadow-xl transition-shadow"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6">{feature.description}</p>

                {/* Items */}
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {additionalFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300 transition-colors"
              >
                <Icon className="h-6 w-6 text-blue-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
