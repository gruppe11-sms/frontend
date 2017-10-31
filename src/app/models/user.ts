import {Role} from "./role";
import {Group} from "./group";

export class User {
  public id: number;
  public username: string;
  public password: string;
  public name: string;
  public roles: Role[];
  public groups: Group[];

  public constructor(name: string, username: string, password: string) {
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
