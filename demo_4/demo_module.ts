import {Demo4} from './demo';
import {NgModule} from '@angular/core';
import {ImagePreview} from './image_preview';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    bootstrap: [Demo4],
    declarations: [Demo4, ImagePreview],
    imports: [BrowserModule]
})
export class Demo4Module { }
