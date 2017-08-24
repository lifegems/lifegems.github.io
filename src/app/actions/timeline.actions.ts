import { Action } from '@ngrx/store';
import { Measure } from '../models/measure.model';

export const INIT            = '[Timeline] Init Timeline';
export const TIMELINELOADED  = '[Timeline] Loaded Timeline';
export const TIMELINEFAILED  = '[Timeline] Failed to load Timeline';
export const SETGROUPS       = '[Timeline] Set groups';

export class InitTimelineAction implements Action {
  readonly type = INIT;
}

export class TimelineLoadedAction implements Action {
  readonly type = TIMELINELOADED;

  constructor(public payload: Measure[]) {}
}

export class TimelineFailedAction implements Action {
  readonly type = TIMELINEFAILED;
}

export class SetGroupsAction implements Action {
  readonly type = SETGROUPS;

  constructor(public payload: string[]) {}
}

export type ALL
 = InitTimelineAction
 | TimelineLoadedAction
 | TimelineFailedAction
 | SetGroupsAction;