import type { ReactNode } from 'react'

type ClassValue = string | false | null | undefined

function mergeClassNames(...values: ClassValue[]) {
  return values.filter(Boolean).join(' ')
}

export interface ExtrasSectionItem {
  id: string
  title: string
  description: string
  icon?: ReactNode
}

export interface ExtrasSectionProps {
  id?: string
  heading: string
  items: ExtrasSectionItem[]
  className?: string
  overlayClassName?: string
  contentClassName?: string
  itemClassName?: string
  iconWrapperClassName?: string
}

export function ExtrasSection({
  id,
  heading,
  items,
  className,
  contentClassName,
  itemClassName,
  iconWrapperClassName,
}: ExtrasSectionProps) {
  return (
    <section
      id={id}
      className={mergeClassNames('bg-[#4F5A4A] text-white', className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className={mergeClassNames('mx-auto max-w-6xl space-y-10 px-6 py-16 lg:px-12 lg:py-24', contentClassName)}>
        <header className="space-y-3">
          <h3
            id={id ? `${id}-heading` : undefined}
            className="text-3xl font-semibold uppercase tracking-tight"
          >
            {heading}
          </h3>
        </header>

        <div className="divide-y divide-bronze/35 border border-bronze/35 rounded-[28px] bg-[#1f211d]/80 backdrop-blur-sm">
          {items.map((item) => (
            <article
              key={item.id}
              className={mergeClassNames(
                'flex flex-col gap-6 px-6 py-10 text-sm text-white/80 last:border-b-transparent lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:px-10',
                itemClassName
              )}
            >
              <div className="space-y-4 lg:max-w-3xl">
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="leading-relaxed">{item.description}</p>
              </div>
              {item.icon ? (
                <div className={mergeClassNames('flex shrink-0 items-center justify-center lg:justify-end', iconWrapperClassName)}>
                  <div className="h-20 w-20 text-bronze lg:h-24 lg:w-24">{item.icon}</div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
