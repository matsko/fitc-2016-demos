import {Component, trigger, transition, state, animate, style} from '@angular/core';

@Component({
    selector: 'layout-cmp',
    styleUrls: ['demo_5/layout_cmp.css'],
    templateUrl: 'demo_5/layout_cmp.html',
    animations: [
        trigger('layout', [
            state('0', style({ width: '*' })),
            state('1', style({ width: '3.125%' })),
            state('2', style({ width: '6.25%' })),
            state('3', style({ width: '12.5%' })),
            state('4', style({ width: '25%' })),
            state('5', style({ width: '50%' })),
            
            transition('* => *', [
                animate(500)
            ])
        ])
    ]
})
export class LayoutCmp {
    numbers = [
        { value: 1, priority: 0 },
        { value: 2, priority: 0 },
        { value: 3, priority: 0 },
        { value: 4, priority: 0 },
        { value: 5, priority: 0 },
    ];
    
    constructor() {
    }
    
    defaultSizes() {
        this.numbers[0].priority = 0;
        this.numbers[1].priority = 0;
        this.numbers[2].priority = 0;
        this.numbers[3].priority = 0;
        this.numbers[4].priority = 0;
    }
    
    smallToBig() {
        this.numbers[0].priority = 5;
        this.numbers[1].priority = 4;
        this.numbers[2].priority = 3;
        this.numbers[3].priority = 2;
        this.numbers[4].priority = 1;
    }
    
    bigToSmall() {
        this.numbers[0].priority = 1;
        this.numbers[1].priority = 2;
        this.numbers[2].priority = 3;
        this.numbers[3].priority = 4;
        this.numbers[4].priority = 5;
    }

    middle() {
        this.numbers[0].priority = 3;
        this.numbers[1].priority = 4;
        this.numbers[2].priority = 4;
        this.numbers[3].priority = 4;
        this.numbers[4].priority = 3;
    }

    makeClass(value) {
        return 'box box-' + value;
    }
}
