import { useCallback } from 'react'
import type { MouseEvent } from 'react'
import { HeroSection as HeroSectionView, type HeroActionItem, type HeroNavItem } from '../../../../components/HeroSection'
import heroBackground from './assets/image.png'
import logo from './assets/logo.svg'
import oneClogo from './assets/oneClogo.svg'

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
    { label: 'Направления компании', href: '#outsourcing', onClick: scrollToAnchor('outsourcing') },
    { label: 'Контакты', href: '#contacts', onClick: scrollToAnchor('contacts') },
  ]

  const actions: HeroActionItem[] = [
    { label: 'Подробнее', href: '#about-company', onClick: scrollToAnchor('about-company'), variant: 'primary' },
  ]

  return (
    <HeroSectionView
      title="ООО «Ветеран. Информационные системы»"
      description="ООО «Ветеран» предлагает передовые решения в области информационных систем. Мы помогаем бизнесу повышать эффективность, автоматизировать процессы и адаптироваться к изменениям, используя инновационные технологии и лучшие практики."
      backgroundImage={heroBackground}
      showBackButton
      backHref={backHref}
      backLabel="< назад"
      navItems={navItems}
      badge={{
        label: 'Компания имеет статус 1С:Франчайзи',
        icon: <img src={oneClogo} alt="Статус 1С:Франчайзи" className="h-6 w-6" />,
      }}
      actions={actions}
      logo={
        <div className="flex h-[46px] w-[160px] items-center justify-center">
          <img src={logo} alt="Ветеран. Группа компаний" className="h-full w-auto" />
        </div>
      }
    />
  )
}
