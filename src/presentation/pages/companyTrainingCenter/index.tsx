import { TopSection } from './components/TopSection'
import { AboutSection } from './components/AboutSection'
import { ContactsSection } from '../../components/ContactsSection'
import { ConclusionSection } from './components/ConclusionSection'
import { ExtrasSection } from './components/ExtrasSection'

export function CompanyTrainingCenterPage() {
  return (
    <main className="min-h-screen bg-surface-noir text-white">
      <TopSection />
      <AboutSection />
      <ExtrasSection />
      <ConclusionSection />
      <ContactsSection />
    </main>
  )
}
