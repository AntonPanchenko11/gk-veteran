import { AboutSection as AboutSectionView, type AboutSectionCard } from '../../../../components/AboutSection'
import iconHand from './assets/iconHand.svg'
import iconLiter from './assets/iconLiter.svg'
import iconPils from './assets/iconPils.svg'

const PRINCIPLES: AboutSectionCard[] = [
  {
    id: 'leadership',
    title: 'Руководство и команда',
    description:
      'Мы выстраиваем экосистему вокруг сильной команды экспертов и наставников, которые понимают запросы ветеранов и сопровождают их на каждом этапе.',
    icon: <img src={iconHand} alt="" className="h-full w-full object-contain" />,
  },
  {
    id: 'innovation',
    title: 'Инновации и цифровая компетентность',
    description:
      'Внедряем цифровые инструменты в бизнес-процессы, развиваем технологические навыки и создаём новые карьерные возможности.',
    icon: <img src={iconLiter} alt="" className="h-full w-full object-contain" />,
  },
  {
    id: 'medicine',
    title: 'Акцент на медицину и цифровые возможности',
    description:
      'Инвестируем в здоровье, реабилитацию и цифровую медицину, сочетая традиционные подходы и новые форматы поддержки.',
    icon: <img src={iconPils} alt="" className="h-full w-full object-contain" />,
  },
]

export function AboutSection() {
  return (
    <AboutSectionView
      id="principles"
      heading="О компании"
      cardsHeading="Наша компания строит свой бизнес на трёх ключевых принципах"
      cards={PRINCIPLES}
      contentClassName="py-8 lg:py-12"
    />
  )
}
