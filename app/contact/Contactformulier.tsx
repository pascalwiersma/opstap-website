'use client'

import { useState } from 'react'
import Link from 'next/link'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contactformulier() {
  const [status, setStatus] = useState<Status>('idle')
  const [fout, setFout] = useState('')
  const [form, setForm] = useState({ naam: '', email: '', bericht: '', akkoord: false })

  function update(key: keyof typeof form, value: string) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  async function verstuur(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setFout('')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('success')
    } else {
      const data = await res.json().catch(() => ({}))
      setFout(data.error ?? 'Er ging iets mis. Probeer het opnieuw.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black">Bericht verstuurd!</h3>
        <p className="text-gray-400 max-w-sm leading-relaxed">
          Bedankt, {form.naam}. We reageren zo snel mogelijk via {form.email}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={verstuur} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-300">Naam</label>
          <input
            type="text"
            required
            value={form.naam}
            onChange={e => update('naam', e.target.value)}
            placeholder="Jouw naam"
            className="bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E8611A]/50 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-300">E-mailadres</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="naam@voorbeeld.nl"
            className="bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E8611A]/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-300">Bericht</label>
          <span className="text-xs text-gray-600">{form.bericht.length}/1000</span>
        </div>
        <textarea
          required
          maxLength={1000}
          rows={6}
          value={form.bericht}
          onChange={e => update('bericht', e.target.value)}
          placeholder="Waar kunnen we je mee helpen?"
          className="bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E8611A]/50 transition-colors resize-none"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={form.akkoord}
          onChange={e => setForm(prev => ({ ...prev, akkoord: e.target.checked }))}
          className="mt-0.5 w-4 h-4 rounded border-white/20 bg-[#141414] accent-[#E8611A]"
        />
        <span>
          Ik ga akkoord met het{' '}
          <Link href="/privacy" target="_blank" className="text-white underline hover:text-[#E8611A]">
            privacybeleid
          </Link>
        </span>
      </label>

      {fout && (
        <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          {fout}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 bg-[#E8611A] hover:bg-[#d4561a] disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-colors shadow-xl shadow-[#E8611A]/20 text-sm"
      >
        {status === 'loading' ? 'Versturen…' : 'Bericht versturen'}
      </button>
    </form>
  )
}
