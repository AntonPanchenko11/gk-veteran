import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { MissionsSection } from './components/MissionsSection'
import { GroupSection } from './components/GroupSection'
import { ValuesSection } from './components/ValuesSection'
import { StoriesSection } from './components/StoriesSection'
import { ContactsSection } from '../../components/ContactsSection'

export function HomePage() {
  return (
    <div className="bg-moss text-forest-100">
      <HeroSection />
      <AboutSection />
      <MissionsSection />
      <GroupSection />
      <ValuesSection />
      <StoriesSection />
      <ContactsSection contentClassName="py-7 lg:py-10" />
    </div>
  )
}
