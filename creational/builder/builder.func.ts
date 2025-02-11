import { iphone11Props, TSmartPhone } from "./smart-phone";
import { SmartPhoneBuilder } from "./smart-phone-builder.interface";

export function iPhone11Builder(): SmartPhoneBuilder {
  const smartPhone: TSmartPhone = {
    screen: null,
    battery: null,
    os: null,
    camera: null,
    processor: null,
  };

  return {
    buildScreen() {
      smartPhone.screen = iphone11Props.screen;
      return this;
    },
    buildBattery() {
      smartPhone.battery = iphone11Props.battery;
      return this;
    },
    buildOS() {
      smartPhone.os = iphone11Props.os;
      return this;
    },
    buildCamera() {
      smartPhone.camera = iphone11Props.camera;
      return this;
    },
    buildProcessor() {
      smartPhone.processor = iphone11Props.processor;
      return this;
    },
    reset() {
      smartPhone.screen = null;
      smartPhone.battery = null;
      smartPhone.os = null;
      smartPhone.camera = null;
      smartPhone.processor = null;
      return this;
    },
    build() {
      const phone = { ...smartPhone };
      this.reset();
      return phone;
    },
  };
}
