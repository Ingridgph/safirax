export interface Project {
  title: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    title: 'Gerenciador de Chamados',
    description:
      'Sistema web completo para gerenciamento de tickets de suporte com Laravel 12, API RESTful autenticada via Sanctum e interface moderna com Tailwind CSS.',
    url: 'https://github.com/Ingridgph/gerenciadorchamados',
  },
  {
    title: 'Portfólio E-commerce',
    description:
      'Landing page premium de e-commerce com modelo 3D interativo, animações GSAP ScrollTrigger e fluxo de compra via WhatsApp.',
    url: 'https://github.com/Ingridgph/portifolio-noleto-iphones',
  },
  {
    title: 'Bem-te-vi Bar & Lanches',
    description:
      'Site institucional para bar e lanches em Palmas/TO com design responsivo e identidade visual personalizada.',
    url: 'https://github.com/Ingridgph/bem-te-vi-frontend',
  },
]