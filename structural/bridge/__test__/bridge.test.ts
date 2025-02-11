import { AirPods } from "../headphones/airpods";
import { EarBuds } from "../headphones/earbuds";
import { SamsungGalaxy } from "../phones/android";
import { IPhone11 } from "../phones/iphone";

describe("Bridge Pattern", () => {
  const logSpy = jest.spyOn(global.console, "log");

  beforeEach(() => {
    logSpy.mockClear();
  });

  it.each([
    ["AirPods", "Iphone11", new AirPods(new IPhone11())],
    ["EarBuds", "Iphone11", new EarBuds(new IPhone11())],
    ["AirPods", "Samsung Galaxy", new AirPods(new SamsungGalaxy())],
    ["EarBuds", "Samsung Galaxy", new EarBuds(new SamsungGalaxy())],
  ])("should return %p connected to %p", (headPhoneName, phoneName, bridge) => {
    const airpodsBridge = bridge;
    const logPrefix = `${phoneName} connected to ${headPhoneName}`;

    airpodsBridge.play();
    airpodsBridge.pause();
    airpodsBridge.play();
    airpodsBridge.volumeUp();
    airpodsBridge.volumeUp();
    airpodsBridge.volumeDown();
    airpodsBridge.dispose();

    const expectedMessages = [
      `${logPrefix}: Playing`,
      `${logPrefix}: Paused`,
      `${logPrefix}: Playing`,
      `${logPrefix}: Volume set to 10`,
      `${logPrefix}: Volume set to 20`,
      `${logPrefix}: Volume set to 10`,
      `${logPrefix}: Disabled`,
    ];

    expectedMessages.forEach((message, index) => {
      expect(logSpy).toHaveBeenNthCalledWith(index + 1, message);
    });
  });
});
