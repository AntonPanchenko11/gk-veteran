const values = [
  'Непрерывное усиление опыта и достижений каждого ветерана',
  'Этика и прозрачность работы по соблюдению всех норм',
  'Постоянно растущая степень доверия и уважения партнёров',
  'Традиции и честность во всех взаимоотношениях',
  'Коллективное сотворчество и поддержка друг друга',
  'Высокие профессиональные стандарты во всех аспектах деятельности',
]

export function ValuesSection() {
  return (
    <section className="bg-forest-900/95">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-12 lg:py-12">
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">Наши ценности</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value}
              className="flex items-start gap-4 rounded-3xl border border-forest-700/70 bg-forest-800/60 p-6 transition hover:border-bronze/60"
            >
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-bronze/40 bg-bronze/10 text-xs text-bronze">
                ★
              </span>
              <p className="text-sm leading-relaxed text-forest-100">{value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
