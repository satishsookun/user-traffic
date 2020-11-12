import {RouterModule, Routes} from "@angular/router";
import {UserFilterComponent} from "./container/user-filter.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path: '',
    component: UserFilterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserFilterRoutingModule {}
