import { motion } from 'framer-motion'
import { Star, Rocket, Lock } from 'lucide-react'

const stats = [
  {
    icon: Rocket,
    value: '500K+',
    label: 'API Calls / Day',
  },
  {
    icon: Star,
    value: '50+',
    label: 'Active API Gateways',
  },
  {
    icon: Lock,
    value: '99.9%',
    label: 'Uptime SLA',
  },
]

export function TrustBarSection() {
  return (
    <section className="px-6 py-12 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
