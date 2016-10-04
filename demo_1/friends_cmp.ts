import {Component, Input} from '@angular/core';
import {Friend} from './friend';

@Component({
  selector: 'friends-cmp',
  templateUrl: './demo_1/friends_cmp.html',
  styleUrls: ['./demo_1/friends_cmp.css']
})
export class FriendsCmp {
  @Input("friends")
  public friends: Friend[] = [];
}
