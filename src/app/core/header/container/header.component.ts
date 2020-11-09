import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    selector: 'ut-header',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {

  public get todayDate(): string {
    const today = new Date().toISOString().slice(0, 10);
    return today;
  }

  public get yesterdayDate(): string {
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    return yesterday;
  }

}
