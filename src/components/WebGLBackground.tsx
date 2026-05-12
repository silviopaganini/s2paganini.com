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

const fade  = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
const lerp  = (a: number, b: number, t: number) => a + t * (b - a)
const h     = (x: number, y: number, z: number) =>
  PERM[(PERM[(PERM[x & 255] + y) & 255] + z) & 255] / 255

function noise3d(x: number, y: number, z: number): number {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z)
  const xf = x - xi, yf = y - yi, zf = z - zi
  const u = fade(xf), v = fade(yf), w = fade(zf)
  return lerp(
    lerp(lerp(h(xi, yi, zi), h(xi+1, yi, zi), u), lerp(h(xi, yi+1, zi), h(xi+1, yi+1, zi), u), v),
    lerp(lerp(h(xi, yi, zi+1), h(xi+1, yi, zi+1), u), lerp(h(xi, yi+1, zi+1), h(xi+1, yi+1, zi+1), u), v),
    w
  )
}

// ── Agent types ───────────────────────────────────
// signal: the majority — thin cool-silver traces
// hub:    rare — muted steel-blue, slower, more persistent
// pulse:  rare — near-white bright sparks, fast and brief

type AgentKind = 'signal' | 'hub' | 'pulse'

interface Agent {
  x: number
  y: number
  speed: number
  age: number
  maxAge: number
  kind: AgentKind
  alpha: number
  width: number
}

const AGENT_COUNT  = 180
const SCALE        = 0.0020
const TRAIL_ALPHA  = 0.022   // slower decay = longer, softer trails
const TAU          = Math.PI * 2
const MOUSE_RADIUS = 120

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
      const kind: AgentKind = r < 0.06 ? 'hub' : r < 0.11 ? 'pulse' : 'signal'
      return {
        x: forceX ?? Math.random() * W,
        y: forceY ?? Math.random() * H,
        speed: kind === 'hub'   ? 0.45 + Math.random() * 0.4
             : kind === 'pulse' ? 2.4  + Math.random() * 2.0
             :                    0.9  + Math.random() * 1.1,
        age:    0,
        maxAge: (700 + Math.random() * 700) * (kind === 'pulse' ? 0.35 : 1),
        kind,
        // hub and signal intentionally dim; pulse flashes bright
        alpha: kind === 'hub'   ? 0.35 + Math.random() * 0.25
             : kind === 'pulse' ? 0.75 + Math.random() * 0.25
             :                    0.18 + Math.random() * 0.30,
        width: kind === 'hub'   ? 1.2
             : kind === 'pulse' ? 0.5
             :                    0.7,
      }
    }

    const agents: Agent[] = Array.from({ length: AGENT_COUNT }, () => {
      const a = spawnAgent()
      a.age = Math.floor(Math.random() * a.maxAge) // stagger births
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

      // Trail: semi-transparent overlay — near-black matching --bg (#060709)
      ctx.fillStyle = `rgba(6,7,9,${TRAIL_ALPHA})`
      ctx.fillRect(0, 0, W, H)

      t += 0.00028  // slow, deliberate field evolution

      for (const a of agents) {
        // Two-octave noise: base flow + subtle turbulence layer
        const n  = noise3d(a.x * SCALE,          a.y * SCALE,          t)
        const n2 = noise3d(a.x * SCALE * 2.2 + 40, a.y * SCALE * 2.2 + 70, t * 1.5) * 0.3
        const angle = (n + n2) * TAU * 3.2

        let vx = Math.cos(angle) * a.speed
        let vy = Math.sin(angle) * a.speed

        // Mouse disturbance — gentle scatter
        const mdx = a.x - mx, mdy = a.y - my
        const md2 = mdx * mdx + mdy * mdy
        if (md2 < MOUSE_RADIUS * MOUSE_RADIUS && md2 > 0.1) {
          const md = Math.sqrt(md2)
          const f  = ((MOUSE_RADIUS - md) / MOUSE_RADIUS) * 2.5
          vx += (mdx / md) * f
          vy += (mdy / md) * f
        }

        const nx = a.x + vx
        const ny = a.y + vy

        // Life envelope: smooth fade in/out
        const life     = a.age / a.maxAge
        const envelope = Math.sin(Math.PI * Math.min(life, 1))
        const alpha    = a.alpha * envelope

        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(nx, ny)
        ctx.lineWidth = a.width

        if (a.kind === 'hub') {
          // Muted steel blue — matches --accent-2 (#567EA0)
          ctx.strokeStyle = `rgba(86,126,160,${alpha * 0.7})`
        } else if (a.kind === 'pulse') {
          // Near-white flash — matches --text-bright (#C8D2DC)
          ctx.strokeStyle = `rgba(200,210,220,${alpha})`
        } else {
          // Cool silver — the dominant texture
          ctx.strokeStyle = `rgba(140,148,162,${alpha * 0.6})`
        }

        ctx.stroke()

        a.x = nx
        a.y = ny
        a.age++

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
