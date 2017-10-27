import {Role} from "./role";
import {Group} from "./group";

export class User {
  id: number;
  username: string;
  password: string;
  name: string;
  roles: Role[];
  groups: Group[];

  constructor(name: string, username: string, password: string) {
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
