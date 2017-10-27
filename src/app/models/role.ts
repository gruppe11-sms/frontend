import {User} from "./user";

export class Role {
  public id: number;
  public title: string;
  public description: string;
  public users: User[];
}
