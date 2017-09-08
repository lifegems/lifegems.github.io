import { Action } from '@ngrx/store';

export const INIT = '[Profile] Init User';
export const SIGNIN = '[Profile] Sign In User';

export class InitAction implements Action {
   readonly type = INIT;
}

export class SignInAction implements Action {
   readonly type = SIGNIN;

   constructor(public payload: any) {}
}

export type ALL
 = InitAction
 | SignInAction;