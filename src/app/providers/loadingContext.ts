import { createContext, useContext } from 'react'

export type LoadingContextValue = {
  isLoading: boolean
  showLoading: () => void
  hideLoading: () => void
}

export const LoadingContext = createContext<LoadingContextValue | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }

  return context
}
