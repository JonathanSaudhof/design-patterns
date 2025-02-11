import { Prototype } from "./prototype.interface";

abstract class SmartPhone implements Prototype<SmartPhone> {
  protected screen: string | null = null;
  protected battery: string | null = null;
  protected os: string | null = null;
  protected camera: string | null = null;
  protected processor: string | null = null;
  protected contacts: string[] = [];

  public getSpecs() {
    return {
      screen: this.screen,
      battery: this.battery,
      os: this.os,
      camera: this.camera,
      processor: this.processor,
    };
  }

  public addContact(name: string): void {
    this.contacts.push(name);
  }

  public getContacts(): string[] {
    return this.contacts;
  }

  abstract clone(): SmartPhone;
}

export class IPhone15Pro extends SmartPhone {
  private messages: string[] = [];
  constructor() {
    super();
    this.battery = "4352 mAh";
    this.os = "iOS 15";
    this.camera = "12 MP + 12 MP + 12 MP";
    this.processor = "A15 Bionic";
    this.screen = '6.7"';
  }

  public writeMessage(message: string): void {
    this.messages.push(message);
  }

  public getMessages(): string[] {
    return this.messages;
  }

  public deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }

  clone(): IPhone15Pro {
    const clone = Object.create(this);
    clone.contacts = [...this.contacts];
    clone.messages = [...this.messages];
    return clone;
  }
}
