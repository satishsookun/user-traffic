import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UserFilterComponent} from "./container/user-filter.component";

@NgModule({
  exports: [
    UserFilterComponent
  ],
  declarations: [
    UserFilterComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class UserFilterModule { }
