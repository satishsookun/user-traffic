import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmailAComponent} from "./container/email-a.component";
import {EmailARoutingModule} from "./email-a-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {EmailADialogComponent} from "./ui/dialog/email-a-dialog.component";

@NgModule({
  exports: [
    EmailAComponent
  ],
  declarations: [
    EmailAComponent,
    EmailADialogComponent,
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
