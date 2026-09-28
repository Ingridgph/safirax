import { useEffect, useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { projects } from '@/data/portfolio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ProjectCard } from './ProjectCard'
import styles from './Portfolio.module.css'

export function Portfolio() {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia('(min-width: 768px)').matches,
  )
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }))

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.header}>
        <span className={styles.label}>Portfólio</span>
        <h2 className={styles.title}>Projetos em Destaque</h2>
        <p className={styles.subtitle}>Soluções digitais que entregam resultados.</p>
      </div>

      {isDesktop ? (
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[autoplay.current]}
          className={styles.carousel}
          onClickCapture={() => autoplay.current.stop()}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.title}>
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </section>
  )
}
