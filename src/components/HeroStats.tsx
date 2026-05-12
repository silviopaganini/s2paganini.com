'use client'

import { useEffect, useState } from 'react'
import { IHeroStat } from '@/types'

type Props = {
  pool: IHeroStat[]
  slotCount?: number
  intervalMs?: number
}

const DEFAULT_SLOTS = 3
const DEFAULT_INTERVAL_MS = 4000
const FADE_MS = 350

type Slot = {
  current: IHeroStat
  next: IHeroStat | null
  isFading: boolean
}

function pickDifferent(pool: IHeroStat[], exclude: IHeroStat[]): IHeroStat {
  const candidates = pool.filter(p => !exclude.includes(p))
  const fromList = candidates.length > 0 ? candidates : pool
  return fromList[Math.floor(Math.random() * fromList.length)]
}

export default function HeroStats({
  pool,
  slotCount = DEFAULT_SLOTS,
  intervalMs = DEFAULT_INTERVAL_MS,
}: Props) {
  const initial: Slot[] = Array.from({ length: slotCount }, (_, i) => ({
    current: pool[i % pool.length],
    next: null,
    isFading: false,
  }))

  const [slots, setSlots] = useState<Slot[]>(initial)

  useEffect(() => {
    if (pool.length <= slotCount) return

    const timers: ReturnType<typeof setTimeout>[] = []

    const scheduleSlot = (slotIdx: number, delay: number) => {
      const t = setTimeout(function tick() {
        setSlots(prev => {
          const visible = prev.map(s => s.current)
          const next = pickDifferent(pool, visible)
          const updated = [...prev]
          updated[slotIdx] = { ...updated[slotIdx], next, isFading: true }
          return updated
        })

        const swap = setTimeout(() => {
          setSlots(prev => {
            const updated = [...prev]
            const s = updated[slotIdx]
            if (s.next) {
              updated[slotIdx] = { current: s.next, next: null, isFading: false }
            }
            return updated
          })
        }, FADE_MS)
        timers.push(swap)

        const nextTick = setTimeout(tick, intervalMs)
        timers.push(nextTick)
      }, delay)
      timers.push(t)
    }

    for (let i = 0; i < slotCount; i++) {
      scheduleSlot(i, intervalMs + i * (intervalMs / slotCount))
    }

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [pool, slotCount, intervalMs])

  return (
    <div className="hero__stats">
      {slots.map((slot, i) => (
        <div className="hero__stat" key={i}>
          <span
            className={`hero__stat-num${slot.isFading ? ' is-fading' : ''}`}
          >
            {slot.isFading && slot.next ? slot.next.num : slot.current.num}
          </span>
          <span
            className={`hero__stat-label${slot.isFading ? ' is-fading' : ''}`}
          >
            {slot.isFading && slot.next ? slot.next.label : slot.current.label}
          </span>
        </div>
      ))}
    </div>
  )
}
