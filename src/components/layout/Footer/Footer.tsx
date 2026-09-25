import { Aurora } from '@/components/common/Aurora/Aurora'
import { Logo } from '@/components/common/Logo/Logo'
import styles from './Footer.module.css'

const links = [
  { label: 'Home', href: '#' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Aurora />
      <div className={styles.content}>
        <div className={styles.brand}>
          <Logo variant="header" className="w-[56px]" />
          <span className={styles.name}>SafiraX</span>
        </div>
        <p className={styles.tagline}>Soluções digitais que entregam resultados.</p>
        <nav className={styles.nav}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className={styles.copyright}>© 2026 SafiraX. Todos os direitos reservados.</p>
    </footer>
  )
}