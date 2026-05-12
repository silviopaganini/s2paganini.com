'use client'

import dynamic from 'next/dynamic'
import { heroStats } from '@/data'
import HeroStats from './HeroStats'

const WebGLBackground = dynamic(() => import('./WebGLBackground'), { ssr: false })

const TOPICS = [
  'Agentic Systems',
  'LLM in Production',
  'Agentic PDLC',
  'AI at Enterprise Scale',
  'DevSecOps for AI',
]

export default function Hero() {
  return (
    <section className="hero">
      <WebGLBackground />
      <div className="hero__grain" aria-hidden />
      <div className="hero__vignette" aria-hidden />

      <div className="hero__content">
        <h1 className="hero__name">
          <em>Silvio</em>
          <br />
          <em>Paganini</em>
        </h1>

        <div className="hero__role">
          <span className="hero__role-title">Director of Software Engineering</span>
          <span className="hero__role-at">at</span>
          <span className="hero__role-company">BCG X</span>
          <span className="hero__role-loc">São Paulo, Brazil</span>
        </div>

        <p className="hero__tagline">From pixels to production AI systems.</p>

        <p className="hero__topics">
          {TOPICS.map((t, i) => (
            <span key={t}>
              <span>{t}</span>
              {i < TOPICS.length - 1 && (
                <span className="hero__topic-sep"> · </span>
              )}
            </span>
          ))}
        </p>

        <HeroStats pool={heroStats} />
      </div>

      <div className="hero__scroll" aria-hidden>
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
