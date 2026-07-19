import { NextRequest, NextResponse } from 'next/server'

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  const { naam, email, bericht } = await req.json()

  if (!naam || !email || !bericht) {
    return NextResponse.json({ error: 'Vul alle velden in.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuratiefout.' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'OpStap <noreply@opstap.app>',
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
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Verzenden mislukt. Probeer het later opnieuw.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
