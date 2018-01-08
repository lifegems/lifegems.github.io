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
export const INITDELETELOCAL       = '[Schedules] Init Delete Local Schedule';
export const DELETELOCALSUCCESS    = '[Schedules] Delete Local Schedule Success';
export const CHANGESCHEDULELIST    = '[Schedules] Change Schedule List';
export const PINNEDLOADED          = '[Schedule] Pinned Schedules Loaded';
export const PINNEDLOADEDSUCCESS   = '[Schedule] Pinned Schedules Loaded Success';
export const PINNEDLOADEDFAILED    = '[Schedule] Pinned Schedules Loaded Failed';
export const PINSCHEDULES          = '[Schedule] Pin Schedule';
export const PINSCHEDULESSUCCESS   = '[Schedule] Pin Schedule Success';
export const PINSCHEDULESFAILED    = '[Schedule] Pin Schedule Failed';
export const UNPINSCHEDULES        = '[Schedule] Unpin Schedule';
export const UNPINSCHEDULESSUCCESS = '[Schedule] Unpin Schedule Success';
export const UNPINSCHEDULESFAILED  = '[Schedule] Unpin Schedule Failed';

export class ChangeScheduleListAction implements Action {
  readonly type = CHANGESCHEDULELIST;
  public constructor(public payload: string) { }
}

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

export class InitDeleteLocalScheduleAction implements Action {
  readonly type = INITDELETELOCAL;

  constructor(public payload: Number) {}
}

export class DeleteLocalSuccessAction implements Action {
  readonly type = DELETELOCALSUCCESS;

  constructor(public payload: Number) {}
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

export class PinnedLoadedAction implements Action {
  readonly type = PINNEDLOADED;
}

export class PinnedLoadedSuccessAction implements Action {
  readonly type = PINNEDLOADEDSUCCESS;
  constructor(public payload: number[]) {}
}

export class PinnedLoadedFailedAction implements Action {
  readonly type = PINNEDLOADEDFAILED;
}

export class PinScheduleAction implements Action {
  readonly type = PINSCHEDULES;
  constructor(public payload: number) {}
}

export class PinScheduleSuccessAction implements Action {
  readonly type = PINSCHEDULESSUCCESS;
  constructor(public payload: number) {}
}

export class PinScheduleFailedAction implements Action {
  readonly type = PINSCHEDULESFAILED;
}

export class UnpinScheduleAction implements Action {
  readonly type = UNPINSCHEDULES;
  constructor(public payload: number) {}
}

export class UnpinScheduleSuccessAction implements Action {
  readonly type = UNPINSCHEDULESSUCCESS;
  constructor(public payload: number) {}
}

export class UnpinScheduleFailedAction implements Action {
  readonly type = UNPINSCHEDULESFAILED;
  constructor(public payload: number) {}
}

export type ALL
 = InitSchedulesAction
 | InitLocalSchedulesAction
 | LocalSchedulesLoadedAction
 | InitRemoteSchedulesAction
 | RemoteSchedulesLoadedAction
 | InitDownloadScheduleAction
 | DownloadSuccessAction
 | SaveLocalScheduleAction
 | InitDeleteLocalScheduleAction
 | DeleteLocalSuccessAction
 | ChangeScheduleListAction
 | PinnedLoadedAction
 | PinnedLoadedSuccessAction
 | PinnedLoadedFailedAction
 | PinScheduleAction
 | PinScheduleSuccessAction
 | PinScheduleFailedAction
 | UnpinScheduleSuccessAction
 | UnpinScheduleFailedAction
 | UnpinScheduleAction;