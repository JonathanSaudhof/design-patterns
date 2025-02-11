export interface ISoundControl {
  play(): void;
  stop(): void;
  volumeUp(): void;
  volumeDown(): void;
  isPlaying(): boolean;
}

export interface ILightningConnection {
  increaseVolume(amount: number): void;
  decreaseVolume(amount: number): void;
  start(): void;
  pause(): void;
  stop(): void;
  isPlaying(): boolean;
}
