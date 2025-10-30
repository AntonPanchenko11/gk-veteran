import { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from 'react'
import { LoadingOverlay } from '../../presentation/components/LoadingOverlay'

type LoadingContextValue = {
  isLoading: boolean
  showLoading: () => void
  hideLoading: () => void
}

const LoadingContext = createContext<LoadingContextValue | undefined>(undefined)

export function LoadingProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(false)

  const showLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const hideLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  const value = useMemo(
    () => ({
      isLoading,
      showLoading,
      hideLoading,
    }),
    [isLoading, showLoading, hideLoading]
  )

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading ? <LoadingOverlay /> : null}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }

  return context
}
