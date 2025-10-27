import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../../presentation/pages/home/HomePage'
import { AboutPage } from '../../presentation/pages/about/AboutPage'
import { PrinciplesPage } from '../../presentation/pages/principles/PrinciplesPage'
import { StoriesPage } from '../../presentation/pages/stories/StoriesPage'
import { ContactsPage } from '../../presentation/pages/contacts/ContactsPage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/principles" element={<PrinciplesPage />} />
      <Route path="/stories" element={<StoriesPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
