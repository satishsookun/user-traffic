import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-user-filtered',
  templateUrl: './user-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserFilterComponent {
  constructor() {}
}
