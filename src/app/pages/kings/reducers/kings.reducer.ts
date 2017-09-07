import { createSelector } from '@ngrx/store';
import * as KingsActions from '../actions/kings.actions';

export type Action =  KingsActions.ALL;

export interface KingsState {
	kings: any[];
	selectedKing: number;
	showPriests: boolean;
	showProphets: boolean;
	showSons: boolean;
}

const initState: KingsState = {
	kings: [],
	selectedKing: 1,
	showPriests: false,
	showProphets: false,
	showSons: false,
}

export function kingsReducer(state: KingsState = initState, action: Action) {
	switch(action.type) {
		case KingsActions.NEXT:
			return Object.assign({}, state, {
				selectedKing: (state.selectedKing < 20) ? state.selectedKing + 1 : 1
			});
		case KingsActions.PREV:
			return Object.assign({}, state, {
				selectedKing: (state.selectedKing > 1) ? state.selectedKing - 1 : 1
			});
		case KingsActions.KINGSLOADED:
			return Object.assign({}, state, {
				kings: action.payload
			});
		case KingsActions.SETKING:
			return Object.assign({}, state, {
				selectedKing: (action.payload >= 1 && action.payload <= 20) ? action.payload : state.selectedKing
			});
		case KingsActions.TOGGLEPRIESTS:
			return Object.assign({}, state, {
				showPriests: !state.showPriests
			});
		case KingsActions.TOGGLEPROPHETS:
			return Object.assign({}, state, {
				showProphets: !state.showProphets
			});
		case KingsActions.TOGGLESONS:
			return Object.assign({}, state, {
				showSons: !state.showSons
			});
		default:
			return Object.assign({}, state);
	}
}

export const getState = (state) => state.kings.kings;
export const getKings = createSelector(getState, (state: KingsState) => state.kings);
export const getSelectedKing = createSelector(getState, (state: KingsState) => state.selectedKing);
export const getShowPriests = createSelector(getState, (state: KingsState) => state.showPriests);
export const getShowProphets = createSelector(getState, (state: KingsState) => state.showProphets);
export const getShowSons = createSelector(getState, (state: KingsState) => state.showSons);