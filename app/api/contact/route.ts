import { escapeHtml, verstuurMail } from '@/lib/mail'
import { rekensomKlopt } from '@/lib/rekensom'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { naam, email, bericht, rekensomA, rekensomB, rekensomAntwoord } = await req.json()

  if (!naam || !email || !bericht) {
    return NextResponse.json({ error: 'Vul alle velden in.' }, { status: 400 })
  }

  if (!rekensomKlopt(rekensomA, rekensomB, rekensomAntwoord)) {
    return NextResponse.json({ error: 'De rekensom klopt niet.' }, { status: 400 })
  }

  const result = await verstuurMail({
    to: process.env.CONTACT_TO_EMAIL || 'opstap@pascal.services',
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
