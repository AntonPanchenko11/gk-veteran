import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { NEWS_ITEMS } from './newsItems'
import './NewsSection.css'

const NAV_BUTTON_CLASS =
  'flex h-10 w-10 flex-shrink-0 items-center justify-center self-center rounded-full border border-highlight/50 bg-surface-base/90 text-highlight transition hover:bg-highlight/15 disabled:cursor-not-allowed disabled:opacity-30'
const READ_MORE_BUTTON_CLASS =
  'inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/95 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-text-contrast transition hover:bg-highlight hover:text-text-contrast'
const CARD_GAP_PX = 16
const DESKTOP_VISIBLE_NEWS_COUNT = 3

const getVisibleCardCount = (width: number) => {
  if (width < 640) {
    return 1
  }

  if (width < 1024) {
    return 2
  }

  return DESKTOP_VISIBLE_NEWS_COUNT
}

export function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardStepWidth, setCardStepWidth] = useState(0)
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState(() => {
    if (typeof window === 'undefined') {
      return DESKTOP_VISIBLE_NEWS_COUNT
    }
    return getVisibleCardCount(window.innerWidth)
  })
  const trackRef = useRef<HTMLDivElement | null>(null)

  const totalItems = NEWS_ITEMS.length
  const maxStartIndex = Math.max(totalItems - visibleCards, 0)
  const isCarouselActive = totalItems > visibleCards

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

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCardCount(window.innerWidth))
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)

    return () => {
      window.removeEventListener('resize', updateVisibleCards)
    }
  }, [])

  const gridAutoColumnWidth = useMemo(() => {
    if (visibleCards <= 1) {
      return '100%'
    }

    const totalGap = (visibleCards - 1) * CARD_GAP_PX
    return `calc((100% - ${totalGap}px) / ${visibleCards})`
  }, [visibleCards])

  const transformStyle = useMemo(() => {
    if (!cardStepWidth) {
      return undefined
    }

    const offset = Math.min(activeIndex, maxStartIndex) * cardStepWidth
    return {
      transform: `translateX(-${offset}px)`,
      transition: 'transform 750ms cubic-bezier(0.25, 0.9, 0.3, 1)',
    }
  }, [activeIndex, cardStepWidth, maxStartIndex])

  const trackStyle = useMemo(() => {
    if (!transformStyle) {
      return { gridAutoColumns: gridAutoColumnWidth }
    }

    return {
      ...transformStyle,
      gridAutoColumns: gridAutoColumnWidth,
    }
  }, [gridAutoColumnWidth, transformStyle])

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
                  className="grid min-w-full grid-flow-col items-stretch gap-4"
                  style={trackStyle}
                >
                  {NEWS_ITEMS.map((news) => {
                    const imageSrc = news.image ?? ''
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
                          className="mb-6 h-48 w-full rounded-2xl object-cover sm:h-56 lg:h-64"
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
