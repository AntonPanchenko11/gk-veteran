const CONCLUSION_TEXT = (
  <>
    Направление системного инжиниринга ООО «Ветеран. Системный инжиниринг» стремится создавать надежные, гибкие и современные IT-инфраструктуры, которые поддерживают текущие потребности бизнеса<br/> и создают основу для его будущего роста. Мы гордимся тем, что наши решения помогают организациям работать эффективно, безопасно и устойчиво, обеспечивая конкурентные преимущества в условиях стремительно меняющегося технологического ландшафта.
  </>
)

export function ConclusionSection() {
  return (
    <section id="conclusion" className="bg-surface-section text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center lg:px-12 lg:py-14">
        <p className="body-text text-lg text-white lg:text-xl">{CONCLUSION_TEXT}</p>
      </div>
    </section>
  )
}
