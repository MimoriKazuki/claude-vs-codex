# Studio Site (Next.js 14 + Tailwind)

## Quick Start

1) Prerequisites
- Node.js 18.17+ and npm 9+

2) Install

```
npm install
```

3) Run Dev

```
npm run dev
```

Open http://localhost:3000

## Structure
- `src/app`: App Router pages (Home, Services, Works, Blog, Company, Contact, Legal, API)
- `src/components`: UI blocks (Hero, KPIs, FAQ, etc.)
- `src/content`: Sample content (works, services, blog, company, settings)
- `src/lib`: SEO, structured data, analytics, contact helpers

## Contact API
- Route: `POST /api/contact` (multipart/form-data)
- Spam: honeypot (`website`) + in-memory rate limit (10 req/min/IP)
- No external integrations (Slack/Sheets/reCAPTCHA disabled)

## SEO/計測
- Metadata API, `robots.txt`, `sitemap.xml`
- JSON-LD: Organization (site), BlogPosting/CreativeWork (pages)
- No GA configured（外部連携なし）

## Security
- Security headers (strict self-only CSP), Referrer Policy, X-Frame-Options, Permissions Policy
- CSRF: form is same-origin; add CSRF if exposing cross-site POSTs

## TODO (optional)
- Migrate content to Markdown+MDX or a Headless CMS
- Add filters for Works (tags) and Services by category route
- Implement file/image optimization and real assets
