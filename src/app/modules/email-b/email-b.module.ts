import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmailBComponent} from "./container/email-b.component";
import {EmailBRoutingModule} from "./email-b-routing.module";

@NgModule({
  exports: [
    EmailBComponent
  ],
  declarations: [
    EmailBComponent,
  ],
  imports: [
    CommonModule,
    EmailBRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class EmailBModule { }
