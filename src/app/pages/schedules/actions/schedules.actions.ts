import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Schedule } from '../models/schedule.model';

export const CLEARSCHEDULE     = '[Schedules] Clear Schedule';
export const INIT              = '[Schedules] Init Schedules';
export const INITREMOTE        = '[Schedules] Init Remote Schedules';
export const LOADREMOTESCHEDULES = '[Schedules] Load Remote Schedules';
export const LOADSCHEDULES     = '[Schedules] Load Schedules';
export const FAILSCHEDULES     = '[Schedules] Fail Schedules';
export const LOADSAVEDSCHEDULE = '[Schedules] Load Saved Schedule';
export const SAVESCHEDULE      = '[Schedules] Save Schedule';
export const SAVESUCCESS       = '[Schedules] Save Success';

export class ClearScheduleAction implements Action {
  readonly type = CLEARSCHEDULE;

  constructor(public payload: string) {}
}

export class InitSchedulesAction implements Action {
  readonly type = INIT;
}

export class InitRemoteSchedulesAction implements Action {
  readonly type = INITREMOTE;
}

export class SchedulesLoadedAction implements Action {
  readonly type = LOADSCHEDULES;

  constructor(public payload: Schedule[]) {}
}

export class RemoteSchedulesLoadedAction implements Action {
  readonly type = LOADREMOTESCHEDULES;

  constructor(public payload: Object) {}
}

export class SchedulesFailedAction implements Action {
  readonly type = FAILSCHEDULES;
}

export class LoadSavedScheduleAction implements Action {
  readonly type = LOADSAVEDSCHEDULE;

  constructor(public payload: Schedule) {}
}

export class SaveScheduleAction implements Action {
  readonly type = SAVESCHEDULE;

  constructor(public payload: {key: string, schedules: Schedule[]}) {}
}

export class SaveSuccessAction implements Action {
  readonly type = SAVESUCCESS;
}

export type ALL
 = ClearScheduleAction
 | InitSchedulesAction
 | InitRemoteSchedulesAction
 | RemoteSchedulesLoadedAction
 | SchedulesLoadedAction
 | SchedulesFailedAction
 | LoadSavedScheduleAction
 | SaveScheduleAction
 | SaveSuccessAction;