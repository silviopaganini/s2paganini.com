'use client'

import { IContact } from '@/types'

type Props = { contacts: IContact[] }

export default function Footer({ contacts }: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__name">s2paganini.com — {new Date().getFullYear()}</span>

          <div className="footer__links">
            {contacts.map(c => (
              <a
                key={c.link}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                aria-label={c.link}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.icon.url} alt="" />
              </a>
            ))}
          </div>

          <span className="footer__copy">Built in São Paulo</span>
        </div>
      </div>
    </footer>
  )
}
