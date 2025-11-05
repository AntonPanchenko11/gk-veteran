import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import slide1 from './assets/image.png'
import './NewsSection.css'

export interface NewsItem {
  id: string
  title: string
  description: string
  link?: string
  image?: string
  content?: string[]
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'veteran-learning-center',
    title: 'Запуск ООО «Ветеран. Учебный центр»',
    description:
      'С другой стороны, существующая теория способствует повышению качества экономической целесообразности принимаемых решений. Ключевые особенности структуры проекта могут быть объявлены нарушающими общечеловеческие нормы, однако мы всегда ищем баланс между инновациями и устойчивостью.',
    link: '/news/veteran-learning-center',
    content: [
      'Разнообразный и богатый опыт говорит нам, что укрепление и развитие внутренней структуры способствует повышению качества дальнейших направлений развития. Мы учитываем отзывы наставников и участников, чтобы каждая программа отвечала реальному запросу ветеранов.',
      'Лишь элементы политического процесса в равной степени представлены самим сообществом ветеранов. Мы совместно создаём стандарты подготовки, делимся практическими инструментами трудоустройства и запускаем программы наставничества.',
      'Новая инфраструктура учебного центра сочетает дистанционные и очные форматы обучения. Мы создаём безопасную среду, в которой можно осваивать цифровые компетенции и возвращаться к активной профессиональной деятельности.',
      'В тесном сотрудничестве с партнёрами учебный центр формирует устойчивое сообщество поддержки. Прозрачные механизмы обратной связи и регулярные обновления курсов позволяют выпускникам чувствовать уверенность и планировать дальнейший рост.',
    ],
  },
  {
    id: 'digital-transformation',
    title: 'Цифровая трансформация инфраструктуры',
    description:
      'Мы запускаем инициативу по модернизации инфраструктуры наших партнёров. Проект объединяет облачные сервисы, элементы искусственного интеллекта и современные подходы к управлению данными, создавая основу для устойчивого технологического роста.',
    link: '/news/digital-transformation',
    content: [
      'Инициатива цифровой трансформации объединяет облачные сервисы, элементы искусственного интеллекта и современные подходы к управлению данными. Мы создаём платформу, которая упрощает запуск новых сервисов и повышает устойчивость инфраструктуры.',
      'Для разработки целевой архитектуры мы привлекаем экспертов по информационной безопасности, инженеров и специалистов по операционному сопровождению. Такой подход обеспечивает прозрачность миграции на новые решения и управляемый график внедрения.',
      'Цифровая трансформация невозможна без обучения команд заказчика. Мы внедряем программы наставничества, поддерживаем команды эксплуатации и помогаем сформировать культуру непрерывных улучшений.',
    ],
  },
  {
    id: 'social-program',
    title: 'Социальные программы и поддержка ветеранов',
    description:
      'Вместе с отраслевыми экспертами мы расширяем программы наставничества и профессиональной ориентации. Новая схема поддержки сочетает практическое обучение, карьерное сопровождение и развитие предпринимательских инициатив.',
    link: '/news/social-program',
    content: [
      'Социальная программа ориентирована на комплексную поддержку ветеранов на всех этапах адаптации к гражданской жизни. Мы развиваем карьерное консультирование, правовое сопровождение и психологическую поддержку.',
      'Новая схема наставничества соединяет опытных руководителей и начинающих специалистов. Участники получают доступ к реальным проектам, осваивают современные цифровые инструменты и формируют устойчивые профессиональные связи.',
      'Мы тесно работаем с региональными центрами занятости, чтобы расширить набор практик для трудоустройства. Программа предусматривает гибкие форматы участия и учитывает индивидуальные потребности каждого участника.',
    ],
  },
  {
    id: 'innovation-hub',
    title: 'Инновационный хаб в партнёрстве с технологическими компаниями',
    description:
      'Мы создаём площадку, где ветераны смогут тестировать и внедрять новые цифровые решения. Хаб объединяет развитие компетенций, поддержку стартапов и пилотирование проектов.',
    link: '/news/innovation-hub',
    content: [
      'Инновационный хаб объединяет команды ветеранов и технологические компании, готовые делиться экспертизой. Площадка позволяет тестировать прототипы, проводить пользовательские сессии и настраивать пилотные проекты.',
      'Мы запускаем акселерационные треки, в которых участники получают доступ к инфраструктуре, менторам и инвестиционным сессиям. Отдельное внимание уделяем развитию продуктов, ориентированных на социальный эффект.',
      'Хаб формирует банк решений, который помогает быстро масштабировать успешные инициативы и подключать к ним новых партнёров. Мы поддерживаем обмен опытом и создаём сообщество, нацеленное на устойчивый технологический рост.',
    ],
  },
]

const VISIBLE_NEWS_COUNT = 3
const NAV_BUTTON_CLASS =
  'flex h-10 w-10 flex-shrink-0 items-center justify-center self-center rounded-full border border-highlight/50 bg-surface-base/90 text-highlight transition hover:bg-highlight/15 disabled:cursor-not-allowed disabled:opacity-30'
const READ_MORE_BUTTON_CLASS =
  'inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/95 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-text-contrast transition hover:bg-highlight hover:text-text-contrast'
const CARD_GAP_PX = 16

export function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardStepWidth, setCardStepWidth] = useState(0)
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const totalItems = NEWS_ITEMS.length
  const maxStartIndex = Math.max(totalItems - VISIBLE_NEWS_COUNT, 0)
  const isCarouselActive = totalItems > VISIBLE_NEWS_COUNT

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxStartIndex))
  }, [maxStartIndex])

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) {
        return
      }

      const cards = Array.from(trackRef.current.children) as HTMLElement[]
      if (cards.length === 0) {
        return
      }

      const heights = cards.map((card) => card.offsetHeight).filter((height) => height > 0)
      if (heights.length > 0) {
        const tallest = Math.max(...heights)
        setMaxCardHeight((prev) => (prev === tallest ? prev : tallest))
      }

      if (cards.length > 1) {
        const firstRect = cards[0].getBoundingClientRect()
        const secondRect = cards[1].getBoundingClientRect()
        const step = secondRect.left - firstRect.left
        if (step > 0) {
          setCardStepWidth(step)
          return
        }
      }

      const fallbackWidth = cards[0].getBoundingClientRect().width + CARD_GAP_PX
      setCardStepWidth(fallbackWidth)
    }

    measure()
    window.addEventListener('resize', measure)

    return () => {
      window.removeEventListener('resize', measure)
    }
  }, [])

  const trackStyle = useMemo(() => {
    if (!cardStepWidth) {
      return undefined
    }

    const offset = Math.min(activeIndex, maxStartIndex) * cardStepWidth
    return {
      transform: `translateX(-${offset}px)`,
      transition: 'transform 750ms cubic-bezier(0.25, 0.9, 0.3, 1)',
    }
  }, [activeIndex, cardStepWidth, maxStartIndex])

  const cardMinHeightStyle = maxCardHeight ? { minHeight: `${maxCardHeight}px` } : undefined
  const canScrollPrev = isCarouselActive && activeIndex > 0
  const canScrollNext = isCarouselActive && activeIndex < maxStartIndex

  const handlePrev = () => {
    if (!canScrollPrev) {
      return
    }
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    if (!canScrollNext) {
      return
    }
    setActiveIndex((prev) => Math.min(prev + 1, maxStartIndex))
  }

  return (
    <section id="news" className="bg-surface-section text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="heading-section">Новостные потоки</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex min-w-full items-center gap-4">
              {isCarouselActive && (
                <button
                  type="button"
                  aria-label="Предыдущие новости"
                  onClick={handlePrev}
                  disabled={!canScrollPrev}
                  className={NAV_BUTTON_CLASS}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 6 9 12l6 6" />
                  </svg>
                </button>
              )}

              <div className="relative flex-1 overflow-hidden">
                <div
                  ref={trackRef}
                  className="grid min-w-full grid-flow-col auto-cols-[calc((100%-32px)/3)] items-stretch gap-4"
                  style={trackStyle}
                >
                  {NEWS_ITEMS.map((news) => {
                    const imageSrc = news.image ?? slide1
                    const targetLink = news.link ?? '#'

                    return (
                      <article
                        key={news.id}
                        className="flex flex-col rounded-[28px] border border-white/10 bg-surface-base p-4 transition hover:border-highlight/60 hover:bg-surface-base/90"
                        style={cardMinHeightStyle}
                      >
                        <img
                          src={imageSrc}
                          alt={news.title}
                          className="mb-6 w-full rounded-2xl object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="flex flex-1 flex-col gap-4 overflow-hidden">
                          <h3
                            className="news-title text-lg font-semibold text-white"
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {news.title}
                          </h3>
                          <p className="news-description text-sm leading-relaxed text-white">{news.description}</p>
                        </div>
                        <div className="mt-6">
                          <Link to={targetLink} className={READ_MORE_BUTTON_CLASS}>
                            читать полностью
                          </Link>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>

              {isCarouselActive && (
                <button
                  type="button"
                  aria-label="Следующие новости"
                  onClick={handleNext}
                  disabled={!canScrollNext}
                  className={NAV_BUTTON_CLASS}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
