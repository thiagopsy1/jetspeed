import { motion } from 'framer-motion'
import { PLANS, APPS } from '@/data/mockData'
import { PlanCard } from './PlanCard'

export function Plans() {
  return (
    <section id="planos" className="py-section overflow-clip scroll-mt-20">
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

        {/* Grid — items-stretch garante altura igual em todos os cards; empilha vertical no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} apps={APPS} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
