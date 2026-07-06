import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PLANS, APPS } from '@/data/mockData'
import { PlanCard } from './PlanCard'

export function Plans() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const w = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({ left: dir === 'left' ? -w : w, behavior: 'smooth' })
  }

  return (
    <section id="planos" className="py-section bg-surface-low overflow-clip scroll-mt-20">
      <div className="max-w-container mx-auto px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="text-headline-lg text-primary font-extrabold mb-3">
            Velocidade e diversão pra família toda
          </h2>
          <p className="text-ink-muted text-body-md max-w-md mx-auto">
            Escolha seu plano e adicione os apps favoritos da família.
          </p>
        </motion.div>

        {/* Desktop grid — items-stretch garante altura igual em todos os cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} apps={APPS} index={i} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-gutter px-gutter scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PLANS.map((plan, i) => (
              <div key={plan.id} className="snap-center flex-shrink-0 w-[82vw]">
                <PlanCard plan={plan} apps={APPS} index={i} />
              </div>
            ))}
          </div>

          {/* Carousel arrows */}
          <div className="flex justify-center gap-3 mt-5">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors no-tap"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors no-tap"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
