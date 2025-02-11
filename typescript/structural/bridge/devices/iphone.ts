import { IPhone } from "../bridge.interface";

interface IiPhone {
  isPlaying: boolean;
  playPause(): void;
  volumeUp(percent: number): void;
  volumeDown(percent: number): void;
}

class IPhone11 implements IiPhone {
  isPlaying: boolean = false;
  private volumePercentage: number = 0;
  playPause(): void {
    if (this.isPlaying) {
      console.log("Iphone: Paused");
      this.isPlaying = false;
      return;
    }
    this.isPlaying = true;
  }
  volumeUp(percent: number): void {
    if (100 < this.volumePercentage + percent) {
      this.volumePercentage = 100;
      return;
    }
    this.volumePercentage += percent;
  }
  volumeDown(percent: number): void {
    if (0 > this.volumePercentage - percent) {
      this.volumePercentage = 0;
      return;
    }

    this.volumePercentage -= percent;
  }
}

export class IPhoneHeadPhone implements IPhone {
  private phone: IiPhone;
  private volumePercentage: number = 0;
  isEnabled: boolean = false;

  constructor(phone: IiPhone) {
    this.phone = phone;
  }

  enable(): void {
    this.isEnabled = true;
    console.log("Iphone: Enabled");
  }

  disable(): void {
    this.isEnabled = false;
    console.log("Iphone: Disabled");
  }

  getVolume(): number {
    return this.volumePercentage;
  }

  play(): void {
    if (this.phone.isPlaying) {
      console.log("Iphone: Paused");
      this.phone.isPlaying = false;
      return;
    }
    this.phone.isPlaying = true;
    console.log("Iphone: Playing");
  }

  pause(): void {
    throw new Error("Method not implemented.");
  }

  setVolume(percent: number): void {
    this.volumePercentage = percent;
    console.log(`Iphone: Volume set to ${percent}`);
  }
}

export const IPhone11HeadPhonesAdapter = new IPhoneHeadPhone(new IPhone11());
