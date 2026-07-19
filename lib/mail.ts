import nodemailer from 'nodemailer'

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null

function getTransporter() {
  if (transporter) return transporter

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD
  if (!host || !user || !pass) return null

  transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  })
  return transporter
}

export async function verstuurMail(opts: { to: string; subject: string; html: string }): Promise<{ ok: true } | { ok: false; error: string }> {
  const t = getTransporter()
  if (!t) {
    console.error('SMTP niet geconfigureerd: SMTP_HOST, SMTP_USER of SMTP_PASSWORD ontbreekt.')
    return { ok: false, error: 'Configuratiefout.' }
  }

  try {
    await t.sendMail({
      from: `OpStap <${process.env.SMTP_USER}>`,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
    })
    return { ok: true }
  } catch (err) {
    console.error('SMTP-fout:', err)
    return { ok: false, error: 'Verzenden mislukt. Probeer het later opnieuw.' }
  }
}
