import {ChangeDetectionStrategy, Component} from "@angular/core";
import {StepsService} from "../../../shared/services/steps.service";

@Component({
    selector: 'ut-side-bar',
    templateUrl: './sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SidebarComponent {

  constructor(
    public stepsService: StepsService,
  ) {}
}
