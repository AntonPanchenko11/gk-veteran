import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../../presentation/pages/home/HomePage'
import {
  CompanyInformationSystemsPage
} from '../../presentation/pages/companyInformationSystems'
import { CompanyProtectionOfInterestsPage } from '../../presentation/pages/companyProtectionOfInterests'
import { CompanyTrainingCenterPage } from '../../presentation/pages/companyTrainingCenter'
import { CompanySystemsEngineeringPage } from '../../presentation/pages/companySystemsEngineering'
import { NewsPage } from '../../presentation/pages/news'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<Navigate to="/news/veteran-learning-center" replace />} />
      <Route path="/news/:newsId" element={<NewsPage />} />
      <Route path="/companies/information-systems" element={<CompanyInformationSystemsPage />} />
      <Route path="/companies/system-engineering" element={<CompanySystemsEngineeringPage />} />
      <Route path="/companies/rights-protection" element={<CompanyProtectionOfInterestsPage />} />
      <Route path="/companies/training-center" element={<CompanyTrainingCenterPage />} />      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
