import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MainComponent} from "./main/main.component";
import {SidebarModule} from "../features/sidebar.module";
import {HeaderModule} from "../features/header/header.module";
import {PagesModule} from "../features/pages/pages.module";

@NgModule({
    exports: [
        MainComponent
    ],
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        SidebarModule,
        HeaderModule,
        PagesModule,
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule { }
