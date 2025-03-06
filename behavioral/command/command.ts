interface ICommand {
  execute(): void;
}

export class LightReceiver {
  private isOn: boolean = false;
  turnOn() {
    this.isOn = !this.isOn;
    console.log(`Light is "On"`);
  }

  public turnOff() {
    this.isOn = !this.isOn;
    console.log(`Light is "Off"`);
  }

  public getIsOn() {
    return this.isOn;
  }
}

export class LightSwitchCommand implements ICommand {
  private receiver: LightReceiver;

  constructor(receiver: LightReceiver) {
    this.receiver = receiver;
  }

  execute() {
    if (this.receiver.getIsOn()) {
      this.receiver.turnOff();
      return;
    }
    this.receiver.turnOn();
  }
}

export class LightInvoker {
  private onPressed: ICommand | null = null;

  setOnPressed(command: ICommand) {
    this.onPressed = command;
  }

  public toogleLight() {
    if (!this.onPressed) {
      console.log("No command found");
      return;
    }
    this.onPressed.execute();
  }

  public switchOff() {
    if (!this.onPressed) {
      console.log("No command found");
      return;
    }
    this.onPressed.execute();
  }
}
