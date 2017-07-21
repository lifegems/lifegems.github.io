import { Action } from '@ngrx/store';

export const NEXT = '[Kings] Next King';
export const PREV = '[Kings] Previous King';
export const SET  = '[Kings] Set King';

export class NextAction implements Action {
  readonly type = NEXT;
}

export class PrevAction implements Action {
  readonly type = PREV;
}

export class SetAction implements Action {
  readonly type = SET;

  constructor(public payload: number) {}
}

export type ALL
 = NextAction
 | PrevAction
 | SetAction;