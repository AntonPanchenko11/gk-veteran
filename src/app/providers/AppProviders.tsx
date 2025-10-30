import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingProvider } from './LoadingProvider'

/**
 * Контейнер для глобальных провайдеров приложения (темы, стейт-менеджеры, роутинг).
 * Хранит точку входа для подключения Router, не перегружая main.tsx деталями инфраструктуры.
 */
export function AppProviders({ children }: PropsWithChildren) {
  const rawBaseUrl = import.meta.env.BASE_URL ?? '/'
  const normalizedBasename =
    rawBaseUrl !== '/' && rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl

  return (
    <LoadingProvider>
      <BrowserRouter basename={normalizedBasename === '/' ? undefined : normalizedBasename}>
        {children}
      </BrowserRouter>
    </LoadingProvider>
  )
}
