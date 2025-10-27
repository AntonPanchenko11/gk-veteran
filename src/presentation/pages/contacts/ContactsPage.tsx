import { ContactsSection } from '../home/components/ContactsSection'

export function ContactsPage() {
  return (
    <main className="bg-forest-950 text-forest-100">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-0 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">Связь с нами</p>
        <h1 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">Давайте обсудим сотрудничество</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-forest-100">
          Оставьте заявку на сайте или напишите нам напрямую. Мы ответим и предложим ближайшие шаги, чтобы подключить
          вас к экосистеме и рассказать обо всех возможностях.
        </p>
      </section>
      <ContactsSection />
    </main>
  )
}
