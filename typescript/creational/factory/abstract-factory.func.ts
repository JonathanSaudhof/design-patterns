import { SamsungGalaxyS10, SamsungGalaxyTabS6 } from "./products/android.oop";
import { AppleIPhoneX, AppleIPadPro } from "./products/apple.oop";
import { IPhone, ITablet } from "./types";

interface IDeviceFactory {
  createPhone(): IPhone;
  createTablet(): ITablet;
}

export function appleFactory(): IDeviceFactory {
  return {
    createPhone: () => new AppleIPhoneX(),
    createTablet: () => new AppleIPadPro(),
  };
}

export function androidFactory(): IDeviceFactory {
  return {
    createPhone: () => new SamsungGalaxyS10(),
    createTablet: () => new SamsungGalaxyTabS6(),
  };
}

type DeviceFactory = () => IDeviceFactory;

export function mediaClient(factory: DeviceFactory) {
  const deviceFactory = factory();
  const phone = deviceFactory.createPhone();
  const tablet = deviceFactory.createTablet();

  return {
    makeCall: (number: string) => {
      phone.call(number);
    },
    sendText: (number: string, message: string) => {
      phone.sendMessage(number, message);
    },
    playGame: (game: string) => {
      tablet.playGame(game);
    },
    playVideo: (video: string) => {
      tablet.playVideo(video);
    },
  };
}
