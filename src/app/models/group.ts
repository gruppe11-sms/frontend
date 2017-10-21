import {Role} from "./role";
import {User} from "./user";

export class Group {
  id: string;
  title: string;
  description: string;
  members: User[];
  roles: Role[];
}
