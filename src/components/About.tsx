'use client'

import Markdown from 'markdown-to-jsx'
import { IContent } from '@/types'

type Props = {
  content: IContent
}

const options = {
  overrides: {
    h1: { component: () => null },
    a: { props: { target: '_blank', rel: 'noopener noreferrer' } },
  },
}

export default function About({ content }: Props) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">01</span>
          <span className="section-label__title">Hello World</span>
          <div className="section-label__line" />
        </div>
        <div className="about__body">
          <Markdown options={options}>{content.content}</Markdown>
        </div>
      </div>
    </section>
  )
}
