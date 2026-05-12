'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IProject } from '@/types'
import { projects, experiments } from '@/data'

import ProjectGrid from '@/components/ProjectGrid'
import ProjectModal from '@/components/ProjectModal'
import Footer from '@/components/Footer'
import { contacts } from '@/data'

export default function ArchivePage() {
  const [activeProject, setActiveProject] = useState<IProject | null>(null)
  const [activeIsExperiment, setActiveIsExperiment] = useState(false)

  const selectProject = (p: IProject) => {
    setActiveProject(p)
    setActiveIsExperiment(false)
  }
  const selectExperiment = (p: IProject) => {
    setActiveProject(p)
    setActiveIsExperiment(true)
  }

  return (
    <>
      <section className="archive-header">
        <div className="container">
          <Link href="/" className="archive-header__back">
            ← back
          </Link>
          <h1 className="archive-header__title">Archive</h1>
          <p className="archive-header__subhead">
            2000 – 2024. Things I made before the AI era.
          </p>
        </div>
      </section>

      <ProjectGrid
        num="01"
        title="Featured Work"
        projects={projects}
        onSelect={selectProject}
      />

      <ProjectGrid
        num="02"
        title="Experiments"
        projects={experiments}
        onSelect={selectExperiment}
        small
      />

      <Footer contacts={contacts} />

      {activeProject && (
        <ProjectModal
          project={activeProject}
          isExperiment={activeIsExperiment}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}
