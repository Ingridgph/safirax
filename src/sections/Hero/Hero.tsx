import { useEffect } from 'react'
import { Logo } from './Logo'
import { Bubbles } from './Bubbles'
import { GlyphMatrix } from '../../effects/GlyphMatrix'
import './Hero.css'

export function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="absolute inset-0 z-0">
        <Bubbles />
      </div>
      <div className="hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 z-4">
        <GlyphMatrix
          glyphs="01·•+*/\<>="
          cellSize={14}
          mutationRate={0.04}
          interval={90}
          fadeBottom={0.6}
          color="#1C0034"
          highlightColor="#000000"
          highlightRadius={110}
          highlightStrength={1}
        />
      </div>
      <div className="hero-content">
        <Logo />
        <h1 className="hero-title">SafiraX</h1>
        <div className="hero-scroll" onClick={handleScroll} role="button" tabIndex={0} aria-label="Rolar para baixo">
          <span className="hero-scroll-arrow">↑</span>
          <span className="hero-scroll-text">Deslize</span>
        </div>
      </div>
    </section>
  )
}
