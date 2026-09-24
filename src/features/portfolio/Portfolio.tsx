import { projects } from '@/data/portfolio'
import { ProjectCard } from './ProjectCard'
import styles from './Portfolio.module.css'

export function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.header}>
        <span className={styles.label}>Portfólio</span>
        <h2 className={styles.title}>Projetos em Destaque</h2>
        <p className={styles.subtitle}>Soluções digitais que entregam resultados.</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}