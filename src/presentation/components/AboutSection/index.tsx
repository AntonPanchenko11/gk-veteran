import type { ReactNode } from 'react'

export interface AboutSectionCard {
  id: string
  title: string
  description: ReactNode
  icon?: ReactNode
}

interface AboutSectionProps {
  id?: string
  heading: string
  description?: ReactNode
  cardsHeading?: string
  icon?: ReactNode
  cards?: AboutSectionCard[]
  className?: string
  contentClassName?: string
}

function SectionHeader({ heading, description, icon }: Pick<AboutSectionProps, 'heading' | 'description' | 'icon'>) {
  return (
    <header className="space-y-5 text-white">
      {icon ? <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">{icon}</div> : null}
      <h2 className="heading-section">{heading}</h2>
      {description ? <div className="body-text max-w-3xl">{description}</div> : null}
    </header>
  )
}

function CardItem({ card }: { card: AboutSectionCard }) {
  return (
    <article className="group relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-[26px] border border-white/10 bg-surface-base p-6 text-white/85 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-highlight hover:bg-surface-base/90">
      <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-b from-white/10 via-transparent to-transparent" />
      <div>
        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
        <div className="body-text mt-3">{card.description}</div>
      </div>
      {card.icon ? (
        <div className="mt-6 flex justify-end">
          <div className="h-[96px] w-[96px]">{card.icon}</div>
        </div>
      ) : null}
    </article>
  )
}

function CardGrid({ cards }: { cards: AboutSectionCard[] }) {
  if (cards.length === 0) {
    return null
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  )
}

export function AboutSection({
  id,
  heading,
  description,
  cardsHeading,
  icon,
  cards = [],
  className,
  contentClassName,
}: AboutSectionProps) {
  const hasCards = cards.length > 0
  const shouldRenderCardsHeading = Boolean(cardsHeading) && hasCards

  return (
    <section id={id} className={`relative bg-surface-base text-white ${className ?? ''}`.trim()}>
      <div className="absolute inset-0 bg-surface-base" />
      <div className={`relative mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14 ${contentClassName ?? ''}`.trim()}>
        <div className="space-y-12">
          <SectionHeader heading={heading} description={description} icon={icon} />

          {shouldRenderCardsHeading ? (
            <h3 className="text-2xl font-semibold text-white">{cardsHeading}</h3>
          ) : null}

          {hasCards ? <CardGrid cards={cards} /> : null}
        </div>
      </div>
    </section>
  )
}
