import {Injectable} from "@angular/core";
import {VISITORS} from "../api/visitors-mock";
import {BehaviorSubject, Observable} from "rxjs";

export interface VisitorType {
  id: number;
  name: string;
}

@Injectable()
export class VisitorsService {

  private _visitors: VisitorType[];
  private _visitors$: BehaviorSubject<VisitorType[]>;

  constructor() {
    this._visitors = VISITORS;
    this._visitors$ = new BehaviorSubject(this._visitors);
  }

  public get visitors$(): Observable<VisitorType[]> {
    return this._visitors$.asObservable();
  }
}
