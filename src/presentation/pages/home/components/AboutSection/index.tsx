import { AboutSection as AboutSectionView, type AboutSectionCard } from '../../../../components/AboutSection'
import iconHand from './assets/iconHand.svg'
import iconLiter from './assets/iconLiter.svg'
import iconPils from './assets/iconPils.svg'

const PRINCIPLES: AboutSectionCard[] = [
  {
    id: 'leadership',
    title: 'Руководство и команда',
    description:
      'Нас возглавляют ветераны боевых действий и участники СВО — люди, закалённые во множестве конфликтов, преданные ценностям чести и ответственности. Один из главных жизненных приоритетов нашей команды — поддержка и содействие трудоустройству своих соратников, особенно тех, кто столкнулся с трудностями адаптации после полученных на службе травм или инвалидности.',
    icon: <img src={iconHand} alt="" className="h-full w-full object-contain" />,
  },
  {
    id: 'innovation',
    title: 'Инновации и цифровая компетентность',
    description:
      'Мы обладаем высоким уровнем профессионализма в IT-сфере, опытом успешной разработки собственных программных продуктов и реализацией крупных IT-проектов. ',
    icon: <img src={iconLiter} alt="" className="h-full w-full object-contain" />,
  },
  {
    id: 'medicine',
    title: 'Акцент на медицину и цифровые возможности',
    description:
      'Одно из приоритетных направлений деятельности компании — развитие медицинских информационных систем. Мы рассматриваем здравоохранение как важную сферу цифровизации, стремясь сделать медицинскую помощь максимально доступной, точной, быстрой и ориентированной на врача и пациента.',
    icon: <img src={iconPils} alt="" className="h-full w-full object-contain" />,
  },
]

export function AboutSection() {
  return (
    <AboutSectionView
      id="principles"
      heading="О компании"
      cardsHeading="Наша компания строит свой бизнес на трех ключевых принципах"
      cards={PRINCIPLES}
    />
  )
}
