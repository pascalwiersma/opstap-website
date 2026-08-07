import { NextRequest, NextResponse } from 'next/server'
import { escapeHtml, verstuurMail } from '@/lib/mail'
import { rekensomKlopt } from '@/lib/rekensom'

export async function POST(req: NextRequest) {
  const { naam, email, telefoon, beschikbaarheid, motivatie, rekensomA, rekensomB, rekensomAntwoord } = await req.json()

  if (!naam || !email || !telefoon || !beschikbaarheid || !motivatie) {
    return NextResponse.json({ error: 'Vul alle velden in.' }, { status: 400 })
  }

  if (!rekensomKlopt(rekensomA, rekensomB, rekensomAntwoord)) {
    return NextResponse.json({ error: 'De rekensom klopt niet.' }, { status: 400 })
  }

  const result = await verstuurMail({
    to: process.env.CONTACT_TO_EMAIL || 'info@pascal.services',
    subject: `Nieuwe aanmelding OpStap Crew: ${naam}`,
    html: `
      <h2>Nieuwe aanmelding OpStap Crew</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Naam</strong></td><td>${escapeHtml(naam)}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Telefoon</strong></td><td>${escapeHtml(telefoon)}</td></tr>
        <tr><td><strong>Beschikbaarheid</strong></td><td>${escapeHtml(beschikbaarheid)}</td></tr>
        <tr><td><strong>Motivatie</strong></td><td style="max-width:400px;white-space:pre-wrap">${escapeHtml(motivatie)}</td></tr>
      </table>
    `,
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
