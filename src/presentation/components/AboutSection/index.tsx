import type { ReactNode } from 'react'

export interface AboutSectionCard {
  id: string
  title: string
  description: string
  icon?: ReactNode
}

interface AboutSectionProps {
  id?: string
  heading: string
  description?: string
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
      <h2 className="text-3xl font-semibold uppercase tracking-tight lg:text-[2.65rem]">{heading}</h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-relaxed text-forest-100/80">{description}</p>
      ) : null}
    </header>
  )
}

function CardItem({ card }: { card: AboutSectionCard }) {
  return (
    <article className="group relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-[26px] border border-white/10 bg-[#1b1f20] p-6 text-sm text-forest-100/85 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.85)] transition-colors duration-300 hover:border-amber-400/60">
      <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/5 opacity-40" />
      <div>
        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
        <p className="mt-3 leading-relaxed text-forest-100/70">{card.description}</p>
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
    <section id={id} className={`relative bg-[#202020] text-forest-100 ${className ?? ''}`.trim()}>
      <div className="absolute inset-0 bg-[#202020]" />
      <div className={`relative mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24 ${contentClassName ?? ''}`.trim()}>
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
