const values = [
  'Признание уникального опыта и достоинства каждого ветерана, как личности и специалиста',
  'Забота о результатах работы и о благополучии всей команды',
  'Постоянный поиск новых решений в вопросах адаптации и интеграции',
  'Прозрачность и честность во всех процессах и решениях',
  'Коллективное сотрудничество и поддержка друг друга',
  'Высокие профессиональные стандарты во всех аспектах деятельности',
]

export function ValuesSection() {
  return (
    <section id="values" className="bg-surface-base">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">
        <h2 className="heading-section mb-10">Наши ценности</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value}
              className="flex items-start gap-4 rounded-3xl border border-accent bg-surface-base p-6 transition hover:border-highlight"
            >
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-highlight text-base font-semibold text-surface-contrast">
                ✓
              </span>
              <p className="body-text">{value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
