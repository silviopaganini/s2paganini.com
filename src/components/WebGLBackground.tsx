'use client'

import { useEffect, useRef } from 'react'

// ── Deterministic value noise ─────────────────────
const PERM = (() => {
  const arr = Array.from({ length: 256 }, (_, i) => i)
  let s = 0xdeadbeef
  const rng = () => {
    s = (s ^ (s << 13)) >>> 0
    s = (s ^ (s >> 17)) >>> 0
    s = (s ^ (s << 5)) >>> 0
    return s / 0xffffffff
  }
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return [...arr, ...arr]
})()

const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
const lerp = (a: number, b: number, t: number) => a + t * (b - a)
const h    = (x: number, y: number, z: number) =>
  PERM[(PERM[(PERM[x & 255] + y) & 255] + z) & 255] / 255

function noise3d(x: number, y: number, z: number): number {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z)
  const xf = x - xi, yf = y - yi, zf = z - zi
  const u = fade(xf), v = fade(yf), w = fade(zf)
  return lerp(
    lerp(lerp(h(xi,yi,zi),h(xi+1,yi,zi),u), lerp(h(xi,yi+1,zi),h(xi+1,yi+1,zi),u), v),
    lerp(lerp(h(xi,yi,zi+1),h(xi+1,yi,zi+1),u), lerp(h(xi,yi+1,zi+1),h(xi+1,yi+1,zi+1),u), v),
    w
  )
}

type AgentKind = 'signal' | 'hub' | 'pulse' | 'spark'

interface Agent {
  x: number; y: number
  speed: number
  age: number; maxAge: number
  kind: AgentKind
  alpha: number; width: number
}

const AGENT_COUNT  = 240
const SCALE        = 0.0018
const TRAIL_ALPHA  = 0.032
const TAU          = Math.PI * 2
const MOUSE_RADIUS = 160
const CONNECT_DIST = 140

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    const setSize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * Math.min(window.devicePixelRatio, 2)
      canvas.height = H * Math.min(window.devicePixelRatio, 2)
      ctx.scale(Math.min(window.devicePixelRatio, 2), Math.min(window.devicePixelRatio, 2))
    }
    setSize()

    let mx = -9999, my = -9999

    const spawnAgent = (forceX?: number, forceY?: number): Agent => {
      const r = Math.random()
      const kind: AgentKind =
        r < 0.06 ? 'hub'
        : r < 0.13 ? 'pulse'
        : r < 0.22 ? 'spark'
        : 'signal'
      return {
        x: forceX ?? Math.random() * W,
        y: forceY ?? Math.random() * H,
        speed:
          kind === 'hub'   ? 0.5  + Math.random() * 0.5
        : kind === 'pulse' ? 3.0  + Math.random() * 2.5
        : kind === 'spark' ? 1.1  + Math.random() * 1.0
        :                    1.0  + Math.random() * 1.4,
        age: 0,
        maxAge: (600 + Math.random() * 800) * (kind === 'pulse' ? 0.28 : 1),
        kind,
        alpha:
          kind === 'hub'   ? 0.45 + Math.random() * 0.3
        : kind === 'pulse' ? 0.85 + Math.random() * 0.15
        : kind === 'spark' ? 0.55 + Math.random() * 0.45
        :                    0.22 + Math.random() * 0.38,
        width:
          kind === 'hub'   ? 1.4
        : kind === 'pulse' ? 0.6
        : kind === 'spark' ? 0.75
        :                    0.8,
      }
    }

    const agents: Agent[] = Array.from({ length: AGENT_COUNT }, () => {
      const a = spawnAgent()
      a.age = Math.floor(Math.random() * a.maxAge)
      return a
    })

    let t = Math.random() * 100
    let frameId: number

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
    }
    const onResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      setSize()
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    const draw = () => {
      frameId = requestAnimationFrame(draw)

      ctx.fillStyle = `rgba(6,7,9,${TRAIL_ALPHA})`
      ctx.fillRect(0, 0, W, H)

      t += 0.00028

      // ── Connection web between hub agents ──────────
      const hubs: Agent[] = []
      for (const a of agents) {
        if (a.kind === 'hub') hubs.push(a)
      }

      ctx.lineWidth = 0.4
      for (let i = 0; i < hubs.length; i++) {
        for (let j = i + 1; j < hubs.length; j++) {
          const dx = hubs[i].x - hubs[j].x
          const dy = hubs[i].y - hubs[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < CONNECT_DIST * CONNECT_DIST) {
            const d = Math.sqrt(d2)
            const lifeI = Math.sin(Math.PI * Math.min(hubs[i].age / hubs[i].maxAge, 1))
            const lifeJ = Math.sin(Math.PI * Math.min(hubs[j].age / hubs[j].maxAge, 1))
            const ca = (1 - d / CONNECT_DIST) * 0.18 * Math.min(lifeI, lifeJ)
            ctx.strokeStyle = `rgba(86,126,160,${ca})`
            ctx.beginPath()
            ctx.moveTo(hubs[i].x, hubs[i].y)
            ctx.lineTo(hubs[j].x, hubs[j].y)
            ctx.stroke()
          }
        }
      }

      // ── Agent trails ───────────────────────────────
      for (const a of agents) {
        const n  = noise3d(a.x * SCALE,              a.y * SCALE,              t)
        const n2 = noise3d(a.x * SCALE * 2.4 + 40,  a.y * SCALE * 2.4 + 70,  t * 1.6) * 0.32
        const angle = (n + n2) * TAU * 3.5

        let vx = Math.cos(angle) * a.speed
        let vy = Math.sin(angle) * a.speed

        const mdx = a.x - mx, mdy = a.y - my
        const md2 = mdx * mdx + mdy * mdy
        if (md2 < MOUSE_RADIUS * MOUSE_RADIUS && md2 > 0.1) {
          const md = Math.sqrt(md2)
          const f  = ((MOUSE_RADIUS - md) / MOUSE_RADIUS) * 2.5
          if (a.kind === 'spark') {
            // sparks attracted to cursor
            vx -= (mdx / md) * f
            vy -= (mdy / md) * f
          } else {
            vx += (mdx / md) * f
            vy += (mdy / md) * f
          }
        }

        const nx = a.x + vx
        const ny = a.y + vy

        const life     = a.age / a.maxAge
        const envelope = Math.sin(Math.PI * Math.min(life, 1))
        const alpha    = a.alpha * envelope

        if (a.kind === 'spark') {
          ctx.shadowBlur  = 7
          ctx.shadowColor = 'rgba(0,207,255,0.8)'
        }

        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(nx, ny)
        ctx.lineWidth = a.width

        if (a.kind === 'hub') {
          ctx.strokeStyle = `rgba(86,126,160,${alpha * 0.8})`
        } else if (a.kind === 'pulse') {
          ctx.strokeStyle = `rgba(200,210,220,${alpha})`
        } else if (a.kind === 'spark') {
          ctx.strokeStyle = `rgba(0,207,255,${alpha})`
        } else {
          ctx.strokeStyle = `rgba(140,148,162,${alpha * 0.65})`
        }

        ctx.stroke()

        // Node dot — hub
        if (a.kind === 'hub' && alpha > 0.08) {
          ctx.beginPath()
          ctx.arc(a.x, a.y, 1.6, 0, TAU)
          ctx.fillStyle = `rgba(86,126,160,${alpha * 0.9})`
          ctx.fill()
        }

        // Node dot — spark with glow already active
        if (a.kind === 'spark' && alpha > 0.12) {
          ctx.beginPath()
          ctx.arc(a.x, a.y, 1.3, 0, TAU)
          ctx.fillStyle = `rgba(0,207,255,${alpha})`
          ctx.fill()
        }

        if (a.kind === 'spark') {
          ctx.shadowBlur  = 0
          ctx.shadowColor = 'transparent'
        }

        a.x = nx; a.y = ny; a.age++

        if (a.x < -20 || a.x > W + 20 || a.y < -20 || a.y > H + 20 || a.age >= a.maxAge) {
          Object.assign(a, spawnAgent())
        }
      }
    }

    draw()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
