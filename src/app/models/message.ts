export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  type: string;
  bot: boolean;

  constructor(content: string, avatar: string, timestamp?: Date, type?: string, bot?: boolean) {
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.type = type;
    this.bot = bot;
  }
}
