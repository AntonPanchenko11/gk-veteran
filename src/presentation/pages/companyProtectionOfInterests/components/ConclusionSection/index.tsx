const CONCLUSION_TEXT = (
  <>
    Направление защиты интересов ООО «Ветеран. Защита интересов» стремится обеспечить ветеранам<br/> и пострадавшим гражданам всестороннюю поддержку, чтобы они могли восстановить свою жизнь, защитить свои права и почувствовать себя полноценной частью общества. Мы работаем для того, чтобы каждый подопечный получил уважение, справедливость и возможности для самореализации, внося вклад в укрепление социальной стабильности и справедливости.
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
