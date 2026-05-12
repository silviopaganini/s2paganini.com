'use client'

import Markdown from 'markdown-to-jsx'

const AWARD_STATS = [
  { num: '16×', label: 'TheFWA' },
  { num: '5×', label: 'Awwwards' },
  { num: '2×', label: 'Lovie' },
  { num: '5×', label: 'Cannes Lions' },
  { num: '2×', label: 'One Show' },
  { num: '3×', label: 'Webbys' },
  { num: '3×', label: 'Effie' },
]

const pubsOptions = {
  overrides: {
    a: { props: { target: '_blank', rel: 'noopener noreferrer' } },
  },
}

type Props = {
  awards: string
  publications: string
}

export default function AwardsSection({ awards, publications }: Props) {
  return (
    <>
      <section id="awards" className="section">
        <div className="container">
          <div className="section-label">
            <span className="section-label__num">05</span>
            <span className="section-label__title">Awards &amp; Recognition</span>
            <div className="section-label__line" />
          </div>
          <div className="awards-stats">
            {AWARD_STATS.map(s => (
              <div key={s.label} className="award-stat">
                <span className="award-stat__num">{s.num}</span>
                <span className="award-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="pubs-body" style={{ fontSize: '13px', marginTop: 0 }}>
            <Markdown options={pubsOptions}>{awards}</Markdown>
          </div>
        </div>
      </section>

      <section id="publications" className="section">
        <div className="container">
          <div className="section-label">
            <span className="section-label__num">06</span>
            <span className="section-label__title">Publications &amp; Press</span>
            <div className="section-label__line" />
          </div>
          <div className="pubs-body">
            <Markdown options={pubsOptions}>{publications}</Markdown>
          </div>
        </div>
      </section>
    </>
  )
}
