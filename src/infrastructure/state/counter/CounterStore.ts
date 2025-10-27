import { IncrementCounterUseCase } from '../../../application/counter/IncrementCounter'
import type { CounterPort } from '../../../application/counter/IncrementCounter'
import { Counter } from '../../../domain/counter/Counter'

type Listener = () => void

/**
 * Adapter-слой для увязки доменных сущностей и UI (через useSyncExternalStore).
 */
export class CounterStore implements CounterPort {
  private counter: Counter = new Counter()
  private readonly listeners = new Set<Listener>()
  private readonly incrementUseCase = new IncrementCounterUseCase(this)

  get(): Counter {
    return this.counter
  }

  set(counter: Counter): void {
    this.counter = counter
    this.notify()
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  getSnapshot(): Counter {
    return this.counter
  }

  getServerSnapshot(): Counter {
    return this.counter
  }

  increment(): Counter {
    return this.incrementUseCase.execute()
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener())
  }
}

export const counterStore = new CounterStore()
