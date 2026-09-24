import './Portfolio.css'

export function Portfolio() {
  const projects = [
    {
      title: 'Gerenciador de Chamados',
      description: 'Sistema web completo para gerenciamento de tickets de suporte com Laravel 12, API RESTful autenticada via Sanctum e interface moderna com Tailwind CSS.',
      tags: ['Laravel', 'Tailwind', 'Sanctum', 'SQLite'],
      url: 'https://github.com/Ingridgph/gerenciadorchamados',
      image: '',
    },
    {
      title: 'Portfólio E-commerce',
      description: 'Landing page premium de e-commerce com modelo 3D interativo, animações GSAP ScrollTrigger e fluxo de compra via WhatsApp.',
      tags: ['Next.js', 'React', 'Three.js', 'GSAP'],
      url: 'https://github.com/Ingridgph/portifolio-noleto-iphones',
      image: '',
    },
    {
      title: 'Bem-te-vi Bar & Lanches',
      description: 'Site institucional para bar e lanches em Palmas/TO com design responsivo e identidade visual personalizada.',
      tags: ['HTML5', 'CSS3', 'Google Fonts'],
      url: 'https://github.com/Ingridgph/bem-te-vi-frontend',
      image: '',
    },
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-header">
        <span className="portfolio-label">Portfólio</span>
        <h2 className="portfolio-title">Projetos em Destaque</h2>
        <p className="portfolio-subtitle">Soluções digitais que entregam resultados.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
          >
            <div className="card-border"></div>
            <div className="portfolio-card-img">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <svg className="portfolio-card-icon" viewBox="0 0 24 24" fill="none" stroke="#6D00CF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              )}
            </div>
            <h3 className="portfolio-card-title">{project.title}</h3>
            <p className="portfolio-card-text">{project.description}</p>
            <div className="portfolio-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="portfolio-tag">{tag}</span>
              ))}
            </div>
            <span className="portfolio-card-link">Ver no GitHub →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
