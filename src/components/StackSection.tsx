// @ts-nocheck
'use client'

import { IStack } from '@/types'

type Props = { stacks: IStack[] }

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
              <div className="stack-col__num">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="stack-col__title">{col.title}</div>
              <p className="stack-col__statement">{col.statement}</p>
              <p className="stack-col__proof">{col.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
