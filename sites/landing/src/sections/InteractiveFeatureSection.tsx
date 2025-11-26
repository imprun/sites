import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code2, BrainCircuit, Webhook } from 'lucide-react'

const features = [
  {
    id: 'api',
    title: 'API 개발',
    icon: Code2,
    description: '함수 하나가 즉시 API 엔드포인트가 됩니다',
    code: `// CloudFunction: GET /user/:id
export default async function handler(ctx) {
  const { id } = ctx.params;

  // Database access via proxy
  const user = await ctx.db
    .collection('users')
    .findOne({ _id: id });

  return { user };
}`,
    features: [
      'dev/staging/prod 환경 자동 관리',
      'CORS, 인증, Rate Limit 플러그인',
      'Zero Config 배포',
    ],
  },
  {
    id: 'ai',
    title: 'AI Gateway',
    icon: BrainCircuit,
    description: '여러 AI 모델을 하나의 API로 통합 관리',
    code: `// OpenAI-compatible API
const response = await fetch('/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});`,
    features: [
      'OpenAI, Anthropic, Local LLM 통합',
      '비용 추적 및 최적화',
      '응답 캐싱으로 속도 향상',
    ],
  },
  {
    id: 'mcp',
    title: 'MCP Bridge',
    icon: Webhook,
    description: 'CloudFunction을 AI Tool로 자동 변환',
    code: `// CloudFunction이 MCP Tool로 자동 등록됨
export default async function searchProducts(ctx) {
  const { query } = ctx.body;

  const products = await ctx.db
    .collection('products')
    .find({ name: { $regex: query } })
    .toArray();

  return { products };
}

// AI가 이 함수를 도구로 호출 가능!`,
    features: [
      'Function → MCP Tool 자동 변환',
      'AI 에이전트가 직접 호출',
      'Tool Calling 자동 처리',
    ],
  },
]

export function InteractiveFeatureSection() {
  const [activeTab, setActiveTab] = useState('api')

  const activeFeature = features.find((f) => f.id === activeTab)!
  const Icon = activeFeature.icon

  return (
    <section id="features" className="px-6 py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            강력한 기능, 간단한 사용법
          </h2>
          <p className="text-lg text-slate-600">
            복잡한 인프라 없이, 코드만으로 모든 것을 제어하세요
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {features.map((feature) => {
            const TabIcon = feature.icon
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === feature.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                <TabIcon size={20} />
                {feature.title}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Description */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {activeFeature.title}
              </h3>
            </div>

            <p className="text-lg text-slate-600">
              {activeFeature.description}
            </p>

            <ul className="space-y-3">
              {activeFeature.features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Code Example */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
            <pre className="relative bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto shadow-2xl">
              <code className="text-sm">{activeFeature.code}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
