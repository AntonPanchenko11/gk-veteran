import { AppRouter } from './routes/AppRouter'
import { ErrorBoundary } from '../presentation/components/ErrorBoundary'

export function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}
