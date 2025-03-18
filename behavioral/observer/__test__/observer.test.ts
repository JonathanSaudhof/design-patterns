import { Chat, User } from "../observer";

describe("Observer", () => {
  const logSpy = jest.spyOn(global.console, "log");
  it("should send messages to all subscribers", () => {
    const chat = new Chat();

    const user1 = new User("User 1", chat);
    new User("User 2", chat);
    new User("User 3", chat);

    user1.sendMessage("Hello, User 2!");
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith(
      "User 2 received a message from User 1: Hello, User 2!"
    );
    expect(logSpy).not.toHaveBeenCalledWith(
      "User 1 received a message from User 1: Hello, User 2!"
    );
    expect(logSpy).toHaveBeenCalledWith(
      "User 3 received a message from User 1: Hello, User 2!"
    );
  });

  it("should return all messages", () => {
    const chat = new Chat();

    const user1 = new User("User 1", chat);
    const user2 = new User("User 2", chat);
    const user3 = new User("User 3", chat);

    user1.sendMessage("Hello, User 2!");
    user2.sendMessage("Hello, User 3!");
    user3.sendMessage("Hello, User 1!");

    expect(chat.getMessages()).toEqual([
      { sender: user1, message: "Hello, User 2!" },
      { sender: user2, message: "Hello, User 3!" },
      { sender: user3, message: "Hello, User 1!" },
    ]);
  });
});
