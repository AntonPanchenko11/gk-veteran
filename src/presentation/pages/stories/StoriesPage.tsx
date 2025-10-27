import { StoriesSection } from '../home/components/StoriesSection'

export function StoriesPage() {
  return (
    <main className="bg-forest-950 text-forest-100">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-0 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">Истории сообщества</p>
        <h1 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">Живые примеры роста ветеранов</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-forest-100">
          Мы регулярно документируем опыт резидентов: как запускаются новые проекты, что помогает сохранять мотивацию и
          какие подходы работают в долгую. Делимся только тем, что проходит проверку практикой.
        </p>
      </section>
      <StoriesSection />
    </main>
  )
}
