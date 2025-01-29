import { SamsungGalaxyS10, SamsungGalaxyTabS6 } from "./products/android.oop";
import { AppleIPadPro, AppleIPhoneX } from "./products/apple.oop";
import { IPhone, ITablet } from "./types";

export abstract class DeviceFactory {
  abstract createPhone(): IPhone;
  abstract createTablet(): ITablet;
}

export class AppleFactory extends DeviceFactory {
  createPhone(): IPhone {
    return new AppleIPhoneX();
  }

  createTablet(): ITablet {
    return new AppleIPadPro();
  }
}

export class AndroidFactory extends DeviceFactory {
  createPhone(): IPhone {
    return new SamsungGalaxyS10();
  }

  createTablet(): ITablet {
    return new SamsungGalaxyTabS6();
  }
}

export class MediaClient {
  phone: IPhone;
  tablet: ITablet;

  constructor(private readonly factory: DeviceFactory) {
    this.phone = factory.createPhone();
    this.tablet = factory.createTablet();
  }

  makeCall(number: string) {
    this.phone.call(number);
  }

  sendText(number: string, message: string) {
    this.phone.sendMessage(number, message);
  }

  playGame(game: string) {
    this.tablet.playGame(game);
  }

  playVideo(video: string) {
    this.tablet.playVideo(video);
  }
}
