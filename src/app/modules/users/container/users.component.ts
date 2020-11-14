import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {SortDataAction} from "../models/enum-sort-date";
import {VisitorsService} from "../../../shared/services/visitors.service";

@Component({
  selector: 'ut-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent implements OnInit {

  public isSortedBy: string;
  public minList: number;
  public maxList: number;



  constructor(
      public visitorsService: VisitorsService,
  ) {}

  ngOnInit(): void {
    this.minList = 0;
    this.maxList = 10;
    this.isSortedBy = SortDataAction.NEW;
    this.visitorsService.visitors$.subscribe( (steps) => console.log(steps, 'new visitors data'))
  }

  public onClick(action: string): void {
    this.isSortedBy = action;
  }
  
}
