export interface Phone {
  model: string;
  price: number;
}

export interface PhoneFactory {
  createPhone(): Phone;
}

export interface InvoiceClient {
  sendInvoice(phone: Phone): void;
}
