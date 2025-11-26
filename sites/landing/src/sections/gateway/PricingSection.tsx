import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Bell } from 'lucide-react'

const plans = [
  {
    name: 'Community',
    price: '무료',
    period: '',
    description: '오픈소스 Self-hosted',
    features: [
      '무제한 Gateways',
      '무제한 Products',
      '무제한 API calls',
      '모든 Environments 지원',
      'GitHub 커뮤니티 지원',
      'Apache 2.0 라이선스',
    ],
    highlighted: false,
  },
  {
    name: 'Cloud',
    price: 'TBD',
    period: '',
    description: '관리형 SaaS 서비스',
    features: [
      'Community 기능 전체 포함',
      '관리형 인프라',
      '자동 업데이트',
      '99.9% SLA',
      'DevPortal 호스팅',
      '이메일 + 채팅 지원',
    ],
    highlighted: true,
    badge: '준비 중',
  },
  {
    name: 'Enterprise',
    price: '문의',
    period: '',
    description: '대규모 조직을 위한 맞춤 솔루션',
    features: [
      'Cloud 기능 전체 포함',
      '전용 인프라 (Single-tenant)',
      '99.99% SLA',
      'SSO / SAML 통합',
      '감사 로그',
      '전담 기술 지원',
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 실제 구독 처리
    setSubmitted(true)
  }

  return (
    <section className="px-6 py-24 bg-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-700">2025년 정식 출시 예정</span>
          </div>
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Plans
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            모든 규모에 맞는 플랜
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            오픈소스로 시작하고, 필요에 따라 관리형 서비스로 전환하세요
          </p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white ring-4 ring-blue-600 ring-offset-2'
                  : 'bg-white border-2 border-slate-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-sm font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}

              <h3
                className={`text-xl font-bold ${
                  plan.highlighted ? 'text-white' : 'text-slate-900'
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`ml-1 text-sm ${
                      plan.highlighted ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? 'text-blue-100' : 'text-slate-600'
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 ${
                        plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? 'text-white' : 'text-slate-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-8 block w-full py-3 px-4 text-center text-sm font-semibold rounded-lg ${
                  plan.highlighted
                    ? 'bg-white/20 text-white cursor-default'
                    : plan.name === 'Community'
                    ? 'bg-slate-100 text-slate-600 cursor-default'
                    : 'bg-slate-100 text-slate-600 cursor-default'
                }`}
              >
                {plan.name === 'Community' ? '오픈소스 출시 예정' : plan.name === 'Cloud' ? '출시 알림 신청' : '출시 후 문의 가능'}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Early Access CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                출시 소식을 가장 먼저 받아보세요
              </h3>
              <p className="text-slate-400">
                Early Access 프로그램에 참여하고, 베타 테스터로 먼저 사용해보세요
              </p>
            </div>
            <div className="w-full md:w-auto">
              {submitted ? (
                <div className="flex items-center gap-2 px-6 py-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-green-300 font-medium">등록 완료!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소"
                    required
                    className="px-4 py-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    <Bell className="h-4 w-4" />
                    알림 신청
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Control Plane은 Apache 2.0 오픈소스로 공개됩니다.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            문의사항은{' '}
            <a href="mailto:hello@imprun.dev" className="text-blue-600 hover:underline">
              hello@imprun.dev
            </a>
            로 연락주세요.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
