import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {SortDataAction} from "../models/enum-sort-date";
import {VisitorsService, VisitorType} from "../../../shared/services/visitors.service";
import {filter, find} from "rxjs/operators";
import {Subscriber} from "rxjs/internal-compatibility";
import {Subscription} from "rxjs/internal/Subscription";
import {Router} from "@angular/router";
import {VisitorsCountService} from "../../../shared/services/visitors-count.service";

@Component({
    selector: 'ut-users',
    templateUrl: './users.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class UsersComponent implements OnInit, OnDestroy {

    public isSortedBy: string;
    public minList: number;
    public maxList: number;
    public hidePrev: boolean;
    public hideNext: boolean;
    public totalListCount: number;
    private visitorSubs: Subscription;
    public visitors: VisitorType[];


    constructor(
        public visitorsService: VisitorsService,
        public visitorsCountService: VisitorsCountService,
        private changeRef: ChangeDetectorRef,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.minList = 0;
        this.maxList = DISPLAYED_ITEMS.COUNT;
        this.hidePrev = true;
        this.hideNext = false;
        this.isSortedBy = SortDataAction.NEW;
        this.visitorSubs = this.visitorsService.visitors$
            .subscribe((visitor) => {
                this.filterData(visitor);
            this.totalListCount = visitor.length;
        });
    }

    public filterData(data: VisitorType[]) {
        const url = this.router.url;
        const step = (url === '/users' ? '83030' : '83031');
        const userStepsFiltered = [];
        data.forEach( (item) => {
            const filtered = item.steps[0].filter( (steps) => steps.stepId === step);
            if (filtered.length > 0) userStepsFiltered.push(item);
        })
        this.visitors = [...userStepsFiltered];
        this.visitorsCountService.visitorCount = this.visitors.length;
        this.changeRef.markForCheck();
    }

    ngOnDestroy(): void {
        this.visitorSubs.unsubscribe();
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