import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmailBComponent} from "./container/email-b.component";


const routes: Routes = [
  {
    path: '',
    component: EmailBComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class EmailBRoutingModule {}
