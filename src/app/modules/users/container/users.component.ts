import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ut-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent {

  constructor(
    private route: ActivatedRoute,
  ) {}
  
}
