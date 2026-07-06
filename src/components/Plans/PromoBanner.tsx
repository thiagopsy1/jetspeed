import { motion } from 'framer-motion'

export function PromoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-clip"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet="/assets/banner/banner-copa-jetspeed-mobile.png" />
        <img
          src="/assets/banner/banner-copa-jetspeed.png"
          alt="Promoção JetSpeed"
          className="w-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </picture>
    </motion.section>
  )
}
