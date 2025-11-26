import { motion } from 'framer-motion'
import { Zap, Database, Globe, Shield, Layers, Bot } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Zero Config 배포',
    description: '코드만 작성하면 즉시 배포됩니다. 서버, 인프라, 설정을 신경 쓸 필요가 없습니다.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Database,
    title: '내장 데이터베이스',
    description: 'MongoDB 호환 데이터베이스가 기본 제공됩니다. ctx.db로 바로 접근하세요.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    title: '환경별 배포',
    description: 'dev, staging, prod 환경을 독립적으로 관리합니다. Promotion Pipeline을 지원합니다.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: '기본 보안',
    description: 'CORS, 인증, Rate Limit이 기본 제공됩니다. 플러그인으로 확장할 수 있습니다.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Layers,
    title: 'TypeScript 지원',
    description: '완벽한 타입 안정성과 자동완성을 제공합니다. ESM과 CommonJS 모두 지원합니다.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Bot,
    title: 'MCP Bridge',
    description: 'CloudFunction을 MCP Tool로 자동 변환합니다. AI 에이전트가 직접 호출할 수 있습니다.',
    gradient: 'from-pink-500 to-rose-500',
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
          <h2 className="text-base font-semibold leading-7 text-green-600">
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            개발자 경험에 집중
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            복잡한 인프라 없이, 코드만으로 모든 것을 제어하세요
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
