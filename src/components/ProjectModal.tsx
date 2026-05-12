'use client'

import { useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import { IProject } from '@/types'

type Props = {
  project: IProject
  isExperiment?: boolean
  onClose: () => void
}

const options = {
  overrides: {
    a: { props: { target: '_blank', rel: 'noopener noreferrer' } },
    iframe: { props: { loading: 'lazy' } },
  },
}

export default function ProjectModal({ project, isExperiment, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  // Experiments with a direct URL get embedded as iframe
  const showEmbed = isExperiment && !!project.link

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={`modal${showEmbed ? ' modal--embed' : ''}`} role="dialog" aria-modal aria-label={project.title}>
        <div className="modal__header">
          <span className="modal__title">{project.title}</span>
          <div className="modal__header-actions">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__external"
                title="Open in new tab"
              >
                ↗
              </a>
            )}
            <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
          </div>
        </div>

        {showEmbed ? (
          <iframe
            className="modal__iframe"
            src={project.link}
            title={project.title}
            allow="accelerometer; camera; fullscreen; microphone"
            loading="lazy"
          />
        ) : (
          <div className="modal__body">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__link"
              >
                View project ↗
              </a>
            )}
            {project.body ? (
              <Markdown options={options}>{project.body}</Markdown>
            ) : (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-dim)' }}>
                No case study available.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
