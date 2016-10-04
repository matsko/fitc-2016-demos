import {Component, NgModule, animate, state, style, transition, trigger} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

const ITEMS = [
  { count: 1, name: "January"},
  { count: 2, name: "February"},
  { count: 3, name: "March"},
  { count: 4, name: "April"},
  { count: 5, name: "May"},
  { count: 6, name: "June"},
  { count: 7, name: "July"},
  { count: 8, name: "August"},
  { count: 9, name: "September"},
  { count: 10, name: "October"},
  { count: 11, name: "November"},
  { count: 12, name: "December"}
]

@Component({
  selector: 'ng-for-example',
  styleUrls: ['./demo_2/app.css'],
  templateUrl: './demo_2/app.html',
  animations: [
      trigger('monthAnimation', [
          transition(':enter', [
             style({ opacity: 0, width: 0 }),
             animate(500, style({ width: '20%', opacity: 1 }))
          ]),
          transition(':leave', [
            animate(500, style({ opacity: 0, width: 0 }))
          ])
      ])
  ]
})
export class ExampleApp {
  items: any[] = [];

  constructor() {
    this.showAll();
  }

  showAll() {
    this.items = ITEMS;
  }

  hideAll() {
    this.items = [];
  }

  resolveClassName(first: boolean, last:boolean, even: boolean, odd: boolean): string {
    var className = 'cell';
    if (first) className += ' first-record';
    else if (last) className += ' last-record';
    else if (even) className += ' even-record';
    else if (odd) className += ' odd-record';
    return className;
  }

  evenMonths() {
    this.showAll();
    this.items = this.items.filter((value, i) => {
      return i % 2 == 0;
    })
  }

  oddMonths() {
    this.showAll();
    this.items = this.items.filter((value, i) => {
      return i % 2 == 1;
    })
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [ExampleApp],
  bootstrap: [ExampleApp]
})
export class AppModule {
}
