import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SidebarComponent} from "./container/sidebar.component";
import {ItemComponent} from "./ui/item/item.component";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
    exports: [
        SidebarComponent
    ],
    declarations: [
        SidebarComponent,
        ItemComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
    ],
    providers: [],
    bootstrap: []
})
export class SidebarModule { }
