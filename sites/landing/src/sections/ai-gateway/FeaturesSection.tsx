import { motion } from 'framer-motion'
import { Layers, DollarSign, Zap, Shield, BarChart3, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'OpenAI 호환 API',
    description: '모든 LLM을 OpenAI API 형식으로 통합합니다. 기존 코드 변경 없이 프로바이더를 전환할 수 있습니다.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: DollarSign,
    title: '비용 최적화',
    description: '요청별 토큰 사용량과 비용을 추적합니다. 프로바이더별 비용을 비교하고 최적의 모델을 선택하세요.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: '응답 캐싱',
    description: '동일한 프롬프트에 대한 응답을 캐싱하여 비용과 지연 시간을 줄입니다. Semantic 캐싱도 지원합니다.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: RefreshCw,
    title: '자동 폴백',
    description: '프로바이더 장애 시 자동으로 백업 모델로 전환합니다. 서비스 가용성을 높입니다.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: '콘텐츠 필터링',
    description: '유해 콘텐츠를 자동으로 감지하고 필터링합니다. 프롬프트 인젝션 공격도 방어합니다.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: '사용량 분석',
    description: '모델별, 사용자별, 시간별 사용량을 분석합니다. 비용 예측과 예산 알림을 제공합니다.',
    gradient: 'from-indigo-500 to-purple-500',
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
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            AI 인프라를 단순화하세요
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            복잡한 AI 인프라 없이, 하나의 API로 모든 LLM을 관리합니다
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
