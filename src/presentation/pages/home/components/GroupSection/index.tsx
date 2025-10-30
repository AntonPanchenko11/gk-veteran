import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import oneCLogoIcon from './assets/oneCLogo.svg'
import systemEngineeringIcon from './assets/system-engineering.svg'
import rightsProtectionIcon from './assets/rights-protection.svg'
import trainingCenterIcon from './assets/training-center.svg'
import { useLoading } from '../../../../../app/providers/LoadingProvider'

export type CompanyDetails = {
  hero: {
    badgeLabel?: string
    badgeNote?: string
    summary: string
    ctaLabel?: string
    ctaHref?: string
  }
  about: string
  mainDirections: Array<{ title: string; description: string }>
  outsourcing: {
    subtitle: string
    items: Array<{ title: string; description: string; badge?: string }>
  }
  products: {
    subtitle: string
    columns: Array<{ title: string; items: string[]; badge?: string }>
  }
  extras: Array<{ title: string; description: string }>
  innovation: string
  conclusion: string
}

export type Company = {
  name: string
  description: string
  slug: string
  status?: 'coming-soon'
  details?: CompanyDetails
  icon?: string
}

export const companies: Company[] = [
  {
    name: 'ООО «Ветеран. Информационные системы»',
    description:
      'Разработка инструментов для эффективной работы с данными и автоматизации процессов',
    slug: 'information-systems',
    icon: oneCLogoIcon,
  },
  {
    name: 'ООО «Ветеран. Системный инжиниринг»',
    description: 'Создание хозяйственных обществ, разрабатывающих и реализующих медицинские IT-комплексы с использованием российских компонентов',
    slug: 'system-engineering',
    icon: systemEngineeringIcon,
  },
  {
    name: 'ООО «Ветеран. Защита интересов»',
    description:
      'Оказание поддержки, защита прав и представление интересов ветеранов и граждан, пострадавших в ходе специальной военной операции',
    slug: 'rights-protection',
    icon: rightsProtectionIcon,
  },
  {
    name: 'Учебный центр',
    description: 'В активном запуске',
    slug: 'training-center',
    status: 'coming-soon',
    icon: trainingCenterIcon,
  },
]

const companyRouteMap: Record<string, string> = {
  'information-systems': '/companies/information-systems',
  'system-engineering': '/companies/system-engineering',
  'rights-protection': '/companies/rights-protection',
  'training-center': '/companies/training-center',
}

export function GroupSection() {
  const location = useLocation()
  const { showLoading } = useLoading()

  const handleLinkClick = useCallback(
    (href: string) => () => {
      if (href !== location.pathname) {
        showLoading()
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    },
    [location.pathname, showLoading]
  )

  return (
    <section id="group" className="bg-surface-section">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">
        <h2 className="heading-section mb-10">Наша группа компаний объединяет</h2>
        <div className="overflow-hidden rounded-3xl shadow-[0_1px_30px_-10px_rgba(0,0,0,0.45)]">
          {companies.map((company, index) => {
            const isComingSoon = company.status === 'coming-soon'
            const path = companyRouteMap[company.slug] ?? `/companies/${company.slug}`
            const targetHref = path
            const isFirst = index === 0
            const isLast = index === companies.length - 1
            const itemRadius = isFirst ? 'rounded-t-[26px]' : isLast ? 'rounded-b-[26px]' : 'rounded-none'

            return (
              <Link
                key={company.slug}
                to={targetHref}
                onClick={handleLinkClick(targetHref)}
                className={`group block border-b border-highlight/15 ${itemRadius} last:border-b-0 ${
                  isComingSoon
                    ? 'cursor-default'
                    : 'hover:bg-gradient-to-r hover:from-highlight/15 hover:via-highlight/5 hover:to-transparent'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/80 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-section`}
              >
                <article
                  className={`flex items-center justify-between gap-6 ${itemRadius} px-6 py-6 transition ${
                    isComingSoon
                      ? 'bg-surface-base/35 text-white/60 border border-white/10'
                      : 'border border-transparent bg-surface-base text-white group-hover:border-highlight group-hover:bg-surface-base/80 group-hover:text-white group-hover:shadow-[0_18px_45px_-25px_rgba(0,0,0,0.8)]'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`hidden h-12 w-12 items-center justify-center rounded-xl border lg:flex ${
                        isComingSoon ? 'border-white/15 text-white/40' : 'border-highlight/50 text-highlight'
                      }`}
                    >
                      {company.icon ? (
                        <img
                          src={company.icon}
                          alt=""
                          className={`h-8 w-8 ${isComingSoon ? 'opacity-50' : ''}`}
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="text-base font-semibold">□</span>
                      )}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          isComingSoon ? 'text-white/75' : 'text-white'
                        }`}
                      >
                        {company.name}
                      </h3>
                      <p
                        className={`body-text mt-2 ${
                          isComingSoon ? 'text-white/60' : 'text-white/80'
                        }`}
                      >
                        {company.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-full border p-3 transition ${
                      isComingSoon
                        ? 'border-white/15 text-white/25'
                        : 'border-highlight/40 text-highlight group-hover:border-highlight group-hover:text-white'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
