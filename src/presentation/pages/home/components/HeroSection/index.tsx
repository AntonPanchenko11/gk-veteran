import { useCallback } from 'react'
import type { MouseEvent } from 'react'
import { HeroSection as HeroSectionView } from '../../../../components/HeroSection'
import { env } from '../../../../../shared/config/env'
import heroBackground from './assets/image.png'
import logo from './assets/logo.svg'

export function HeroSection() {
  const scrollToAnchor = useCallback(
    (anchorId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      const target = document.getElementById(anchorId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    []
  )

  const navItems = [
    { label: 'Главная', href: '#top', onClick: scrollToAnchor('top') },
    { label: 'О нас', onClick: scrollToAnchor('principles') },
    { label: 'Задачи', onClick: scrollToAnchor('missions') },
    { label: 'Истории', onClick: scrollToAnchor('stories') },
    { label: 'Контакты', onClick: scrollToAnchor('contacts') },
  ]

  const preventDefault = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
  }, [])

  const actions = [
    { label: 'Присоединиться к сообществу', href: '#', onClick: preventDefault, variant: 'primary' as const },
    { label: 'Узнать о программе', onClick: scrollToAnchor('principles'), variant: 'secondary' as const },
  ]

  return (
    <div id="top">
      <HeroSectionView
        title={env.appName}
        description="Помогаем ветеранам выстраивать бизнес, усиливать личные навыки и перезагружать карьеру в мирной жизни, чтобы каждый шаг в новом пути был осознанным и уверенным."
        backgroundImage={heroBackground}
        navItems={navItems}
        actions={actions}
        containerClassName="py-5 lg:py-8"
        logo={
          <div className="flex h-[46px] w-[160px] items-center justify-center">
            <img src={logo} alt="Ветеран. Группа компаний" className="h-full w-auto" />
          </div>
        }
      />
    </div>
  )
}
