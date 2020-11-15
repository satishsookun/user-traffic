import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
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
    public hidePrev: boolean;
    public hideNext: boolean;
    public totalListCount: number;


    constructor(
        public visitorsService: VisitorsService,
        private changeRef: ChangeDetectorRef,
    ) {
    }

    ngOnInit(): void {
        this.minList = 0;
        this.maxList = DISPLAYED_ITEMS.COUNT;
        this.hidePrev = true;
        this.hideNext = false;
        this.isSortedBy = SortDataAction.NEW;
        this.visitorsService.visitors$.subscribe((visitor) => {
            console.log(visitor, 'SSUBBSS')
            this.totalListCount = visitor.length;
        });
    }

    public onClick(action: string): void {
        this.isSortedBy = action;
    }

    public onPrev(): void {
        this.hideNext = false;
        if (this.minList >= DISPLAYED_ITEMS.COUNT) {

            this.minList -= DISPLAYED_ITEMS.COUNT;
            this.maxList -= DISPLAYED_ITEMS.COUNT;
        }
        this.hidePreviousBtn(this.minList);
        this.changeRef.markForCheck();
    }

    private hidePreviousBtn(min: number) {
        if (min < DISPLAYED_ITEMS.COUNT) this.hidePrev = true;
        else this.hidePrev = false;
    }

    public onNxt(): void {
        this.hidePrev = false;

        if ((this.maxList + DISPLAYED_ITEMS.COUNT) > this.totalListCount) {
            this.hideNext = true;
        } else {
            this.hideNext = false;
            this.maxList += DISPLAYED_ITEMS.COUNT;
            this.minList += DISPLAYED_ITEMS.COUNT;
        }
        this.changeRef.markForCheck();
    }

}

export enum DISPLAYED_ITEMS {
    COUNT = 10
}