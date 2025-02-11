import { SmartPhone } from "./smart-phone";

export interface SmartPhoneBuilder {
  buildScreen(): SmartPhoneBuilder;
  buildBattery(): SmartPhoneBuilder;
  buildOS(): SmartPhoneBuilder;
  buildCamera(): SmartPhoneBuilder;
  buildProcessor(): SmartPhoneBuilder;
  reset(): SmartPhoneBuilder;
  build(): SmartPhone;
}
