import {
  iPhone11,
  withEarPhones,
  withInsurance,
  withPowerSupply,
} from "../decorator.func";
import {
  AddEarPhones,
  AddInsurance,
  AddPowerSupply,
  IPhone11,
} from "../decorator.oop";

describe("Decorator", () => {
  it("OOP,should add content to the package and increase price", () => {
    const baseIphone = new IPhone11();
    expect(baseIphone.getPrice()).toBe(300);
    expect(baseIphone.getPackage()).toEqual(["Phone"]);

    const iphoneWithPowerSupply = new AddPowerSupply(baseIphone);
    expect(iphoneWithPowerSupply.getPrice()).toBe(310);
    expect(iphoneWithPowerSupply.getPackage()).toEqual([
      "Phone",
      "Power Supply",
    ]);

    const iphoneWithEarPhones = new AddEarPhones(iphoneWithPowerSupply);
    expect(iphoneWithEarPhones.getPrice()).toBe(330);
    expect(iphoneWithEarPhones.getPackage()).toEqual([
      "Phone",
      "Power Supply",
      "Ear Phones",
    ]);

    const iphoneWithAll = new AddInsurance(iphoneWithEarPhones);
    expect(iphoneWithAll.getPrice()).toBe(380);
    expect(iphoneWithAll.getPackage()).toEqual([
      "Phone",
      "Power Supply",
      "Ear Phones",
      "Insurance",
    ]);
  });

  it("Func,should add content to the package and increase price", () => {
    const baseIphone = iPhone11();
    expect(baseIphone.getPrice()).toBe(300);
    expect(baseIphone.getPackage()).toEqual(["Phone"]);

    const iphoneWithPowerSupply = withPowerSupply(baseIphone);
    expect(iphoneWithPowerSupply.getPrice()).toBe(310);
    expect(iphoneWithPowerSupply.getPackage()).toEqual([
      "Phone",
      "Power Supply",
    ]);

    const iphoneWithEarPhones = withEarPhones(iphoneWithPowerSupply);
    expect(iphoneWithEarPhones.getPrice()).toBe(330);
    expect(iphoneWithEarPhones.getPackage()).toEqual([
      "Phone",
      "Power Supply",
      "Ear Phones",
    ]);

    const iphoneWithAll = withInsurance(iphoneWithEarPhones);
    expect(iphoneWithAll.getPrice()).toBe(380);
    expect(iphoneWithAll.getPackage()).toEqual([
      "Phone",
      "Power Supply",
      "Ear Phones",
      "Insurance",
    ]);
  });
});
