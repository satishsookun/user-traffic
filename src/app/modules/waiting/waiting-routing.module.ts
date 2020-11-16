import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {WaitingComponent} from "./container/waiting.component";


const routes: Routes = [
  {
    path: '',
    component: WaitingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class WaitingRoutingModule {}
