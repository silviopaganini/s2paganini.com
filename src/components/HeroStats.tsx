'use client'

import { useEffect, useRef, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}=+*^?#~|@$%'

type Props = {
  pool: string[]
  intervalMs?: number
}

type Display = { resolved: string; scrambling: string }

const DEFAULT_INTERVAL_MS = 5000
const SCRAMBLE_STEPS = 14
const SCRAMBLE_STEP_MS = 45

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const PRESERVE = new Set([' ', '·', '×', '—', '→', '/'])

export default function HeroStats({ pool, intervalMs = DEFAULT_INTERVAL_MS }: Props) {
  const shuffled = useRef<string[]>(pool)
  const [display, setDisplay] = useState<Display>({ resolved: pool[0], scrambling: '' })
  const idxRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    shuffled.current = shuffle(pool)
    setDisplay({ resolved: shuffled.current[0], scrambling: '' })
    idxRef.current = 0
  }, [pool])

  useEffect(() => {
    function startScramble(target: string) {
      if (scrambleRef.current) clearInterval(scrambleRef.current)
      let step = 0
      scrambleRef.current = setInterval(() => {
        const resolvedCount = Math.floor((step / SCRAMBLE_STEPS) * target.length)
        const resolved = target.slice(0, resolvedCount)
        const scrambling = target
          .slice(resolvedCount)
          .split('')
          .map((c) => (PRESERVE.has(c) ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join('')
        setDisplay({ resolved, scrambling })
        step++
        if (step > SCRAMBLE_STEPS) {
          clearInterval(scrambleRef.current!)
          setDisplay({ resolved: target, scrambling: '' })
        }
      }, SCRAMBLE_STEP_MS)
    }

    function tick() {
      idxRef.current = (idxRef.current + 1) % shuffled.current.length
      startScramble(shuffled.current[idxRef.current])
      timerRef.current = setTimeout(tick, intervalMs)
    }

    timerRef.current = setTimeout(tick, intervalMs)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (scrambleRef.current) clearInterval(scrambleRef.current)
    }
  }, [pool, intervalMs])

  return (
    <div className="hero__stat-wrap">
      <span className="hero__stat-label">// career.log</span>
      <p className="hero__stat-text">
        <span className="hero__stat-prompt">&gt;&nbsp;</span>
        <span className="hero__stat-resolved">{display.resolved}</span>
        <span className="hero__stat-scrambling">{display.scrambling}</span>
        <span className="hero__stat-cursor" aria-hidden>▋</span>
      </p>
    </div>
  )
}
