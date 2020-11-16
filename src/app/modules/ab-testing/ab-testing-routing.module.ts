import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AbTestingComponent} from "./ab-testing.component";


const routes: Routes = [
  {
    path: '',
    component: AbTestingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AbTestingRoutingModule {}
