interface IExpensiveObject {
  process(): void;
}

class ExpensiveObject implements IExpensiveObject {
  constructor() {
    this.process();
  }

  process(): void {
    console.log("Processing complete.");
  }
}

export class ProxyExpensiveObject implements IExpensiveObject {
  private object: ExpensiveObject | null = null;

  constructor() {}

  process(): void {
    if (this.object === null) {
      this.object = new ExpensiveObject();
    }
    this.object.process();
  }
}
