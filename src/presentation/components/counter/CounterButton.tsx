import { useCounterViewModel } from './useCounter'

type CounterButtonProps = {
  label?: string
}

export function CounterButton({ label = 'Счётчик' }: CounterButtonProps) {
  const { value, increment } = useCounterViewModel()

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
      onClick={increment}
    >
      {label}: {value}
    </button>
  )
}
