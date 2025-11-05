import { TopSection } from './components/TopSection'
import { AboutSection } from './components/AboutSection'
import { MissionsSection } from './components/MissionsSection'
import { GroupSection } from './components/GroupSection'
import { ValuesSection } from './components/ValuesSection'
import { StoriesSection } from './components/StoriesSection'
import { NewsSection } from './components/NewsSection'
import { ContactsSection } from '../../components/ContactsSection'

export function HomePage() {
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
