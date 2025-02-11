import {
  androidFactory,
  appleFactory,
  mediaClient,
} from "../abstract-factory.func";
import {
  AndroidFactory,
  AppleFactory,
  MediaClient,
} from "../abstract-factory.oop";
import {
  callLogString,
  gameLogString,
  messageLogString,
  videoLogString,
} from "../products/logging.util";

describe("Abstract Factory", () => {
  const logSpy = jest.spyOn(global.console, "log");
  afterEach(() => {
    logSpy.mockClear();
  });

  const expectedApple = {
    phone: "iPhoneX",
    tablet: "iPadPro",
  };

  const expectedAndroid = {
    phone: "GalaxyS10",
    tablet: "GalaxyTabS6",
  };

  describe("OOP", () => {
    it("should create apple Products with all properties", () => {
      const client = new MediaClient(new AppleFactory());

      client.makeCall("1234567890");
      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedApple.phone,
          number: "1234567890",
        })
      );

      client.sendText("1234567890", "Hello, world!");
      expect(logSpy).toHaveBeenCalledWith(
        messageLogString({
          product: expectedApple.phone,
          number: "1234567890",
          message: "Hello, world!",
        })
      );

      client.playVideo("The Matrix");
      expect(logSpy).toHaveBeenCalledWith(
        videoLogString({
          product: expectedApple.tablet,
          video: "The Matrix",
        })
      );

      client.playGame("Fortnite");
      expect(logSpy).toHaveBeenCalledWith(
        gameLogString({
          product: expectedApple.tablet,
          game: "Fortnite",
        })
      );
    });

    it("should create samsung Products with all properties", () => {
      const client = new MediaClient(new AndroidFactory());

      client.makeCall("1234567890");
      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedAndroid.phone,
          number: "1234567890",
        })
      );

      client.sendText("1234567890", "Hello, world!");
      expect(logSpy).toHaveBeenCalledWith(
        messageLogString({
          product: expectedAndroid.phone,
          number: "1234567890",
          message: "Hello, world!",
        })
      );

      client.playVideo("The Matrix");
      expect(logSpy).toHaveBeenCalledWith(
        videoLogString({
          product: expectedAndroid.tablet,
          video: "The Matrix",
        })
      );

      client.playGame("Fortnite");
      expect(logSpy).toHaveBeenCalledWith(
        gameLogString({
          product: expectedAndroid.tablet,
          game: "Fortnite",
        })
      );
    });
  });

  describe("Functional", () => {
    it("should create apple Products with all properties", () => {
      const client = mediaClient(appleFactory);

      client.makeCall("1234567890");
      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedApple.phone,
          number: "1234567890",
        })
      );

      client.sendText("1234567890", "Hello, world!");
      expect(logSpy).toHaveBeenCalledWith(
        messageLogString({
          product: expectedApple.phone,
          number: "1234567890",
          message: "Hello, world!",
        })
      );

      client.playVideo("The Matrix");
      expect(logSpy).toHaveBeenCalledWith(
        videoLogString({
          product: expectedApple.tablet,
          video: "The Matrix",
        })
      );

      client.playGame("Fortnite");
      expect(logSpy).toHaveBeenCalledWith(
        gameLogString({
          product: expectedApple.tablet,
          game: "Fortnite",
        })
      );
    });

    it("should create samsung Products with all properties", () => {
      const client = mediaClient(androidFactory);

      client.makeCall("1234567890");
      expect(logSpy).toHaveBeenCalledWith(
        callLogString({
          product: expectedAndroid.phone,
          number: "1234567890",
        })
      );

      client.sendText("1234567890", "Hello, world!");
      expect(logSpy).toHaveBeenCalledWith(
        messageLogString({
          product: expectedAndroid.phone,
          number: "1234567890",
          message: "Hello, world!",
        })
      );

      client.playVideo("The Matrix");
      expect(logSpy).toHaveBeenCalledWith(
        videoLogString({
          product: expectedAndroid.tablet,
          video: "The Matrix",
        })
      );

      client.playGame("Fortnite");
      expect(logSpy).toHaveBeenCalledWith(
        gameLogString({
          product: expectedAndroid.tablet,
          game: "Fortnite",
        })
      );
    });
  });
});
