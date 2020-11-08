import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./container/header.component";

@NgModule({
    exports: [
        HeaderComponent,
    ],
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: []
})
export class HeaderModule { }
