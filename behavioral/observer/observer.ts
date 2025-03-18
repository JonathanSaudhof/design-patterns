interface IObserverable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notifyObservers(message: string, sender: User): void;
}

interface IObserver {
  receive(message: string, sender: User): void;
}

export class Chat implements IObserverable {
  private users: User[] = [];
  private messages: { sender: User; message: string }[] = [];

  subscribe(user: User): void {
    this.users.push(user);
  }

  unsubscribe(user: User): void {
    this.users = this.users.filter((obs) => obs !== user);
  }

  notifyObservers(message: string, sender: User): void {
    this.users
      .filter((user) => user.name != sender.name)
      .forEach((observer) => observer.receive(message, sender));
  }

  getMessages(): { sender: User; message: string }[] {
    return this.messages;
  }

  sendMessage(message: string, sender: User): void {
    this.messages.push({ sender, message });
    this.notifyObservers(message, sender);
  }
}

export class User implements IObserver {
  name: string;
  private chat: Chat;

  constructor(name: string, chat: Chat) {
    this.chat = chat;
    chat.subscribe(this);
    this.name = name;
  }

  receive(message: string, sender: User): void {
    console.log(
      `${this.name} received a message from ${sender.name}: ${message}`
    );
  }

  sendMessage(message: string): void {
    this.chat.sendMessage(message, this);
  }
}
