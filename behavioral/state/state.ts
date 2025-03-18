export class Player {
  constructor() {
    console.log("Player is created");
  }

  public move() {
    console.log("Player moved");
  }

  public attack() {
    console.log("Player attacked");
  }
}

export class Game {
  public activeState: GameState;
  private player: Player;

  constructor(player: Player) {
    this.activeState = new LaunchState(this);
    this.player = player;
  }

  public clickPlay(): void {
    this.activeState.onPlayClick();
  }

  public clickPause(): void {
    this.activeState.onPauseClick();
  }

  public useArrowKeys(): void {
    if (!this.activeState.isPlaying) {
      console.log("Game is not playing");
      return;
    }

    this.player.move();
  }

  public useSpaceBar(): void {
    if (!this.activeState.isPlaying) {
      console.log("Game is not playing");
      return;
    }
    this.player.attack();
  }
}

abstract class GameState {
  protected game: Game;
  public isPlaying: boolean = false;

  constructor(game: Game) {
    this.game = game;
  }

  abstract onPlayClick(): void;
  abstract onPauseClick(): void;
}

class LaunchState extends GameState {
  constructor(game: Game) {
    console.log("LaunchState");
    super(game);
    this.isPlaying = false;
  }

  onPlayClick(): void {
    if (this.isPlaying) {
      throw new Error("Game is already playing");
    }

    this.game.activeState = new PlayingState(this.game);
  }

  onPauseClick(): void {
    console.log("Game is not playing");
  }
}

// Playing State

class PlayingState extends GameState {
  constructor(game: Game) {
    console.log("PlayingState");
    super(game);
    this.isPlaying = true;
  }

  onPlayClick(): void {
    console.log("Game is already playing");
  }

  onPauseClick(): void {
    if (!this.isPlaying) {
      console.log("Game is not playing");
      return;
    }

    this.isPlaying = false;
    this.game.activeState = new PausedState(this.game);
  }
}

class PausedState extends GameState {
  constructor(game: Game) {
    console.log("PausedState");
    super(game);
    this.isPlaying = false;
  }

  onPlayClick(): void {
    if (this.isPlaying) {
      console.log("Game is already playing");
      return;
    }
    this.game.activeState = new PlayingState(this.game);
  }

  onPauseClick(): void {
    console.log("Game is already paused");
  }
}
