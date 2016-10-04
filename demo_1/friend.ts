export class Friend {
  public id: number;
  public name: string;
  public avatarUrl: string;

  constructor({id, name, avatarUrl}: {id: number, name: number, avatarUrl: string}) {
    this.id = id;
    this.name = name;
    this.avatarUrl = avatarUrl;
  } 
}
