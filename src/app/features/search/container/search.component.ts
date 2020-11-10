import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent {

  public value: string;
  public faCoffee: any;

  constructor() {
    this.value = 'testttt';

  }
}
