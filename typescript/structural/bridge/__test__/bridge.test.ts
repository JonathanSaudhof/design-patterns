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
    ["AirPods", "Iphone11", AirPods, IPhone11],
    ["EarBuds", "Iphone11", EarBuds, IPhone11],
    ["AirPods", "Samsung Galaxy", AirPods, SamsungGalaxy],
    ["EarBuds", "Samsung Galaxy", EarBuds, SamsungGalaxy],
  ])(
    "should return %p connected to %p",
    (headPhoneName, phoneName, HeadPhones, Device) => {
      const airpodsBridge = new HeadPhones(new Device());
      const logPrefix = `${phoneName} connected to ${headPhoneName}`;

      airpodsBridge.play();
      airpodsBridge.pause();
      airpodsBridge.play();
      airpodsBridge.volumeUp();
      airpodsBridge.volumeUp();
      airpodsBridge.volumeDown();
      airpodsBridge.dispose();

      const expectedMessages = [
        `${logPrefix}: Enabled`,
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
    }
  );
});
