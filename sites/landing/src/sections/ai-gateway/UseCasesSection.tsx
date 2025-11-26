import { motion } from 'framer-motion'
import { MessageSquare, Wand2, FileSearch, Code } from 'lucide-react'

const useCases = [
  {
    icon: MessageSquare,
    title: 'AI 챗봇',
    description: '고객 지원 챗봇에 여러 LLM을 통합하고, 상황에 맞는 최적의 모델을 선택하세요.',
    example: '간단한 FAQ는 GPT-3.5, 복잡한 문의는 GPT-4로 자동 라우팅',
  },
  {
    icon: Wand2,
    title: '콘텐츠 생성',
    description: '마케팅 카피, 블로그 글, 이메일 등 다양한 콘텐츠를 생성하세요.',
    example: '빠른 초안은 Claude Haiku, 최종 검수는 Claude Opus',
  },
  {
    icon: FileSearch,
    title: 'RAG 시스템',
    description: '문서 검색과 답변 생성을 위한 RAG 파이프라인을 구축하세요.',
    example: '임베딩은 OpenAI, 생성은 Local LLM으로 비용 최적화',
  },
  {
    icon: Code,
    title: '코드 어시스턴트',
    description: '코드 생성, 리뷰, 디버깅을 위한 AI 어시스턴트를 만드세요.',
    example: 'Claude 3.5 Sonnet으로 코드 생성, GPT-4로 리뷰',
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
    <section className="px-6 py-24 bg-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            Use Cases
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            다양한 AI 애플리케이션
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            AI Gateway로 구축할 수 있는 다양한 사용 사례
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
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-purple-300 hover:shadow-xl transition-all"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3">
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
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-purple-700 font-medium">
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
