import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Server, BrainCircuit, Code2, Globe, ArrowRight } from 'lucide-react'

const products = [
  {
    icon: Server,
    name: 'API Gateway',
    tagline: 'B2B API 상품화 플랫폼',
    description: '기존 API를 Product로 만들고, Customer를 관리하고, DevPortal을 제공합니다. Envoy Gateway 기반 Kubernetes Native.',
    features: ['Product & Plan 관리', 'Customer Subscription', 'Developer Portal', '환경별 독립 운영'],
    href: '/gateway',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    status: 'live',
  },
  {
    icon: BrainCircuit,
    name: 'AI Gateway',
    tagline: '멀티 LLM 통합 관리',
    description: '여러 AI 모델을 하나의 API로 통합 관리합니다. OpenAI 호환 API로 비용 최적화와 응답 캐싱을 제공합니다.',
    features: ['OpenAI/Anthropic/Local', 'OpenAI 호환 API', '비용 추적 및 최적화', '응답 캐싱'],
    href: '/ai-gateway',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    status: 'live',
  },
  {
    icon: Code2,
    name: 'Cloud Functions',
    tagline: '코드를 즉시 API로',
    description: '함수를 작성하면 즉시 API 엔드포인트가 됩니다. MCP Bridge로 AI 에이전트에게 도구로 제공할 수 있습니다.',
    features: ['Zero Config 배포', 'TypeScript 지원', 'MCP Bridge', 'dev/staging/prod'],
    href: '/functions',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    status: 'live',
  },
  {
    icon: Globe,
    name: 'Scraping Gateway',
    tagline: '멀티 프로바이더 스크래핑',
    description: '여러 스크래핑 프로바이더를 통합하여 단일 API로 제공합니다. 자동 로테이션과 폴백을 지원합니다.',
    features: ['멀티 프로바이더', '통합 API', '자동 로테이션', '폴백 지원'],
    href: '/scraping',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    status: 'soon',
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

export function ProductsSection() {
  return (
    <section className="px-6 py-24 bg-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Products
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            하나의 플랫폼, 4가지 제품
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            API 관리부터 AI 통합, 서버리스, 스크래핑까지 모든 것을 하나로
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {products.map((product) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.name}
                variants={item}
                className={`relative rounded-2xl border-2 border-slate-200 bg-gradient-to-br ${product.bgGradient} p-8 hover:shadow-xl transition-all group`}
              >
                {/* Status Badge */}
                {product.status === 'soon' && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-orange-100 text-orange-700 rounded-full">
                    Coming Soon
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br ${product.gradient} p-3`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-4">
                  {product.tagline}
                </p>
                <p className="text-slate-600 mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-blue-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={product.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${
                    product.status === 'soon'
                      ? 'text-slate-400 cursor-default'
                      : 'text-blue-600 hover:text-blue-700 group-hover:gap-3 transition-all'
                  }`}
                >
                  {product.status === 'soon' ? '준비 중' : '자세히 보기'}
                  {product.status !== 'soon' && <ArrowRight className="h-4 w-4" />}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
