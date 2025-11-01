import { useCallback, useState, type MouseEvent, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

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

export interface TopSectionViewProps {
  title: ReactNode
  description?: ReactNode
  backgroundImage?: string
  backgroundColor?: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundRepeat?: string
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
  onMenuToggle,
  isMenuOpen,
}: {
  logo?: ReactNode
  navItems?: HeroNavItem[]
  className?: string
  onMenuToggle?: () => void
  isMenuOpen?: boolean
}) {
  if (!logo && navItems.length === 0) {
    return null
  }

  return (
    <nav className={mergeClassNames('flex items-center justify-between text-sm text-white/80', className)}>
      {logo ? <div className="flex items-center">{logo}</div> : <span />}
      {navItems.length > 0 ? (
        <div className="ml-auto flex items-center gap-3">
          {onMenuToggle ? (
            <button
              type="button"
              onClick={onMenuToggle}
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:hidden"
            >
              {isMenuOpen ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" d="m6 6 12 12" />
                  <path strokeLinecap="round" d="M18 6 6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" d="M4 7h16" />
                  <path strokeLinecap="round" d="M4 12h16" />
                  <path strokeLinecap="round" d="M4 17h16" />
                </svg>
              )}
            </button>
          ) : null}
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
        </div>
      ) : (
        <span className="ml-auto" />
      )}
    </nav>
  )
}

function HeroBadgeView({ badge }: { badge?: HeroBadge }) {
  if (!badge) {
    return null
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-[16px] border border-white/25 bg-white/10 px-5 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.35em] text-white">
      {badge.icon ? <span className="flex h-6 w-6 items-center justify-center">{badge.icon}</span> : null}
      <span>{badge.label}</span>
      {badge.note ? (
        <span className="rounded-[12px] border border-highlight/40 bg-highlight/15 px-3 py-1 text-[0.65rem] tracking-[0.3em] text-highlight/90">
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
          'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer'
        const variantClasses =
          variant === 'primary'
            ? 'border border-white/15 bg-white text-text-contrast shadow-[0_15px_45px_-25px_rgba(0,0,0,0.45)] hover:bg-highlight hover:text-text-contrast focus-visible:ring-white/60 focus-visible:ring-offset-transparent'
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

export function TopSectionView({
  title,
  description,
  backgroundImage,
  backgroundColor,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
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
}: TopSectionViewProps) {
  const hasNavItems = Boolean(navItems && navItems.length > 0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleToggleMenu = () => {
    if (!hasNavItems) {
      return
    }

    setIsMenuOpen((prev) => !prev)
  }

  const handleCloseMenu = () => setIsMenuOpen(false)

  const handleBackClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      const canGoBack = typeof window.history.state?.idx === 'number' && window.history.state.idx > 0

      if (canGoBack) {
        navigate(-1)
        return
      }

      navigate(backHref ?? '/', { replace: false })
    },
    [backHref, navigate]
  )

  const overlayClasses = mergeClassNames(
    'absolute inset-0',
    overlayClassName
  )

  return (
    <header
      className={mergeClassNames('relative min-h-screen overflow-hidden text-white', className)}
      style={{
        backgroundColor: backgroundColor ?? undefined,
        ...(backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: backgroundSize ?? 'cover',
              backgroundPosition: backgroundPosition ?? 'center',
              backgroundRepeat: backgroundRepeat ?? 'no-repeat',
            }
          : {}),
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-highlight/20 blur-[190px]" />
      </div>
      <div className={overlayClasses} />
      <div className={`relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 lg:px-12 lg:py-14 ${containerClassName ?? ''}`.trim()}>
        <HeroNavigation
          logo={logo}
          navItems={navItems}
          className={navigationClassName}
          onMenuToggle={hasNavItems ? handleToggleMenu : undefined}
          isMenuOpen={isMenuOpen}
        />

        {hasNavItems ? (
          <>
            <div
              className={mergeClassNames(
                'fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden',
                isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
              )}
              onClick={handleCloseMenu}
            />
            <div
              className={mergeClassNames(
                'fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col border-l border-white/10 bg-surface-base/95 px-6 py-8 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] transition-transform duration-300 lg:hidden',
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              )}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between">
                {logo ? <div className="flex items-center">{logo}</div> : <span className="text-sm font-semibold uppercase text-white/70">Меню</span>}
                <button
                  type="button"
                  onClick={handleCloseMenu}
                  aria-label="Закрыть меню"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" d="m6 6 12 12" />
                    <path strokeLinecap="round" d="M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <ul className="mt-12 flex flex-col gap-6 text-base font-semibold uppercase tracking-[0.25em] text-white">
                {navItems?.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(event) => {
                        item.onClick?.(event)
                        setIsMenuOpen(false)
                      }}
                      className="inline-flex w-full items-center justify-between rounded-full border border-transparent px-4 py-3 text-left transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                      <span>{item.label}</span>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" d="m9 6 6 6-6 6" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}

        <div className="mt-12 flex flex-1 items-center">
          <div className={mergeClassNames('flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-24', contentClassName)}>
            <div className="w-full space-y-8 text-white lg:basis-[60%] lg:max-w-[60%]">
              {showBackButton ? (
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.45em] text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {backLabel}
                </button>
              ) : null}

              <div className="space-y-6">
                <HeroBadgeView badge={badge} />
                <h1 className="text-xl font-semibold uppercase leading-tight text-white sm:text-[2.5rem]">
                  {typeof title === 'string' ? <>{title}</> : title}
                </h1>
                {description ? (
                  <div className="body-text max-w-xl text-base text-white/85 sm:text-lg">
                    {typeof description === 'string' ? <>{description}</> : description}
                  </div>
                ) : null}
              </div>

              <HeroActions actions={actions} />
              {contentFooter}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
