import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Building2 } from 'lucide-react'

const useCases = [
  {
    icon: Lightbulb,
    title: 'Startup: 빠른 MVP 구축',
    description: '아이디어를 48시간 안에 프로덕션으로',
    scenario: 'TODO 앱 백엔드를 5분만에 배포하고, 바로 모바일 앱과 연동',
    benefits: [
      '인프라 설정 불필요',
      'dev → prod 즉시 승급',
      '월 $50로 시작',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Scale-up: 멀티 환경 관리',
    description: '팀이 커질수록 더 효율적으로',
    scenario: '5명 팀이 dev/staging/prod를 독립 관리, 클라이언트 앱마다 API Key 발급',
    benefits: [
      'Environment별 독립 배포',
      'ClientApp별 API Key 관리',
      'Promotion Pipeline 자동화',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'Enterprise: AI 통합 및 보안',
    description: '엔터프라이즈급 AI 인프라',
    scenario: '사내 AI 챗봇에 10개 LLM을 통합하고, 비용을 실시간 추적',
    benefits: [
      '여러 LLM 비용 최적화',
      'JWT + Role 기반 접근 제어',
      'Kubernetes 자체 호스팅',
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
    <section id="use-cases" className="px-6 py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            당신의 단계에 맞는 솔루션
          </h2>
          <p className="text-lg text-slate-600">
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
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
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
