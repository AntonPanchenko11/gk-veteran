/**
 * Доменная сущность счётчика — используется как пример связки слоёв.
 * Иммутабельность помогает фиксировать переходы состояний явно (SRP).
 */
export class Counter {
  private readonly value: number

  constructor(value: number = 0) {
    this.value = value
  }

  getValue(): number {
    return this.value
  }

  increment(): Counter {
    return new Counter(this.value + 1)
  }
}
