import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { NEWS_ITEMS, type NewsContentBlock } from '../home/components/NewsSection/newsItems'
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [newsId])

  if (!news) {
    return <Navigate to={`/news/${NEWS_ITEMS[0].id}`} replace />
  }

  const contentBlocks: NewsContentBlock[] =
    news.content && news.content.length > 0
      ? news.content
      : [
          {
            type: 'paragraph',
            text: news.description,
          },
        ]
  const coverImage = news.image ?? fallbackImage
  const prevItem = index > 0 ? NEWS_ITEMS[index - 1] : undefined
  const nextItem = index < NEWS_ITEMS.length - 1 ? NEWS_ITEMS[index + 1] : undefined

  const prevButtonClass = prevItem ? NAV_BUTTON_BASE : `${NAV_BUTTON_BASE} pointer-events-none opacity-40`
  const nextButtonClass = nextItem ? NAV_BUTTON_BASE : `${NAV_BUTTON_BASE} pointer-events-none opacity-40`

  return (
    <>
      <main className="bg-surface-base text-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-10 lg:px-12 lg:py-14">
          <header className="mb-10 flex flex-col gap-6">
            <div className="flex items-center justify-between text-sm text-white/60">
              <Link
                to={{ pathname: '/', hash: '#news' }}
                className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <span aria-hidden>←</span>
                Назад
              </Link>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-semibold text-white md:text-4xl">{news.title}</h1>
              <img
                src={coverImage}
                alt={news.title}
                className="w-full rounded-[32px] border border-white/10 object-cover shadow-[0_45px_90px_-60px_rgba(0,0,0,0.85)] md:h-[400px]"
              />
            </div>
          </header>

          <article className="space-y-6 text-white/80">
            {contentBlocks.map((block, idx) => {
              if (block.type === 'heading') {
                const HeadingTag = (block.level === 1 ? 'h1' : block.level === 3 ? 'h3' : 'h2') as 'h1' | 'h2' | 'h3'
                const headingClasses =
                  block.level === 1
                    ? 'text-3xl font-semibold text-white'
                    : block.level === 3
                      ? 'text-xl font-semibold text-white'
                      : 'text-2xl font-semibold text-white'
                return (
                  <HeadingTag key={idx} className={headingClasses}>
                    {block.text}
                  </HeadingTag>
                )
              }

              if (block.type === 'list') {
                const ListTag = (block.ordered ? 'ol' : 'ul') as 'ol' | 'ul'
                return (
                  <ListTag
                    key={idx}
                    className={block.ordered ? 'list-decimal space-y-2 pl-6 marker:text-highlight' : 'list-disc space-y-2 pl-6 marker:text-highlight'}
                  >
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ListTag>
                )
              }

              if (block.type === 'quote') {
                return (
                  <blockquote key={idx} className="border-l-4 border-highlight/60 pl-5 italic text-white/75">
                    {block.text}
                  </blockquote>
                )
              }

              return (
                <p key={idx} className="body-text leading-relaxed text-white/80">
                  {block.text}
                </p>
              )
            })}
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
