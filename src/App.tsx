import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { Hero } from '@/features/hero/Hero'
import { Portfolio } from '@/features/portfolio/Portfolio'

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  )
}

export default App