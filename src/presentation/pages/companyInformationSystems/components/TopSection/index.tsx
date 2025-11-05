import { useCallback } from 'react'
import type { MouseEvent } from 'react'
import { TopSectionView, type HeroActionItem, type HeroNavItem } from '../../../../components/TopSectionView'
import heroBackground from './assets/image.png'
import logo from './assets/logo.svg'
import oneCLogo from './assets/oneCLogo.svg'

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
    { label: 'Аутсорсинг', href: '#outsourcing', onClick: scrollToAnchor('outsourcing') },
    { label: 'Продукты', href: '#products', onClick: scrollToAnchor('products') },
    { label: 'Доп. услуги', href: '#extras', onClick: scrollToAnchor('extras') },
    { label: 'Новости', href: '/#news', onClick: scrollToAnchor('news') },
    { label: 'Заключение', href: '#conclusion', onClick: scrollToAnchor('conclusion') },
    { label: 'Контакты', href: '#contacts', onClick: scrollToAnchor('contacts') },
  ]

  const actions: HeroActionItem[] = [
    { label: 'Подробнее', href: '#about-company', onClick: scrollToAnchor('about-company'), variant: 'primary' },
  ]

  return (
    <div id="top">
      <TopSectionView
        title={(
          <>
            ООО «Ветеран.
            <br/>
            Информационные системы»
          </>
        )}
        description={(
          <>
            Предлагаем передовые решения в области информационных систем. Мы помогаем бизнесу повышать эффективность, автоматизировать процессы и адаптироваться к изменениям, используя инновационные технологии и лучшие практики.
          </>
        )}
        backgroundImage={heroBackground}
        showBackButton
        backHref="/#group"
        backLabel="< назад"
        navItems={navItems}
        badge={{
          label: 'Компания имеет статус 1С:Франчайзи',
          icon: <img src={oneCLogo} alt="Статус 1С:Франчайзи" className="h-6 w-6" />,
        }}
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
