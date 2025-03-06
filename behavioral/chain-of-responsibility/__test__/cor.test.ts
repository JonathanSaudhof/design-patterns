import { AdminAuthService } from "../cor.oop";

export const userRegister = {
  user: { email: "user@test.com", password: "12345" },
  admin: { email: "admin@test.com", password: "67890" },
  unknown: { email: "unknown", password: "unknown" },
};

describe("Test Chain of Responsibility", () => {
  const authService = new AdminAuthService();
  test("user is admin should return token", () => {
    const user = {
      email: userRegister.admin.email,
      password: userRegister.admin.password,
    };
    const response = authService.autherizeUserForResource(user, "resource1");

    expect(response).toEqual("testToken");
  });

  test("unknown user should return unauthorized", () => {
    const user = {
      email: userRegister.unknown.email,
      password: userRegister.unknown.password,
    };
    const response = authService.autherizeUserForResource(user, "resource1");
    expect(response).toEqual("Unauthorized");
  });

  test("known user with wrong passoword should return unauthorized", () => {
    const user = {
      email: userRegister.user.email,
      password: "wrongPassword",
    };
    const response = authService.autherizeUserForResource(user, "resource1");
    expect(response).toEqual("Unauthorized");
  });

  test("user is owner should return token", () => {
    const user = {
      email: userRegister.user.email,
      password: userRegister.user.password,
    };
    const response = authService.autherizeUserForResource(user, "resource1");
    expect(response).toEqual("testToken");
  });
});
