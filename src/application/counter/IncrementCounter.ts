import { Counter } from '../../domain/counter/Counter'

export interface CounterPort {
  get(): Counter
  set(counter: Counter): void
}

/**
 * Юзкейс слоя приложения: инкремент значения, с сохранением и возвратом новой сущности.
 */
export class IncrementCounterUseCase {
  private readonly counterPort: CounterPort

  constructor(counterPort: CounterPort) {
    this.counterPort = counterPort
  }

  execute(): Counter {
    const current = this.counterPort.get()
    const next = current.increment()
    this.counterPort.set(next)
    return next
  }
}
