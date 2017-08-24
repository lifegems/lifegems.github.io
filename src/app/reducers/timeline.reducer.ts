import { createSelector } from '@ngrx/store';
import { TimelineItem } from '../models/timeline-item.model';
import * as timelineActions from '../actions/timeline.actions';

export type Action =  timelineActions.ALL;

export interface TimelineState {
	items: TimelineItem[];
	groups: string[];
	years: string[];
	timelineData: {start: number, end: number, increment: number};
}

const initState: TimelineState = {
	items: [],
	groups: ["Kings of Judah", "Kings of Samaria", "Prophets", "Events"],
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
		case timelineActions.SETGROUPS:
			return Object.assign({}, state, {
				groups: action.payload
			})
		default:
			return Object.assign({}, state);
	}
}

export const getState = (state) => state.timeline;
export const getGroups = createSelector(getState, (state: TimelineState) => state.groups);
export const getItems = createSelector(getState, (state: TimelineState) => state.items);
export const getYears = createSelector(getState, (state: TimelineState) => state.years);
export const getTimelineData = createSelector(getState, (state: TimelineState) => state.timelineData);