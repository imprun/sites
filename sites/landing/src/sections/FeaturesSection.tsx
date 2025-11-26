import { motion } from 'framer-motion'
import { Zap, Puzzle, Bot, Code2, Shield, Gauge } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'API를 개발하고',
    description:
      '코드만 작성하면 즉시 API 엔드포인트가 됩니다. 배포, 인프라, 설정은 신경 쓸 필요 없습니다.',
    gradient: 'from-blue-500 to-cyan-500',
    benefits: [
      '코드 작성 즉시 API 엔드포인트 생성',
      'dev/staging/prod 환경 자동 관리',
      'CORS, 인증, Rate Limit 플러그인 제공',
    ],
  },
  {
    icon: Puzzle,
    title: 'AI를 통합하고',
    description:
      '여러 AI 모델을 하나의 API로 관리합니다. 비용 최적화와 응답 캐싱으로 효율을 높입니다.',
    gradient: 'from-orange-500 to-red-500',
    benefits: [
      'OpenAI, Anthropic, Local LLM 통합',
      'OpenAI 호환 Chat API 제공',
      '비용 추적 및 최적화',
    ],
  },
  {
    icon: Bot,
    title: 'LLM에게 도구로 제공하세요',
    description:
      '개발한 API를 MCP로 전환하여 AI 에이전트가 직접 호출할 수 있게 만듭니다.',
    gradient: 'from-purple-500 to-pink-500',
    benefits: [
      'CloudFunction → MCP Tool 자동 변환',
      'AI 에이전트가 도구로 사용',
      'Tool Calling 자동 처리',
    ],
  },
]

const additionalFeatures = [
  {
    icon: Code2,
    title: 'TypeScript 지원',
    description: '완벽한 타입 안정성과 자동완성을 제공합니다.',
  },
  {
    icon: Shield,
    title: '보안',
    description: 'JWT 인증, API Key, Role 기반 접근 제어를 기본 제공합니다.',
  },
  {
    icon: Gauge,
    title: '성능',
    description: '3ms 평균 응답 시간, 50ms Cold Start를 자랑합니다.',
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
    <section className="px-6 py-24 bg-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            3 in 1 플랫폼
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            API 개발부터 AI 통합, MCP Tool 제공까지 모든 것을 하나로
          </p>
        </div>

        {/* Main 3 Features */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-24"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={item}
                className="relative rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6">{feature.description}</p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{benefit}</span>
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
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
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
