import { IPhone } from "../bridge.interface";
import { HeadPhones } from "../bridge.oop";

export class EarBuds extends HeadPhones {
  constructor(phone: IPhone) {
    super(phone);
    if (this.device) {
      this.device.connectedTo = "EarBuds";
    }
    if (!this.device?.isEnabled) {
      this.device?.enable();
    }
  }
  dispose(): void {
    if (this.device) {
      this.device.disable();
      this.device.connectedTo = "";
      this.device = null;
    }
  }
  play(): void {
    if (!this.device) {
      console.log("Device is not enabled or connected");
      return;
    }
    this.device.play();
  }
  pause(): void {
    if (!this.device) {
      console.log("Device is not enabled or connected");
      return;
    }
    this.device?.pause();
  }
}
