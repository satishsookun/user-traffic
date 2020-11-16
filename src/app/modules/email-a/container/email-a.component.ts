import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-email-a',
  templateUrl: './email-a.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmailAComponent {

  constructor() {}

  public openDialog(): void {

  }

}
