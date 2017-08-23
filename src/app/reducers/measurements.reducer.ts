import { createSelector } from '@ngrx/store';
import * as measureActions from '../actions/measurements.actions';
import { Measure, MeasureValue } from '../models/measure.model';

export type Action =  measureActions.ALL;

export interface MeasuresState {
	measurements: Measure[];
	baseMeasure: MeasureValue;
	auxMeasures: MeasureValue[];
	selectedType: string;
	types: string[];
}

const baseMeasure: MeasureValue = {
	value: 1,
	measure: {
		amount: 1,
		id: 3,
		name: "Inches",
		type: "Length"
	}
};
const auxMeasures: MeasureValue[] = [{
	value: 0.05714285714,
	measure: {
		amount: 17.5,
		id: 2,
		name: "Cubit",
		type: "Length"
	}
}];

const initState: MeasuresState = {
	measurements: [],
	baseMeasure: baseMeasure,
	auxMeasures: auxMeasures,
	selectedType: "Length",
	types: []
}

function setAuxMeasures(baseValue: number, baseAmount: number, state: MeasuresState): MeasureValue[] {
	console.log(state);
	return state.auxMeasures.map(aux => {
		return {
			value: calculateMeasure(baseValue, baseAmount, aux.measure.amount),
			measure: aux.measure
		};
	});
}

function calculateMeasure(baseValue, baseMeasureAmount, auxMeasureAmount) {
	return parseFloat((baseValue * baseMeasureAmount / auxMeasureAmount).toPrecision(10));
}

export function measurementsReducer(state: MeasuresState = initState, action: Action) {
	switch(action.type) {
		case measureActions.CHANGEAUXMEASURE:
			let auxMeasureAction = (action as measureActions.ChangeAuxMeasureAction);
			let auxMeasures = state.auxMeasures.map(aux => Object.assign({}, aux));
			let auxMeasure = state.measurements.find(m => m.name === auxMeasureAction.payload.name);
			auxMeasures[auxMeasureAction.payload.index] = {
				value: calculateMeasure(state.baseMeasure.value, state.baseMeasure.measure.amount, auxMeasure.amount),
				measure: auxMeasure
			};
			let newState = Object.assign({}, state, {
				auxMeasures: auxMeasures
			});
			return newState;
		case measureActions.CHANGEAUXVALUE:
			let auxValueAction = (action as measureActions.ChangeAuxValueAction);
			let auxValues = Object.assign({}, state.auxMeasures);
			auxValues[auxValueAction.payload.index] = {
				value: auxValueAction.payload.value,
				measure: state.auxMeasures[auxValueAction.payload.index].measure
			};
			return Object.assign({}, state, {
				auxMeasures: auxValues
			});
		case measureActions.CHANGEBASEMEASURE:
			let newMeasure = state.measurements.find(m => m.name === action.payload);
			return Object.assign({}, state, {
				auxMeasures: setAuxMeasures(state.baseMeasure.value, newMeasure.amount, state),
				baseMeasure: {
					value: state.baseMeasure.value,
					measure: newMeasure
				}
			});
		case measureActions.CHANGEBASEVALUE:
			return Object.assign({}, state, {
				auxMeasures: setAuxMeasures(action.payload, state.baseMeasure.measure.amount, state),
				baseMeasure: {
					value: action.payload,
					measure: state.baseMeasure.measure
				}
			});
		case measureActions.MEASURESLOADED:
			return Object.assign({}, state, {
				measurements: action.payload
			});
		case measureActions.SETTYPES:
			return Object.assign({}, state, {
				types: action.payload.map(m => m.type).filter((v, i, self) => self.indexOf(v) === i),
			})
		default:
			return Object.assign({}, state);
	}
}

export const getState        = (state) => state.measurements;
export const getMeasurements = createSelector(getState, (state: MeasuresState) => state.measurements);
export const getBaseMeasure  = createSelector(getState, (state: MeasuresState) => state.baseMeasure);
export const getAuxMeasures  = createSelector(getState, (state: MeasuresState) => state.auxMeasures);
export const getSelectedType = createSelector(getState, (state: MeasuresState) => state.selectedType);
export const getTypes        = createSelector(getState, (state: MeasuresState) => state.types);