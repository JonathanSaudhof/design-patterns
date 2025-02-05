interface ISoundControl {
  play(): void;
  stop(): void;
  volumeUp(): void;
  volumeDown(): void;
}

// old or external api
export class LightningConnection {
  increaseVolume(amount: number): void {
    console.log("Volume increased:", amount);
  }

  decreaseVolume(amount: number): void {
    console.log("Volume decreased:", amount);
  }

  start(): void {
    console.log("Sound started");
  }

  pause(): void {
    console.log("Sound paused");
  }

  stop(): void {
    console.log("Sound stopped");
  }
}

const VOLUME_STEP = 2;

export class LightningSoundAdapter implements ISoundControl {
  private lightning: LightningConnection;
  private isPlaying: boolean = false;

  constructor(lightning: LightningConnection) {
    this.lightning = lightning;
  }

  play(): void {
    if (this.isPlaying) {
      this.lightning.pause();
      this.isPlaying = false;
      return;
    }
    this.lightning.start();
    this.isPlaying = true;
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
}
