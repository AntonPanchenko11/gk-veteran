const CONCLUSION_TEXT =
  'Направление системного инжиниринга ООО «Ветеран» стремится создавать надежные, гибкие и современные IT-инфраструктуры, которые поддерживают текущие потребности бизнеса и создают основу для его будущего роста. Мы гордимся тем, что наши решения помогают организациям работать эффективно, безопасно и устойчиво, обеспечивая конкурентные преимущества в условиях стремительно меняющегося технологического ландшафта.'

export function ConclusionSection() {
  return (
    <section className="bg-[#4F5A4A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-12 lg:py-24">
        <p className="text-lg font-medium leading-relaxed text-white/90 lg:text-xl">{CONCLUSION_TEXT}</p>
      </div>
    </section>
  )
}
