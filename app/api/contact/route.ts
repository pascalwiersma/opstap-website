import { NextRequest, NextResponse } from 'next/server'
import { escapeHtml, verstuurMail } from '@/lib/mail'

export async function POST(req: NextRequest) {
  const { naam, email, bericht } = await req.json()

  if (!naam || !email || !bericht) {
    return NextResponse.json({ error: 'Vul alle velden in.' }, { status: 400 })
  }

  const result = await verstuurMail({
    to: process.env.CONTACT_TO_EMAIL || 'info@opstap.app',
    subject: `Nieuw contactformulier: ${naam}`,
    html: `
      <h2>Nieuw bericht via het contactformulier</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Naam</strong></td><td>${escapeHtml(naam)}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Bericht</strong></td><td style="max-width:400px;white-space:pre-wrap">${escapeHtml(bericht)}</td></tr>
      </table>
    `,
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
