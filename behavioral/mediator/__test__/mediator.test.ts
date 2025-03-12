import { Member, MessageMediator } from "../mediator";

describe("mediator", () => {
  const logSpy = jest.spyOn(global.console, "log");
  test("should send admin message to all users", () => {
    const admin1 = new Member({ id: "admin1", role: "admin" });
    const admin2 = new Member({ id: "admin2", role: "admin" });
    const user1 = new Member({ id: "user1", role: "user" });
    const user2 = new Member({ id: "user2", role: "user" });
    const members = [admin1, admin2, user1, user2];
    new MessageMediator(...members);
    admin1.sendMessage("Hello, everyone!");

    const expectedMessages = [
      "user1 received message from admin1: Hello, everyone!",
      "user2 received message from admin1: Hello, everyone!",
      "admin2 received message from admin1: Hello, everyone!",
    ];
    expect(logSpy).toHaveBeenCalledTimes(3);
    expectedMessages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(message);
    });
  });

  test("should send user message to all admins", () => {
    const admin1 = new Member({ id: "admin1", role: "admin" });
    const admin2 = new Member({ id: "admin2", role: "admin" });
    const user1 = new Member({ id: "user1", role: "user" });
    const user2 = new Member({ id: "user2", role: "user" });
    const members = [admin1, admin2, user1, user2];
    new MessageMediator(...members);
    user1.sendMessage("Hello, admins!");

    const expectedMessages = [
      "admin1 received message from user1: Hello, admins!",
      "admin2 received message from user1: Hello, admins!",
    ];
    expect(logSpy).toHaveBeenCalledTimes(2);
    expectedMessages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(message);
    });
  });
});
