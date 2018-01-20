import {Role} from './role';
import {Group} from './group';

export class User {
  public id = 0;
  public username = '';
  public password = '';
  public name = '';
  public roles: Role[] = [];
  public groups: Group[] = [];

  public constructor(name: string = '', username: string = '', password: string = '') {
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
