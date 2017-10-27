import {User} from "./user";

export class Role {
  id: number;
  title: string;
  description: string;
  users: User[];
}
