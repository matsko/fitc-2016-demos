import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import {Demo1} from './demo';
import {ProfileCmp} from './profile_cmp';
import {DossierCmp} from './dossier_cmp';
import {FriendsCmp} from './friends_cmp';
import {MapCmp} from './map_cmp';
import {FormatLabelPipe} './format_label_pipe';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [Demo1, DossierCmp, ProfileCmp, FriendsCmp, MapCmp, FormatLabelPipe],
    bootstrap: [Demo1]
})
export class Demo1Module { }
