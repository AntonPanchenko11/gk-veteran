const CONCLUSION_TEXT =
  'Учебный центр ООО «Ветеран» стремится стать мостом между прошлым и будущим для ветеранов боевых действий, предоставляя им доступ к востребованным IT-профессиям и обеспечивая стабильное трудоустройство. Мы создаем образовательную экосистему, которая сочетает качественное обучение, практическую подготовку и всестороннюю поддержку, чтобы каждый участник мог реализовать свой потенциал, обрести новую профессию и стать ценным членом IT-сообщества.'

export function ConclusionSection() {
  return (
    <section id="conclusion" className="bg-surface-section text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center lg:px-12 lg:py-14">
        <p className="body-text text-lg text-white lg:text-xl">{CONCLUSION_TEXT}</p>
      </div>
    </section>
  )
}
