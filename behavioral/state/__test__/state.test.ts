import { Game, Player } from "../state";

describe("State", () => {
  const logSpy = jest.spyOn(global.console, "log");

  test("should be in launch state", () => {
    // Arrange
    const player = new Player();
    const game = new Game(player);
    expect(logSpy).toHaveBeenCalledWith("LaunchState");

    game.useArrowKeys();
    expect(logSpy).toHaveBeenCalledWith("Game is not playing");

    game.useSpaceBar();
    expect(logSpy).toHaveBeenCalledWith("Game is not playing");

    game.clickPause();
    expect(logSpy).toHaveBeenCalledWith("Game is not playing");

    // Act
    game.clickPlay();
    expect(logSpy).toHaveBeenCalledWith("PlayingState");

    game.clickPlay();
    expect(logSpy).toHaveBeenCalledWith("Game is already playing");
  });

  test("should be in playing state", () => {
    // Arrange
    const player = new Player();
    const game = new Game(player);
    game.clickPlay();
    expect(logSpy).toHaveBeenCalledWith("PlayingState");

    game.clickPlay();
    expect(logSpy).toHaveBeenCalledWith("Game is already playing");

    // Act
    game.useArrowKeys();
    expect(logSpy).toHaveBeenCalledWith("Player moved");

    game.useSpaceBar();
    expect(logSpy).toHaveBeenCalledWith("Player attacked");

    game.clickPause();
    expect(logSpy).toHaveBeenCalledWith("PausedState");
  });

  test("should be in paused state", () => {
    // Arrange
    const player = new Player();
    const game = new Game(player);
    game.clickPlay();
    game.clickPause();
    expect(logSpy).toHaveBeenCalledWith("PausedState");

    // Act
    game.useArrowKeys();
    expect(logSpy).toHaveBeenCalledWith("Game is not playing");

    game.useSpaceBar();
    expect(logSpy).toHaveBeenCalledWith("Game is not playing");

    game.clickPlay();
    expect(logSpy).toHaveBeenCalledWith("PlayingState");
  });
});
