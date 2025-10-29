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
      title="ООО «Ветеран. Системный инжиниринг»"
      description="ООО «Ветеран» предлагает комплексные услуги в области системного инжиниринга: аудит IT-инфраструктуры, проектирование высоконагруженных систем, развертывание локальных вычислительных сетей (ЛВС) и работа с сетевым оборудованием. Мы обеспечиваем надежность, безопасность и масштабируемость решений, помогая бизнесу оптимизировать процессы."
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
