import { IPhone, ITablet } from "../types";
import {
  callLogString,
  gameLogString,
  logMessage,
  messageLogString,
  videoLogString,
} from "./logging.util";

export class SamsungGalaxyS10 implements IPhone {
  name: string = "GalaxyS10";
  call(number: string) {
    logMessage(callLogString({ product: this.name, number }));
  }

  sendMessage(number: string, message: string) {
    logMessage(messageLogString({ product: this.name, number, message }));
  }
}

export class SamsungGalaxyTabS6 implements ITablet {
  name: string = "GalaxyTabS6";
  playGame(game: string) {
    logMessage(gameLogString({ product: this.name, game }));
  }

  playVideo(video: string) {
    logMessage(videoLogString({ product: this.name, video }));
  }
}
