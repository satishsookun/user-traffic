import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {SortDataAction} from "../models/enum-sort-date";

@Component({
  selector: 'ut-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent implements OnInit {

  public isSortedBy: string;

  constructor() {}

  ngOnInit(): void {
    this.isSortedBy = SortDataAction.NEW;
  }

  public onClick(action: string): void {
    this.isSortedBy = action;
  }
  
}
