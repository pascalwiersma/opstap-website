'use client'

import { useState } from 'react'

/** Genereert eenmalig (per formulier-mount) twee kleine getallen voor de anti-spam-rekensom. */
export function useRekensom() {
  const [paar] = useState(() => ({
    a: Math.floor(Math.random() * 8) + 1,
    b: Math.floor(Math.random() * 8) + 1,
  }))
  return paar
}

export function RekensomVeld({
  a,
  b,
  waarde,
  onChange,
}: {
  a: number
  b: number
  waarde: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-300">
        Even checken dat je geen robot bent: wat is {a} + {b}?
      </label>
      <input
        type="text"
        inputMode="numeric"
        required
        value={waarde}
        onChange={e => onChange(e.target.value)}
        placeholder="Antwoord"
        className="bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-opstap-orange/50 transition-colors"
      />
    </div>
  )
}
