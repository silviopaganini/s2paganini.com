'use client'

import dynamic from 'next/dynamic'

const WebGLBackground = dynamic(() => import('./WebGLBackground'), { ssr: false })

export default function Hero() {
  return (
    <section className="hero">
      <WebGLBackground />
      <div className="hero__grain" aria-hidden />
      <div className="hero__vignette" aria-hidden />

      <div className="hero__content">
        <p className="hero__id" aria-hidden>
          <span>S2PAGANINI</span>
          <span className="hero__id-sep">·</span>
          <span>BCG X · SÃO PAULO</span>
        </p>

        <p className="hero__eyebrow">
          <span>AI Systems</span>
          <span className="hero__eyebrow-sep">—</span>
          <span>Software Engineering</span>
          <span className="hero__eyebrow-sep">—</span>
          <span>Creative Technology</span>
        </p>

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

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">25</span>
            <span className="hero__stat-label">years of craft</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">200+</span>
            <span className="hero__stat-label">engineers led</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">9</span>
            <span className="hero__stat-label">countries</span>
            <span className="hero__stat-sub">🇳🇴 🇺🇸 🇫🇷 🇮🇹 🇬🇧 🇧🇷 🇮🇩 🇹🇭 🇦🇪</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">5×</span>
            <span className="hero__stat-label">Cannes Lions</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden>
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
