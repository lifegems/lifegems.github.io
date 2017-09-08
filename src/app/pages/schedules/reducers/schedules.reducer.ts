import { createSelector } from '@ngrx/store';
import * as scheduleActions from '../actions/schedules.actions';
import { Schedule, Section } from '../models/schedule.model';

export type Action =  scheduleActions.ALL;

export interface SchedulesState {
	remoteSchedules: any[];
	schedules: Schedule[];
}

const initState: SchedulesState = {
	remoteSchedules: [],
	schedules: [],
}

export function schedulesReducer(state: SchedulesState = initState, action: Action) {
	switch(action.type) {
		case scheduleActions.LOADREMOTESCHEDULES:
			return Object.assign({}, state, {
				remoteSchedules: action.payload//.sort((a, b) => a.name.localeCompare(b.name))
			});
		case scheduleActions.LOADSCHEDULES:
			return Object.assign({}, state, {
				schedules: action.payload.sort((a, b) => a.name.localeCompare(b.name))
			});
		case scheduleActions.LOADSAVEDSCHEDULE:
			let updated = Object.assign([], state.schedules).filter((s: Schedule) => s.name !== action.payload.name);
			updated.push(action.payload);
			return Object.assign({}, state, {
				schedules: updated.sort((a, b) => a.name.localeCompare(b.name))
			});
		case scheduleActions.SAVESCHEDULE:
			return Object.assign({}, state, {
				schedules: action.payload.schedules.sort((a, b) => a.name.localeCompare(b.name))
			})
		default:
			return Object.assign({}, state);
	}
}

export const getState     = (state) => state.schedules;
export const getSchedules = createSelector(getState, (state: SchedulesState) => state.schedules);
export const getRemoteSchedules = createSelector(getState, (state: SchedulesState) => state.remoteSchedules);