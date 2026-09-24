export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Gerenciador de Chamados',
    description:
      'Sistema web completo para gerenciamento de tickets de suporte com Laravel 12, API RESTful autenticada via Sanctum e interface moderna com Tailwind CSS.',
    tags: ['Laravel', 'Tailwind', 'Sanctum', 'SQLite'],
    url: 'https://github.com/Ingridgph/gerenciadorchamados',
  },
  {
    title: 'Portfólio E-commerce',
    description:
      'Landing page premium de e-commerce com modelo 3D interativo, animações GSAP ScrollTrigger e fluxo de compra via WhatsApp.',
    tags: ['Next.js', 'React', 'Three.js', 'GSAP'],
    url: 'https://github.com/Ingridgph/portifolio-noleto-iphones',
  },
  {
    title: 'Bem-te-vi Bar & Lanches',
    description:
      'Site institucional para bar e lanches em Palmas/TO com design responsivo e identidade visual personalizada.',
    tags: ['HTML5', 'CSS3', 'Google Fonts'],
    url: 'https://github.com/Ingridgph/bem-te-vi-frontend',
  },
]