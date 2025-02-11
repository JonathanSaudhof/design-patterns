import { lightningConnection, ligthningSoundAdapter } from "../adapter.funct";
import { LightningConnection, LightningSoundAdapter } from "../adapter.oop";

describe.each([
  ["OOP", new LightningSoundAdapter(new LightningConnection())],
  ["FUNC", ligthningSoundAdapter(lightningConnection())],
])("%p, Adapter", (_testTitle, adapter) => {
  const logSpy = jest.spyOn(global.console, "log");

  beforeEach(() => {
    logSpy.mockClear();
  });

  test("should start and pause music", () => {
    adapter.play();
    expect(logSpy).toHaveBeenCalledWith("Sound started");
    adapter.play();
    expect(logSpy).toHaveBeenCalledWith("Sound paused");
  });

  test("should increase and decrease volume", () => {
    const adapter = new LightningSoundAdapter(new LightningConnection());

    adapter.volumeUp();
    expect(logSpy).toHaveBeenCalledWith("Volume increased:", 2);
    adapter.volumeDown();
    expect(logSpy).toHaveBeenCalledWith("Volume decreased:", 2);
  });
});
