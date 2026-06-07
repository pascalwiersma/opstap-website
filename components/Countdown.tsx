'use client'

import { useEffect, useState } from 'react'

const LANCERING = new Date('2026-07-01T10:00:00Z') // 12:00 Amsterdam (UTC+2 zomer)

function berekenRest() {
  const nu = Date.now()
  const diff = LANCERING.getTime() - nu
  if (diff <= 0) return null
  const dagen = Math.floor(diff / (1000 * 60 * 60 * 24))
  const uren = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minuten = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconden = Math.floor((diff % (1000 * 60)) / 1000)
  return { dagen, uren, minuten, seconden }
}

export default function Countdown() {
  const [rest, setRest] = useState<ReturnType<typeof berekenRest>>(null)

  useEffect(() => {
    setRest(berekenRest())
    const id = setInterval(() => setRest(berekenRest()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!rest) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#E8611A] flex items-center justify-center gap-3 py-2 text-white text-xs sm:text-sm font-medium">
      <span className="opacity-80">OpStap lanceert over</span>
      <div className="flex items-center gap-2">
        <Blok waarde={rest.dagen} label="dagen" />
        <Sep />
        <Blok waarde={rest.uren} label="uur" />
        <Sep />
        <Blok waarde={rest.minuten} label="min" />
        <Sep />
        <Blok waarde={rest.seconden} label="sec" />
      </div>
    </div>
  )
}

function Blok({ waarde, label }: { waarde: number; label: string }) {
  return (
    <div className="flex items-baseline gap-0.5">
      <span className="font-black tabular-nums text-base sm:text-lg leading-none">
        {String(waarde).padStart(2, '0')}
      </span>
      <span className="text-white/70 text-xs">{label}</span>
    </div>
  )
}

function Sep() {
  return <span className="text-white/40 font-bold">·</span>
}
