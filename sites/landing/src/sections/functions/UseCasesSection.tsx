import { motion } from 'framer-motion'
import { Rocket, Webhook, Cog, Smartphone } from 'lucide-react'

const useCases = [
  {
    icon: Rocket,
    title: '빠른 MVP 구축',
    description: '아이디어를 48시간 안에 프로덕션으로',
    example: 'TODO 앱 백엔드를 5분 만에 배포하고, 바로 모바일 앱과 연동',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Webhook,
    title: 'Webhook 핸들러',
    description: '외부 서비스의 Webhook을 처리',
    example: 'Stripe 결제 Webhook, GitHub 이벤트, Slack 명령어 처리',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cog,
    title: '자동화 워크플로우',
    description: '정기 작업과 백그라운드 처리',
    example: '매일 아침 리포트 생성, 데이터 동기화, 알림 발송',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: '모바일 백엔드',
    description: '앱을 위한 API 서버',
    example: '사용자 인증, 데이터 저장, 푸시 알림 API',
    color: 'from-orange-500 to-red-500',
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

export function UseCasesSection() {
  return (
    <section className="px-6 py-24 bg-slate-50 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-green-600">
            Use Cases
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            무엇이든 만들 수 있습니다
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Cloud Functions로 구축할 수 있는 다양한 사용 사례
          </p>
        </div>

        {/* Use Cases Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.title}
                variants={item}
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-green-300 hover:shadow-xl transition-all"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br ${useCase.color} p-3`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {useCase.description}
                </p>

                {/* Example */}
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-700 font-medium">
                    예시: {useCase.example}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
