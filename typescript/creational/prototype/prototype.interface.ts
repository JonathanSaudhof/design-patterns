export interface Prototype<T> {
  clone(): T;
}

export interface SmartPhonePrototype<T> extends Prototype<T> {
  getSpecs(): Record<string, string | null>;
  addContact(name: string): void;
  getContacts(): string[];
}
