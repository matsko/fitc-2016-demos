import {Component, Input} from '@angular/core';
import {Http} from '@angular/http';
import {User, TEMPORARY_USER} from './user';
import {Friend} from './friend';

@Component({
  selector: 'dossier-cmp',
  templateUrl: './demo_1/dossier_cmp.html',
  styleUrls: ['./demo_1/dossier_cmp.css']
})
export class DossierCmp {
  public user: User = TEMPORARY_USER;
  public friends: Friend[] = [];
  public location: string = '';
  public hometown: string = '';

  constructor(public http: Http) {}

  @Input('file')
  set fileName(file) {
    this.http.get(file).subscribe(response => {
      this.populateData(response.json());
    }); 
  }

  populateData(data: {[key: string]: any}) {
    this.user = new User(data);
    this.location = data['location'];
    this.hometown = data['hometown'];

    var friends = data['friends'];
    if (friends && friends.length) {
      this.friends = friends.map(value => new Friend(value));
    }
  }
} 
