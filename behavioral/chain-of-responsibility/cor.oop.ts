type User = {
  email: string;
  password: string;
};

type Request = {
  user: User;
  resourceId: string;
};

type Token = string;

type TokenResponse = {
  token: Token;
};

type ErroResponse = {
  message: string;
};

type Response = TokenResponse | ErroResponse;

interface Handler<Request, Response> {
  setNext(handler: Handler<Request, Response>): Handler<Request, Response>;
  handle(request: Request): Response | null;
}

const STATIC_TOKEN = "testToken";

abstract class BaseHandler implements Handler<Request, Response> {
  private nextHandler: BaseHandler | null = null;

  setNext(handler: BaseHandler): BaseHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: Request): Response | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends BaseHandler {
  private userMap: Record<string, string> = {
    "user@test.com": "12345",
    "admin@test.com": "67890",
  };
  handle(request: Request): Response {
    const userPassword = this.userMap[request.user.email];
    const isAuthenticated = userPassword === request.user.password;

    if (isAuthenticated) {
      return (
        super.handle(request) ?? {
          token: STATIC_TOKEN,
        }
      );
    }
    return {
      message: "Unauthorized",
    };
  }
}

class RoleHandler extends BaseHandler {
  private adminEmail = "admin@test.com";

  handle(request: Request): Response {
    if (request.user.email === this.adminEmail) {
      return (
        super.handle(request) ?? {
          token: STATIC_TOKEN,
        }
      );
    } else {
      return {
        message: "Forbidden",
      };
    }
  }
}

class OwnerHandler extends BaseHandler {
  private resourceMap: Record<string, string> = {
    resource1: "user@test.com",
  };

  handle(request: Request): Response {
    const isUserOwner =
      this.resourceMap[request.resourceId] === request.user.email;

    if (isUserOwner) {
      return {
        token: STATIC_TOKEN,
      };
    } else {
      return (
        super.handle(request) ?? {
          message: "Forbidden",
        }
      );
    }
  }
}

export class AdminAuthService {
  public autherizeUserForResource(
    user: User,
    resource: string
  ): Token | string {
    const request = { user, resourceId: resource };
    const authHandler = new AuthHandler();
    const ownerHandler = new OwnerHandler();
    const roleHandler = new RoleHandler();

    // chain of checks
    authHandler.setNext(ownerHandler).setNext(roleHandler);

    const response = authHandler.handle(request);

    if (response && "token" in response) {
      return response.token;
    }

    return response.message;
  }
}
