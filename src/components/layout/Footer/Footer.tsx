import { Aurora } from '@/components/common/Aurora/Aurora'
import { Logo } from '@/components/common/Logo/Logo'
import { footerLinks, socialLinks } from '@/data/links'
import { handleNavClick } from '@/lib/nav'
import { cn } from '@/lib/cn'
import styles from './Footer.module.css'

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.icon}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.icon}
      aria-hidden="true"
    >
      <path d="M6.1 17.9 3.6 21.2 10.5 20.3 A 8.4 8.4 0 1 0 6.1 17.9 Z" />
      <g transform="translate(7.2 7.2) scale(0.4)">
        <path
          fill="currentColor"
          stroke="none"
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        />
      </g>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <Aurora subtle />
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo className="w-[100px]" />
            <div className={styles.brandText}>
              <span className={styles.name}>SafiraX</span>
              <p className={styles.tagline}>Sites profissionais e acessíveis.</p>
            </div>
          </div>

          <nav className={styles.nav}>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.link}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.social}>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(styles.socialLink, styles.whatsapp)}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(styles.socialLink, styles.github)}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span className={styles.copyright}>© 2026 SafiraX</span>
          <span className={styles.rights}>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  )
}
