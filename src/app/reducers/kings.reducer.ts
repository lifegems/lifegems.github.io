import { ActionReducer, Action } from '@ngrx/store';

export const NEXT     = 'NEXT';
export const PREVIOUS = 'PREVIOUS';
export const RESET    = 'RESET';
export const SET      = 'SET';

export function counterReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case NEXT:
			return state + 1;
		case PREVIOUS:
			return state - 1;
		case RESET:
			return 0;
      case SET:
         return action.payload;
		default:
			return state;
	}
}