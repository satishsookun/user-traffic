import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./container/users.component";

@NgModule({
  exports: [
    UsersComponent
  ],
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class UsersModule { }
