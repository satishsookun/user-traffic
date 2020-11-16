import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmailBComponent} from "./container/email-b.component";
import {EmailBRoutingModule} from "./email-b-routing.module";
import {EmailBDialogComponent} from "./ui/dialog/email-b-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  exports: [
    EmailBComponent
  ],
  declarations: [
    EmailBComponent,
    EmailBDialogComponent
  ],
  imports: [
    CommonModule,
    EmailBRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: []
})
export class EmailBModule { }
