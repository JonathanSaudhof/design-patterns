import { cellPhoneProviderFactory } from "../singleton.func";
import { CellPhoneProviderFactory } from "../singleton.oop";

describe("Singleton", () => {
  it.each([
    ["OOP", CellPhoneProviderFactory],
    ["FUNC", cellPhoneProviderFactory],
  ])("%p: should create a singleton", (_testName, factory) => {
    const verizon = factory.getProvider("Verizon");
    const verizon2 = factory.getProvider("Verizon");

    const vodafone = factory.getProvider("Vodafone");
    const vodafone2 = factory.getProvider("Vodafone");

    expect(verizon2.getInternetAccess()).toBe(verizon.getInternetAccess());
    expect(vodafone2.getInternetAccess()).toBe(vodafone.getInternetAccess());
  });
});
