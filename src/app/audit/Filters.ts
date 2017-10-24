export interface User{
  name: string;
  id: number;
}

export class Filters {
  public users: Array<User>;
  public actions: Array<string>;
}
