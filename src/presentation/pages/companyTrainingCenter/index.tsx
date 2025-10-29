import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ContactsSection } from '../../components/ContactsSection'
import { ConclusionSection } from './components/ConclusionSection'
import { ExtrasSection } from './components/ExtrasSection'

export function CompanyTrainingCenterPage() {
  return (
    <main className="min-h-screen bg-[#101612] text-forest-100">
      <HeroSection />
      <AboutSection />
      <ExtrasSection />
      <ConclusionSection />
      <ContactsSection />
    </main>
  )
}
