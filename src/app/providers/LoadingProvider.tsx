import { useCallback, useMemo, useState, type PropsWithChildren } from 'react'
import { LoadingOverlay } from '../../presentation/components/LoadingOverlay'
import { LoadingContext } from './loadingContext'

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
