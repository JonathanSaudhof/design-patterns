import {
  EmailInvoiceClient,
  PhoneShipmentFacade,
  SamsungPhoneFactory,
} from "../facade.oop";

describe("Facade", () => {
  const logSpy = jest.spyOn(global.console, "log");

  beforeEach(() => {
    logSpy.mockClear();
  });

  test("Should create a new user", () => {
    const phoneShipmentFacade = new PhoneShipmentFacade(
      new SamsungPhoneFactory(),
      new EmailInvoiceClient()
    );
    const phone = phoneShipmentFacade.shipPhone();

    expect(phone.model).toBe("Samsung S21");
    expect(phone.price).toBe(1000);
    expect(logSpy).toHaveBeenCalledWith(
      `Emailing invoice for Samsung S21 with price 1000`
    );
  });
});
