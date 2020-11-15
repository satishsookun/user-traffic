import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./container/users.component";
import {MatIconModule} from "@angular/material/icon";
import {UsersRoutingModule} from "./users-routing.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {VisitorsService} from "../../shared/services/visitors.service";
import {PaginationComponent} from "../../shared/pagination/pagination.component";

@NgModule({
  entryComponents: [UsersComponent],
  exports: [
    UsersComponent
  ],
  declarations: [
    UsersComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    MatExpansionModule,
  ],
  providers: [
      VisitorsService,
  ],
  bootstrap: []
})
export class UsersModule { }
