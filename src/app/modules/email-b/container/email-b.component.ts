import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-email-b',
  templateUrl: './email-b.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmailBComponent {

  constructor() {}

  public openDialog(): void {

  }
}
