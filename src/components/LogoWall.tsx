export function LogoWall() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">導入企業（例）</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4 opacity-80">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 rounded bg-white/10" />
        ))}
      </div>
    </section>
  )
}

