export type TSmartPhone = {
  screen: string | null;
  battery: string | null;
  os: string | null;
  camera: string | null;
  processor: string | null;
};

export class SmartPhone {
  screen: string | null = null;
  battery: string | null = null;
  os: string | null = null;
  camera: string | null = null;
  processor: string | null = null;
}

export const iphone11Props = {
  screen: '6.06"',
  processor: "A13 Bionic",
  os: "iOS 13",
  camera: "12 MP + 12 MP",
  battery: "3110 mAh",
};
