interface IMediator {
  send(sender: UserType, message: string): void;
}

type AdminUserType = {
  role: "admin";
  id: string;
};

type BaseUserType = { role: "user"; id: string };

type UserType = AdminUserType | BaseUserType;

export interface IMember {
  user: UserType;
  sendMessage(message: string): void;
  receive(message: string, from: UserType): void;
  setMediator(mediator: IMediator): void;
}

export class MessageMediator implements IMediator {
  private members: IMember[] = [];

  constructor(...members: IMember[]) {
    members.forEach((member) => {
      member.setMediator(this);
    });

    this.members = members;
  }

  send(sender: UserType, message: string): void {
    switch (sender.role) {
      case "admin":
        // if sender is admin, send message to all members
        // except the sender itself
        this.members
          .filter((member) => member.user.id !== sender.id)
          .forEach((member) => {
            member.receive(message, sender);
          });
        break;
      case "user":
        // if sender is user, send message to all admin members
        this.members
          .filter((member) => member.user.role === "admin")
          .forEach((member) => {
            member.receive(message, sender);
          });
        break;
      default:
        throw new Error("Invalid role");
        break;
    }
  }
}

export class Member implements IMember {
  user: UserType;
  private mediator: IMediator | null = null;
  constructor(user: UserType) {
    this.user = user;
  }

  public setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }

  sendMessage(message: string): void {
    if (!this.mediator) {
      throw new Error("Mediator is not set");
    }
    this.mediator.send(this.user, message);
  }
  receive(message: string, from: UserType): void {
    console.log(`${this.user.id} received message from ${from.id}: ${message}`);
  }
}
