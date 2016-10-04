import {Component, HostBinding} from '@angular/core';
import {default as routerAnimations} from '../route_animations';

@Component({
    selector: 'demo_5',
    animations: [routerAnimations('routeAnimations')],
    templateUrl: 'demo_5/demo.html',
    styles: [`
        :host {
            position:fixed;
            top:0;
            right:0;
            bottom:0;
            left:0;
            display:block;
            background:url(demo_5/bg.jpg) no-repeat center center / cover;
        } 
    `]
})
export class Demo5 {
    @HostBinding('@routeAnimations')
    public routeAnimations = true;
    constructor() {
    }
}
