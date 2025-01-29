export interface IPhone {
  name: string;
  call(number: string): void;
  sendMessage(number: string, message: string): void;
}

export interface ITablet {
  name: string;
  playGame(game: string): void;
  playVideo(video: string): void;
}
