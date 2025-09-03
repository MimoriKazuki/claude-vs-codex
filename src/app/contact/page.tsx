"use client"
import { useState } from 'react'

export default function Page() {
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  return (
    <div>
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-white/80 mt-2">1営業日以内にご連絡します。</p>
      <form
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={async (e) => {
          e.preventDefault()
          const form = e.currentTarget as HTMLFormElement
          const formData = new FormData(form)
          setState('loading')
          setErrors({})
          const res = await fetch('/api/contact', { method: 'POST', body: formData })
          if (res.ok) {
            window.location.href = '/contact/thanks'
          } else {
            const json = await res.json().catch(() => ({}))
            setErrors(json.errors ?? { form: '送信に失敗しました' })
            setState('error')
          }
        }}
      >
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <Field label="氏名" name="name" required error={errors.name} />
        <Field label="会社名" name="company" />
        <Field label="メール" name="email" type="email" required error={errors.email} />
        <Field label="電話" name="phone" />
        <Field label="相談区分" name="category" />
        <Field label="予算感" name="budget" />
        <Field label="希望時期" name="timeline" />
        <div className="md:col-span-2">
          <label className="text-sm">自由記述</label>
          <textarea name="message" className="mt-1 w-full rounded border border-white/20 bg-transparent p-2" rows={5} />
        </div>
        <div className="md:col-span-2 flex items-center gap-2">
          <input id="agree" name="agree" type="checkbox" className="h-4 w-4" />
          <label htmlFor="agree" className="text-sm">同意します（プライバシーポリシーに準拠）</label>
          {errors.agree && <span className="text-sm text-red-400">{errors.agree}</span>}
        </div>
        {errors.form && <div className="md:col-span-2 text-sm text-red-400">{errors.form}</div>}
        <div className="md:col-span-2">
          <button disabled={state==='loading'} className="rounded bg-brand px-4 py-2 text-black font-medium">
            {state==='loading' ? '送信中…' : '送信'}
          </button>
        </div>
      </form>
      <p className="mt-6 text-sm text-white/60">送信後：サンクスページ + 1営業日以内の連絡方針を明記</p>
    </div>
  )
}

function Field({ label, name, type = 'text', required, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  return (
    <div>
      <label className="text-sm" htmlFor={name}>{label}{required && <span className="text-red-400">*</span>}</label>
      <input id={name} name={name} type={type} required={required}
        className="mt-1 w-full rounded border border-white/20 bg-transparent p-2" />
      {error && <div className="text-sm text-red-400 mt-1">{error}</div>}
    </div>
  )
}

