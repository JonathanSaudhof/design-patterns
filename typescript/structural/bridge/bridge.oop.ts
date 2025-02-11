import { IPhone } from "./bridge.interface";

interface IDisposable {
  dispose(): void;
}

export abstract class HeadPhones implements IDisposable {
  device: IPhone | null = null;
  VOLUME_STEP = 10;
  constructor(device: IPhone) {
    this.device = device;
  }

  abstract play(): void;
  abstract pause(): void;

  volumeUp(): void {
    if (!this.device) {
      console.log("Device is not enabled or connected");
      return;
    }

    const currentVolume = this.device.getVolume();
    const newVolume = currentVolume + this.VOLUME_STEP;
    this.device.setVolume(newVolume);
  }

  volumeDown(): void {
    if (!this.device) {
      console.log("Device is not enabled or connected");
      return;
    }

    const currentVolume = this.device.getVolume();
    const newVolume = currentVolume - this.VOLUME_STEP;
    this.device.setVolume(newVolume);
  }

  abstract dispose(): void;
}
