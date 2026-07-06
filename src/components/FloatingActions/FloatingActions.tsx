import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { WHATSAPP_URL, WHATSAPP_NUMBER } from '@/data/mockData'

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      <motion.a
        href={`tel:+${WHATSAPP_NUMBER}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-glass hover:scale-110 active:scale-95 transition-transform no-tap"
        aria-label="Ligar"
      >
        <Phone size={20} />
      </motion.a>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.0, type: 'spring', stiffness: 260, damping: 20 }}
        className="relative w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white shadow-green animate-pulse-green hover:scale-110 active:scale-95 transition-transform no-tap"
        aria-label="WhatsApp"
      >
        <img src="/assets/icons/whatsapp-01.svg" alt="WhatsApp" width={26} height={26} />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-primary text-[10px] font-bold rounded-full flex items-center justify-center">
          1
        </span>
      </motion.a>
    </div>
  )
}
