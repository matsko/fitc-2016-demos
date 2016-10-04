import {Component, HostBinding} from '@angular/core';
import {default as routerAnimations} from '../route_animations';

@Component({
    selector: 'demo_2',
    animations: [routerAnimations('routeAnimations')],
    templateUrl: 'demo_2/demo.html'
})
export class Demo2 {
    @HostBinding('@routeAnimations')
    public routeAnimations = true;
    constructor() {
    }
}
