import { createSelector } from '@ngrx/store';
import * as checkpointsActions from '../actions/checkpoints.actions';

export type Action =  checkpointsActions.ALL;

export interface CheckpointsState {
	remote: Array<{scheduleId: Number, checkpointIds: Number[] }>;
	local:  Array<{scheduleId: Number, checkpointIds: Number[] }>;
}

const initState: CheckpointsState = {
	remote: [],
	local: [],
}

export function checkpointsReducer(state: CheckpointsState = initState, action: Action) {
	switch(action.type) {
      case checkpointsActions.SAVELOCALSUCCESS:
         return Object.assign({}, state, {
            local: action.payload
         });
		case checkpointsActions.LOCALCHECKPOINTSLOADED:
			return Object.assign({}, state, {
				local: action.payload
			});
		case checkpointsActions.REMOTECHECKPOINTSLOADED:
			return Object.assign({}, state, {
				remote: action.payload
			});
		default:
			return Object.assign({}, state);
	}
}

export const getState     = (state) => state.schedules.checkpoints;
export const getLocalCheckpoints  = createSelector(getState, (state: CheckpointsState) => state.local);
export const getRemoteCheckpoitns = createSelector(getState, (state: CheckpointsState) => state.remote);