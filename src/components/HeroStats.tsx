'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  pool: string[]
  intervalMs?: number
}

const FADE_MS = 300
const DEFAULT_INTERVAL_MS = 5000

export default function HeroStats({ pool, intervalMs = DEFAULT_INTERVAL_MS }: Props) {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function tick() {
      setVisible(false)
      timerRef.current = setTimeout(() => {
        setIdx(i => (i + 1) % pool.length)
        setVisible(true)
        timerRef.current = setTimeout(tick, intervalMs)
      }, FADE_MS)
    }
    timerRef.current = setTimeout(tick, intervalMs)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pool, intervalMs])

  return (
    <div className="hero__stat-wrap">
      <p className={`hero__stat-text${visible ? '' : ' hero__stat-text--hidden'}`}>
        — {pool[idx]}
      </p>
    </div>
  )
}
