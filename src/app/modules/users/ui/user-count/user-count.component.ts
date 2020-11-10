import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-user-count',
  templateUrl: './user-count.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserCountComponent {
  
}
