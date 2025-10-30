import { ContactsSection } from '../../components/ContactsSection'
import { TopSection } from './components/TopSection'
import { AboutSection } from './components/AboutSection'
import { OutsourcingSection } from './components/OutsourcingSection'
import { ProductsSection } from './components/ProductsSection'
import { ExtrasSection } from './components/ExtrasSection'
import { ConclusionSection } from './components/ConclusionSection'

export function CompanyInformationSystemsPage() {
  return (
    <main className="min-h-screen bg-surface-noir text-white">
      <TopSection />
      <AboutSection />
      <OutsourcingSection />
      <ProductsSection />
      <ExtrasSection />
      <ConclusionSection />
      <ContactsSection />
    </main>
  )
}
