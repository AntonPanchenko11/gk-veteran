import { TopSection } from './components/TopSection'
import { AboutSection } from './components/AboutSection'
import { ConclusionSection } from './components/ConclusionSection'
import { ContactsSection } from '../../components/ContactsSection'

export function CompanySystemsEngineeringPage() {
  return (
    <main className="min-h-screen bg-surface-noir text-white">
      <TopSection />
      <AboutSection />
      <ConclusionSection />
      <ContactsSection />
    </main>
  )
}
