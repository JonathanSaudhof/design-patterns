import { createIPhone15Pro } from "../prototype.func";
import { IPhone15Pro } from "../prototype.oop";

describe("Testing Prototype Pattern", () => {
  it.each([
    ["OOP", new IPhone15Pro()],
    ["Func", createIPhone15Pro()],
  ])("%p: should create a clone of iPhone15Pro", (_testTitle, phone) => {
    const initialContacts = ["John Doe", "Jane Doe"];
    const initialMessages = ["Hello, John Doe", "Hello, Jane Doe"];

    initialContacts.forEach((contact) => {
      phone.addContact(contact);
    });

    initialMessages.forEach((message) => {
      phone.writeMessage(message);
    });

    const clone = phone.clone();
    expect(clone.getSpecs()).toEqual(phone.getSpecs());
    expect(clone.getContacts()).toEqual(phone.getContacts());
    expect(clone.getMessages()).toEqual(phone.getMessages());

    clone.addContact("Alice Doe");
    clone.writeMessage("Hello, Alice Doe");
    console.log(phone.getContacts());
    expect(clone.getContacts()).not.toEqual(phone.getContacts());
    expect(clone.getMessages()).not.toEqual(phone.getMessages());
  });
});
