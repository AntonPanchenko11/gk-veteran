type Company = {
  name: string
  description: string
  status?: 'coming-soon'
}

const companies: Company[] = [
  {
    name: 'ООО «Ветеран. Информационные системы»',
    description:
      'Разработка цифровых платформ для лёгкого запуска, ведения и автоматизации процессов ветеранов.',
  },
  {
    name: 'ООО «Ветеран. Системный инжиниринг»',
    description: 'Инжиниринговые решения и сопровождение проектов для компаний с ветеранским коллективом.',
  },
  {
    name: 'ООО «Ветеран. Защита интересов»',
    description:
      'Правовая поддержка, защита прав и представление интересов ветеранов и их семей, партнёрство с юристами высокой квалификации.',
  },
  {
    name: 'ООО «Ветеран. Продвижение и визуализация»',
    description:
      'Экспертное сопровождение, упаковка и продвижение проектов ветеранов, поддержка в медиа и социальной коммуникации.',
  },
  {
    name: 'Учебный центр',
    description: 'В активном запуске',
    status: 'coming-soon',
  },
]

export function GroupSection() {
  return (
    <section className="bg-gradient-to-b from-forest-900 to-forest-800">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24">
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">Наша группа компаний объединяет</h2>
        <div className="mt-10 space-y-4">
          {companies.map((company) => {
            const isComingSoon = company.status === 'coming-soon'
            return (
              <article
                key={company.name}
                className={`flex items-center justify-between gap-6 rounded-3xl border bg-forest-900/60 p-6 transition ${
                  isComingSoon
                    ? 'border-forest-700/50 text-forest-400'
                    : 'border-forest-700/80 text-forest-100 hover:border-bronze/60 hover:text-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-1 flex h-6 w-6 items-center justify-center rounded-md border text-xs ${
                      isComingSoon
                        ? 'border-forest-600 bg-forest-800/60'
                        : 'border-bronze/60 bg-bronze/10 text-bronze'
                    }`}
                  >
                    □
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/90">{company.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{company.description}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 items-center justify-center rounded-full border border-forest-700/60 p-3 text-bronze transition hover:border-bronze/60 hover:text-white lg:flex">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
