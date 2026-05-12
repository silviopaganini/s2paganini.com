'use client'

import { useRef } from 'react'
import { IProject } from '@/types'

type Props = {
  project: IProject
  onSelect: (p: IProject) => void
  small?: boolean
}

export default function ProjectCard({ project, onSelect, small }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current && project.video) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className={`project-card${small ? ' project-card--small' : ''}`}
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(project)}
      aria-label={project.title}
    >
      <div className="project-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="project-card__img"
          src={project.thumb.url}
          alt={project.title}
          loading="lazy"
        />
        {project.video && (
          <video
            ref={videoRef}
            className="project-card__video"
            src={project.video.url}
            muted
            loop
            playsInline
            preload="none"
          />
        )}
      </div>

      <div className="project-card__overlay">
        <p className="project-card__title">{project.title}</p>
        {project.link && (
          <span className="project-card__meta">View project ↗</span>
        )}
      </div>

      <div className="project-card__arrow">↗</div>
    </div>
  )
}
