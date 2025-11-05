import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { TopSection } from './components/TopSection'
import { AboutSection } from './components/AboutSection'
import { MissionsSection } from './components/MissionsSection'
import { GroupSection } from './components/GroupSection'
import { ValuesSection } from './components/ValuesSection'
import { StoriesSection } from './components/StoriesSection'
import { NewsSection } from './components/NewsSection'
import { ContactsSection } from '../../components/ContactsSection'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (!hash) {
      return
    }

    const target = document.getElementById(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
  }, [location.hash])

  return (
    <div className="bg-surface-noir text-forest-100">
      <TopSection />
      <AboutSection />
      <MissionsSection />
      <GroupSection />
      <ValuesSection />
      <StoriesSection />
      <NewsSection />
      <ContactsSection />
    </div>
  )
}
