import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-ab-testing',
  template: `
    <div class="waiting">
      <p>
        A/B testing is a way to compare two versions of a single variable, typically by testing a subject's response to variant A against variant B, and determining which of the two variants is more effective.  
      </p>
      <div class="image-block">
        <img src="/assets/images/ab-testing.png">
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WaitingComponent {

  constructor() {}

}
