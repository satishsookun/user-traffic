import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-ab-testing',
  template: `
    <div class="waiting">
        <p class="waiting__title"><span>Waiting time:</span> 3 hours</p>
      <p>
        The waiting time was set to 3 hours before sending an email to user  
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WaitingComponent {

  constructor() {}

}
