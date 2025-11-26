import { motion } from 'framer-motion'

function ArchitectureSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 720"
      className="w-full h-auto"
    >
      {/* Definitions */}
      <defs>
        {/* Background gradient */}
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Console layer gradient - Purple/Blue */}
        <linearGradient id="consoleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.08" />
        </linearGradient>

        {/* Control Plane gradient - Blue/Cyan */}
        <linearGradient id="controlPlaneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
        </linearGradient>

        {/* Agent gradient - Green */}
        <linearGradient id="agentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
        </linearGradient>

        {/* Data Plane gradient - Orange */}
        <linearGradient id="dataPlaneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.08" />
        </linearGradient>

        {/* Arrow gradient */}
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow filter */}
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Inner box shadow */}
        <filter id="innerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Main Background */}
      <rect width="900" height="720" fill="url(#bgGradient)" rx="16" />

      {/* Grid pattern overlay */}
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.03" />
      </pattern>
      <rect width="900" height="720" fill="url(#grid)" />

      {/* ============================================ */}
      {/* LAYER 1: imprun Console */}
      {/* ============================================ */}
      <g filter="url(#shadow)">
        <rect x="30" y="20" width="840" height="150" rx="12" fill="url(#consoleGradient)" stroke="#475569" strokeWidth="1.5" />
      </g>

      {/* Console title */}
      <text x="450" y="48" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">
        imprun Console
      </text>

      {/* Admin UI Box */}
      <g filter="url(#innerShadow)">
        <rect x="60" y="65" width="360" height="90" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
      </g>
      <text x="240" y="88" textAnchor="middle" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">Admin UI</text>
      <text x="240" y="105" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">(API Provider)</text>
      <text x="80" y="125" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">• Gateway 관리</text>
      <text x="80" y="140" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">• Product/Plan 설정</text>
      <text x="230" y="125" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">• Customer 관리</text>

      {/* DevPortal Box */}
      <g filter="url(#innerShadow)">
        <rect x="480" y="65" width="360" height="90" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.5" />
      </g>
      <text x="660" y="88" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">DevPortal</text>
      <text x="660" y="105" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">(Customer)</text>
      <text x="500" y="125" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">• Product 탐색</text>
      <text x="500" y="140" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">• Subscription 신청</text>
      <text x="660" y="125" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">• Credential 발급</text>

      {/* Arrow 1: Console → Control Plane */}
      <g filter="url(#glow)">
        <path d="M450 170 L450 195" stroke="url(#arrowGradient)" strokeWidth="2" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
        </path>
        <polygon points="445,193 450,205 455,193" fill="#60a5fa" />
      </g>

      {/* ============================================ */}
      {/* LAYER 2: imprun Server (Control Plane) */}
      {/* ============================================ */}
      <g filter="url(#shadow)">
        <rect x="30" y="210" width="840" height="200" rx="12" fill="url(#controlPlaneGradient)" stroke="#475569" strokeWidth="1.5" />
      </g>

      {/* Control Plane title */}
      <text x="450" y="238" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">
        imprun Server (Control Plane)
      </text>

      {/* Service boxes */}
      {/* Gateway Service */}
      <g filter="url(#innerShadow)">
        <rect x="60" y="255" width="160" height="55" rx="6" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.6" />
      </g>
      <text x="140" y="280" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">Gateway</text>
      <text x="140" y="297" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Service</text>

      {/* Product Service */}
      <g filter="url(#innerShadow)">
        <rect x="240" y="255" width="160" height="55" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.6" />
      </g>
      <text x="320" y="280" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">Product</text>
      <text x="320" y="297" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Service</text>

      {/* Customer Service */}
      <g filter="url(#innerShadow)">
        <rect x="420" y="255" width="160" height="55" rx="6" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.6" />
      </g>
      <text x="500" y="280" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">Customer</text>
      <text x="500" y="297" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Service</text>

      {/* Subscription Service */}
      <g filter="url(#innerShadow)">
        <rect x="600" y="255" width="160" height="55" rx="6" fill="#1e293b" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.6" />
      </g>
      <text x="680" y="280" textAnchor="middle" fill="#f472b6" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">Subscription</text>
      <text x="680" y="297" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Service</text>

      {/* Deployment Service */}
      <g filter="url(#innerShadow)">
        <rect x="60" y="330" width="700" height="60" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1" strokeOpacity="0.6" />
      </g>
      <text x="410" y="355" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">Deployment Service</text>
      <text x="410" y="375" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">(Snapshot → DeployJob → Agent Sync)</text>

      {/* Arrow 2: Control Plane → Agent */}
      <g filter="url(#glow)">
        <path d="M450 410 L450 440" stroke="url(#arrowGradient)" strokeWidth="2" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
        </path>
        <polygon points="445,438 450,450 455,438" fill="#60a5fa" />
      </g>
      {/* gRPC + JWT label */}
      <rect x="460" y="418" width="80" height="20" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="0.5" />
      <text x="500" y="432" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="500" fontFamily="monospace">gRPC + JWT</text>

      {/* ============================================ */}
      {/* LAYER 3: imprun Agent */}
      {/* ============================================ */}
      <g filter="url(#shadow)">
        <rect x="30" y="455" width="840" height="90" rx="12" fill="url(#agentGradient)" stroke="#475569" strokeWidth="1.5" />
      </g>

      {/* Agent title */}
      <text x="450" y="483" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">
        imprun Agent (In-Cluster)
      </text>

      {/* Agent process box */}
      <g filter="url(#innerShadow)">
        <rect x="150" y="498" width="600" height="35" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1" strokeOpacity="0.6" />
      </g>

      {/* Poll → Convert → SSA Apply flow */}
      <text x="260" y="521" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">Poll</text>
      <path d="M300 517 L350 517" stroke="#475569" strokeWidth="1.5" markerEnd="url(#smallArrow)" />
      <text x="380" y="521" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">→</text>
      <text x="450" y="521" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">Convert</text>
      <text x="530" y="521" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">→</text>
      <text x="620" y="521" textAnchor="middle" fill="#f472b6" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif">SSA Apply</text>

      {/* Arrow 3: Agent → Data Plane */}
      <g filter="url(#glow)">
        <path d="M450 545 L450 575" stroke="url(#arrowGradient)" strokeWidth="2" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
        </path>
        <polygon points="445,573 450,585 455,573" fill="#60a5fa" />
      </g>

      {/* ============================================ */}
      {/* LAYER 4: Kubernetes Cluster (Data Plane) */}
      {/* ============================================ */}
      <g filter="url(#shadow)">
        <rect x="30" y="590" width="840" height="115" rx="12" fill="url(#dataPlaneGradient)" stroke="#475569" strokeWidth="1.5" />
      </g>

      {/* Data Plane title */}
      <text x="450" y="615" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="600" fontFamily="system-ui, sans-serif">
        Kubernetes Cluster (Data Plane)
      </text>

      {/* Envoy Gateway container */}
      <g filter="url(#innerShadow)">
        <rect x="60" y="628" width="780" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
      </g>
      <text x="450" y="648" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">Envoy Gateway</text>

      {/* CRD boxes */}
      {/* Gateway CRD */}
      <rect x="100" y="658" width="130" height="28" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
      <text x="165" y="676" textAnchor="middle" fill="#fcd34d" fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif">Gateway CRD</text>

      {/* HTTPRoute CRD */}
      <rect x="250" y="658" width="130" height="28" rx="4" fill="#0f172a" stroke="#fb923c" strokeWidth="1" strokeOpacity="0.4" />
      <text x="315" y="676" textAnchor="middle" fill="#fdba74" fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif">HTTPRoute CRD</text>

      {/* Backend CRD */}
      <rect x="400" y="658" width="130" height="28" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
      <text x="465" y="676" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif">Backend CRD</text>

      {/* SecurityPolicy CRD */}
      <rect x="550" y="658" width="160" height="28" rx="4" fill="#0f172a" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.4" />
      <text x="630" y="676" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif">SecurityPolicy CRD</text>

      {/* Decorative elements - floating dots */}
      <circle cx="820" cy="40" r="3" fill="#3b82f6" fillOpacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="800" cy="70" r="2" fill="#8b5cf6" fillOpacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="840" cy="85" r="2.5" fill="#06b6d4" fillOpacity="0.35">
        <animate attributeName="opacity" values="0.35;0.7;0.35" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function ArchitectureSection() {
  return (
    <section className="px-6 py-24 bg-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Architecture
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            시스템 아키텍처
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Control Plane과 Data Plane의 분리, Agent 기반 GitOps 배포
          </p>
        </div>

        {/* Architecture Diagram - SVG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/50 rounded-2xl p-4 md:p-8 border border-slate-700 backdrop-blur"
        >
          <ArchitectureSVG />
        </motion.div>

        {/* Key points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <h3 className="text-lg font-semibold text-white">Control Plane</h3>
            </div>
            <p className="text-sm text-slate-400">
              imprun Server가 모든 설정을 DB에 저장하고 Source of Truth로 관리합니다.
              Go + Gin + GORM + PostgreSQL 기반입니다.
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500" />
              <h3 className="text-lg font-semibold text-white">Agent Sync</h3>
            </div>
            <p className="text-sm text-slate-400">
              Agent가 DeployJob을 폴링하여 Snapshot을 CRD로 변환하고 SSA Apply합니다.
              Drift 감지와 자동 교정을 지원합니다.
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
              <h3 className="text-lg font-semibold text-white">Data Plane</h3>
            </div>
            <p className="text-sm text-slate-400">
              Envoy Gateway가 Gateway API 표준 CRD를 기반으로 트래픽을 라우팅합니다.
              SecurityPolicy로 인증을 강제합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
