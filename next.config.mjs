/** @type {import('next').NextConfig} */
const securityHeaders = async () => [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join('; '),
  },
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      { source: '/(.*)', headers: await securityHeaders() },
      { source: '/sitemap.xml', headers: [{ key: 'Cache-Control', value: 'max-age=3600' }] },
      { source: '/robots.txt', headers: [{ key: 'Cache-Control', value: 'max-age=3600' }] },
    ]
  },
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
