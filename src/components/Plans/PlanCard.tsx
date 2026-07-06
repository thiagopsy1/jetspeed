import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type Plan, type App, APP_PRICE, WHATSAPP_URL } from '@/data/mockData'
import { formatCurrency } from '@/lib/utils'

interface PlanCardProps {
  readonly plan: Plan
  readonly apps: App[]
  readonly index: number
}

export function PlanCard({ plan, apps, index }: PlanCardProps) {
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set())

  const toggleApp = (appId: string) => {
    setSelectedApps(prev => {
      const next = new Set(prev)
      if (next.has(appId)) {
        next.delete(appId)
      } else if (next.size < plan.maxApps) {
        next.add(appId)
      }
      return next
    })
  }

  const totalPrice = plan.basePrice + selectedApps.size * APP_PRICE
  const isMaxReached = selectedApps.size >= plan.maxApps
  const bg = plan.featured ? 'bg-card-green' : 'bg-card-gradient'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {/* Inner wrapper: hover with its own spring — Ajuste 4 */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className={cn(
          'relative flex flex-col rounded-[12px] p-5 sm:p-6 card-stroke card-stroke-hover cursor-default select-none h-full',
          bg,
          plan.featured && 'ring-2 ring-white/30',
        )}
      >
        {plan.featured && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-accent text-primary font-bold text-label-md px-4 py-1 rounded-full whitespace-nowrap">
              Mais popular
            </span>
          </div>
        )}

        <p className="text-white/70 text-label-lg mb-3">{plan.name}</p>

        <div className="flex items-end gap-1 mb-2">
          <span className="text-white font-extrabold leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', letterSpacing: '-0.03em' }}>
            {plan.speed}
          </span>
          <span className="text-white/80 font-bold text-xl mb-1">{plan.speedUnit}</span>
        </div>

        <p className="text-white/60 text-label-lg leading-snug mb-4">{plan.tagline}</p>

        <ul className="flex flex-col gap-1.5 mb-5">
          {plan.features.map((f) => (
            <li
              key={f.label}
              className={cn('flex items-center gap-2 text-label-lg', f.included ? 'text-white/80' : 'text-white/40')}
            >
              {f.included ? (
                <Check size={14} className="text-secondary-dim flex-shrink-0" />
              ) : (
                <X size={14} className="text-white/30 flex-shrink-0" />
              )}
              {f.label}
            </li>
          ))}
        </ul>

        {/* App toggles — Ajuste 2: rounded-xl, Ajuste 5: verde ao selecionar */}
        <div className="bg-white rounded-md p-3 mb-5">
          <p className="text-ink-muted text-label-md mb-2.5 px-1">
            Apps inclusos — {selectedApps.size}/{plan.maxApps}
          </p>
          <div className="grid grid-cols-4 gap-2">
            {apps.map((app) => {
              const isSelected = selectedApps.has(app.id)
              const isLocked = !isSelected && isMaxReached
              return (
                <motion.button
                  key={app.id}
                  onClick={() => toggleApp(app.id)}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={cn(
                    'flex items-center justify-center p-2.5 rounded border transition-all duration-150 no-tap',
                    isSelected
                      ? 'border-secondary/50 bg-secondary/20'
                      : isLocked
                      ? 'border-transparent bg-surface-low opacity-30 cursor-not-allowed'
                      : 'border-surface-high bg-surface-low hover:border-secondary/20 cursor-pointer',
                  )}
                >
                  <motion.img
                    src={app.icon}
                    alt={app.name}
                    animate={{ scale: isSelected ? 0.8 : 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-7 h-7 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const span = document.createElement('span')
                      span.className = 'text-[9px] font-bold text-ink-muted text-center leading-tight'
                      span.textContent = app.name.slice(0, 3).toUpperCase()
                      e.currentTarget.parentElement?.appendChild(span)
                    }}
                  />
                </motion.button>
              )
            })}
          </div>
          {selectedApps.size > 0 && (
            <p className="text-ink-muted text-label-md mt-2 px-1">
              + {formatCurrency(selectedApps.size * APP_PRICE)}/mês em apps
            </p>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-white/60 text-label-lg">R$</span>
            <span className="text-white font-extrabold text-4xl leading-none tracking-tight">
              {totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <p className="text-white/50 text-label-md mt-1">/Mês</p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'mt-5 w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-bold text-body-md transition-all duration-200 active:scale-[0.98] no-tap',
            plan.featured
              ? 'bg-white text-secondary hover:bg-white/90'
              : 'bg-white/15 hover:bg-white/25 text-white border border-white/20',
          )}
        >
          <img src="/assets/icons/whatsapp-01.svg" alt="" width={22} height={22} />
          Assinar
        </a>
        <p className="text-white/40 text-label-md text-center mt-3">
          Verifique as condições de contratação.
        </p>
      </motion.div>
    </motion.div>
  )
}
