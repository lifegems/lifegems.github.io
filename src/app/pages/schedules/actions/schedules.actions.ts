import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Schedule } from '../models/schedule.model';

export const INIT                  = '[Schedules] Init Schedules';
export const INITLOCAL             = '[Schedules] Init Local Schedules';
export const LOCALSCHEDULESLOADED  = '[Schedules] Local Schedules Loaded';
export const INITREMOTE            = '[Schedules] Init Remote Schedules';
export const REMOTESCHEDULESLOADED = '[Schedules] Remote Schedules Loaded';
export const INITDOWNLOAD          = '[Schedules] Init Download Schedules';
export const DOWNLOADSUCCESS       = '[Schedules] Download Success';
export const SAVELOCALSCHEDULE     = '[Schedules] Save Local Schedule';

// deprecated
// export const CLEARSCHEDULE     = '[Schedules] Clear Schedule';
// export const LOADSCHEDULES     = '[Schedules] Load Schedules';
// export const FAILSCHEDULES     = '[Schedules] Fail Schedules';
// export const LOADSAVEDSCHEDULE = '[Schedules] Load Saved Schedule';
// export const SAVESCHEDULE      = '[Schedules] Save Schedule';
// export const SAVESUCCESS       = '[Schedules] Save Success';


export class InitSchedulesAction implements Action {
  readonly type = INIT;
}

export class InitLocalSchedulesAction implements Action {
  readonly type = INITLOCAL;
}

export class InitRemoteSchedulesAction implements Action {
  readonly type = INITREMOTE;
}

export class InitDownloadScheduleAction implements Action {
  readonly type = INITDOWNLOAD;

  constructor(public payload: any) {}
}

export class DownloadSuccessAction implements Action {
  readonly type = DOWNLOADSUCCESS;

  constructor(public payload: any) {}
}

export class RemoteSchedulesLoadedAction implements Action {
  readonly type = REMOTESCHEDULESLOADED;

  constructor(public payload: any[]) {}
}

export class LocalSchedulesLoadedAction implements Action {
  readonly type = LOCALSCHEDULESLOADED;

  constructor(public payload: any[]) {}
}

export class SaveLocalScheduleAction implements Action {
  readonly type = SAVELOCALSCHEDULE;

  constructor(public payload: {schedule: any, checkpoints: any[]}) {}
}


// deprecated
// export class ClearScheduleAction implements Action {
//   readonly type = CLEARSCHEDULE;

//   constructor(public payload: string) {}
// }

// export class SchedulesLoadedAction implements Action {
//   readonly type = LOADSCHEDULES;

//   constructor(public payload: Schedule[]) {}
// }

// export class SchedulesFailedAction implements Action {
//   readonly type = FAILSCHEDULES;
// }

// export class LoadSavedScheduleAction implements Action {
//   readonly type = LOADSAVEDSCHEDULE;

//   constructor(public payload: Schedule) {}
// }

// export class SaveScheduleAction implements Action {
//   readonly type = SAVESCHEDULE;

//   constructor(public payload: {key: string, schedules: Schedule[]}) {}
// }

// export class SaveSuccessAction implements Action {
//   readonly type = SAVESUCCESS;
// }

export type ALL
 = InitSchedulesAction
 | InitLocalSchedulesAction
 | LocalSchedulesLoadedAction
 | InitRemoteSchedulesAction
 | RemoteSchedulesLoadedAction
 | InitDownloadScheduleAction
 | DownloadSuccessAction
 | SaveLocalScheduleAction;