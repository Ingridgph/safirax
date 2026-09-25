import type { Project } from '@/data/portfolio'
import styles from './Portfolio.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.cardBorder}></div>
      <div className={styles.cardImg}>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <svg
            className={styles.cardIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-cyan)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        )}
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardText}>{project.description}</p>
      <div className={styles.cardTags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <span className={styles.cardLink}>Ver no GitHub →</span>
    </a>
  )
}