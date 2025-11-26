import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

function ImprunLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - Abstract speed/flow mark */}
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        {/* Hexagon with rounded corners */}
        <path
          d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z"
          fill="url(#logoGrad)"
          rx="2"
        />
        {/* Inner arrow/play symbol - represents "run" */}
        <path
          d="M12 10 L12 22 L22 16 Z"
          fill="white"
          opacity="0.95"
        />
      </svg>
      {/* Wordmark */}
      <span className="text-2xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">imp</span>
        <span className="text-current">run</span>
      </span>
    </div>
  )
}

const products = [
  { name: 'API Gateway', href: '/gateway', description: 'B2B API 상품화 및 고객 관리' },
  { name: 'AI Gateway', href: '/ai-gateway', description: '멀티 LLM 통합 관리' },
  { name: 'Cloud Functions', href: '/functions', description: '코드를 즉시 API로' },
  { name: 'Scraping Gateway', href: '/scraping', description: '멀티 프로바이더 스크래핑', badge: 'Soon' },
]

const navigation = [
  { name: 'Docs', href: 'https://docs.imprun.dev', external: true },
  { name: 'Blog', href: 'https://blog.imprun.dev', external: true },
]

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-slate-900 hover:text-blue-600 transition-colors">
            <ImprunLogo className="h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              onBlur={() => setTimeout(() => setProductsOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors"
                    onClick={() => setProductsOpen(false)}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-900">{product.name}</span>
                        {product.badge && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{product.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Buttons - TODO: Enable when console.imprun.dev is ready */}
        {/* <div className="hidden md:flex items-center gap-4">
          <a
            href="https://console.imprun.dev"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Sign In
          </a>
          <a
            href="https://console.imprun.dev"
            className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div> */}

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {/* Products */}
            <div className="py-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Products
              </div>
              {products.map((product) => (
                <Link
                  key={product.name}
                  to={product.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-slate-600 hover:text-slate-900"
                >
                  <span>{product.name}</span>
                  {product.badge && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Other links */}
            <div className="border-t border-slate-200 pt-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block py-2 text-base font-medium text-slate-600 hover:text-slate-900"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA - TODO: Enable when console.imprun.dev is ready */}
            {/* <div className="pt-4 border-t border-slate-200 space-y-2">
              <a
                href="https://console.imprun.dev"
                className="block py-2 text-base font-medium text-slate-600 hover:text-slate-900"
              >
                Sign In
              </a>
              <a
                href="https://console.imprun.dev"
                className="block px-4 py-2 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 text-center"
              >
                Get Started
              </a>
            </div> */}
          </div>
        </div>
      )}
    </header>
  )
}
