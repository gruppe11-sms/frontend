import {Role} from './role';
import {User} from './user';

export class Group {
  public id = 0;
  public title = '';
  public description = '';
  public members: User[] = [];
  public roles: Role[] = [];
  public groupsIn: Group[] = [];
  public inGroups: Group[] = [];
}
