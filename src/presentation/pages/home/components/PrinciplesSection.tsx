import iconHand from '../images/iconHand.svg'
import iconLiter from '../images/iconLiter.svg'
import iconPils from '../images/iconPils.svg'


const principles = [
  {
    title: 'Руководство и команда',
    description:
      'Мы выстраиваем экосистему вокруг сильной команды экспертов и наставников, которые понимают запросы ветеранов и сопровождают их на каждом этапе.',
    gradient: 'from-[#1f2223] via-[#121516] to-[#090b0c]',
    glow: 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),rgba(0,0,0,0))]',
    icon: <img src={iconHand}/>
  },
  {
    title: 'Инновации и цифровая компетентность',
    description:
      'Внедряем цифровые инструменты в бизнес-процессы, развиваем технологические навыки и создаём новые карьерные возможности.',
    gradient: 'from-[#242221] via-[#131110] to-[#0b0908]',
    glow: 'bg-[radial-gradient(circle_at_top_right,rgba(255,173,66,0.25),rgba(0,0,0,0))]',
    icon: <img src={iconLiter}/>
  },
  {
    title: 'Акцент на медицину и цифровые возможности',
    description:
      'Инвестируем в здоровье, реабилитацию и цифровую медицину, сочетая традиционные подходы и новые форматы поддержки.',
    gradient: 'from-[#27201b] via-[#16110d] to-[#0b0806]',
    glow: 'bg-[radial-gradient(circle_at_center,rgba(255,193,120,0.3),rgba(0,0,0,0))]',
    icon: <img src={iconPils}/>
  },
]

export function PrinciplesSection() {
  return (
    <section id="about" className="bg-[#0d0f10]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:px-12">
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">
          Наша компания строит свой бизнес на трёх ключевых принципах
        </h2>
        <div className="grid gap-7 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className={`group relative flex h-full flex-col gap-6 overflow-hidden rounded-[26px] border border-white/8 bg-gradient-to-br ${principle.gradient} p-8 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.85)]`}
            >
              <div className={`pointer-events-none absolute inset-0 ${principle.glow}`} />
              <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/10 opacity-40" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
                <span className="text-sm font-semibold uppercase tracking-[0.3em]">В</span>
              </div>
              <h3 className="relative text-xl font-semibold text-white">{principle.title}</h3>
              <p className="relative text-sm leading-relaxed text-white/80">{principle.description}</p>
              <div className="relative">{principle.icon}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
