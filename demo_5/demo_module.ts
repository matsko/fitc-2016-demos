import {Demo5} from './demo';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LayoutCmp} from './layout_cmp';

@NgModule({
    bootstrap: [Demo5],
    declarations: [Demo5, LayoutCmp],
    imports: [BrowserModule]
})
export class Demo5Module { }
