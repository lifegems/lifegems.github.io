import * as KingsActions from '../actions/kings.actions';

export type Action =  KingsActions.ALL;

export interface KingsState {
	kings: any[];
	selectedKing: number;
}

const initState: KingsState = {
	kings: [],
	selectedKing: 1
}

export function kingsReducer(state: KingsState = initState, action: Action) {
	switch(action.type) {
		case KingsActions.NEXT:
			return Object.assign({}, state, {
				selectedKing: (state.selectedKing < 17) ? state.selectedKing + 1 : 1
			});
		case KingsActions.PREV:
			return Object.assign({}, state, {
				selectedKing: (state.selectedKing > 1) ? state.selectedKing - 1 : 1
			});
		case KingsActions.SET:
			return Object.assign({}, state, {
				selectedKing: (state.selectedKing > 1 && state.selectedKing < 17) ? action.payload + 1 : state.selectedKing
			});
	}
}