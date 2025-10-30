import type { PropsWithChildren, ReactNode, ErrorInfo } from 'react'
import { Component } from 'react'

interface ErrorBoundaryProps extends PropsWithChildren {
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

function DefaultFallback({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex min-h-screen bg-forest-950 text-forest-50">
      <div className="m-auto w-full max-w-xl space-y-8 rounded-3xl border border-white/10 bg-forest-900/70 p-12 text-center shadow-[0_40px_80px_-50px_rgba(0,0,0,0.9)]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-highlight">Произошла ошибка</p>
          <h1 className="text-3xl font-semibold text-white">Не удалось загрузить страницу</h1>
          <p className="text-sm leading-relaxed text-forest-200">
            Мы уже знаем о проблеме. Попробуйте обновить страницу или вернитесь немного позже.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center rounded-full border border-highlight px-6 py-2 text-sm font-semibold text-highlight transition hover:bg-highlight hover:text-forest-900"
          >
            Попробовать снова
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-forest-400 px-6 py-2 text-sm font-semibold text-forest-100 transition hover:border-highlight hover:text-white"
          >
            На главную
          </a>
        </div>
      </div>
    </div>
  )
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled UI error:', error, info)
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return <DefaultFallback onReset={this.resetErrorBoundary} />
    }

    return this.props.children
  }
}
