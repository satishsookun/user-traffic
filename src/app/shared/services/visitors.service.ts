import {Injectable} from "@angular/core";
import {VISITORS} from "../api/visitors-mock";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiStepType, VISITORSTEP} from "../api/visitor-mock";
import {Router} from "@angular/router";

export enum STEP_ID {
  ID_83030 = '83030',
  ID_83031 = '83031',
  ID_83032 = '83032',
  ID_83033 = '83033',
  ID_83034 = '83034',
  ID_83035 = '83035',
}
export interface VisitorType {
  id: number;
  name: string;
  steps: Array<any>;
  params?: any;
}

export interface StepType {
    stepId: string;
    stepName: string;
    idShopCart: string;
    date: string;
    time: string;
    days_passed: number;
}

@Injectable()
export class VisitorsService {

  private _visitors: any;
  private _visitors$: BehaviorSubject<VisitorType[]>;

  private _visitorStep: any;

  constructor(
      private router: Router,
  ) {
    this._visitorStep = VISITORSTEP;
    this._visitors = VISITORS;
    this._visitors$ = new BehaviorSubject(this._visitors);
  // this.mergeVisitorSteps();
    this.mergeVisitorSteps();
    console.log(this.router.url, 'route')
  }

    /**
     * merge visitors with their respective steps
     */
  private mergeVisitorSteps() {

    this._visitors.forEach( (visitor, index) => {
        this._visitors[index].steps = this._visitorStep
            .filter( (stepsId) => stepsId[visitor.id])
            .map( (item) => this.manipulateStepData(item[visitor.id]));
    });
    this._visitors$.next(this._visitors);
  }


  private manipulateStepData(stepData: ApiStepType[]): StepType[] {
      let buildStep: StepType[] = [];

      stepData.forEach( (data: ApiStepType) => {
        const visitorData = {
          stepId: data.step,
          stepName: this.handleStepName(data.step),
          idShopCart: data.data.idShopCart,
          date: this.handleStepDate(data.date),
          time: this.handleStepTime(data.date),
          days_passed: this.handlePassedDays(this.handleStepDate(data.date)),
        };
        buildStep.push(visitorData);
      });

      return buildStep;
  }

  private handleStepName(stepId: string): string {
    switch (stepId) {
        case STEP_ID.ID_83030:
          return 'Declenseur';
        case STEP_ID.ID_83031:
          return 'Filter';
        case STEP_ID.ID_83032:
          return 'Waiting time';
        case STEP_ID.ID_83033:
          return 'AB test';
        case STEP_ID.ID_83034:
          return 'Email sent A';
        case STEP_ID.ID_83035:
          return 'Email sent B';
        default:
          return null;
    }
  }

  private handleStepDate(date: string): string {
    const dateStr = date.split(' ');
    return dateStr[0];
  }

  private handleStepTime(date: string): string {
    const dateStr = date.split(' ');
    return dateStr[1];
  }

  private handlePassedDays(date: string): number {
      const todayDate = new Date;
      const pastDate = new Date(date);
      const difTime = todayDate.getTime() - pastDate.getTime();
      let daysCount = difTime / (1000 * 3600 * 24);
      daysCount = Math.ceil(daysCount);
      return daysCount;
  }

  public get visitors$(): Observable<VisitorType[]> {
    return this._visitors$.asObservable();
  }
}

export enum USER_ROUTE {
    USERS = 'users',
    FILTER = 'filter'
}
