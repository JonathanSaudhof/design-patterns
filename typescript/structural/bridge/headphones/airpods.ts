import { IPhone } from "../bridge.interface";
import { HeadPhones } from "../bridge.oop";

export class AirPods extends HeadPhones {
  constructor(phone: IPhone) {
    super(phone);
    if (this.device) {
      this.device.connectedTo = "AirPods";
    }
    if (!this.device?.isEnabled) {
      this.device?.enable();
    }
  }
  play(): void {
    if (this.device) {
      this.device.play();
    }
  }
  pause(): void {
    if (this.device) {
      this.device.pause();
    }
  }

  dispose(): void {
    if (this.device) {
      this.device.disable();
      this.device.connectedTo = "";
      this.device = null;
    }
  }
}
