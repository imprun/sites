import { motion } from 'framer-motion'
import { useState } from 'react'

const examples = [
  {
    id: 'basic',
    title: 'Basic API',
    description: '간단한 REST API',
    code: `// CloudFunction: GET /user/:id
export default async function handler(ctx) {
  const { id } = ctx.params;

  // Database access via proxy
  const user = await ctx.db
    .collection('users')
    .findOne({ _id: id });

  if (!user) {
    return ctx.status(404).json({ error: 'User not found' });
  }

  return { user };
}`,
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'AI 모델 호출',
    code: `// CloudFunction: POST /chat
export default async function handler(ctx) {
  const { message } = ctx.body;

  const response = await ctx.ai.chat({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: message }
    ]
  });

  return { reply: response.content };
}`,
  },
  {
    id: 'mcp',
    title: 'MCP Tool',
    description: 'AI 에이전트용 Tool',
    code: `// CloudFunction: POST /search-products
// MCP Tool로 자동 등록됨!

/**
 * @mcp_tool
 * @description 상품을 검색합니다
 * @param query 검색어
 */
export default async function handler(ctx) {
  const { query } = ctx.body;

  const products = await ctx.db
    .collection('products')
    .find({ name: { $regex: query, $options: 'i' } })
    .limit(10)
    .toArray();

  return { products };
}`,
  },
]

export function CodeExampleSection() {
  const [activeTab, setActiveTab] = useState('basic')
  const activeExample = examples.find((e) => e.id === activeTab)!

  return (
    <section className="px-6 py-24 bg-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-green-400">
            Code Examples
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            코드가 곧 API
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            함수 하나가 즉시 API 엔드포인트가 됩니다
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {examples.map((example) => (
            <button
              key={example.id}
              onClick={() => setActiveTab(example.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === example.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Description */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {activeExample.title}
            </h3>
            <p className="text-slate-300 mb-6">
              {activeExample.description}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-green-400">✓</span>
                배포 설정 불필요
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-green-400">✓</span>
                즉시 API 엔드포인트 생성
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-green-400">✓</span>
                자동 문서 생성
              </li>
            </ul>
          </div>

          {/* Code */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-slate-400">handler.ts</span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm text-slate-300 font-mono">{activeExample.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
