import fs from 'fs'
import path from 'path'
import { contacts } from '@/data'

import Hero from '@/components/Hero'
import About from '@/components/About'
import AwardsSection from '@/components/AwardsSection'
import ArchiveCTA from '@/components/ArchiveCTA'
import Footer from '@/components/Footer'

function readContent(filename: string): string {
  return fs.readFileSync(path.join(process.cwd(), 'src/content', filename), 'utf-8')
}

export default function Page() {
  const intro = readContent('intro.md')
  const awards = readContent('awards.md')
  const publications = readContent('publications.md')

  return (
    <>
      <Hero />
      <About content={intro} />
      <AwardsSection awards={awards} publications={publications} />
      <ArchiveCTA />
      <Footer contacts={contacts} />
    </>
  )
}
