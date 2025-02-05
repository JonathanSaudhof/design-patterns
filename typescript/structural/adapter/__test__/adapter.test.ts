import { LightningConnection, LightningSoundAdapter } from "../adapter.oop";

describe("Adapter", () => {
  const logSpy = jest.spyOn(global.console, "log");

  beforeEach(() => {
    logSpy.mockClear();
  });

  test("should start and pause music", () => {
    const client = new LightningSoundAdapter(new LightningConnection());

    client.play();
    expect(logSpy).toHaveBeenCalledWith("Sound started");
    client.play();
    expect(logSpy).toHaveBeenCalledWith("Sound paused");
  });

  test("should increase and decrease volume", () => {
    const client = new LightningSoundAdapter(new LightningConnection());

    client.volumeUp();
    expect(logSpy).toHaveBeenCalledWith("Volume increased:", 2);
    client.volumeDown();
    expect(logSpy).toHaveBeenCalledWith("Volume decreased:", 2);
  });
});
