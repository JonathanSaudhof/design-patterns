import type { IDecoratorPhone } from "./decorator.interface";

export class IPhone11 implements IDecoratorPhone {
  getPrice(): number {
    return 300;
  }

  getPackage(): string[] {
    return ["Phone"];
  }
}

export class IPhone11Pro implements IDecoratorPhone {
  getPrice(): number {
    return 500;
  }

  getPackage(): string[] {
    return ["Phone"];
  }
}

class PhoneAddonDecorator implements IDecoratorPhone {
  private readonly phone: IDecoratorPhone;

  constructor(phone: IDecoratorPhone) {
    this.phone = phone;
  }

  getPrice(): number {
    return this.phone.getPrice();
  }

  getPackage(): string[] {
    return this.phone.getPackage();
  }
}

export class AddPowerSupply extends PhoneAddonDecorator {
  getPrice(): number {
    return super.getPrice() + 10;
  }

  getPackage(): string[] {
    return super.getPackage().concat(["Power Supply"]);
  }
}

export class AddEarPhones extends PhoneAddonDecorator {
  getPrice(): number {
    return super.getPrice() + 20;
  }

  getPackage(): string[] {
    return super.getPackage().concat(["Ear Phones"]);
  }
}

export class AddInsurance extends PhoneAddonDecorator {
  getPrice(): number {
    return super.getPrice() + 50;
  }

  getPackage(): string[] {
    return super.getPackage().concat(["Insurance"]);
  }
}
