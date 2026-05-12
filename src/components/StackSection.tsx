'use client'

import { IStack } from '@/types'

type Props = { stacks: IStack[] }

function parseStackItems(raw: string) {
  const lines = raw.split('\n').filter(l => l.trim())
  return lines.map(line => {
    const trimmed = line.trim()
    const isSub = line.startsWith('  ')
    return {
      label: trimmed.replace(/^\*\s*/, '').trim(),
      sub: isSub,
    }
  })
}

export default function StackSection({ stacks }: Props) {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">04</span>
          <span className="section-label__title">Stack</span>
          <div className="section-label__line" />
        </div>
        <div className="stack-grid">
          {stacks.map((col, idx) => (
            <div
              key={col.title}
              className={`stack-col${idx === 0 ? ' stack-col--hero' : ''}`}
            >
              <div className="stack-col__title">{col.title}</div>
              <ul className="stack-col__items">
                {parseStackItems(col.stack).map((item, i) => (
                  <li
                    key={i}
                    className={`stack-col__item${item.sub ? ' stack-col__item--sub' : ''}`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
