import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmailAComponent} from "./container/email-a.component";


const routes: Routes = [
  {
    path: '',
    component: EmailAComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class EmailARoutingModule {}
