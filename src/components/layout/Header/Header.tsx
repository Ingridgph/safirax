import { useEffect, useState } from 'react'
import { Logo } from '@/components/common/Logo/Logo'
import { handleNavClick } from '@/lib/nav'
import { cn } from '@/lib/cn'
import styles from './Header.module.css'

const links = [
  { label: 'Home', href: '#' },
  { label: 'Serviços', href: '#' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const portfolio = document.getElementById('portfolio')
    if (!portfolio) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setActive(entry.isIntersecting ? 'Portfólio' : 'Home')
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    observer.observe(portfolio)
    return () => observer.disconnect()
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Logo className="w-[70px]" />
        </div>
        <nav className={styles.nav}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(styles.link, link.label === active && styles.linkActive)}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}