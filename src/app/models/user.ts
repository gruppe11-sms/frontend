import {Role} from "./role";

export class User {
  id: string;
  userName: string;
  password: string;
  name: string;
  roles: Role[]
}
