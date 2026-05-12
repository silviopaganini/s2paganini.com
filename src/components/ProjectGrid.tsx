'use client'

import { IProject } from '@/types'
import ProjectCard from './ProjectCard'

type Props = {
  num: string
  title: string
  subtitle?: string
  projects: IProject[]
  onSelect: (p: IProject) => void
  small?: boolean
}

export default function ProjectGrid({ num, title, subtitle, projects, onSelect, small }: Props) {
  return (
    <section id={title.toLowerCase().replace(/\s+/g, '-')} className="section">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">{num}</span>
          <span className="section-label__title">{title}</span>
          <div className="section-label__line" />
          {subtitle && (
            <span className="section-label__title" style={{ opacity: 0.5 }}>{subtitle}</span>
          )}
        </div>
      </div>
      <div className={`project-grid${small ? ' project-grid--small' : ''}`}>
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} onSelect={onSelect} small={small} />
        ))}
      </div>
    </section>
  )
}
