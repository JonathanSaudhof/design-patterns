export interface IPhone {
  isEnabled: boolean;
  connectedTo: string;
  enable(): void;
  disable(): void;
  getVolume(): number;
  play(): void;
  pause(): void;
  setVolume(percent: number): void;
}
