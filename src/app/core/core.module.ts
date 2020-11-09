import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MainComponent} from "./main/main.component";
import {SidebarModule} from "./sidebar/sidebar.module";
import {HeaderModule} from "./header/header.module";
import {PagesModule} from "./pages/pages.module";

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
export class CoreModule {
}
