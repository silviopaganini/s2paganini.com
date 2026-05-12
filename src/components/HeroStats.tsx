'use client'

import { useEffect, useRef, useState } from 'react'
import { IHeroStat } from '@/types'

type Props = {
  pool: IHeroStat[]
  intervalMs?: number
}

const DEFAULT_INTERVAL_MS = 5500
const MORPH_MS = 900
const SCRAMBLE_MS = 600
const FRAME_MS = 40

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+×∞/·'

function randomGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
}

function scramble(target: string): string {
  let out = ''
  for (let i = 0; i < target.length; i++) {
    const ch = target[i]
    if (ch === ' ') {
      out += ' '
    } else {
      out += randomGlyph()
    }
  }
  return out
}

function pickNextIndex(pool: IHeroStat[], currentIdx: number): number {
  if (pool.length <= 1) return currentIdx
  let next = Math.floor(Math.random() * pool.length)
  while (next === currentIdx) {
    next = Math.floor(Math.random() * pool.length)
  }
  return next
}

export default function HeroStats({
  pool,
  intervalMs = DEFAULT_INTERVAL_MS,
}: Props) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [displayNum, setDisplayNum] = useState(pool[0]?.num ?? '')
  const [displayLabel, setDisplayLabel] = useState(pool[0]?.label ?? '')
  const [isMorphing, setIsMorphing] = useState(false)
  const morphFramesRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (pool.length === 0) return

    const cycleTimer = setTimeout(function cycle() {
      const nextIdx = pickNextIndex(pool, activeIdx)
      const target = pool[nextIdx]

      setIsMorphing(true)

      // Scramble phase: rapid random glyphs
      const start = Date.now()
      morphFramesRef.current = setInterval(() => {
        const elapsed = Date.now() - start
        if (elapsed >= SCRAMBLE_MS) {
          if (morphFramesRef.current) clearInterval(morphFramesRef.current)
          // Settle phase: show real target
          setDisplayNum(target.num)
          setDisplayLabel(target.label)
        } else {
          setDisplayNum(scramble(target.num))
          setDisplayLabel(scramble(target.label))
        }
      }, FRAME_MS)

      // End of full morph: commit new active index, stop morphing flag
      const morphEnd = setTimeout(() => {
        setActiveIdx(nextIdx)
        setDisplayNum(target.num)
        setDisplayLabel(target.label)
        setIsMorphing(false)
      }, MORPH_MS)

      return () => clearTimeout(morphEnd)
    }, intervalMs)

    return () => {
      clearTimeout(cycleTimer)
      if (morphFramesRef.current) clearInterval(morphFramesRef.current)
    }
  }, [activeIdx, pool, intervalMs])

  return (
    <div className="hero__stats hero__stats--single">
      <div className="hero__stat">
        <span
          className={`hero__stat-num${isMorphing ? ' is-morphing' : ''}`}
          aria-live="polite"
        >
          {displayNum}
        </span>
        <span
          className={`hero__stat-label${isMorphing ? ' is-morphing' : ''}`}
        >
          {displayLabel}
        </span>
      </div>
    </div>
  )
}
