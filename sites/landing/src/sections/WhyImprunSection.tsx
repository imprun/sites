import { motion } from 'framer-motion'
import { Zap, Heart, Users, Shield, Sparkles, Rocket } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: '개발자를 위한, 개발자에 의한',
    description: '복잡한 설정 없이 코드만으로 모든 것을 제어합니다. 마법이 아니라, 명확한 추상화입니다.',
    highlight: '5분이면 첫 API 배포',
  },
  {
    icon: Heart,
    title: '한국 개발자를 위한 플랫폼',
    description: '한국어 문서, 한국 시간대 지원, 한국 개발 문화를 이해하는 플랫폼입니다.',
    highlight: '한국어 우선 지원',
  },
  {
    icon: Users,
    title: '성장하는 팀을 위한 설계',
    description: '1인 개발자부터 50명 팀까지, 복잡도가 증가해도 관리는 단순합니다.',
    highlight: 'dev → staging → prod',
  },
  {
    icon: Shield,
    title: '투명한 가격, 숨겨진 비용 없음',
    description: '사용한 만큼만 정확히 과금됩니다. 예상치 못한 청구서는 없습니다.',
    highlight: '월 $50부터 시작',
  },
  {
    icon: Sparkles,
    title: 'AI 시대를 위한 준비',
    description: 'AI Gateway와 MCP 통합이 기본 제공됩니다. 별도 설정 없이 즉시 사용 가능합니다.',
    highlight: '3 in 1 플랫폼',
  },
  {
    icon: Rocket,
    title: '빠른 이터레이션',
    description: '아이디어에서 프로덕션까지 48시간. 빠르게 실험하고, 빠르게 배우세요.',
    highlight: '즉시 배포, 즉시 롤백',
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

export function WhyImprunSection() {
  return (
    <section id="why" className="px-6 py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            왜 imprun.dev인가?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6">
            지금 시작하고, 5분 안에 첫 API를 배포해보세요
          </p>
          <a
            href="https://portal.imprun.dev"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            무료로 시작하기
            <Rocket className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
