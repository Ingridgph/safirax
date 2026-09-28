import type { KeyboardEvent } from 'react'
import { Aurora } from '@/components/common/Aurora/Aurora'
import { Logo } from '@/components/common/Logo/Logo'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import styles from './Hero.module.css'

export function Hero() {
  useScrollToTop()

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleScroll()
    }
  }

  return (
    <section className={styles.hero}>
      <Aurora />
      <div className={styles.content}>
        <Logo
          className="w-[240px] drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
        />
        <h1 className={styles.title}>SafiraX</h1>
        <button
          type="button"
          className={styles.scroll}
          onClick={handleScroll}
          onKeyDown={handleKeyDown}
          aria-label="Rolar para baixo"
        >
          <span className={styles.scrollArrow}>↓</span>
        </button>
      </div>
    </section>
  )
}