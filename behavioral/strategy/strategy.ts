interface Strategy {
  execute(a: number, b: number): number;
}

export class AddStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

export class SubtractStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class MultiplyStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

export class Calculator {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  execute(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
}
