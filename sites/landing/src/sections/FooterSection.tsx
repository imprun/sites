import { Github, Twitter, MessageCircle } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'API 개발', href: 'https://portal.imprun.dev' },
    { name: 'AI Gateway', href: 'https://portal.imprun.dev' },
    { name: 'MCP Gateway', href: 'https://portal.imprun.dev' },
    { name: 'Pricing', href: '#pricing' },
  ],
  developers: [
    { name: 'Documentation', href: 'https://docs.imprun.dev' },
    { name: 'API Reference', href: 'https://docs.imprun.dev/api' },
    { name: 'GitHub', href: '#' }, // TODO: Replace with actual GitHub repository URL
    { name: 'Blog', href: 'https://blog.imprun.dev' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Changelog', href: '#' }, // TODO: Replace with actual GitHub releases URL
    { name: 'Community', href: '#' }, // TODO: Replace with actual GitHub discussions URL
    // { name: 'Contact', href: 'mailto:support@imprun.dev' }, // TODO: Enable when email is ready
  ],
  legal: [
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Security', href: '#security' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' }, // TODO: Replace with actual GitHub repository URL
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Discord', icon: MessageCircle, href: '#' },
]

export function FooterSection() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold mb-4">imprun.dev</div>
            <p className="text-sm text-slate-400 mb-4">
              API 개발부터 AI 통합까지, 모든 것을 하나로
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2025 imprun.dev. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Made with ❤️ for developers
          </p>
        </div>
      </div>
    </footer>
  )
}
