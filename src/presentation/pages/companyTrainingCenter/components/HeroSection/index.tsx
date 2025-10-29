import { useCallback } from 'react'
import type { MouseEvent } from 'react'
import { HeroSection as HeroSectionView, type HeroActionItem, type HeroNavItem } from '../../../../components/HeroSection'
import heroBackground from './assets/image.png'
import logo from './assets/logo.svg'

interface HeroSectionProps {
  backHref?: string
}

export function HeroSection({ backHref = '/' }: HeroSectionProps) {
  const scrollToAnchor = useCallback(
    (anchorId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      const target = document.getElementById(anchorId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.location.hash = anchorId
      }
    },
    []
  )

  const navItems: HeroNavItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '#about-company', onClick: scrollToAnchor('about-company') },
    { label: 'Направления компании', href: '#directions', onClick: scrollToAnchor('directions') },
    { label: 'Контакты', href: '#contacts', onClick: scrollToAnchor('contacts') },
  ]

  const actions: HeroActionItem[] = [
    { label: 'Подробнее', href: '#about-company', onClick: scrollToAnchor('about-company'), variant: 'primary' },
  ]

  return (
    <HeroSectionView
      title="ООО «Ветеран. Учебный центр»"
      description="ООО «Ветеран» предоставляет комплексную помощь ветеранам и гражданам, пострадавшим в ходе специальной военной операции, включая социальную и юридическую поддержку, защиту прав, представление интересов, психологическую помощь и содействие профессиональной интеграции. Мы стремимся обеспечить их адаптацию, благополучие и полноценное участие в жизни общества."
      backgroundImage={heroBackground}
      showBackButton
      backHref={backHref}
      backLabel="< назад"
      navItems={navItems}
      actions={actions}
      logo={
        <div className="flex h-[46px] w-[160px] items-center justify-center">
          <img src={logo} alt="Ветеран. Группа компаний" className="h-full w-auto" />
        </div>
      }
    />
  )
}
