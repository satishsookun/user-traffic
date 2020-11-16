import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/index";
import {VISITORS} from "../api/visitors-mock";

@Injectable()
export class VisitorsCountService {

    private _visitorsCount$: BehaviorSubject<number>;

    constructor() {

        this._visitorsCount$ = new BehaviorSubject(VISITORS.length);
    }

    public set visitorCount(count: number) {
        this._visitorsCount$.next(count);
    }

    public get visitorCount$(): Observable<number> {
        return this._visitorsCount$.asObservable();
    }
}