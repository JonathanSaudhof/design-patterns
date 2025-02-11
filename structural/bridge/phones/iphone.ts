import { IPhone } from "../bridge.interface";

export class IPhone11 implements IPhone {
  connectedTo: string = "";
  isEnabled: boolean = false;
  private volumePercentage: number = 0;
  private isPlaying: boolean = false;

  enable(): void {
    this.isEnabled = true;
    console.log(`Iphone11 connected to ${this.connectedTo}: Enabled`);
  }

  disable(): void {
    this.isEnabled = false;
    console.log(`Iphone11 connected to ${this.connectedTo}: Disabled`);
  }

  getVolume(): number {
    return this.volumePercentage;
  }

  play(): void {
    if (this.isPlaying) {
      this.pause();
      return;
    }
    this.isPlaying = true;
    console.log(`Iphone11 connected to ${this.connectedTo}: Playing`);
  }

  pause(): void {
    this.isPlaying = false;
    console.log(`Iphone11 connected to ${this.connectedTo}: Paused`);
  }

  setVolume(percent: number): void {
    this.volumePercentage = percent;
    console.log(
      `Iphone11 connected to ${this.connectedTo}: Volume set to ${percent}`
    );
  }
}
