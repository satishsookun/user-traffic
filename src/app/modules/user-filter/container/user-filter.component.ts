import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'ut-user-filtered',
  templateUrl: './user-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserFilterComponent {
  constructor(
    private route: ActivatedRoute,
  ) {}
}
