import { motion } from 'framer-motion'

const providers = [
  {
    name: 'OpenAI',
    models: ['GPT-4o', 'GPT-4 Turbo', 'GPT-3.5 Turbo', 'o1', 'o1-mini'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Anthropic',
    models: ['Claude 3.5 Sonnet', 'Claude 3 Opus', 'Claude 3 Haiku'],
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Google AI',
    models: ['Gemini 2.0 Flash', 'Gemini 1.5 Pro', 'Gemini 1.5 Flash'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Local LLM',
    models: ['Llama 3.2', 'Mistral', 'Qwen', 'Ollama 지원'],
    color: 'from-purple-500 to-pink-500',
  },
]

const codeExample = `// OpenAI 호환 API
const response = await fetch('https://ai.imprun.dev/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4o',  // 또는 'claude-3-sonnet', 'gemini-pro'
    messages: [
      { role: 'user', content: 'Hello!' }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`

export function ProvidersSection() {
  return (
    <section className="px-6 py-24 bg-slate-50 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            Providers
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            모든 LLM을 하나의 API로
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            OpenAI, Anthropic, Google AI, Local LLM을 동일한 인터페이스로 사용하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Providers Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${provider.color} text-white text-sm font-semibold mb-4`}
                >
                  {provider.name}
                </div>
                <ul className="space-y-2">
                  {provider.models.map((model) => (
                    <li key={model} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      {model}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20" />
            <div className="relative bg-slate-900 rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-400">example.ts</span>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-slate-300 font-mono">{codeExample}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Key point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-purple-50 rounded-2xl p-8 border border-purple-200"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            프로바이더 전환이 쉬워집니다
          </h3>
          <p className="text-slate-600">
            model 파라미터만 변경하면 다른 프로바이더로 전환할 수 있습니다.
            코드 변경 없이 GPT-4에서 Claude로, Claude에서 Gemini로 이동하세요.
            폴백 설정으로 장애 시 자동 전환도 가능합니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
