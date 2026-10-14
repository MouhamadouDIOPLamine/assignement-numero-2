import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

// App only composes the four top-level components. All logic lives inside them.
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-ink">
      <Header />
      <main id="top">
        <Hero />
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}
