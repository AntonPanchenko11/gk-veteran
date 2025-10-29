const CONCLUSION_TEXT =
  'Учебный центр ООО «Ветеран» стремится стать мостом между прошлым и будущим для ветеранов боевых действий, предоставляя им доступ к востребованным IT-профессиям и обеспечивая стабильное трудоустройство. Мы создаем образовательную экосистему, которая сочетает качественное обучение, практическую подготовку и всестороннюю поддержку, чтобы каждый участник мог реализовать свой потенциал, обрести новую профессию и стать ценным'
+ 'членом IT-сообщества.'
export function ConclusionSection() {
  return (
    <section className="bg-[#4F5A4A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-12 lg:py-24">
        <p className="text-lg font-medium leading-relaxed text-white/90 lg:text-xl">{CONCLUSION_TEXT}</p>
      </div>
    </section>
  )
}
