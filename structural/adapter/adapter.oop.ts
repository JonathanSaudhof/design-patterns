import { ILightningConnection, ISoundControl } from "./adapter.interface";

// old or external api
export class LightningConnection implements ILightningConnection {
  private _isPlaying: boolean = false;
  increaseVolume(amount: number): void {
    console.log("Volume increased:", amount);
  }

  decreaseVolume(amount: number): void {
    console.log("Volume decreased:", amount);
  }

  start(): void {
    console.log("Sound started");
    this._isPlaying = true;
  }

  pause(): void {
    this._isPlaying = false;
    console.log("Sound paused");
  }

  stop(): void {
    this._isPlaying = false;
    console.log("Sound stopped");
  }

  isPlaying(): boolean {
    return this._isPlaying;
  }
}

const VOLUME_STEP = 2;

export class LightningSoundAdapter implements ISoundControl {
  private lightning: LightningConnection;

  constructor(lightning: LightningConnection) {
    this.lightning = lightning;
  }

  play(): void {
    if (!this.lightning.isPlaying()) {
      this.lightning.start();
    } else {
      this.lightning.pause();
    }
  }

  stop(): void {
    this.lightning.stop();
  }

  volumeUp(): void {
    this.lightning.increaseVolume(VOLUME_STEP);
  }

  volumeDown(): void {
    this.lightning.decreaseVolume(VOLUME_STEP);
  }

  isPlaying(): boolean {
    return this.lightning.isPlaying();
  }
}
