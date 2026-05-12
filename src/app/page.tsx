'use client'

import { useState } from 'react'
import { IProject } from '@/types'
import { contents, projects, experiments, techStacks, contacts } from '@/data'

import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectGrid from '@/components/ProjectGrid'
import StackSection from '@/components/StackSection'
import AwardsSection from '@/components/AwardsSection'
import ProjectModal from '@/components/ProjectModal'
import Footer from '@/components/Footer'

export default function Page() {
  const [activeProject, setActiveProject] = useState<IProject | null>(null)
  const [activeIsExperiment, setActiveIsExperiment] = useState(false)

  const intro = contents.find(c => c.type === 'intro')!
  const awards = contents.find(c => c.type === 'awards')!
  const publications = contents.find(c => c.type === 'publications')!

  const selectProject = (p: IProject) => { setActiveProject(p); setActiveIsExperiment(false) }
  const selectExperiment = (p: IProject) => { setActiveProject(p); setActiveIsExperiment(true) }

  return (
    <>
      <Hero />

      <About content={intro} />

      <ProjectGrid
        num="02"
        title="Featured Work"
        projects={projects}
        onSelect={selectProject}
      />

      <ProjectGrid
        num="03"
        title="Experiments"
        projects={experiments}
        onSelect={selectExperiment}
        small
      />

      <StackSection stacks={techStacks} />

      <AwardsSection awards={awards} publications={publications} />

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
