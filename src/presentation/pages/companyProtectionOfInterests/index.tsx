
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ConclusionSection } from './components/ConclusionSection'
import { ContactsSection } from '../../components/ContactsSection'

export function CompanyProtectionOfInterestsPage() {
  return (
    <main className="min-h-screen bg-[#101612] text-forest-100">
      <HeroSection />
      <AboutSection />
      <ConclusionSection />
      <ContactsSection />
    </main>
  )
}
