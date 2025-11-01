import type { ReactNode } from 'react'

const BASE_CARD_CLASSES =
  'relative flex h-full flex-col justify-between gap-5 rounded-3xl border p-6 text-white/80 transition bg-surface-base'

const HIGHLIGHT_CARD_CLASSES =
  'border-highlight/80 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.85)]'

const NEUTRAL_CARD_CLASSES =
  'border-white/10 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.75)]'

type OutsourcingCard = {
  id: string
  title: ReactNode
  description?: string
  highlight?: boolean
  footer?: string
}

const OUTSOURCING_CARDS: OutsourcingCard[] = [
  {
    id: 'boxed-products',
    title: (
      <>
        <>Продажа коробочных версий продуктов </>
        <>и лицензий к ним</>
      </>
    ),
    highlight: true,
    footer: '',
  },
  {
    id: 'cloud-databases',
    title: (
      <>
        <>Предоставление облачных баз </>
        <>в аренду</>
      </>
    ),
    highlight: true,
    footer: '',
  },
  {
    id: 'config-updates',
    title: (
      <>
        <>Обновление </>
        <>конфигураций</>
      </>
    ),
    highlight: true,
  },
  {
    id: 'reporting-consulting',
    title: (
      <>
        <>Консультация по формированию текущей отчетности </>
        <>(хоз расчётной, бюджетной, налоговой)</>
      </>
    ),
  },
  {
    id: 'configuration-support',
    title: (
      <>
        <>Консультация по работе в типовых конфигурациях </>
        <>для бухгалтеров, менеджеров, операторов</>
      </>
    ),
  },
  {
    id: 'accounting-audit',
    title: (
      <>
        <>Аудит, устранение ошибок </>
        <>в бухгалтерском и налоговом учете</>
      </>
    ),
  },
  {
    id: 'integration-tools',
    title: (
      <>
        <>Настройка Честного знака, Меркурия, электронных подписей </>
        <>и других ГИС</>
      </>
    ),
  },
  {
    id: 'electronic-reporting',
    title: (
      <>
        <>Настройка и подключение </>
        <>электронной отчетности</>
      </>
    ),
  },
  {
    id: 'onec-products',
    title: (
      <>
        <>1С: Бухгалтерия Предприятия 3.0, 1С: ЗУП, 1С: БГУ, 1С: УНФ, </>
        <>1С: УТ, 1С: КА и др.</>
      </>
    ),
    highlight: true,
    footer: 'Стоимость 3000р/час',
  },
]

export function OutsourcingSection() {
  return (
    <section
      id="outsourcing"
      aria-labelledby="outsourcing-heading"
      className="relative bg-surface-section text-white"
    >
      <div className="relative mx-auto max-w-6xl space-y-10 px-6 py-10 lg:px-12 lg:py-14">
        <header className="space-y-3">
          <h3 id="outsourcing-heading" className="heading-section">
            Аутсорсинг
          </h3>
          <p className="body-text max-w-3xl">
            Поддержка типовых решений 1С для автоматизации учёта          
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {OUTSOURCING_CARDS.map((item) => {
            const isHighlighted = Boolean(item.highlight)
            return (
              <article
                key={item.id}
                className={`${BASE_CARD_CLASSES} ${isHighlighted ? HIGHLIGHT_CARD_CLASSES : NEUTRAL_CARD_CLASSES}`}
              >
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  {item.description ? <p className="body-text text-white/85">{item.description}</p> : null}
                </div>

                <div className="space-y-4">
                  {item.footer ? <p className="text-sm font-semibold text-highlight">{item.footer}</p> : null}
                  {isHighlighted ? (
                    <span className="block h-[2px] w-3/4 rounded-full bg-gradient-to-r from-highlight/80 to-transparent" />
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
