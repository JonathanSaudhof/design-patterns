import { IPhone, ITablet } from "../types";
import {
  callLogString,
  gameLogString,
  logMessage,
  messageLogString,
  videoLogString,
} from "./logging.util";

export class AppleIPhoneX implements IPhone {
  name: string = "iPhoneX";

  call(number: string): void {
    logMessage(
      callLogString({
        product: this.name,
        number,
      })
    );
  }
  sendMessage(number: string, message: string): void {
    logMessage(
      messageLogString({
        product: this.name,
        number,
        message,
      })
    );
  }
}

export class AppleIPhone11 implements IPhone {
  name: string = "iPhone11";
  call(number: string): void {
    logMessage(
      callLogString({
        product: this.name,
        number,
      })
    );
  }

  sendMessage(number: string, message: string): void {
    logMessage(
      messageLogString({
        product: this.name,
        number,
        message,
      })
    );
  }
}

export class AppleIPadPro implements ITablet {
  name: string = "iPadPro";

  playGame(game: string) {
    logMessage(
      gameLogString({
        product: this.name,
        game,
      })
    );
  }

  playVideo(video: string) {
    logMessage(
      videoLogString({
        product: this.name,
        video,
      })
    );
  }
}
