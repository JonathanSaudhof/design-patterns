interface SmartPhoneBuilder {
  buildScreen(): SmartPhoneBuilder;
  buildBattery(): SmartPhoneBuilder;
  buildOS(): SmartPhoneBuilder;
  buildCamera(): SmartPhoneBuilder;
  buildProcessor(): SmartPhoneBuilder;
  reset(): SmartPhoneBuilder;
  build(): SmartPhone;
}

class SmartPhone {
  screen: string | null = null;
  battery: string | null = null;
  os: string | null = null;
  camera: string | null = null;
  processor: string | null = null;
}

export class IPhone11Builder implements SmartPhoneBuilder {
  private smartPhone: SmartPhone = new SmartPhone();

  constructor() {
    this.reset();
  }

  buildScreen(): SmartPhoneBuilder {
    this.smartPhone.screen = '6.06"';
    return this;
  }

  buildBattery(): SmartPhoneBuilder {
    this.smartPhone.battery = "3110 mAh";
    return this;
  }

  buildOS(): SmartPhoneBuilder {
    this.smartPhone.os = "iOS 13";
    return this;
  }

  buildCamera(): SmartPhoneBuilder {
    this.smartPhone.camera = "12 MP + 12 MP";
    return this;
  }

  buildProcessor(): SmartPhoneBuilder {
    this.smartPhone.processor = "A13 Bionic";
    return this;
  }

  public reset(): SmartPhoneBuilder {
    this.smartPhone = new SmartPhone();
    return this;
  }

  build(): SmartPhone {
    const phone = this.smartPhone;
    this.reset();
    return phone;
  }
}
