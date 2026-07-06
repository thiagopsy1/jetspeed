import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, CheckCircle2 } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/mockData'

// Ajuste 4: animações mais fluidas — easeOutExpo + deslocamento menor
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

type Tab = 'residencial' | 'empresarial'

interface FormData {
  nome: string
  telefone: string
  email: string
  cep: string
}

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, '').slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return `(${d}`
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export function Hero() {
  const [tab, setTab] = useState<Tab>('residencial')
  const [form, setForm] = useState<FormData>({ nome: '', telefone: '', email: '', cep: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }))
  }

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, telefone: formatPhone(e.target.value) }))
  }

  const handleSubmit = () => {
    setSent(true)
    setForm({ nome: '', telefone: '', email: '', cep: '' })
  }

  useEffect(() => {
    if (!sent) return
    const t = setTimeout(() => setSent(false), 3000)
    return () => clearTimeout(t)
  }, [sent])

  return (
    <section className="relative min-h-[100dvh] bg-hero-gradient flex items-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '48px 48px',
      }} />

      {/* Hero banner image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/hero-banner/hero-banner-js.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 object-center"
        />
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-container mx-auto px-gutter pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-label-lg px-4 py-1.5 rounded-full border border-white/15">
                100% Fibra Óptica · Manaus, AM
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-white font-extrabold leading-[1.08] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
            >
              Velocidade e diversão
              <br />
              <span className="text-secondary-dim">pra família toda.</span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="text-white/70 text-body-lg max-w-md"
            >
              Internet fibra óptica com streaming, segurança e suporte 24h. Do básico ao giga, temos o plano certo pra você.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/90 active:scale-[0.98] text-white font-bold text-body-md px-7 py-4 rounded-full transition-all duration-200 shadow-green no-tap"
              >
                <img src="/assets/icons/whatsapp-01.svg" alt="" width={20} height={20} />
                Assinar via WhatsApp
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white text-body-md px-6 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 no-tap"
              >
                Ver planos
                <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="text-white/40 text-label-md"
            >
              Verifique as condições de contratação.
            </motion.p>
          </div>

          {/* Right — form (desktop only) — Ajuste 1: largura reduzida + Ajuste 2: rounded menor */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="hidden lg:flex justify-end"
          >
            <div className="w-full max-w-sm bg-white/8 backdrop-blur-md rounded-2xl p-7">
              <p className="text-white font-semibold text-body-lg mb-5">Fale com um consultor</p>

              {/* Tab switcher — arredondamento ajustado */}
              <div className="relative flex bg-white/10 rounded-lg p-1 mb-5">
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  className="absolute top-1 bottom-1 bg-white rounded-md"
                  style={{ width: '50%', left: tab === 'residencial' ? '4px' : 'calc(50% - 4px)' }}
                />
                {(['residencial', 'empresarial'] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`relative z-10 flex-1 text-label-lg py-2 rounded-md transition-colors duration-200 capitalize no-tap ${tab === t ? 'text-primary' : 'text-white/70'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {/* Nome — muda placeholder por aba; sem Sobrenome em Empresarial */}
                <input
                  type="text"
                  placeholder={tab === 'empresarial' ? 'Nome da Empresa' : 'Nome'}
                  value={form.nome}
                  onChange={handleChange('nome')}
                  className="bg-white/10 border border-white/15 text-white placeholder-white/40 text-body-md px-4 py-3 rounded-lg focus:outline-none focus:border-secondary/60 transition-colors"
                />
                {/* Telefone com máscara automática */}
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={form.telefone}
                  onChange={handlePhone}
                  className="bg-white/10 border border-white/15 text-white placeholder-white/40 text-body-md px-4 py-3 rounded-lg focus:outline-none focus:border-secondary/60 transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={handleChange('email')}
                  className="bg-white/10 border border-white/15 text-white placeholder-white/40 text-body-md px-4 py-3 rounded-lg focus:outline-none focus:border-secondary/60 transition-colors"
                />
                {/* CEP substituindo Endereço completo */}
                <input
                  type="text"
                  placeholder="CEP"
                  value={form.cep}
                  onChange={handleChange('cep')}
                  className="bg-white/10 border border-white/15 text-white placeholder-white/40 text-body-md px-4 py-3 rounded-lg focus:outline-none focus:border-secondary/60 transition-colors"
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-secondary hover:bg-secondary/90 active:scale-[0.98] text-white font-bold text-body-md py-3.5 rounded-lg transition-all duration-200 mt-1 no-tap"
                >
                  Solicitar contato
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      {/* Confirmação de envio — centralizada na tela */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/50 backdrop-blur-sm px-4"
            onClick={() => setSent(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="bg-white rounded-2xl px-8 py-8 flex flex-col items-center gap-3 shadow-card-hover max-w-xs text-center"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
                <CheckCircle2 size={30} className="text-secondary" />
              </div>
              <p className="text-primary font-extrabold text-headline-md">Solicitação Enviada!</p>
              <p className="text-ink-muted text-body-md">Em breve um consultor vai te chamar.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
