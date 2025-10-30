import { ExtrasSection as ExtrasSectionView, type ExtrasSectionItem } from '../../../../components/ExtrasSection'
import iconTechnology from './assets/iconTechnology.svg'
import iconEducation from './assets/iconEducation.svg'

const EXTRAS_ITEMS: ExtrasSectionItem[] = [
  {
    id: 'technology-partnerships',
    title: 'Партнерства и использование современных технологий',
    description:
      'Учебный центр сотрудничает с ведущими образовательными платформами, IT-компаниями и технологическими лидерами, чтобы обеспечить доступ к самым современным инструментам и ресурсам. Мы интегрируем в обучение такие технологии, как облачные сервисы (AWS, Azure), системы контроля версий (Git), фреймворки для разработки (React, Django) и инструменты автоматизации. Это позволяет нашим выпускникам быть готовыми к реальным задачам в IT-индустрии и соответствовать ожиданиям работодателей.',
    icon: <img src={iconTechnology} alt="Современные технологии" className="h-full w-full object-contain" />,
  },
  {
    id: 'motivation',
    title: 'Просветительская и мотивационная деятельность',
    description:
      'Мы проводим информационные кампании и мероприятия, направленные на популяризацию IT-профессий среди ветеранов. Это включает открытые лекции, мастер-классы и истории успеха выпускников, которые вдохновляют других участников поверить в свои силы. Мы также распространяем информацию о возможностях в IT-сфере, чтобы мотивировать ветеранов к обучению и профессиональному росту.',
    icon: <img src={iconEducation} alt="Просветительская деятельность" className="h-full w-full object-contain" />,
  },
]

export function ExtrasSection() {
  return <ExtrasSectionView id="extras" heading="Дополнительные функции" items={EXTRAS_ITEMS} />
}
