import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { NAV_LINKS, WHATSAPP_URL, WHATSAPP_NUMBER, INSTAGRAM_URL, FACEBOOK_URL } from '@/data/mockData'

const PHONE_DISPLAY = WHATSAPP_NUMBER.slice(2).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-container mx-auto px-gutter py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/assets/logos/jetspeed-logo-01.svg" alt="JetSpeed" className="h-16" />
            <p className="text-white/60 text-label-lg max-w-xs">
              Conectando Manaus com fibra óptica de verdade.
            </p>
            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-white font-bold text-body-md mb-1">Links</p>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-white/60 hover:text-white text-label-lg transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-white font-bold text-body-md mb-1">Contato</p>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-white/60 hover:text-white text-label-lg transition-colors">
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
            <a href="mailto:contato@jetspeed.com.br" className="flex items-center gap-2 text-white/60 hover:text-white text-label-lg transition-colors">
              <Mail size={14} />
              contato@jetspeed.com.br
            </a>
            <span className="flex items-center gap-2 text-white/60 text-label-lg">
              <MapPin size={14} />
              Manaus, AM
            </span>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-label-md">
            © {new Date().getFullYear()} JetSpeed Fibra Óptica. Todos os direitos reservados.
            <br />
            Desenvolvido por Devierart.
          </p>
        </div>
      </div>
    </footer>
  )
}
