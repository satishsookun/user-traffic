import { Component } from '@angular/core';
import {VisitorsService} from "./shared/services/visitors.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
      public visitorsService: VisitorsService
  ) {}
  title = 'user-traffic';
}
