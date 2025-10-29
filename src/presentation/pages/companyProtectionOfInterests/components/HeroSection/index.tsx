import { HeroSection as HeroSectionView, type HeroActionItem } from '../../../../components/HeroSection'
import heroBackground from './assets/image.png'
import logo from './assets/logo.svg'

interface HeroSectionProps {
  backHref?: string
}

export function HeroSection({ backHref = '/' }: HeroSectionProps) {
  const actions: HeroActionItem[] = [
    {
      label: 'Подробнее',
      href: '#about-company',
      variant: 'primary',
    },
  ]

  return (
    <HeroSectionView
      title="ООО «Ветеран. Защита интересов»"
      description="ООО «Ветеран» обеспечивает юридическую, социальную и психологическую поддержку ветеранам и гражданам, пострадавшим в ходе специальной военной операции. Мы защищаем их права, представляем интересы в органах власти, содействуем социальной и профессиональной интеграции, а также проводим просветительскую работу, чтобы обеспечить справедливость и полноценное участие в жизни общества."
      backgroundImage={heroBackground}
      showBackButton
      backHref={backHref}
      actions={actions}
      logo={
        <div className="flex h-[46px] w-[160px] items-center justify-center">
          <img src={logo} alt="Ветеран. Группа компаний" className="h-full w-auto" />
        </div>
      }
    />
  )
}
