const CONCLUSION_TEXT =
  'Направление защиты интересов ООО «Ветеран» стремится обеспечить ветеранам и пострадавшим гражданам всестороннюю поддержку, чтобы они могли восстановить свою жизнь, защитить свои права и почувствовать себя полноценной частью общества. Мы работаем для того, чтобы каждый подопечный получил уважение, справедливость и возможности для самореализации, внося вклад в укрепление социальной стабильности и справедливости.'
export function ConclusionSection() {
  return (
    <section className="bg-[#4F5A4A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-12 lg:py-24">
        <p className="text-lg font-medium leading-relaxed text-white/90 lg:text-xl">{CONCLUSION_TEXT}</p>
      </div>
    </section>
  )
}
