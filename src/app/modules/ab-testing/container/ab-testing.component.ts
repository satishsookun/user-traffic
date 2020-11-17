import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-ab-testing',
  template: `
    <div class="testing">
      <p>
        A/B testing is a way to compare two versions of a single variable, typically by testing a subject's response to variant A against variant B, and determining which of the two variants is more effective.
      </p>
      <div class="testing__image">
        <p>
          Here is a visual presentation of a general AB Testing purpose and approach:
        </p>
        <img src="/assets/images/ab-testing.png" width="100%">
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AbTestingComponent {

  constructor() {}

}
