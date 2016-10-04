import {Demo2} from './demo';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ExampleApp} from './app';

@NgModule({
    bootstrap: [Demo2],
    declarations: [Demo2, ExampleApp],
    imports: [BrowserModule]
})
export class Demo2Module { }
