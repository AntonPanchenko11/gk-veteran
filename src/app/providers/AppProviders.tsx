import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingProvider } from './LoadingProvider'

/**
 * Контейнер для глобальных провайдеров приложения (темы, стейт-менеджеры, роутинг).
 * Хранит точку входа для подключения Router, не перегружая main.tsx деталями инфраструктуры.
 */
export function AppProviders({ children }: PropsWithChildren) {
  return (
    <LoadingProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </LoadingProvider>
  )
}
