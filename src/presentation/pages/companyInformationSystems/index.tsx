import { ContactsSection } from '../../components/ContactsSection'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { OutsourcingSection } from './components/OutsourcingSection'
import { ProductsSection } from './components/ProductsSection'
import { ExtrasSection } from './components/ExtrasSection'
import { ConclusionSection } from './components/ConclusionSection'

export function CompanyInformationSystemsPage() {
  return (
    <main className="min-h-screen bg-[#101612] text-forest-100">
      <HeroSection />
      <AboutSection />
      <OutsourcingSection />
      <ProductsSection />
      <ExtrasSection />
      <ConclusionSection />
      <ContactsSection />
    </main>
  )
}
