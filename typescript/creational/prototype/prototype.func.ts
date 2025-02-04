import { SmartPhone } from "../builder/smart-phone";
import { SmartPhonePrototype } from "./prototype.interface";

interface IPhone15Pro extends SmartPhonePrototype<IPhone15Pro> {
  writeMessage(message: string): void;
  getMessages(): string[];
  deleteMessage(index: number): void;
}

type SmartPhoneProps = {
  screen: string;
  battery: string;
  os: string;
  camera: string;
  processor: string;
  messages: string[];
  contacts: string[];
};

const iPhone15Specs = {
  screen: '6.7"',
  battery: "4352 mAh",
  os: "iOS 15",
  camera: "12 MP + 12 MP + 12 MP",
  processor: "A15 Bionic",
  contacts: [],
  messages: [],
};

function createIphone(smartPhone: SmartPhoneProps): IPhone15Pro {
  return {
    getSpecs: () => ({
      screen: smartPhone.screen,
      battery: smartPhone.battery,
      os: smartPhone.os,
      camera: smartPhone.camera,
      processor: smartPhone.processor,
    }),
    addContact: (name: string) => {
      smartPhone.contacts.push(name);
    },
    getContacts: () => smartPhone.contacts,
    writeMessage: (message: string) => {
      smartPhone.messages.push(message);
    },
    getMessages: () => smartPhone.messages,
    deleteMessage: (index: number) => {
      smartPhone.messages.splice(index, 1);
    },
    clone: () => {
      const clonedSmartPhone = Object.create(smartPhone);
      clonedSmartPhone.contacts = [...smartPhone.contacts];
      clonedSmartPhone.messages = [...smartPhone.messages];
      return createIphone(clonedSmartPhone);
    },
  } as IPhone15Pro;
}

export const createIPhone15Pro = () => createIphone(iPhone15Specs);
