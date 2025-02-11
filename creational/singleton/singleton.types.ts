export interface ICellPhoneProvider {
  getInternetAccess(): string;
}

export interface ICellPhoneProviderFactory {
  getProvider(provider: string): ICellPhoneProvider;
}

export type AvailableProviders = "Verizon" | "Vodafone";
