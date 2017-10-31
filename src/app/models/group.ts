import {Role} from "./role";
import {User} from "./user";

export class Group {
  public id: string;
  public title: string;
  public description: string;
  public members: User[];
  public roles: Role[];
}
