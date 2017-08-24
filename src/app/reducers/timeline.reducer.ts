import { createSelector } from '@ngrx/store';
import * as timelineActions from '../actions/timeline.actions';

export type Action =  timelineActions.ALL;

export interface TimelineState {
	items: any;
	years: string[];
	timelineData: {start: number, end: number, increment: number};
}

const initState: TimelineState = {
	items: {},
	years: [],
	timelineData: {
		start: 1000,
		end: 500,
		increment: 10
	},
}

function listYears(timelineData: {start: number, end: number, increment: number}): number[] {
	let years: number[] = [];
	for (let i = timelineData.start; i >= timelineData.end; i = i - timelineData.increment) {
		years.push(i);
	}
	return years;
}

export function timelineReducer(state: TimelineState = initState, action: Action) {
	switch(action.type) {
		case timelineActions.TIMELINELOADED:
			return Object.assign({}, state, {
				items: action.payload,
				years: listYears(state.timelineData),
			});
		default:
			return Object.assign({}, state);
	}
}

export const getState = (state) => state.timeline;
export const getItems = createSelector(getState, (state: TimelineState) => state.items);
export const getYears = createSelector(getState, (state: TimelineState) => state.years);
export const getTimelineData = createSelector(getState, (state: TimelineState) => state.timelineData);