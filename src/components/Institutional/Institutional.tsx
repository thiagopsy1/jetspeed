import { motion } from 'framer-motion'
import { COMPANY_VALUES } from '@/data/mockData'

export function Institutional() {
  return (
    <section id="institucional" className="py-section bg-white overflow-clip scroll-mt-20">
      <div className="max-w-container mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image side — Ajuste 2: rounded-2xl, Ajuste 4: x menor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-hero-gradient aspect-[4/3]">
              <img
                src="/assets/people/woman-banner-hero.png"
                alt="Família conectada"
                className="w-full h-full object-cover mix-blend-luminosity opacity-60"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-3">
                  <p className="text-white font-extrabold text-headline-md">100%</p>
                  <p className="text-white/80 text-label-lg">Fibra Óptica</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side — Ajuste 4 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-secondary text-label-lg font-bold uppercase tracking-wider">Quem Somos</span>
              <h2 className="text-headline-lg text-primary font-extrabold mt-2 leading-tight">
                Conectando Manaus com tecnologia de ponta
              </h2>
            </div>

            <p className="text-ink-muted text-body-lg">
              A JetSpeed é uma provedora de internet fibra óptica comprometida com qualidade, velocidade e satisfação dos clientes em Manaus e região metropolitana.
            </p>

            {/* Values — Ajuste 2: rounded-xl */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {COMPANY_VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-surface-low rounded-xl p-4"
                >
                  <p className="text-primary font-bold text-body-md mb-1">{v.title}</p>
                  <p className="text-ink-muted text-label-lg">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
