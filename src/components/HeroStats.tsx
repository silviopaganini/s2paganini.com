'use client'

import { useEffect, useRef, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}=+*^?#~|@$%'

type Props = {
  pool: string[]
  intervalMs?: number
}

const DEFAULT_INTERVAL_MS = 5000
const SCRAMBLE_STEPS = 14
const SCRAMBLE_STEP_MS = 45

export default function HeroStats({ pool, intervalMs = DEFAULT_INTERVAL_MS }: Props) {
  const [display, setDisplay] = useState(pool[0])
  const idxRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    function startScramble(target: string) {
      if (scrambleRef.current) clearInterval(scrambleRef.current)
      let step = 0
      scrambleRef.current = setInterval(() => {
        const resolved = Math.floor((step / SCRAMBLE_STEPS) * target.length)
        const scrambled = target
          .split('')
          .map((char, i) => {
            if (char === ' ' || char === '·' || char === '×' || char === '—') return char
            if (i < resolved) return char
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
        setDisplay(scrambled)
        step++
        if (step > SCRAMBLE_STEPS) {
          clearInterval(scrambleRef.current!)
          setDisplay(target)
        }
      }, SCRAMBLE_STEP_MS)
    }

    function tick() {
      idxRef.current = (idxRef.current + 1) % pool.length
      startScramble(pool[idxRef.current])
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
      <p className="hero__stat-text">— {display}</p>
    </div>
  )
}
