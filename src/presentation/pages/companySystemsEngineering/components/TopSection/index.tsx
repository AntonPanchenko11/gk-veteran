import { useCallback } from 'react'
import type { MouseEvent } from 'react'
import { TopSectionView, type HeroActionItem, type HeroNavItem } from '../../../../components/TopSectionView'
import heroBackground from './assets/image.png'
import logo from './assets/logo.svg'

export function TopSection() {
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
    { label: 'О компании', href: '#about-company', onClick: scrollToAnchor('about-company') },
    { label: 'Заключение', href: '#conclusion', onClick: scrollToAnchor('conclusion') },
    { label: 'Контакты', href: '#contacts', onClick: scrollToAnchor('contacts') },
  ]

  const actions: HeroActionItem[] = [
    { label: 'Подробнее', href: '#about-company', onClick: scrollToAnchor('about-company'), variant: 'primary' },
  ]

  return (
    <div id="top">
      <TopSectionView
        title="ООО «Ветеран. Системный инжиниринг»"
      description="ООО «Ветеран» предлагает комплексные услуги в области системного инжиниринга: аудит IT-инфраструктуры, проектирование высоконагруженных систем, развертывание локальных вычислительных сетей (ЛВС) и работа с сетевым оборудованием. Мы обеспечиваем надежность, безопасность и масштабируемость решений, помогая бизнесу оптимизировать процессы."
      backgroundImage={heroBackground}
      showBackButton
      backHref="/"
      backLabel="< назад"
      navItems={navItems}
      actions={actions}
        logo={
          <div className="flex h-[46px] w-[160px] items-center justify-center">
            <img src={logo} alt="Ветеран. Группа компаний" className="h-full w-auto" />
          </div>
        }
      />
    </div>
  )
}
