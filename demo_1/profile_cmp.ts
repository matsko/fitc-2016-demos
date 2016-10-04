import {Component, Input} from '@angular/core';
import {User, TEMPORARY_USER} from './user';

@Component({
  selector: 'profile-cmp'
  templateUrl: './demo_1/profile_cmp.html',
  styleUrls: ['./demo_1/profile_cmp.css']
})
export class ProfileCmp {
  @Input("user")
  public user = TEMPORARY_USER;
}
