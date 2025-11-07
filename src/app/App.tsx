import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'
import { ErrorBoundary } from '../presentation/components/ErrorBoundary'
import { useLoading } from './providers/loadingContext'

function RouteChangeHandler() {
  const location = useLocation()
  const { hideLoading } = useLoading()

  useEffect(() => {
    hideLoading()
  }, [hideLoading, location])

  return null
}

export function App() {
  return (
    <ErrorBoundary>
      <RouteChangeHandler />
      <AppRouter />
    </ErrorBoundary>
  )
}
