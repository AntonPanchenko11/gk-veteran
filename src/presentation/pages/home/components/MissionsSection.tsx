import type { ReactNode } from 'react'

type MissionCard = {
  text: string
  pattern: ReactNode
}

const missionCards: MissionCard[] = [
  {
    text: 'Предоставление возможностей трудоустройства ветеранам СВО',
    pattern: (
      <svg viewBox="0 0 300 180" className="h-full w-full text-white/18" fill="none" stroke="currentColor" strokeWidth="4">
        <rect x="40" y="42" width="72" height="72" rx="16" />
        <rect x="148" y="30" width="56" height="56" rx="14" />
        <path d="M116 108h98" strokeLinecap="round" />
        <path d="M230 108 276 64" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Обеспечение достойной, высокооплачиваемой работы для людей, прошедших через боевые действия',
    pattern: (
      <svg viewBox="0 0 300 180" className="h-full w-full text-white/18" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M36 138c44-34 80-52 132-52 24 0 46 6 68 18" strokeLinecap="round" />
        <path d="M88 82h56" />
        <path d="M220 32 260 72" />
        <path d="M220 72 260 32" />
        <path d="M168 98 196 60" />
      </svg>
    ),
  },
  {
    text: 'Вклад в процветание и развитие страны за счёт интеграции ветеранов в экономическую и социальную жизнь',
    pattern: (
      <svg viewBox="0 0 300 180" className="h-full w-full text-white/18" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M60 128h204" />
        <path d="M88 128V104" />
        <path d="M134 128V86" />
        <path d="M184 128V64" />
        <path d="M232 128V38" />
        <path d="M56 44c48 10 88 32 120 66" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Помощь в адаптации к жизни в мирном обществе',
    pattern: (
      <svg viewBox="0 0 300 180" className="h-full w-full text-white/18" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M40 126c20-20 40-30 64-30s44 10 64 30" strokeLinecap="round" />
        <rect x="64" y="42" width="88" height="88" rx="18" />
        <path d="M64 86h-32" strokeLinecap="round" />
        <path d="M152 86h56" strokeLinecap="round" />
        <path d="M196 122c18 14 30 28 40 48" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Содействие росту благосостояния ветеранов через их трудовую занятость',
    pattern: (
      <svg viewBox="0 0 300 180" className="h-full w-full text-white/18" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M50 138h200" />
        <path d="M92 138V74" />
        <path d="M140 138V48" />
        <path d="M188 138V84" />
        <path d="M236 138V60" />
        <path d="M120 34v26" strokeLinecap="round" />
        <path d="M168 24v34" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Подтверждение важности и востребованности ветеранов, несмотря на полученные ими травмы и увечья',
    pattern: (
      <svg viewBox="0 0 300 180" className="h-full w-full text-white/18" fill="none" stroke="currentColor" strokeWidth="4">
        <rect x="52" y="44" width="96" height="96" rx="22" />
        <rect x="128" y="70" width="96" height="96" rx="22" />
        <rect x="180" y="30" width="64" height="64" rx="18" />
        <path d="M44 128h72" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Демонстрации того, что труд ветеранов необходим и ценен для общества сегодня и в будущем',
    pattern: (
      <svg viewBox="0 0 300 180" className="h-full w-full text-white/18" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M68 126 36 94" />
        <path d="M68 126l32-32" />
        <path d="M116 78 152 46" />
        <path d="M148 126l42-42" />
        <path d="M210 128 246 92" />
        <path d="M106 108 142 72" />
      </svg>
    ),
  },
]

export function MissionsSection() {
  return (
    <section id="missions" className="bg-[#111611]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">Мы ставим перед собой задачи:</h2>
        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {missionCards.map((mission) => (
            <article
              key={mission.text}
              className="relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-[28px] border border-white/8 bg-[#556350] p-8 shadow-[0_40px_80px_-45px_rgba(0,0,0,0.9)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10 opacity-30" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),rgba(0,0,0,0))]" />
              <div className="pointer-events-none absolute inset-0">
                {mission.pattern}
              </div>
              <p className="relative mt-8 max-w-[250px] text-[0.94rem] font-medium leading-relaxed text-white">
                {mission.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
