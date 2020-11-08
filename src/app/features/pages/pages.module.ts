import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PagesComponent} from "./container/pages.component";

@NgModule({
    exports: [
        PagesComponent
    ],
    declarations: [
        PagesComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: []
})
export class PagesModule { }
