import { Navbar } from '@/components/Navbar/Navbar'
import { Hero } from '@/components/Hero/Hero'
import { Plans } from '@/components/Plans/Plans'
import { Institutional } from '@/components/Institutional/Institutional'
import { PromoBanner } from '@/components/Plans/PromoBanner'
import { Apps } from '@/components/Apps/Apps'
import { Footer } from '@/components/Footer/Footer'
import { FloatingActions } from '@/components/FloatingActions/FloatingActions'

export default function App() {
  return (
    <div className="overflow-clip">
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <Institutional />
        <PromoBanner />
        <Apps />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
