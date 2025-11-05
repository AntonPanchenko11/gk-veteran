import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { NEWS_ITEMS } from '../home/components/NewsSection'
import fallbackImage from './assets/image.png'
import { ContactsSection } from '../../components/ContactsSection'

const NAV_BUTTON_BASE =
  'inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition hover:border-highlight hover:text-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/40'

export function NewsPage() {
  const { newsId } = useParams<{ newsId: string }>()

  const { news, index } = useMemo(() => {
    const itemIndex = NEWS_ITEMS.findIndex((item) => item.id === newsId)
    return {
      news: itemIndex >= 0 ? NEWS_ITEMS[itemIndex] : undefined,
      index: itemIndex,
    }
  }, [newsId])

  if (!news) {
    return <Navigate to={`/news/${NEWS_ITEMS[0].id}`} replace />
  }

  const paragraphs = news.content && news.content.length > 0 ? news.content : [news.description]
  const coverImage = news.image ?? fallbackImage
  const prevItem = index > 0 ? NEWS_ITEMS[index - 1] : undefined
  const nextItem = index < NEWS_ITEMS.length - 1 ? NEWS_ITEMS[index + 1] : undefined

  const prevButtonClass = prevItem ? NAV_BUTTON_BASE : `${NAV_BUTTON_BASE} pointer-events-none opacity-40`
  const nextButtonClass = nextItem ? NAV_BUTTON_BASE : `${NAV_BUTTON_BASE} pointer-events-none opacity-40`

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [newsId])

  return (
    <>
      <main className="bg-surface-base text-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">
          <header className="mb-10 flex flex-col gap-6">
            <div className="flex items-center justify-between text-sm text-white/60">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
                <span aria-hidden>←</span>
                Назад
              </Link>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-semibold text-white md:text-4xl">{news.title}</h1>
              <img
                src={coverImage}
                alt={news.title}
                className="w-full rounded-[32px] border border-white/10 object-cover shadow-[0_45px_90px_-60px_rgba(0,0,0,0.85)]"
              />
            </div>
          </header>

          <article className="space-y-6 text-white/80">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="body-text leading-relaxed text-white/80">
                {paragraph}
              </p>
            ))}
          </article>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-white/70 md:flex-row md:items-center md:justify-between">
            <Link to={prevItem ? `/news/${prevItem.id}` : '#'} className={prevButtonClass} aria-disabled={!prevItem}>
              предыдущая
            </Link>
            <Link to={nextItem ? `/news/${nextItem.id}` : '#'} className={nextButtonClass} aria-disabled={!nextItem}>
              следующая
            </Link>
          </div>
        </div>
      </main>

      <ContactsSection className="bg-surface-base" contentClassName="py-14" />
    </>
  )
}
