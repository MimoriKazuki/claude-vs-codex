export type ContactInput = {
  name: string
  company?: string
  email: string
  phone?: string
  category?: string
  budget?: string
  timeline?: string
  message?: string
  agree: boolean
  token?: string // reCAPTCHA
  website?: string // honeypot
}

export function validate(input: ContactInput): { ok: boolean; errors?: Record<string, string> } {
  const errors: Record<string, string> = {}
  if (!input.name?.trim()) errors.name = '必須'
  if (!input.email?.includes('@')) errors.email = 'メール形式'
  if (!input.agree) errors.agree = '同意が必要です'
  if (input.website && input.website.trim().length > 0) errors._spam = 'spam'
  return { ok: Object.keys(errors).length === 0, errors }
}

export async function verifyRecaptcha(token?: string, ip?: string): Promise<boolean> {
  try {
    const secret = process.env.RECAPTCHA_SECRET
    if (!secret || !token) return true // soft-allow if not configured
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip ?? '' }),
      cache: 'no-store',
    })
    const json = await res.json()
    return !!json.success
  } catch {
    return false
  }
}

export async function notifySlack(payload: Record<string, any>) {
  const url = process.env.SLACK_WEBHOOK_URL
  if (!url) return
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: formatSlack(payload) }),
  })
}

function formatSlack(p: Record<string, any>) {
  return [
    `新規お問い合わせ`,
    `氏名: ${p.name}`,
    `会社: ${p.company ?? '-'}`,
    `メール: ${p.email}`,
    `電話: ${p.phone ?? '-'}`,
    `区分: ${p.category ?? '-'}`,
    `予算感: ${p.budget ?? '-'}`,
    `希望時期: ${p.timeline ?? '-'}`,
    `内容: ${p.message ?? '-'}`,
  ].join('\n')
}

export async function forwardToSheets(payload: Record<string, any>) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  if (!url) return
  await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
}

