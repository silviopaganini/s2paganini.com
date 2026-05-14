'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

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
  const [idx, setIdx] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    shuffled.current = shuffle(pool)
    setDisplay({ resolved: shuffled.current[0], scrambling: '' })
    setIdx(0)
  }, [pool])

  const startScramble = useCallback((target: string) => {
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
  }, [])

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const advance = useCallback(() => {
    setIdx((prev) => {
      const next = (prev + 1) % shuffled.current.length
      startScramble(shuffled.current[next])
      return next
    })
  }, [startScramble])

  const schedule = useCallback(() => {
    clearTimer()
    timerRef.current = setTimeout(function loop() {
      if (!pausedRef.current) advance()
      timerRef.current = setTimeout(loop, intervalMs)
    }, intervalMs)
  }, [advance, clearTimer, intervalMs])

  useEffect(() => {
    schedule()
    return () => {
      clearTimer()
      if (scrambleRef.current) clearInterval(scrambleRef.current)
    }
  }, [schedule, clearTimer])

  const handleClick = () => {
    advance()
    schedule()
  }

  const handleEnter = () => {
    pausedRef.current = true
  }
  const handleLeave = () => {
    pausedRef.current = false
  }

  const total = pool.length
  const countWidth = String(total).length
  const counter = `[${String(idx + 1).padStart(countWidth, '0')} / ${total}]`

  return (
    <div
      className="hero__stat-wrap"
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault()
          handleClick()
        }
      }}
      aria-label="Next career entry"
    >
      <span className="hero__stat-labelrow">
        <span
          key={idx}
          className="hero__stat-progress"
          style={{ animationDuration: `${intervalMs}ms` }}
          aria-hidden
        />
        <span className="hero__stat-label">// career.log</span>
        <span className="hero__stat-counter" aria-hidden>
          {counter}
        </span>
      </span>
      <p className="hero__stat-text">
        <span className="hero__stat-prompt">&gt;&nbsp;</span>
        <span className="hero__stat-resolved">{display.resolved}</span>
        <span className="hero__stat-scrambling">{display.scrambling}</span>
        <span className="hero__stat-cursor" aria-hidden>▋</span>
      </p>
    </div>
  )
}
