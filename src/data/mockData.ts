export interface App {
  id: string
  name: string
  icon: string
  color: string
}

export interface Feature {
  label: string
  included: boolean
}

export interface Plan {
  id: string
  name: string
  speed: string
  speedUnit: string
  tagline: string
  basePrice: number
  maxApps: number
  featured: boolean
  features: Feature[]
}

export const APPS: App[] = [
  { id: 'hbomax', name: 'Max', icon: '/assets/aplicativos/hbo-max.svg', color: '#6B21A8' },
  { id: 'paramount', name: 'Paramount+', icon: '/assets/aplicativos/paramount-plus.svg', color: '#0064FF' },
  { id: 'globoplay', name: 'Globoplay', icon: '/assets/aplicativos/globoplay.svg', color: '#F47920' },
  { id: 'deezer', name: 'Deezer', icon: '/assets/aplicativos/deezer.svg', color: '#A238FF' },
  { id: 'aya', name: 'Aya Idiomas', icon: '/assets/aplicativos/aya-idiomas.svg', color: '#00B4D8' },
  { id: 'kaspersky', name: 'Kaspersky', icon: '/assets/aplicativos/kaspersky.svg', color: '#00A651' },
  { id: 'bancah', name: 'Bancah', icon: '/assets/aplicativos/bancah.svg', color: '#E63946' },
  { id: 'looke', name: 'Looke', icon: '/assets/aplicativos/looke.svg', color: '#E63946' },
]

export const PLANS: Plan[] = [
  {
    id: 'basico',
    name: 'Combo Básico',
    speed: '500',
    speedUnit: 'Mega',
    tagline: 'Ideal para navegar, estudar, redes sociais e chamadas de vídeo.',
    basePrice: 99.00,
    maxApps: 1,
    featured: false,
    features: [
      { label: 'Instalação gratuita', included: true },
      { label: 'Wi-Fi Dual Band', included: true },
      { label: 'IP Fixo opcional', included: false },
      { label: 'Suporte 24h', included: true },
    ],
  },
  {
    id: 'intermediario',
    name: 'Combo Intermediário',
    speed: '600',
    speedUnit: 'Mega',
    tagline: 'Perfeito para home office, streaming em HD e família conectada.',
    basePrice: 109.80,
    maxApps: 2,
    featured: true,
    features: [
      { label: 'Instalação gratuita', included: true },
      { label: 'Wi-Fi Dual Band', included: true },
      { label: 'IP Fixo opcional', included: true },
      { label: 'Suporte 24h', included: true },
    ],
  },
  {
    id: 'premium',
    name: 'Combo Premium',
    speed: '800',
    speedUnit: 'Mega',
    tagline: 'Para gamers e criadores. Velocidade estável para upload e downloads pesados.',
    basePrice: 129.60,
    maxApps: 3,
    featured: false,
    features: [
      { label: 'Instalação gratuita', included: true },
      { label: 'Wi-Fi Dual Band', included: true },
      { label: 'IP Fixo opcional', included: true },
      { label: 'Suporte 24h prioritário', included: true },
    ],
  },
  {
    id: 'ultimate',
    name: 'Combo Ultimate',
    speed: '1',
    speedUnit: 'GIGA',
    tagline: 'Máxima performance para casas com muitos dispositivos e uso intenso.',
    basePrice: 169.90,
    maxApps: 4,
    featured: false,
    features: [
      { label: 'Instalação gratuita', included: true },
      { label: 'Wi-Fi Dual Band 6', included: true },
      { label: 'IP Fixo incluso', included: true },
      { label: 'Suporte 24h prioritário', included: true },
    ],
  },
]

export const APP_PRICE = 29.90

export const NAV_LINKS = [
  { label: 'Planos', href: '#planos' },
  { label: 'Quem Somos', href: '#institucional' },
  { label: 'Aplicativos', href: '#aplicativos' },
]

export const COMPANY_VALUES = [
  { title: 'Transparência', desc: 'Clareza em cada contrato e atendimento.' },
  { title: 'Segurança', desc: 'Rede protegida e monitorada 24 horas.' },
  { title: 'Valorização', desc: 'Clientes são o centro de tudo.' },
  { title: 'Excelência', desc: 'Qualidade sem concessões.' },
]

export const WHATSAPP_NUMBER = '559220201110'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const INSTAGRAM_URL = 'https://instagram.com/jetspeed_fibra'
export const FACEBOOK_URL = 'https://facebook.com/jetspeedfibra'
