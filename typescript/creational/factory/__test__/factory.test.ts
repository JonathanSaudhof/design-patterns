import { createIPhone11, createIPhoneX, phoneUser } from "../factory.func";
import { IPhone11Factory, IPhoneXFactory, PhoneUser } from "../factory.oop";
import { callLogString, messageLogString } from "../products/logging.util";

describe("Factory Tests", () => {
  const logSpy = jest.spyOn(global.console, "log");

  afterEach(() => {
    logSpy.mockClear();
  });

  const expectedApple = {
    iPhoneX: "iPhoneX",
    iPhone11: "iPhone11",
  };

  describe("Factory-OOP", () => {
    it("should create a IPhone11 with all properties", () => {
      const client = new PhoneUser(new IPhone11Factory());

      client.makePhoneCall("1234567890");
      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedApple.iPhone11,
          number: "1234567890",
        })
      );

      client.sendMessage("1234567890", "Hello, world!");
      expect(logSpy).toHaveBeenCalledWith(
        messageLogString({
          product: expectedApple.iPhone11,
          number: "1234567890",
          message: "Hello, world!",
        })
      );
    });

    it("should create an IPhoneX with all properties", () => {
      const client = new PhoneUser(new IPhoneXFactory());

      client.makePhoneCall("1234567890");
      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedApple.iPhoneX,
          number: "1234567890",
        })
      );

      client.sendMessage("1234567890", "Hello, world!");
      expect(logSpy).toHaveBeenCalledWith(
        messageLogString({
          product: expectedApple.iPhoneX,
          number: "1234567890",
          message: "Hello, world!",
        })
      );
    });
  });

  describe("Factory-Func", () => {
    it("should create a IPhone11 with all properties", () => {
      const client = phoneUser(createIPhone11);

      client.makePhoneCall("1234567890");

      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedApple.iPhone11,
          number: "1234567890",
        })
      );

      client.sendMessage("1234567890", "Hello, world!");
      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedApple.iPhone11,
          number: "1234567890",
        })
      );
    });

    it("should create an IPhoneX with all properties", () => {
      const client = phoneUser(createIPhoneX);

      client.makePhoneCall("1234567890");
      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedApple.iPhoneX,
          number: "1234567890",
        })
      );

      client.sendMessage("1234567890", "Hello, world!");
      expect(logSpy).toHaveBeenCalledWith(
        messageLogString({
          product: expectedApple.iPhoneX,
          number: "1234567890",
          message: "Hello, world!",
        })
      );
    });
  });
});
