import { ExtrasSection as ExtrasSectionView, type ExtrasSectionItem } from '../../../../components/ExtrasSection'
import iconSupport from './assets/iconSupport.svg'
import iconInnovation from './assets/iconInnovation.svg'

const EXTRAS_ITEMS: ExtrasSectionItem[] = [
  {
    id: 'consulting',
    title: 'Консультации и поддержка',
    description:
      'Помимо разработки и аудита, мы предоставляем консультационные услуги, направленные на повышение эффективности использования информационных систем. Специалисты помогают выбрать оптимальные технологии, разработать стратегию цифровой трансформации и внедрить лучшие практики управления IT-проектами. Мы обеспечиваем техническую поддержку, гарантируя стабильную работу решений и оперативное устранение неполадок.',
    icon: <img src={iconSupport} alt="Поддержка" className="h-full w-full object-contain" />,
  },
  {
    id: 'innovation',
    title: 'Инновации и исследования',
    description:
      'Мы активно исследуем новые технологии и подходы, чтобы предлагать клиентам современные решения. Следим за трендами в области искусственного интеллекта, облачных технологий и автоматизации, интегрируя их в наши продукты и услуги. Это позволяет нам оставаться на передовой IT-индустрии и предоставлять клиентам конкурентные преимущества.',
    icon: <img src={iconInnovation} alt="Инновации и исследования" className="h-full w-full object-contain" />,
  },
]

export function ExtrasSection() {
  return <ExtrasSectionView heading="Дополнительные функции" items={EXTRAS_ITEMS} />
}
