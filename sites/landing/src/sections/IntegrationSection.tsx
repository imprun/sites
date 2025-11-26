import { motion } from 'framer-motion'

const integrations = {
  llm: [
    { name: 'OpenAI', logo: '🤖' },
    { name: 'Anthropic', logo: '🧠' },
    { name: 'Local LLM', logo: '💻' },
    { name: 'Google AI', logo: '🔍' },
  ],
  infrastructure: [
    { name: 'Kubernetes', logo: '☸️' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'Redis', logo: '🔴' },
    { name: 'APISIX', logo: '🌐' },
  ],
  tools: [
    { name: 'GitHub', logo: '🐙' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Helm', logo: '⎈' },
    { name: 'Prometheus', logo: '📊' },
  ],
}

export function IntegrationSection() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            200+ 통합 파트너
          </h2>
          <p className="text-lg text-slate-600">
            이미 사용 중인 도구들과 즉시 연동
          </p>
        </div>

        {/* Integration Categories */}
        <div className="space-y-12">
          {/* LLM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              AI & LLM
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.llm.map((integration, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-slate-200"
                >
                  <div className="text-4xl mb-2">{integration.logo}</div>
                  <div className="text-sm font-medium text-slate-700">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              Infrastructure
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.infrastructure.map((integration, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-slate-200"
                >
                  <div className="text-4xl mb-2">{integration.logo}</div>
                  <div className="text-sm font-medium text-slate-700">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DevOps Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              DevOps & Monitoring
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.tools.map((integration, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-slate-200"
                >
                  <div className="text-4xl mb-2">{integration.logo}</div>
                  <div className="text-sm font-medium text-slate-700">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            필요한 통합이 없나요?
          </p>
          <a
            href="mailto:support@imprun.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            기능 요청하기 →
          </a>
        </div>
      </div>
    </section>
  )
}
