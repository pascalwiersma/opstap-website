import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { naam, email, provincie, motivatie } = await req.json()

  if (!naam || !email || !provincie || !motivatie) {
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
      to: 'info@pascal.services',
      subject: `Nieuwe aanmelding vertegenwoordiger: ${naam} (${provincie})`,
      html: `
        <h2>Nieuwe aanmelding vertegenwoordiger</h2>
        <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">
          <tr><td><strong>Naam</strong></td><td>${naam}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${email}</td></tr>
          <tr><td><strong>Provincie</strong></td><td>${provincie}</td></tr>
          <tr><td><strong>Motivatie</strong></td><td style="max-width:400px">${motivatie}</td></tr>
        </table>
      `,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Verzenden mislukt. Probeer het later opnieuw.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
