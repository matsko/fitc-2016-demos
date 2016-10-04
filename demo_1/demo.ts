import {
    Component,
    HostBinding
} from '@angular/core';

import {default as routerAnimations} from '../route_animations';

@Component({
    selector: 'demo_1',
    templateUrl: 'demo_1/demo.html',
    animations: [routerAnimations('routeAnimations')]
})
export class Demo1 {
    @HostBinding('@routeAnimations')
    public routeAnimations = true;
}
