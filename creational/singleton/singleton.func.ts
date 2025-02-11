import {
  AvailableProviders,
  ICellPhoneProvider,
  ICellPhoneProviderFactory,
} from "./singleton.types";

const providers: Partial<Record<AvailableProviders, ICellPhoneProvider>> = {};

function createVerizon(): ICellPhoneProvider {
  const time: number = Date.now();
  return {
    getInternetAccess(): string {
      return `Verizon-5g:${time}`;
    },
  };
}

function createVodafone(): ICellPhoneProvider {
  const time = Date.now();
  return {
    getInternetAccess(): string {
      return `Vodafone-5g:${time}`;
    },
  };
}

export const cellPhoneProviderFactory: ICellPhoneProviderFactory = {
  getProvider(provider: AvailableProviders) {
    if (!providers[provider]) {
      switch (provider) {
        case "Verizon":
          providers[provider] = createVerizon();
          break;
        case "Vodafone":
          providers[provider] = createVodafone();
          break;
        default:
          throw new Error("Invalid provider");
      }
    }
    return providers[provider];
  },
};
