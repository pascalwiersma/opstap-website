import { NextRequest, NextResponse } from 'next/server'
import { escapeHtml, verstuurMail } from '@/lib/mail'

export async function POST(req: NextRequest) {
  const { naam, email, provincie, motivatie } = await req.json()

  if (!naam || !email || !provincie || !motivatie) {
    return NextResponse.json({ error: 'Vul alle velden in.' }, { status: 400 })
  }

  const result = await verstuurMail({
    to: process.env.CONTACT_TO_EMAIL || 'info@pascal.services',
    subject: `Nieuwe aanmelding vertegenwoordiger: ${naam} (${provincie})`,
    html: `
      <h2>Nieuwe aanmelding vertegenwoordiger</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Naam</strong></td><td>${escapeHtml(naam)}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Provincie</strong></td><td>${escapeHtml(provincie)}</td></tr>
        <tr><td><strong>Motivatie</strong></td><td style="max-width:400px;white-space:pre-wrap">${escapeHtml(motivatie)}</td></tr>
      </table>
    `,
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
