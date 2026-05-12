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

type AgentKind = 'signal' | 'hub' | 'pulse'

interface Agent {
  x: number; y: number
  speed: number; baseSpeed: number
  age: number; maxAge: number
  kind: AgentKind
  alpha: number; width: number
}

const AGENT_COUNT  = 240
const SCALE        = 0.0018
const TRAIL_ALPHA  = 0.018   // slower decay = longer, more dramatic trails
const TAU          = Math.PI * 2
const MOUSE_RADIUS = 160

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
      const kind: AgentKind = r < 0.06 ? 'hub' : r < 0.13 ? 'pulse' : 'signal'
      const baseSpeed =
        kind === 'hub'   ? 0.5  + Math.random() * 0.5
      : kind === 'pulse' ? 3.0  + Math.random() * 2.5
      :                    1.0  + Math.random() * 1.4
      return {
        x: forceX ?? Math.random() * W,
        y: forceY ?? Math.random() * H,
        speed: baseSpeed, baseSpeed,
        age: 0,
        maxAge: (600 + Math.random() * 800) * (kind === 'pulse' ? 0.28 : 1),
        kind,
        alpha:
          kind === 'hub'   ? 0.45 + Math.random() * 0.3
        : kind === 'pulse' ? 0.85 + Math.random() * 0.15
        :                    0.22 + Math.random() * 0.38,
        width:
          kind === 'hub'   ? 1.4
        : kind === 'pulse' ? 0.6
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
    let frame = 0

    // ── Glitch state ──────────────────────────────
    let glitching     = false
    let glitchFrames  = 0
    let nextGlitch    = 120 + Math.random() * 180   // frames until first glitch

    const triggerGlitch = () => {
      glitching    = true
      glitchFrames = 8 + Math.floor(Math.random() * 14)
      nextGlitch   = frame + 160 + Math.random() * 300
      // spike a random subset of signals to burst speed
      for (const a of agents) {
        if (a.kind === 'signal' && Math.random() < 0.25) {
          a.speed = a.baseSpeed * (4 + Math.random() * 5)
        }
      }
    }

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
      frame++

      // ── Glitch trigger ────────────────────────
      if (!glitching && frame > nextGlitch) triggerGlitch()

      if (glitching) {
        glitchFrames--
        if (glitchFrames <= 0) {
          glitching = false
          // restore spiked speeds
          for (const a of agents) a.speed = a.baseSpeed
        }
      }

      // ── Trail fade ────────────────────────────
      // During glitch: faster fade for sharper contrast pop
      const trailA = glitching ? TRAIL_ALPHA * 3.5 : TRAIL_ALPHA
      ctx.fillStyle = `rgba(6,7,9,${trailA})`
      ctx.fillRect(0, 0, W, H)

      // ── Glitch slice artifacts ─────────────────
      // Copy shifted horizontal strips back onto canvas — classic digital glitch
      if (glitching && Math.random() < 0.7) {
        const slices = 1 + Math.floor(Math.random() * 3)
        for (let s = 0; s < slices; s++) {
          const sy     = Math.floor(Math.random() * H)
          const sh     = 3 + Math.floor(Math.random() * 28)
          const shift  = (Math.random() < 0.5 ? -1 : 1) * (8 + Math.random() * 40)
          ctx.save()
          ctx.globalAlpha = 0.55 + Math.random() * 0.35
          ctx.drawImage(canvas, 0, sy, W, sh, shift, sy, W, sh)
          ctx.restore()
        }
      }

      // ── Occasional bright scan line ───────────
      if (glitching && Math.random() < 0.25) {
        const ly = Math.floor(Math.random() * H)
        ctx.save()
        ctx.globalAlpha = 0.12 + Math.random() * 0.18
        ctx.fillStyle = '#C8D2DC'
        ctx.fillRect(0, ly, W, 1 + Math.floor(Math.random() * 2))
        ctx.restore()
      }

      // ── Evolve field ──────────────────────────
      const tSpeed = glitching ? 0.0012 : 0.00028
      t += tSpeed

      for (const a of agents) {
        const n  = noise3d(a.x * SCALE,              a.y * SCALE,              t)
        const n2 = noise3d(a.x * SCALE * 2.4 + 40,  a.y * SCALE * 2.4 + 70,  t * 1.6) * 0.32
        // During glitch: extra turbulence octave
        const n3 = glitching
          ? noise3d(a.x * SCALE * 5 + 80, a.y * SCALE * 5 + 120, t * 3) * 0.45
          : 0
        const angle = (n + n2 + n3) * TAU * 3.5

        let vx = Math.cos(angle) * a.speed
        let vy = Math.sin(angle) * a.speed

        const mdx = a.x - mx, mdy = a.y - my
        const md2 = mdx * mdx + mdy * mdy
        if (md2 < MOUSE_RADIUS * MOUSE_RADIUS && md2 > 0.1) {
          const md = Math.sqrt(md2)
          const f  = ((MOUSE_RADIUS - md) / MOUSE_RADIUS) * 3.0
          vx += (mdx / md) * f
          vy += (mdy / md) * f
        }

        const nx = a.x + vx
        const ny = a.y + vy

        const life     = a.age / a.maxAge
        const envelope = Math.sin(Math.PI * Math.min(life, 1))
        // Glitch: boost alpha on all agents for dramatic pop
        const glitchBoost = (glitching && a.kind === 'signal') ? 1.8 : 1.0
        const alpha    = a.alpha * envelope * glitchBoost

        // ── Pulse: RGB-shift rendering ──────────
        if (a.kind === 'pulse') {
          const shift = glitching ? 3.5 : 1.5
          // Red channel offset
          ctx.beginPath(); ctx.moveTo(a.x - shift, a.y); ctx.lineTo(nx - shift, ny)
          ctx.lineWidth = a.width; ctx.strokeStyle = `rgba(255,60,60,${alpha * 0.5})`
          ctx.stroke()
          // Blue channel offset
          ctx.beginPath(); ctx.moveTo(a.x + shift, a.y); ctx.lineTo(nx + shift, ny)
          ctx.strokeStyle = `rgba(60,180,255,${alpha * 0.5})`
          ctx.stroke()
          // Main near-white line
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(nx, ny)
          ctx.strokeStyle = `rgba(200,210,220,${alpha})`
          ctx.stroke()
        } else {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(nx, ny)
          ctx.lineWidth = a.width

          if (a.kind === 'hub') {
            ctx.strokeStyle = `rgba(86,126,160,${alpha * 0.8})`
          } else {
            // Signal: briefly go cyan during glitch bursts
            const isBursting = glitching && a.speed > a.baseSpeed * 2
            ctx.strokeStyle = isBursting
              ? `rgba(0,207,255,${alpha * 0.6})`
              : `rgba(140,148,162,${alpha * 0.65})`
          }
          ctx.stroke()
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
