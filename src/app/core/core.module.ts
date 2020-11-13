import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MainComponent} from "./main/container/main.component";
import {SidebarModule} from "./sidebar/sidebar.module";
import {HeaderModule} from "./header/header.module";

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
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule {
}
