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
  const { naam, organisatie, type, email, telefoon, bericht } = await req.json()

  if (!naam || !organisatie || !type || !email || !bericht) {
    return NextResponse.json({ error: 'Vul alle verplichte velden in.' }, { status: 400 })
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
      to: 'info@opstap.app',
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
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Verzenden mislukt. Probeer het later opnieuw.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
