import {Injectable} from "@angular/core";
import {VISITORS} from "../api/visitors-mock";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiStepType, VISITORSTEP} from "../api/visitor-mock";
import moment = require("moment");

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
    days_passed: string;
}

@Injectable()
export class VisitorsService {

  private _visitors: any;
  private _visitors$: BehaviorSubject<VisitorType[]>;

  private _visitorStep: any;

  constructor() {
    this._visitorStep = VISITORSTEP;
    this._visitors = VISITORS;
    this._visitors$ = new BehaviorSubject(this._visitors);
    this.mergeVisitorSteps();
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
    console.log(stepData, '<<< stepData')
      let buildStep: StepType[] = [];
      stepData.forEach( (data: ApiStepType) => {
        const test = {
          stepId: data.step,
          stepName: this.handleStepName(data.step),
          idShopCart: data.data.idShopCart,
          date: this.handleStepDate(data.date),
          time: this.handleStepTime(data.date),
          days_passed: this.handlePassedDays(this.handleStepDate(data.date)),
        }

          buildStep.push(test);
      });
      console.log(buildStep, 'before return')
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

  private handlePassedDays(date: string) {
      const days = moment().diff("2015-06-02", "days");
  }

  public get visitors$(): Observable<VisitorType[]> {
    return this._visitors$.asObservable();
  }
}
