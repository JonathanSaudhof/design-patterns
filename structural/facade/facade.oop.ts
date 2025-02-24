import { InvoiceClient, Phone, PhoneFactory } from "./facade.interface";

export class SamsungPhoneFactory implements PhoneFactory {
  constructor() {}
  createPhone(): Phone {
    return {
      model: "Samsung S21",
      price: 1000,
    };
  }
}

export class EmailInvoiceClient implements InvoiceClient {
  sendInvoice(phone: Phone): void {
    console.log(
      `Emailing invoice for ${phone.model} with price ${phone.price}`
    );
  }
}

export class PhoneShipmentFacade {
  constructor(
    private factory: PhoneFactory,
    private invoiceClient: InvoiceClient
  ) {}

  shipPhone(): Phone {
    const phone = this.factory.createPhone();
    this.invoiceClient.sendInvoice(phone);
    return phone;
  }
}
