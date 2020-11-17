import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'ut-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent {

  public value: boolean;
  public searchVal: string;

  constructor() {
    this.value = false;
    this.searchVal = '';

  }

    onKeyUp() {
      this.value = true;
    }

    onBlur() {
      this.value = false;
    }
}
