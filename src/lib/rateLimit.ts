const WINDOW_MS = 60_000
const MAX_IN_WINDOW = 10

const store = new Map<string, { count: number; ts: number }>()

export function rateLimit(key: string): boolean {
  const now = Date.now()
  const item = store.get(key)
  if (!item || now - item.ts > WINDOW_MS) {
    store.set(key, { count: 1, ts: now })
    return true
  }
  if (item.count >= MAX_IN_WINDOW) return false
  item.count += 1
  return true
}

