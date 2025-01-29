import { IPhone } from "./types";
import { AppleIPhone11, AppleIPhoneX } from "./products/apple.oop";

/******************************************************************/
/*************************** Factory *****************************/
/******************************************************************/

abstract class PhoneFactory {
  abstract createPhone(): IPhone;
}

export class IPhoneXFactory extends PhoneFactory {
  createPhone(): IPhone {
    return new AppleIPhoneX();
  }
}

export class IPhone11Factory extends PhoneFactory {
  createPhone(): IPhone {
    return new AppleIPhone11();
  }
}

/**
 * The client code does not depend on an specific implementation
 * you can
 */
export class PhoneUser {
  private readonly phone: IPhone;

  constructor(factory: PhoneFactory) {
    this.phone = factory.createPhone();
  }

  makePhoneCall(number: string): void {
    this.phone.call(number);
  }

  sendMessage(number: string, message: string): void {
    this.phone.sendMessage(number, message);
  }
}
