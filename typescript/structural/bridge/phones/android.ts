import { IPhone } from "../bridge.interface";

export class SamsungGalaxy implements IPhone {
  isEnabled: boolean = false;
  connectedTo: string = "";
  private volumePercentage: number = 0;
  private isPlaying: boolean = false;

  enable(): void {
    this.isEnabled = true;
    console.log(`Samsung Galaxy connected to ${this.connectedTo}: Enabled`);
  }
  disable(): void {
    this.isEnabled = false;
    console.log(`Samsung Galaxy connected to ${this.connectedTo}: Disabled`);
  }
  getVolume(): number {
    return this.volumePercentage;
  }
  play(): void {
    this.isEnabled = true;
    console.log(`Samsung Galaxy connected to ${this.connectedTo}: Playing`);
  }

  pause(): void {
    this.isEnabled = false;
    console.log(`Samsung Galaxy connected to ${this.connectedTo}: Paused`);
  }
  setVolume(percent: number): void {
    if (percent < 0 || percent > 100) {
      throw new Error("Volume must be between 0 and 100");
    }

    this.volumePercentage = percent;
    console.log(
      `Samsung Galaxy connected to ${this.connectedTo}: Volume set to ${percent}`
    );
    return;
  }
}
