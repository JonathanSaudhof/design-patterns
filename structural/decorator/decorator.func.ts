import type { IDecoratorPhone } from "./decorator.interface";

export function iPhone11(): IDecoratorPhone {
  return {
    getPrice(): number {
      return 300;
    },
    getPackage(): string[] {
      return ["Phone"];
    },
  };
}

export function iPhone11Pro(): IDecoratorPhone {
  return {
    getPrice(): number {
      return 500;
    },
    getPackage(): string[] {
      return ["Phone"];
    },
  };
}

export function withEarPhones(phone: IDecoratorPhone): IDecoratorPhone {
  return {
    getPrice(): number {
      return phone.getPrice() + 20;
    },
    getPackage(): string[] {
      return phone.getPackage().concat(["Ear Phones"]);
    },
  };
}

export function withPowerSupply(phone: IDecoratorPhone): IDecoratorPhone {
  return {
    getPrice(): number {
      return phone.getPrice() + 10;
    },
    getPackage(): string[] {
      return phone.getPackage().concat(["Power Supply"]);
    },
  };
}

export function withInsurance(phone: IDecoratorPhone): IDecoratorPhone {
  return {
    getPrice(): number {
      return phone.getPrice() + 50;
    },
    getPackage(): string[] {
      return phone.getPackage().concat(["Insurance"]);
    },
  };
}
