import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SidebarComponent} from "./sidebar/container/sidebar.component";
import {ItemComponent} from "./sidebar/ui/item/item.component";

@NgModule({
    exports: [
        SidebarComponent
    ],
    declarations: [
        SidebarComponent,
        ItemComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: []
})
export class SidebarModule { }
