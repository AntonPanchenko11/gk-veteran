import { Fragment, type JSX } from 'react'
import missionImage1 from './assets/mission-1.svg'
import missionImage2 from './assets/mission-2.svg'
import missionImage3 from './assets/mission-3.svg'
import missionImage4 from './assets/mission-4.svg'
import missionImage5 from './assets/mission-5.svg'
import missionImage6 from './assets/mission-6.svg'
import missionImage7 from './assets/mission-7.svg'

type MissionCard = {
  title: JSX.Element
  image: string
  gridClass: string
}

const missionCards: MissionCard[] = [
  {
    title: (
      <Fragment>
        Предоставление возможностей
        трудоустройства ветеранам СВО
      </Fragment>
    ),
    image: missionImage1,
    gridClass: 'md:col-span-2',
  },
  {
    title: (
      <Fragment>
        Обеспечение достойной, высокооплачиваемой работы
        <br/>
        для людей, прошедших через боевые действия
      </Fragment>
    ),
    image: missionImage4 ,
    gridClass: 'md:col-span-2',
  },
  {
    title: (
      <Fragment>
        Вклад в процветание и развитие страны
        за счёт интеграции ветеранов 
        <br/>
        в экономическую и социальную жизнь
      </Fragment>
    ),
    image: missionImage6 ,
    gridClass: 'md:col-span-2 md:row-span-2',
  },
  {
    title: (
      <Fragment>
        Помощь в адаптации к жизни
        в мирном обществе
      </Fragment>
    ),
    image: missionImage2,
    gridClass: 'md:col-span-2',
  },
  {
    title: (
      <Fragment>
        Содействие росту благосостояния ветеранов
        через их трудовую занятость
      </Fragment>
    ),
    image: missionImage5,
    gridClass: 'md:col-span-2',
  },
  {
    title: (
      <Fragment>
        Подтверждение важности и востребованности ветеранов
        несмотря на полученные ими травмы и увечья
      </Fragment>
    ),
    image: missionImage3,
    gridClass: 'md:col-span-4',
  },
  {
    title: (
      <Fragment>
        Демонстрация того, что труд ветеранов необходим
        и ценен
        <br/>
        для общества сегодня и в будущем
      </Fragment>
    ),
    image: missionImage7 ,
    gridClass: 'md:col-span-2',
  },
]

export function MissionsSection() {
  return (
    <section id="missions" className="bg-surface-base">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">
        <h2 className="heading-section mb-10">Мы ставим перед собой задачи:</h2>
        <div className="grid gap-6 md:auto-rows-[minmax(220px,_auto)] md:grid-cols-6">
          {missionCards.map(({ title, image, gridClass }) => (
            <article
              key={title.toString()}
              className={`relative flex min-h-[220px] w-full flex-col justify-end overflow-hidden rounded-[28px] bg-surface-section p-8 text-left text-white shadow-[0_40px_80px_-45px_rgba(0,0,0,0.9)] md:min-h-0 ${gridClass}`}
            >
              <img
                src={image}
                alt=""
                className="absolute left-1/2 top-1/2 h-[150px] w-[225px] -translate-x-1/2 -translate-y-1/2 object-contain"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background: 'linear-gradient(180deg, rgba(79, 90, 74, 0) 35%, rgba(79, 90, 74, 0.92) 65%)',
                }}
              ></div>
              <p className="relative z-10 max-w-[260px] text-[0.95rem] font-medium leading-relaxed">
                {title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
