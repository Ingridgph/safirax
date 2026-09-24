import { Logo } from '@/components/common/Logo/Logo'
import { cn } from '@/lib/cn'
import styles from './Header.module.css'

const links = [
  { label: 'Home', href: '#', active: true },
  { label: 'Serviços', href: '#', active: false },
  { label: 'Portfólio', href: '#portfolio', active: false },
  { label: 'Contato', href: '#', active: false },
]

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Logo variant="header" className="w-[70px]" />
        </div>
        <nav className={styles.nav}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(styles.link, link.active && styles.linkActive)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.right}>
          <button className={styles.btn}>Fale Conosco</button>
        </div>
      </div>
    </header>
  )
}