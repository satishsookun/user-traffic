import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./container/users.component";
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  exports: [
    UsersComponent
  ],
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: []
})
export class UsersModule { }
