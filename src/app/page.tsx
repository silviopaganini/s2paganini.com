import { contents, contacts } from '@/data'

import Hero from '@/components/Hero'
import About from '@/components/About'
import AwardsSection from '@/components/AwardsSection'
import ArchiveCTA from '@/components/ArchiveCTA'
import Footer from '@/components/Footer'

export default function Page() {
  const intro = contents.find(c => c.type === 'intro')!
  const awards = contents.find(c => c.type === 'awards')!
  const publications = contents.find(c => c.type === 'publications')!

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
