import { Link } from 'react-router-dom'
import informationSystemsIcon from './assets/information-systems.svg'
import systemEngineeringIcon from './assets/system-engineering.svg'
import rightsProtectionIcon from './assets/rights-protection.svg'
import trainingCenterIcon from './assets/training-center.svg'

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
      'Разработка цифровых платформ, интеграция 1С и цифровая трансформация процессов в ветеранских компаниях.',
    slug: 'information-systems',
    icon: informationSystemsIcon,
    details: {
      hero: {
        badgeLabel: 'Специализация',
        badgeNote: 'статус 1С-Франчайзи',
        summary:
          'ООО «Ветеран» предлагает решения в области информационных систем. Мы повышаем эффективность бизнеса, автоматизируем рутинные процессы и помогаем командам оперативно адаптироваться к изменениям.',
        ctaLabel: 'Подробнее',
        ctaHref: '#about-company',
      },
      about:
        'Компания сопровождает клиентов от аудита и проектирования до внедрения и поддержки решений 1С. Мы объединяем отраслевой опыт ветеранов и современные методологии, чтобы создавать устойчивые цифровые продукты.',
      mainDirections: [
        {
          title: 'Аудит и оптимизация систем 1С',
          description:
            'Комплексная диагностика, оптимизация конфигураций, повышение производительности, подготовка к сертификации и миграция на новые версии.',
        },
        {
          title: 'Разработка собственных решений',
          description:
            'Создание модулей и сервисов под задачи бизнеса, интеграция с внешними приложениями, управление изменениями и обучением команд.',
        },
        {
          title: 'Управление DevOps-процессами',
          description:
            'Настройка CI/CD, автоматизация тестирования и релизов, внедрение DevOps-практик, сопровождение команд разработки и эксплуатации.',
        },
        {
          title: 'Облачные решения и инфраструктура',
          description:
            'Собственные облачные сервисы, аренда и администрирование баз, организация защищённого доступа и круглосуточная сервисная поддержка.',
        },
      ],
      outsourcing: {
        subtitle: 'Поддержка пользователей и систем 1С, а также объединённых цифровых сервисов.',
        items: [
          {
            title: 'Коробочные и облачные версии',
            description: 'Продажа лицензий, аренда баз, обновление конфигураций, перенос данных и развёртывание инфраструктуры.',
          },
          {
            title: 'Консультации по отчётности',
            description: 'Оперативная помощь в подготовке расчётной, бюджетной и налоговой документации.',
          },
          {
            title: 'Электронный документооборот',
            description: 'Подключение электронных подписей, Честного знака, Меркурия и других государственных сервисов.',
          },
          {
            title: 'Поддержка пользователей',
            description: 'Обучение и консультации для бухгалтеров, операторов, менеджеров в типовых конфигурациях.',
          },
          {
            title: 'Аудит и устранение ошибок',
            description: 'Восстановление учёта, поиск и исправление критичных ошибок, настройка контроля качества данных.',
            badge: 'Стоимость 3000₽/час',
          },
        ],
      },
      products: {
        subtitle: 'Собственные решения и расширения на базе 1С.',
        columns: [
          {
            title: 'ДокПоток',
            items: ['Автоматизация документооборота и согласований', 'Гибкая настройка ролей, сценариев и SLA'],
          },
          {
            title: 'По отраслям',
            items: ['Производство и ремонтные предприятия', 'Торговые сети и логистика', 'НКО и социальные проекты'],
          },
          {
            title: 'Велес',
            items: ['Платформа управления ветеранскими инициативами', 'Интеграция с CRM, сервисами коммуникаций и аналитикой'],
          },
          {
            title: 'По функциональной задаче',
            items: ['Финансы и бюджетирование', 'HR и расчёт зарплаты', 'BI и управленческая аналитика в реальном времени'],
          },
        ],
      },
      extras: [
        {
          title: 'Консультации и поддержка',
          description:
            'Разрабатываем дорожные карты цифровой трансформации, проводим обучение и обеспечиваем сопровождение после запуска решений.',
        },
        {
          title: 'Инновации и исследования',
          description:
            'Внедряем AI/ML, быстро проверяем гипотезы, создаём прототипы и выводим новые продукты на продакшн в тесном взаимодействии с заказчиком.',
        },
      ],
      innovation:
        'Направление «Информационные системы» объединяет инженеров 1С, DevOps-специалистов, аналитиков и специалистов поддержки, чтобы гарантировать стабильную работу систем и оперативно адаптировать их к изменениям.',
      conclusion:
        'Мы создаём информационные системы, которые решают текущие задачи и формируют фундамент для роста. Поддерживая ветеранские проекты, мы делаем цифровую трансформацию доступной, надёжной и результативной.',
    },
  },
  {
    name: 'ООО «Ветеран. Системный инжиниринг»',
    description: 'Инжиниринговые решения и сопровождение проектов для компаний с ветеранским коллективом.',
    slug: 'system-engineering',
    icon: systemEngineeringIcon,
  },
  {
    name: 'ООО «Ветеран. Защита интересов»',
    description:
      'Правовая поддержка, защита прав и представление интересов ветеранов и их семей, партнёрство с юристами высокой квалификации.',
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
  return (
    <section className="bg-[#4F5A4A]">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-12 lg:py-12">
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">Наша группа компаний объединяет</h2>
        <div className="mt-5 space-y-4">
          {companies.map((company) => {
            const isComingSoon = company.status === 'coming-soon'
            const path = companyRouteMap[company.slug] ?? `/companies/${company.slug}`
            const articleClasses = `flex items-center justify-between gap-6 rounded-3xl border bg-forest-900/60 p-6 transition ${
              isComingSoon
                ? 'border-forest-700/50 text-forest-400'
                : 'border-forest-700/80 text-forest-100 group-hover:border-bronze/60 group-hover:text-white'
            }`

            return (
              <Link
                key={company.slug}
                to={path}
                className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900/60"
              >
                <article className={articleClasses}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-1 flex h-6 w-6 items-center justify-center rounded-md border text-xs ${
                        isComingSoon
                          ? 'border-forest-600 bg-forest-800/60'
                          : 'border-bronze/60 bg-bronze/10 text-bronze'
                      }`}
                    >
                      {company.icon ? <img src={company.icon} alt="" className="h-4 w-4" aria-hidden="true" /> : '□'}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white/90">{company.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed">{company.description}</p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 items-center justify-center rounded-full border border-forest-700/60 p-3 text-bronze transition group-hover:border-bronze/60 group-hover:text-white lg:flex">
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
