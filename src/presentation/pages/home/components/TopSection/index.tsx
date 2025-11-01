import { useCallback } from 'react'
import type { MouseEvent } from 'react'
import { TopSectionView } from '../../../../components/TopSectionView'
import heroBackground from './assets/image.png'
import logo from './assets/logo.svg'

export function TopSection() {
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
    { label: 'О нас', href: '#principles', onClick: scrollToAnchor('principles') },
    { label: 'Задачи', href: '#missions', onClick: scrollToAnchor('missions') },
    { label: 'Группа компаний', href: '#group', onClick: scrollToAnchor('group') },
    { label: 'Ценности', href: '#values', onClick: scrollToAnchor('values') },
    { label: 'Истории', href: '#stories', onClick: scrollToAnchor('stories') },
    { label: 'Контакты', href: '#contacts', onClick: scrollToAnchor('contacts') },
  ]

  const actions = [
    { label: 'связаться с нами', onClick: scrollToAnchor('contacts'), variant: 'primary' as const },
  ]

  return (
    <div id="top">
      <TopSectionView
        title={(
          <>
            Экосистема личностного
            <br/>
            и профессионального
            <br/>
            развития
          </>
        )}
        description="Помогаем ветеранам боевых действий успешно интегрироваться в мирную жизнь, чтобы их навыки и достоинства продолжали приносить пользу обществу."
        backgroundImage={heroBackground}
        backgroundPosition="bottom right"
        backgroundRepeat="no-repeat"
        navItems={navItems}
        actions={actions}
        className="home-top-section bg-surface-section"
        contentClassName="-translate-y-[25%] md:translate-y-0"
        logo={
          <div className="flex h-[46px] w-[160px] items-center justify-center">
            <img src={logo} alt="Ветеран. Группа компаний" className="h-full w-auto" />
          </div>
        }
      />
    </div>
  )
}
