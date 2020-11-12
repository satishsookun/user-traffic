import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UserFilterComponent} from "./container/user-filter.component";
import {UserFilterRoutingModule} from "./user-filter-routing.module";

@NgModule({
  exports: [
    UserFilterComponent
  ],
  declarations: [
    UserFilterComponent
  ],
  imports: [
    CommonModule,
    UserFilterRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class UserFilterModule { }
