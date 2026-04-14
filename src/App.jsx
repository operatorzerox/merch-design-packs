import Header from './components/Header'
import Hero from './components/Hero'
import Packs from './components/Packs'
import Preview from './components/Preview'
import Included from './components/Included'
import Comparison from './components/Comparison'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-secondary">
      <Header />
      <main>
        <Hero />
        <Packs />
        <Preview />
        <Included />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
