import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmailAComponent} from "./container/email-a.component";
import {EmailARoutingModule} from "./email-a-routing.module";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  exports: [
    EmailAComponent
  ],
  declarations: [
    EmailAComponent,
  ],
  imports: [
    CommonModule,
    EmailARoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: []
})
export class EmailAModule { }
