import { AvailableProviders, ICellPhoneProvider } from "./singleton.types";

class VerizonClass implements ICellPhoneProvider {
  public time: number = Date.now();

  getInternetAccess(): string {
    return `Verizon-5g:${this.time}`;
  }
}

class VodafoneClass implements ICellPhoneProvider {
  public time: number = Date.now();
  getInternetAccess(): string {
    return `Vodafone-5g:${this.time}`;
  }
}

export class CellPhoneProviderFactory implements CellPhoneProviderFactory {
  private static providers: Partial<
    Record<AvailableProviders, ICellPhoneProvider>
  > = {};

  public static getProvider(provider: AvailableProviders): ICellPhoneProvider {
    if (!this.providers[provider]) {
      switch (provider) {
        case "Verizon":
          this.providers[provider] = new VerizonClass();
          break;
        case "Vodafone":
          this.providers[provider] = new VodafoneClass();
          break;
        default:
          throw new Error("Invalid provider");
      }
    }
    return this.providers[provider];
  }
}
