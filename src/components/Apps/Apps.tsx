import { motion } from 'framer-motion'
import { APPS } from '@/data/mockData'

export function Apps() {
  return (
    <section id="aplicativos" className="py-section bg-white overflow-clip scroll-mt-20">
      <div className="max-w-container mx-auto px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="text-secondary text-label-lg font-bold uppercase tracking-wider">Streaming & Mais</span>
          <h2 className="text-headline-lg text-primary font-extrabold mt-2">
            Aplicativos disponíveis
          </h2>
          <p className="text-ink-muted text-body-md mt-3 max-w-sm mx-auto">
            Adicione seus favoritos ao plano por apenas R$ 29,90/mês cada.
          </p>
        </motion.div>

        {/* Ajuste 2: rounded-xl | Ajuste 4: hover separado do reveal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {APPS.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                className="flex flex-col items-center gap-3 bg-surface-low rounded-xl p-5 cursor-default h-full"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${app.color}15` }}
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const span = document.createElement('span')
                      span.className = 'text-xs font-bold text-ink-muted text-center'
                      span.textContent = app.name.slice(0, 4).toUpperCase()
                      e.currentTarget.parentElement?.appendChild(span)
                    }}
                  />
                </div>
                <p className="text-ink font-semibold text-body-md text-center">{app.name}</p>
                <span className="text-label-md text-ink-muted">+ R$ 29,90/mês</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
