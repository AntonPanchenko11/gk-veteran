import { HeroSection } from './components/HeroSection'
import { PrinciplesSection } from './components/PrinciplesSection'
import { MissionsSection } from './components/MissionsSection'
import { GroupSection } from './components/GroupSection'
import { ValuesSection } from './components/ValuesSection'
import { StoriesSection } from './components/StoriesSection'
import { ContactsSection } from './components/ContactsSection'

export function HomePage() {
  return (
    <div className="bg-moss text-forest-100">
      <HeroSection />
      <PrinciplesSection />
      <MissionsSection />
      <GroupSection />
      <ValuesSection />
      <StoriesSection />
      <ContactsSection />
    </div>
  )
}
