export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-highlight" aria-hidden="true" />
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">Загрузка</p>
      </div>
    </div>
  )
}
