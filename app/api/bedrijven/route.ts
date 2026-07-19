import { NextRequest, NextResponse } from 'next/server'
import { escapeHtml, verstuurMail } from '@/lib/mail'

export async function POST(req: NextRequest) {
  const { naam, organisatie, type, email, telefoon, bericht } = await req.json()

  if (!naam || !organisatie || !type || !email || !bericht) {
    return NextResponse.json({ error: 'Vul alle verplichte velden in.' }, { status: 400 })
  }

  const result = await verstuurMail({
    to: process.env.CONTACT_TO_EMAIL || 'info@opstap.app',
    subject: `Nieuwe samenwerkingsaanvraag: ${organisatie}`,
    html: `
      <h2>Nieuwe aanmelding via de bedrijvenpagina</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Naam</strong></td><td>${escapeHtml(naam)}</td></tr>
        <tr><td><strong>Organisatie</strong></td><td>${escapeHtml(organisatie)}</td></tr>
        <tr><td><strong>Type</strong></td><td>${escapeHtml(type)}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Telefoon</strong></td><td>${telefoon ? escapeHtml(telefoon) : '—'}</td></tr>
        <tr><td><strong>Bericht</strong></td><td style="max-width:400px;white-space:pre-wrap">${escapeHtml(bericht)}</td></tr>
      </table>
    `,
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
