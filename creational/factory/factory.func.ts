import { AppleIPhone11, AppleIPhoneX } from "./products/apple.oop";
import { IPhone } from "./types";

export function createIPhoneX(): IPhone {
  return new AppleIPhoneX();
}

export function createIPhone11(): IPhone {
  return new AppleIPhone11();
}

type IPhoneFactory = () => IPhone;

export function phoneUser(phoneFactory: IPhoneFactory) {
  const phone = phoneFactory();
  return {
    makePhoneCall: (number: string) => {
      phone.call(number);
    },
    sendMessage: (number: string, message: string) => {
      phone.sendMessage(number, message);
    },
  };
}
