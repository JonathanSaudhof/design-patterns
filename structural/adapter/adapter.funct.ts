import { ILightningConnection, ISoundControl } from "./adapter.interface";

export function lightningConnection(): ILightningConnection {
  let _isPlaying = false;
  return {
    increaseVolume: (amount: number) => {
      console.log("Volume increased:", amount);
    },
    decreaseVolume: (amount: number) => {
      console.log("Volume decreased:", amount);
    },
    start: () => {
      console.log("Sound started");
      _isPlaying = true;
    },
    pause: () => {
      _isPlaying = false;
      console.log("Sound paused");
    },
    stop: () => {
      _isPlaying = false;
      console.log("Sound stopped");
    },
    isPlaying: () => _isPlaying,
  };
}

export function ligthningSoundAdapter(
  connection: ILightningConnection
): ISoundControl {
  return {
    play: () => {
      if (connection.isPlaying()) {
        connection.pause();
        return;
      }
      connection.start();
    },
    stop: () => connection.stop(),
    volumeUp: () => connection.increaseVolume(2),
    volumeDown: () => connection.decreaseVolume(2),
    isPlaying: () => connection.isPlaying(),
  };
}

export function iPhone(soundControl: ISoundControl) {
  soundControl.play();
  soundControl.volumeUp();
  soundControl.volumeDown();
  soundControl.stop();
}
