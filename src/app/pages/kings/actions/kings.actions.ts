import { Action } from '@ngrx/store';

export const INIT    = '[Kings] Init Kings';
export const NEXT    = '[Kings] Next King';
export const PREV    = '[Kings] Previous King';
export const SETKING = '[Kings] Set King';
export const KINGSLOADED  = '[Kings] Kings loaded';
export const KINGSFAILED  = '[Kings] Kings Failed to load';

export const TOGGLESONS     = '[Kings] Toggle view sons';
export const TOGGLEPRIESTS  = '[Kings] Toggle view priests';
export const TOGGLEPROPHETS = '[Kings] Toggle view prophets';

export class NextAction implements Action {
  readonly type = NEXT;
}

export class PrevAction implements Action {
  readonly type = PREV;
}

export class InitKingsAction implements Action {
  readonly type = INIT;
}

export class KingsLoadedAction implements Action {
  readonly type = KINGSLOADED;

  constructor(public payload: any) {}
}

export class KingsFailedAction implements Action {
  readonly type = KINGSFAILED;
}

export class SetKingAction implements Action {
  readonly type = SETKING;

  constructor(public payload: number) {}
}

export class TogglePriestsAction implements Action {
  readonly type = TOGGLEPRIESTS;
}

export class ToggleProphetsAction implements Action {
  readonly type = TOGGLEPROPHETS;
}

export class ToggleSonsAction implements Action {
  readonly type = TOGGLESONS;
}

export type ALL
 = NextAction
 | PrevAction
 | InitKingsAction
 | KingsFailedAction
 | KingsLoadedAction
 | SetKingAction
 | TogglePriestsAction
 | ToggleProphetsAction
 | ToggleSonsAction;