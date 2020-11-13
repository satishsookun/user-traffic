import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {STEPS} from "../api/steps-mock";

@Injectable()
export class StepsService {

  private _steps$: BehaviorSubject<any>;
  private _steps: any;

  constructor() {
    this._steps = STEPS;
    this._steps$ = new BehaviorSubject<any>(this._steps);
    this.stepsToArray();
  }

  private stepsToArray(): void {
    const stepsArray = [];

    for (const [key, value] of Object.entries(STEPS)) {
      stepsArray.push(this._steps[key]);
    }

    this._steps$.next(stepsArray);
  }

  public get steps$(): Observable<any> {
    return this._steps$.asObservable();
  }

}
