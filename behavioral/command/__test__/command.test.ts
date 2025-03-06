import { LightReceiver, LightSwitchCommand, LightInvoker } from "../command";

describe("Command", () => {
  const logSpy = jest.spyOn(global.console, "log");
  test("It should execute the command", () => {
    // the actual object that performs the task
    const light = new LightReceiver();

    // command wrapping the request to turn on/off the light at the receiver
    const lightSwitch = new LightSwitchCommand(light);

    // invoker is the actual object that executes the command
    const invoker = new LightInvoker();

    invoker.setOnPressed(lightSwitch);
    expect(light.getIsOn()).toBe(false);
    invoker.toogleLight();
    expect(light.getIsOn()).toBe(true);
    invoker.switchOff();
    expect(light.getIsOn()).toBe(false);
  });

  test("It should not execute the command", () => {
    const invoker = new LightInvoker();
    invoker.toogleLight();
    expect(logSpy).toHaveBeenCalledWith("No command found");
  });
});
