import { useSyncExternalStore } from 'react'
import { counterStore } from '../../../infrastructure/state/counter/CounterStore'

/**
 * Преобразует стор в удобный для компонентов format (MVVM-style view model).
 */
export function useCounterViewModel() {
  const counter = useSyncExternalStore(
    (listener) => counterStore.subscribe(listener),
    () => counterStore.getSnapshot(),
    () => counterStore.getServerSnapshot(),
  )

  return {
    value: counter.getValue(),
    increment: () => counterStore.increment(),
  }
}
