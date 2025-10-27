export function AboutPage() {
  return (
    <main className="bg-moss text-forest-100">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-0">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">О компании</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-white lg:text-5xl">
          Экосистема, которая помогает ветеранам строить новую жизнь
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-forest-100">
          «Ветеран» — это бизнес-экосистема и сообщество специалистов, где ветераны получают поддержку в запуске
          собственных проектов, развитии карьеры и адаптации к мирной жизни. Мы соединяем предпринимателей, наставников,
          экспертов по праву, финансам, маркетингу и глобальных партнёров.
        </p>
        <div className="mt-12 grid gap-8 rounded-3xl border border-forest-800/70 bg-forest-900/60 p-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white">Что мы делаем</h2>
            <ul className="mt-4 space-y-3 text-sm text-forest-100">
              <li>• Сопровождаем в создании и масштабировании бизнеса.</li>
              <li>• Обучаем современным digital-навыкам и управлению продуктами.</li>
              <li>• Поддерживаем в юридических и финансовых вопросах.</li>
              <li>• Развиваем наставничество и связи внутри сообщества.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Наш подход</h2>
            <ul className="mt-4 space-y-3 text-sm text-forest-100">
              <li>• Индивидуальные дорожные карты для ветеранов и команд.</li>
              <li>• Практика «равный-равному» и работа с менторской сетью.</li>
              <li>• Сильное цифровое ядро: платформа, CRM, аналитика.</li>
              <li>• Фокус на устойчивости: личное здоровье, экономическую независимость и доверие.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
