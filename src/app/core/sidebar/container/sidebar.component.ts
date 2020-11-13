import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {StepsService} from "../../../shared/services/steps.service";

@Component({
    selector: 'ut-side-bar',
    templateUrl: './sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SidebarComponent implements OnInit {

  constructor(
    public stepsService: StepsService,
  ) {}

  ngOnInit(): void {
    this.stepsService.steps$.subscribe( (steps) => console.log(steps, '<<<< steps'));
  }
}
