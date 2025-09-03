import { NextRequest, NextResponse } from 'next/server'
import { validate } from '@/lib/contact'
import { rateLimit } from '@/lib/rateLimit'

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? req.ip ?? '0.0.0.0'
    if (!rateLimit(`contact:${ip}`)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }
    const form = await req.formData()
    const data = Object.fromEntries(form.entries()) as any
    const input = {
      name: String(data.name || ''),
      company: data.company ? String(data.company) : undefined,
      email: String(data.email || ''),
      phone: data.phone ? String(data.phone) : undefined,
      category: data.category ? String(data.category) : undefined,
      budget: data.budget ? String(data.budget) : undefined,
      timeline: data.timeline ? String(data.timeline) : undefined,
      message: data.message ? String(data.message) : undefined,
      agree: data.agree === 'on' || data.agree === 'true',
      token: data.token ? String(data.token) : undefined,
      website: data.website ? String(data.website) : undefined,
    }
    const v = validate(input)
    if (!v.ok) return NextResponse.json({ errors: v.errors }, { status: 400 })
    // No external integrations; accept locally after validation and rate limit
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
