import Link from 'next/link'

export default function ArchiveCTA() {
  return (
    <section className="archive-cta">
      <div className="container archive-cta__inner">
        <p className="archive-cta__line">
          <em>Before the agents, there were pixels.</em>
        </p>
        <Link href="/archive" className="archive-cta__link">
          The archive <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
