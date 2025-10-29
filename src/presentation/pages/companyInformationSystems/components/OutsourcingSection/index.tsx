const BASE_CARD_CLASSES =
  'relative flex h-full flex-col justify-between gap-5 rounded-3xl border p-6 text-sm leading-relaxed text-white/80 transition'

const HIGHLIGHT_CARD_CLASSES =
  'border-bronze/60 bg-gradient-to-br from-[#2f352c] via-[#252b24] to-[#1d211c] shadow-[0_30px_70px_-50px_rgba(0,0,0,0.85)]'

const NEUTRAL_CARD_CLASSES =
  'border-white/5 bg-[#252824] shadow-[0_25px_60px_-45px_rgba(0,0,0,0.75)]'

type OutsourcingCard = {
  title: string
  description?: string
  highlight?: boolean
  footer?: string
}

const OUTSOURCING_CARDS: OutsourcingCard[] = [
  {
    title: 'Продажа коробочных версий продуктов и лицензий к ним',
    highlight: true,
    footer: '',
  },
  {
    title: 'Предоставление облачных баз в аренду',
    highlight: true,
    footer: '',
  },
  {
    title: 'Обновление конфигураций',
    highlight: true,
  },
  {
    title: 'Консультация по формированию текущей отчетности (хоз расчетной, бюджетной, налоговой)',
  },
  {
    title: 'Консультация по работе в типовых конфигурациях для бухгалтеров, менеджеров, операторов',
  },
  {
    title: 'Аудит, устранение ошибок в бухгалтерском и налоговом учете',
  },
  {
    title: 'Настройка Честного знака, Меркурия, электронных подписей и других ГИС',
  },
  {
    title: 'Настройка и подключение электронной отчетности',
  },
  {
    title: '1С: Бухгалтерия Предприятия 3.0, 1С: ЗУП, 1С: БГУ, 1С: УНФ, 1С: УТ, 1С: КА и др.',
    highlight: true,
    footer: 'Стоимость 3000р/час',
  },
]

export function OutsourcingSection() {
  return (
    <section
      id="outsourcing"
      aria-labelledby="outsourcing-heading"
      className="relative bg-[#4F5A4A] text-white"
    >
      <div className="relative mx-auto max-w-6xl space-y-10 px-6 py-16 lg:px-12 lg:py-24">
        <header className="space-y-3">
          <h3 id="outsourcing-heading" className="text-3xl font-semibold uppercase tracking-tight">
            Аутсорсинг
          </h3>
          <p className="max-w-3xl text-sm font-medium uppercase tracking-[0.2em] text-white/65">
            Поддержка типовых решений 1С для автоматизации учета
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {OUTSOURCING_CARDS.map((item) => {
            const isHighlighted = Boolean(item.highlight)
            return (
              <article
                key={item.title}
                className={`${BASE_CARD_CLASSES} ${isHighlighted ? HIGHLIGHT_CARD_CLASSES : NEUTRAL_CARD_CLASSES}`}
              >
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  {item.description ? <p className="text-white/70">{item.description}</p> : null}
                </div>

                <div className="space-y-4">
                  {item.footer ? <p className="text-sm font-semibold text-bronze">{item.footer}</p> : null}
                  {isHighlighted ? (
                    <span className="block h-[2px] w-3/4 rounded-full bg-gradient-to-r from-bronze/80 to-transparent" />
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
