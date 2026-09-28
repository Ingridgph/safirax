import type { MouseEvent } from 'react'

export const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()

  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const section = document.querySelector(href)
  if (!(section instanceof HTMLElement)) return

  const navOffset = document.querySelector('header')?.offsetHeight ?? 70
  const sectionTop = section.getBoundingClientRect().top + window.scrollY
  const top = sectionTop - navOffset
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
}
