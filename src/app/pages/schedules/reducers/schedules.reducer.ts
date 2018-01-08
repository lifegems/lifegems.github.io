import { createSelector } from '@ngrx/store';
import * as scheduleActions from '../actions/schedules.actions';
import { Schedule, Section } from '../models/schedule.model';

export type Action =  scheduleActions.ALL;

export interface SchedulesState {
	remote: any[];
	local: any[];
	downloading: number[];
	list: string;
	pinned: number[];
}

const initState: SchedulesState = {
	remote: [],
	local: [],
	downloading: [],
	list: 'all',
	pinned: []
}

export function schedulesReducer(state: SchedulesState = initState, action: Action) {
	switch(action.type) {
		case scheduleActions.CHANGESCHEDULELIST:
			return {
				...state,
				list: action.payload
			};
		case scheduleActions.INITDOWNLOAD:
			let newDownloading = Object.assign([], state.downloading);
			newDownloading.push(action.payload.id);
			return Object.assign({}, state, {
				downloading: newDownloading,
			});
		case scheduleActions.DOWNLOADSUCCESS:
			let local = Object.assign([], state.local);
			local.push(action.payload);
			let downloading = Object.assign([], state.downloading);
			return Object.assign({}, state, {
				downloading: downloading.filter(id => id !== action.payload.schedule.id),
				local: local,
			});
		case scheduleActions.LOCALSCHEDULESLOADED:
			return Object.assign({}, state, {
				local: action.payload
			});
		case scheduleActions.REMOTESCHEDULESLOADED:
			return Object.assign({}, state, {
				remote: action.payload
			});
		case scheduleActions.DELETELOCALSUCCESS:
			let localSchedules = Object.assign([], state.local);
			return Object.assign({}, state, {
				local: localSchedules.filter(s => s.schedule.id !== action.payload)
			});
		case scheduleActions.PINSCHEDULES:
			return {
				...state,
				pinned: [
					...state.pinned,
					action.payload
				]
			};
		case scheduleActions.UNPINSCHEDULES:
			return {
				...state,
				pinned: [
					...state.pinned.filter(p => p !== action.payload)
				]
			}
		default:
			return Object.assign({}, state);
	}
}

export const getState     = (state) => state.schedules.schedules;
export const getDownloading = createSelector(getState, (state: SchedulesState) => state.downloading);
export const getList = createSelector(getState, (state: SchedulesState) => state.list);
export const getPinned = createSelector(getState, (state: SchedulesState) => state.pinned);
export const getLocalSchedules = createSelector(getState, (state: SchedulesState) => state.local);
export const getRemoteSchedules = createSelector(getState, (state: SchedulesState) => state.remote);