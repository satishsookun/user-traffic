import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AbTestingComponent} from "./ab-testing.component";
import {AbTestingRoutingModule} from "./ab-testing-routing.module";

@NgModule({
  exports: [
    AbTestingComponent
  ],
  declarations: [
    AbTestingComponent,
  ],
  imports: [
    CommonModule,
    AbTestingRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class AbTestingModule { }
