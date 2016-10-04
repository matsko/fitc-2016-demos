export class User {
  public title: string;
  public name: string;
  public website: string;
  public avatarUrl: string;
  public bio: string;
  public information: any[];

  constructor({title, name, website, avatarUrl, bio, information}: {
    title?: string,
    name?: string,
    website?: string,
    avatarUrl?: string,
    bio?: string,
    information?: {[label: string]: string|number}
  }) {
    this.title = title;
    this.name = name;
    this.website = website;
    this.avatarUrl = avatarUrl;
    this.bio = bio;

    this.information = [];
    for (var lab in information) {
      this.information.push({
        'label': lab,
        'value': information[lab]
      });
    }
  }
}

export const TEMPORARY_USER = new User({});
