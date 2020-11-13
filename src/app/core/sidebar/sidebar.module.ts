import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SidebarComponent} from "./container/sidebar.component";
import {AppRoutingModule} from "../../app-routing.module";
import {StepsService} from "../../shared/services/steps.service";

@NgModule({
    exports: [
        SidebarComponent
    ],
    declarations: [
        SidebarComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
    ],
    providers: [
      StepsService,
    ],
    bootstrap: []
})
export class SidebarModule { }
