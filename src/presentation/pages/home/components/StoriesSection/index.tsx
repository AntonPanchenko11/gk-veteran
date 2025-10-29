import { useState } from 'react'

type Story = {
  title: string
  content: string
}

const stories: Story[] = [
  {
    title: 'Академик',
    content:
      'Алексей Петрович с 2016 года развивает направление цифровых инноваций для ветеранов. Сегодня управляет образовательным центром и менторской программой. Экосистема помогает масштабировать проекты и выстраивать партнёрства.',
  },
  {
    title: 'Удав',
    content:
      'Создал линию продуктов тактической медицины и наставничества. Проект объединяет опыт полевых медиков и современные подходы реабилитации.',
  },
  {
    title: 'Родосс',
    content:
      'Команда специалистов гуманитарной миссии. Сейчас разрабатывает сервисы для сопровождения ветеранов в смене профессии и поиске работы.',
  },
  {
    title: 'Зубной',
    content:
      'Работает на стыке медицины и образования, развивает телемедицинские решения и программу наставничества для семей ветеранов.',
  },
]

export function StoriesSection() {
  const [opened, setOpened] = useState('Академик')

  return (
    <section id="stories" className="bg-forest-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-8 lg:grid-cols-[1.4fr_1fr] lg:px-12 lg:py-12">
        <div>
          <h2 className="text-3xl font-semibold text-white lg:text-4xl">Истории</h2>
          <p className="mt-3 text-sm leading-relaxed text-forest-100">
            Ежедневно мы работаем над тем, чтобы каждый ветеран мог реализовать свой потенциал. Экосистема объединяет
            наставников, предпринимателей, специалистов, а также образовательный и экспертный блок.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-forest-100">
            Мы изучаем потребности и поддерживаем на каждом этапе развития — от идеи до устойчивого бизнеса. В нашей
            команде есть эксперты по финансам, управлению, юридическому обеспечению и маркетингу.
          </p>
        </div>
        <div className="space-y-3 rounded-3xl border border-forest-800/80 bg-forest-900/40 p-2">
          {stories.map((story) => {
            const isOpened = story.title === opened
            return (
              <button
                key={story.title}
                type="button"
                onClick={() => setOpened((current) => (current === story.title ? '' : story.title))}
                className={`w-full rounded-[1.25rem] border px-6 py-5 text-left transition ${
                  isOpened
                    ? 'border-bronze/60 bg-forest-900/80 text-white shadow-[0_15px_25px_-20px_rgba(0,0,0,0.6)]'
                    : 'border-transparent text-forest-200 hover:border-forest-700/80 hover:bg-forest-900/40'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold">{story.title}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`h-5 w-5 transition ${isOpened ? 'rotate-180 text-bronze' : 'text-forest-400'}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                {isOpened && (
                  <p className="mt-4 text-sm leading-relaxed text-forest-100/90">
                    {story.content}
                  </p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
