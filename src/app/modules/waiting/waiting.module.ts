import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WaitingComponent} from "./container/waiting.component";
import {WaitingRoutingModule} from "./waiting-routing.module";

@NgModule({
  exports: [
    WaitingComponent
  ],
  declarations: [
    WaitingComponent,
  ],
  imports: [
    CommonModule,
    WaitingRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class WaitingModule { }
