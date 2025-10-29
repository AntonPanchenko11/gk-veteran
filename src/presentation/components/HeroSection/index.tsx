import type { MouseEvent, ReactNode } from 'react'

type ClassValue = string | undefined | null | false

function mergeClassNames(...values: ClassValue[]) {
  return values.filter(Boolean).join(' ')
}

export type HeroActionVariant = 'primary' | 'secondary'

export interface HeroNavItem {
  label: string
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export interface HeroActionItem {
  label: string
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  variant?: HeroActionVariant
}

export interface HeroBadge {
  label: string
  note?: string
  icon?: ReactNode
}

export interface HeroSectionProps {
  title: string
  description?: string
  backgroundImage: string
  showBackButton?: boolean
  backHref?: string
  backLabel?: string
  logo?: ReactNode
  navItems?: HeroNavItem[]
  badge?: HeroBadge
  actions?: HeroActionItem[]
  contentFooter?: ReactNode
  overlayClassName?: string
  className?: string
  navigationClassName?: string
  contentClassName?: string
  containerClassName?: string
}

function HeroNavigation({
  logo,
  navItems = [],
  className,
}: {
  logo?: ReactNode
  navItems?: HeroNavItem[]
  className?: string
}) {
  if (!logo && navItems.length === 0) {
    return null
  }

  return (
    <nav className={mergeClassNames('flex items-center justify-between text-sm text-white/80', className)}>
      {logo ? <div className="flex items-center">{logo}</div> : <span />}
      {navItems.length > 0 ? (
        <ul className="hidden items-center gap-8 font-medium lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={item.onClick}
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  )
}

function HeroBadgeView({ badge }: { badge?: HeroBadge }) {
  if (!badge) {
    return null
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-[14px] border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
      {badge.icon ? <span className="flex h-5 w-5 items-center justify-center">{badge.icon}</span> : null}
      <span>{badge.label}</span>
      {badge.note ? (
        <span className="rounded-[12px] border border-bronze/40 bg-bronze/15 px-3 py-1 text-[0.65rem] tracking-[0.3em] text-bronze/90">
          {badge.note}
        </span>
      ) : null}
    </div>
  )
}

function HeroActions({ actions = [] }: { actions?: HeroActionItem[] }) {
  if (actions.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      {actions.map((action) => {
        const variant = action.variant ?? 'primary'
        const baseClasses =
          'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
        const variantClasses =
          variant === 'primary'
            ? 'border border-white/15 bg-white text-[#1c2c22] shadow-[0_15px_45px_-25px_rgba(0,0,0,0.45)] hover:bg-sand focus-visible:ring-white/60 focus-visible:ring-offset-transparent'
            : 'border border-white/25 bg-transparent text-white hover:border-white/60 focus-visible:ring-white/60 focus-visible:ring-offset-transparent'

        return (
          <a
            key={action.label}
            href={action.href}
            onClick={action.onClick}
            className={mergeClassNames(baseClasses, variantClasses)}
          >
            {action.label}
          </a>
        )
      })}
    </div>
  )
}

export function HeroSection({
  title,
  description,
  backgroundImage,
  showBackButton,
  backHref = '/',
  backLabel = '← Назад',
  logo,
  navItems,
  badge,
  actions,
  contentFooter,
  overlayClassName,
  className,
  navigationClassName,
  contentClassName,
  containerClassName,
}: HeroSectionProps) {
  const overlayClasses = mergeClassNames(
    'absolute inset-0',
    overlayClassName
  )

  return (
    <header
      className={mergeClassNames('relative min-h-[720px] overflow-hidden text-white', className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-bronze/20 blur-[190px]" />
      </div>
      <div className={overlayClasses} />
      <div className={`relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-10 lg:px-12 lg:py-16 ${containerClassName ?? ''}`.trim()}>
        <HeroNavigation logo={logo} navItems={navItems} className={navigationClassName} />

        <div className={mergeClassNames('flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-24', contentClassName)}>
          <div className="flex-1 space-y-8 text-forest-50">
            {showBackButton ? (
              <a
                href={backHref}
                className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.45em] text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                {backLabel}
              </a>
            ) : null}

            <div className="space-y-6">
              <HeroBadgeView badge={badge} />
              <h1 className="text-4xl font-semibold uppercase leading-tight text-white sm:text-[2.9rem]">{title}</h1>
              {description ? (
                <p className="max-w-xl text-base leading-relaxed text-forest-100/80">{description}</p>
              ) : null}
            </div>

            <HeroActions actions={actions} />
            {contentFooter}
          </div>
        </div>
      </div>
    </header>
  )
}
