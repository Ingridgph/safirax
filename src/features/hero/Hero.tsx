import type { KeyboardEvent } from 'react'
import { GlyphMatrix } from '@/components/common/GlyphMatrix/GlyphMatrix'
import { Logo } from '@/components/common/Logo/Logo'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { Bubbles } from './Bubbles'
import styles from './Hero.module.css'

export function Hero() {
  useScrollToTop()

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleScroll()
    }
  }

  return (
    <section className={styles.hero}>
      <div className="absolute inset-0 z-0">
        <Bubbles />
      </div>
      <div className={styles.glow} aria-hidden="true" />
      <div className="absolute inset-0 z-4">
        <GlyphMatrix
          glyphs="01·•+*/\<>="
          cellSize={14}
          mutationRate={0.04}
          interval={90}
          fadeBottom={0.6}
          color="var(--color-purple-900)"
          highlightColor="var(--color-purple-950)"
          highlightRadius={110}
          highlightStrength={1}
        />
      </div>
      <div className={styles.content}>
        <Logo variant="hero" className="w-[260px] max-[480px]:w-[180px]" />
        <h1 className={styles.title}>SafiraX</h1>
        <div
          className={styles.scroll}
          onClick={handleScroll}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Rolar para baixo"
        >
          <span className={styles.scrollArrow}>↑</span>
          <span className={styles.scrollText}>Deslize</span>
        </div>
      </div>
    </section>
  )
}