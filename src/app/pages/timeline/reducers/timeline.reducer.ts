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

function getGroupsTimelineData(state: TimelineState, groups: string[]) {
	let listedItems = state.items.filter(item => groups.indexOf(item.group) > -1);
	let oldestDate  = listedItems.map(item => item.start).reduce((dt1, dt2) => dt1 > dt2 ? dt1 : dt2);
	let newestDate  = listedItems.map(item => item.start).reduce((dt1, dt2) => dt1 < dt2 ? dt1 : dt2);
	let start = Math.ceil(oldestDate / 100) * 100;
	let end   = Math.floor(newestDate / 100) * 100;
	return {
		start: start,
		end: end,
		increment: state.timelineData.increment,
	};
}

function getNextZoomIn(increment: number) {
	switch(increment) {
		case 50:
			return 20;
		case 20:
			return 10;
		case 10:
			return 5;
		default:
			return 1;
	}
}

function getNextZoomOut(increment: number) {
	switch(increment) {
		case 1:
			return 5;
		case 5:
			return 10;
		case 10:
			return 20;
		default:
			return 50;
	}
}

export function timelineReducer(state: TimelineState = initState, action: Action) {
	switch(action.type) {
		case timelineActions.TIMELINELOADED:
			return Object.assign({}, state, {
				items: action.payload,
				years: listYears(state.timelineData),
			});
		case timelineActions.SETGROUPS:
			if (action.payload.length > 6) {
				return Object.assign({}, state);
			}
			let tlData = getGroupsTimelineData(state, action.payload);
			return Object.assign({}, state, {
				groups: action.payload,
				timelineData: tlData,
				years: listYears(tlData),
			});
		case timelineActions.ZOOMIN:
			let zoomInData = Object.assign({}, state.timelineData, {
				increment: getNextZoomIn(state.timelineData.increment),
			});
			return Object.assign({}, state, {
				timelineData: zoomInData,
				years: listYears(zoomInData),
			});
		case timelineActions.ZOOMOUT:
			let zoomOutData = Object.assign({}, state.timelineData, {
				increment: getNextZoomOut(state.timelineData.increment),
			});
			return Object.assign({}, state, {
				timelineData: zoomOutData,
				years: listYears(zoomOutData),
			});
		default:
			return Object.assign({}, state);
	}
}

export const getState = (state) => state.timeline.timeline;
export const getGroups = createSelector(getState, (state: TimelineState) => state.groups);
export const getItems = createSelector(getState, (state: TimelineState) => state.items);
export const getYears = createSelector(getState, (state: TimelineState) => state.years);
export const getTimelineData = createSelector(getState, (state: TimelineState) => state.timelineData);