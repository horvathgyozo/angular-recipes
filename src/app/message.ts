import { User } from "./user";

export class Message {
  id: number = 0;
  text: string = '';
  user?: User;
}
