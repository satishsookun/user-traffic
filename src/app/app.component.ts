import {ChangeDetectionStrategy, Component} from '@angular/core';
import {VisitorsService} from "./shared/services/visitors.service";
import {Router} from "@angular/router";
import {VisitorsCountService} from "./shared/services/visitors-count.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  constructor(
      public visitorsCountService: VisitorsCountService,
      public router: Router,
  ) {}
}
