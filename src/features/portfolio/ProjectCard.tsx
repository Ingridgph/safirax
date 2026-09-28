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
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardText}>{project.description}</p>
      <span className={styles.cardLink}>Ver →</span>
    </a>
  )
}
