import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export const INIT                    = '[Checkpoints] Init Checkpoints';
export const INITLOCAL               = '[Checkpoints] Init Local Checkpoints';
export const LOCALCHECKPOINTSLOADED  = '[Checkpoints] Local Checkpoints Loaded';
export const INITREMOTE              = '[Checkpoints] Init Remote Checkpoints';
export const REMOTECHECKPOINTSLOADED = '[Checkpoints] Remote Checkpoints Loaded';
export const INITSAVELOCALCHECKPOINT     = '[Checkpoints] Init Save Local Checkpoint';
export const SAVELOCALSUCCESS        = '[Checkpoints] Save Local Success';

export class InitCheckpointsAction implements Action {
  readonly type = INIT;
}

export class InitLocalCheckpointsAction implements Action {
  readonly type = INITLOCAL;
}

export class InitRemoteCheckpointsAction implements Action {
  readonly type = INITREMOTE;
}

export class RemoteCheckpointsLoadedAction implements Action {
  readonly type = REMOTECHECKPOINTSLOADED;

  constructor(public payload: Number[]) {}
}

export class LocalCheckpointsLoadedAction implements Action {
  readonly type = LOCALCHECKPOINTSLOADED;

  constructor(public payload: Number[]) {}
}

export class InitSaveLocalCheckpointAction implements Action {
  readonly type = INITSAVELOCALCHECKPOINT;

  constructor(public payload: {local: {scheduleId: Number, checkpointIds: Number[]}[], scheduleId: Number, checkpointId: Number}) {}
}

export class SaveLocalSuccessAction implements Action {
   readonly type = SAVELOCALSUCCESS;

   constructor(public payload: {scheduleId: Number, checkpointIds: Number[]}[]) {}
}

export type ALL
 = InitCheckpointsAction
 | InitLocalCheckpointsAction
 | LocalCheckpointsLoadedAction
 | InitRemoteCheckpointsAction
 | RemoteCheckpointsLoadedAction
 | InitSaveLocalCheckpointAction
 | SaveLocalSuccessAction;