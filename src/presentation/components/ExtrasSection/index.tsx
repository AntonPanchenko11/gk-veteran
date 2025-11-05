import type { ReactNode } from 'react'

type ClassValue = string | false | null | undefined

function mergeClassNames(...values: ClassValue[]) {
  return values.filter(Boolean).join(' ')
}

export interface ExtrasSectionItem {
  id: string
  title: string
  description: ReactNode
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
      className={mergeClassNames('bg-surface-section text-white', className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className={mergeClassNames('mx-auto max-w-6xl space-y-10 px-6 py-10 lg:px-12 lg:py-14', contentClassName)}>
        <header className="space-y-3">
          <h3
            id={id ? `${id}-heading` : undefined}
            className="heading-section"
          >
            {heading}
          </h3>
        </header>

        <div className="divide-y divide-highlight/80 border border-highlight/80 rounded-[28px] bg-surface-base">
          {items.map((item) => (
            <article
              key={item.id}
              className={mergeClassNames(
                'body-text flex flex-col gap-6 px-6 py-8 text-white last:border-b-transparent transition lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10',
                itemClassName
              )}
            >
              <div className="space-y-4 lg:max-w-3xl">
                <h4 className="body-text text-lg font-semibold text-white">{item.title}</h4>
                <div className="body-text text-white/80">{item.description}</div>
              </div>
              {item.icon ? (
                <div className={mergeClassNames('flex shrink-0 items-center justify-center lg:h-full lg:justify-end', iconWrapperClassName)}>
                  <div className="flex h-[96px] w-[96px] items-center justify-center rounded-2xl text-highlight shadow-inner lg:h-[120px] lg:w-[120px]">{item.icon}</div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
