import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent {

  constructor() {}
  
}
