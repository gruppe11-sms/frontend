import {User} from './user';

export class Role {
  public id: string;
  public title: string;
  public description: string;
  public users: User[];
}
