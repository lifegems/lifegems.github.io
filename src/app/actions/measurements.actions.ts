import { Action } from '@ngrx/store';
import { Measure } from '../models/measure.model';

export const CHANGEAUXMEASURE  = '[Measures] Change Auxilary Measure';
export const CHANGEAUXVALUE    = '[Measures] Change Auxilary Value';
export const CHANGEBASEMEASURE = '[Measures] Change Base Measure';
export const CHANGEBASEVALUE   = '[Measures] Change Base Value';
export const INIT              = '[Measures] Init Measures';
export const MEASURESLOADED    = '[Measures] Loaded Measures';
export const MEASURESFAILED    = '[Measures] Failed to load Measures';
export const SETTYPES          = '[Measures] Measurement Types Set';

export class ChangeAuxMeasureAction implements Action {
  readonly type = CHANGEAUXMEASURE;

  constructor(public payload: {index: number, name: string}) {}
}

export class ChangeAuxValueAction implements Action {
  readonly type = CHANGEAUXVALUE;

  constructor(public payload: {index: number, value: number}) {}
}

export class ChangeBaseMeasureAction implements Action {
  readonly type = CHANGEBASEMEASURE;

  constructor(public payload: string) {}
}

export class ChangeBaseValueAction implements Action {
  readonly type = CHANGEBASEVALUE;

  constructor(public payload: number) {}
}

export class InitMeasuresAction implements Action {
  readonly type = INIT;
}

export class MeasuresLoadedAction implements Action {
  readonly type = MEASURESLOADED;

  constructor(public payload: Measure[]) {}
}

export class MeasuresFailedAction implements Action {
  readonly type = MEASURESFAILED;
}

export class TypesSetAction implements Action {
  readonly type = SETTYPES;

  constructor(public payload: Measure[]) {}
}

export type ALL
 = ChangeAuxMeasureAction
 | ChangeAuxValueAction
 | ChangeBaseMeasureAction
 | ChangeBaseValueAction
 | InitMeasuresAction
 | MeasuresLoadedAction
 | MeasuresFailedAction
 | TypesSetAction;