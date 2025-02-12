interface Phone {
  getPrice(): number;
  getPackage(): string[];
}

class IPhone11 implements Phone {
  getPrice(): number {
    return 300;
  }

  getPackage(): string[] {
    return ["Phone"];
  }
}

class IPhone11Pro implements Phone {
  getPrice(): number {
    return 500;
  }

  getPackage(): string[] {
    return ["Phone"];
  }
}

class PhoneAddonDecorator implements Phone {
  private phone: Phone;
  constructor(phone: Phone) {
    this.phone = phone;
  }

  getPrice(): number {
    return this.phone.getPrice();
  }

  getPackage(): string[] {
    return this.phone.getPackage();
  }
}

class AddPowerSupply extends PhoneAddonDecorator {
  getPrice(): number {
    return super.getPrice() + 10;
  }

  getPackage(): string[] {
    return super.getPackage().concat(["Power Supply"]);
  }
}

class AddEarPhones extends PhoneAddonDecorator {
  getPrice(): number {
    return super.getPrice() + 20;
  }

  getPackage(): string[] {
    return super.getPackage().concat(["Ear Phones"]);
  }
}

class AddInsurance extends PhoneAddonDecorator {
  getPrice(): number {
    return super.getPrice() + 50;
  }

  getPackage(): string[] {
    return super.getPackage().concat(["Insurance"]);
  }
}
