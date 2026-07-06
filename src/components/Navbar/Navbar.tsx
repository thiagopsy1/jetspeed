import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Facebook } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { cn } from '@/lib/utils'
import { useScrollHide } from '@/hooks/useScrollHide'
import { NAV_LINKS, WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_NUMBER } from '@/data/mockData'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { atTop } = useScrollHide()

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          atTop ? 'bg-secondary' : 'glass',
        )}
      >
        <div className="max-w-container mx-auto px-gutter">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-between h-16">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-label-lg text-white/90 hover:text-white relative group no-tap"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            <a href="/" className="absolute left-1/2 -translate-x-1/2">
              <img src="/assets/logos/jetspeed-logo-03.png" alt="RioNet" className="h-9" onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-xl tracking-tight">RioNet</span>'
              }} />
            </a>

            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors no-tap">
                <Instagram size={18} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors no-tap">
                <Facebook size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-label-lg px-4 py-2 rounded-full transition-all duration-200 no-tap"
              >
                <WhatsAppIcon size={15} />
                Assinar
              </a>
            </div>
          </div>

          {/* Mobile nav */}
          <div className="flex md:hidden items-center justify-between h-14">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white no-tap">
              <WhatsAppIcon size={16} />
              <span className="text-label-lg">{WHATSAPP_NUMBER.slice(2).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}</span>
            </a>

            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white/90 no-tap">
                <Instagram size={18} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-white/90 no-tap">
                <Facebook size={18} />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white p-1.5 no-tap"
                aria-label="Menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-14 left-0 right-0 z-40 glass md:hidden"
          >
            <nav className="flex flex-col px-gutter py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-body-md py-3 border-b border-white/10 last:border-0 no-tap"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
