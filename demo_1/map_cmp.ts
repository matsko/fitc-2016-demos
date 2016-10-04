import {Input, Component} from '@angular/core';

const API_KEY = "AIzaSyDBiZwgfAqY037RngTfBrxNTlWIsUgH4Ac";

@Component({
  selector: 'map-cmp',
  templateUrl: './demo_1/map_cmp.html',
  styles: [`
    :host {
      display:block;
      border:1px solid black;
    }
    img { width:100%; }
  `]
})
export class MapCmp {
  @Input('location')
  public location: string = '';

  get imageUrl() {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${this.location}&zoom=8&size=1000x500&maptype=roadmap
&key=${API_KEY}`;
  }

  get ready() {
    return this.location.length > 0;
  }
}
