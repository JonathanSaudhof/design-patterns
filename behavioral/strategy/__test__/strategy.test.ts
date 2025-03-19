import {
  AddStrategy,
  Calculator,
  MultiplyStrategy,
  SubtractStrategy,
} from "../strategy";

describe("Strategy Pattern", () => {
  it("should return the sum of two numbers", () => {
    const addStrategy = new AddStrategy();
    const calculator = new Calculator(addStrategy);
    expect(calculator.execute(2, 3)).toBe(5);
  });

  it("should return the difference of two numbers", () => {
    const subtractStrategy = new SubtractStrategy();
    const calculator = new Calculator(subtractStrategy);
    expect(calculator.execute(5, 3)).toBe(2);
  });

  it("should return the product of two numbers", () => {
    const multiplyStrategy = new MultiplyStrategy();
    const calculator = new Calculator(multiplyStrategy);
    expect(calculator.execute(2, 3)).toBe(6);
  });

  it("should change the strategy", () => {
    const addStrategy = new AddStrategy();
    const calculator = new Calculator(addStrategy);
    expect(calculator.execute(2, 3)).toBe(5);

    const subtractStrategy = new SubtractStrategy();
    calculator.setStrategy(subtractStrategy);
    expect(calculator.execute(5, 3)).toBe(2);
  });
});
