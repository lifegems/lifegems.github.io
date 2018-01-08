webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TIMELINELOADED; });
/* unused harmony export TIMELINEFAILED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SETGROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ZOOMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ZOOMOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InitTimelineAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TimelineLoadedAction; });
/* unused harmony export TimelineFailedAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetGroupsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ZoomInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ZoomOutAction; });
var INIT = '[Timeline] Init Timeline';
var TIMELINELOADED = '[Timeline] Loaded Timeline';
var TIMELINEFAILED = '[Timeline] Failed to load Timeline';
var SETGROUPS = '[Timeline] Set groups';
var ZOOMIN = '[Timeline] Zoom In';
var ZOOMOUT = '[Timeline] Zoom Out';
var InitTimelineAction = (function () {
    function InitTimelineAction() {
        this.type = INIT;
    }
    return InitTimelineAction;
}());

var TimelineLoadedAction = (function () {
    function TimelineLoadedAction(payload) {
        this.payload = payload;
        this.type = TIMELINELOADED;
    }
    return TimelineLoadedAction;
}());

var TimelineFailedAction = (function () {
    function TimelineFailedAction() {
        this.type = TIMELINEFAILED;
    }
    return TimelineFailedAction;
}());

var SetGroupsAction = (function () {
    function SetGroupsAction(payload) {
        this.payload = payload;
        this.type = SETGROUPS;
    }
    return SetGroupsAction;
}());

var ZoomInAction = (function () {
    function ZoomInAction() {
        this.type = ZOOMIN;
    }
    return ZoomInAction;
}());

var ZoomOutAction = (function () {
    function ZoomOutAction() {
        this.type = ZOOMOUT;
    }
    return ZoomOutAction;
}());

//# sourceMappingURL=timeline.actions.js.map

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"pages/converter/converter.module": [
		179
	],
	"pages/dashboard/dashboard.module": [
		189
	],
	"pages/kings/kings.module": [
		190
	],
	"pages/schedules/schedules.module": [
		195
	],
	"pages/timeline/timeline.module": [
		201
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 178;

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterModule", function() { return ConverterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__converter__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_measurements_effects__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_measurements_reducer__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_measurements_service__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ConverterModule = (function () {
    function ConverterModule() {
    }
    return ConverterModule;
}());
ConverterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__converter__["a" /* ConverterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ConversionItemComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__converter__["a" /* ConverterComponent */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["i" /* StoreModule */].forFeature('converter', __WEBPACK_IMPORTED_MODULE_7__reducers_measurements_reducer__["f" /* measurementsReducer */]),
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_6__effects_measurements_effects__["a" /* MeasurementsEffects */]]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__converter__["a" /* ConverterComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_measurements_service__["a" /* MeasurementsService */],
        ]
    })
], ConverterModule);

//# sourceMappingURL=converter.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = measurementsReducer;
/* unused harmony export getState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMeasurements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBaseMeasure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAuxMeasures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__ = __webpack_require__(97);


var baseMeasure = {
    value: 1,
    measure: {
        id: 6,
        name: "Inches",
        amount: 1,
        type: "Length"
    }
};
var auxMeasures = [
    {
        value: 0.05714285714,
        measure: {
            id: 1,
            name: "Cubits",
            amount: 17.5,
            type: "Length"
        }
    }
];
var initState = {
    measurements: [],
    baseMeasure: baseMeasure,
    auxMeasures: auxMeasures,
    selectedType: "Length",
    types: []
};
function getTypeMeasures(measurements, type) {
    return measurements.filter(function (m) { return m.type == type; });
}
function setAuxMeasures(baseValue, baseAmount, state) {
    return state.auxMeasures.map(function (aux) {
        return {
            value: calculateMeasure(baseValue, baseAmount, aux.measure.amount),
            measure: aux.measure
        };
    });
}
function calculateMeasure(baseValue, baseMeasureAmount, auxMeasureAmount) {
    return parseFloat((baseValue * baseMeasureAmount / auxMeasureAmount).toPrecision(10));
}
function measurementsReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__["a" /* ADDAUXMEASUREMENT */]:
            var newAuxMeasures = state.auxMeasures.map(function (aux) { return Object.assign({}, aux); });
            var thisNewAux = state.measurements.filter(function (m) { return m.type == state.selectedType; })[0];
            if (newAuxMeasures.length <= 5) {
                newAuxMeasures.push({
                    measure: thisNewAux,
                    value: calculateMeasure(state.baseMeasure.value, state.baseMeasure.measure.amount, thisNewAux.amount)
                });
            }
            return Object.assign({}, state, {
                auxMeasures: newAuxMeasures
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__["c" /* CHANGEAUXMEASURE */]:
            var auxMeasureAction_1 = action;
            var auxMeasures_1 = state.auxMeasures.map(function (aux) { return Object.assign({}, aux); });
            var auxMeasure = state.measurements.find(function (m) { return (m.name === auxMeasureAction_1.payload.name && m.type == state.selectedType); });
            auxMeasures_1[auxMeasureAction_1.payload.index] = {
                value: calculateMeasure(state.baseMeasure.value, state.baseMeasure.measure.amount, auxMeasure.amount),
                measure: auxMeasure
            };
            var newState = Object.assign({}, state, {
                auxMeasures: auxMeasures_1
            });
            return newState;
        case __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__["d" /* CHANGEAUXVALUE */]:
            var auxValueAction = action;
            var auxValues = Object.assign({}, state.auxMeasures);
            auxValues[auxValueAction.payload.index] = {
                value: auxValueAction.payload.value,
                measure: state.auxMeasures[auxValueAction.payload.index].measure
            };
            return Object.assign({}, state, {
                baseMeasure: {
                    value: calculateMeasure(auxValues[auxValueAction.payload.index].value, auxValues[auxValueAction.payload.index].measure.amount, state.baseMeasure.measure.amount),
                    measure: state.baseMeasure.measure
                },
                auxMeasures: setAuxMeasures(auxValues[auxValueAction.payload.index].value, auxValues[auxValueAction.payload.index].measure.amount, state)
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__["e" /* CHANGEBASEMEASURE */]:
            var newMeasure = state.measurements.find(function (m) { return (m.name === action.payload && m.type == state.selectedType); });
            return Object.assign({}, state, {
                auxMeasures: setAuxMeasures(state.baseMeasure.value, newMeasure.amount, state),
                baseMeasure: {
                    value: state.baseMeasure.value,
                    measure: newMeasure
                }
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__["f" /* CHANGEBASEVALUE */]:
            return Object.assign({}, state, {
                auxMeasures: setAuxMeasures(action.payload, state.baseMeasure.measure.amount, state),
                baseMeasure: {
                    value: action.payload,
                    measure: state.baseMeasure.measure
                }
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__["g" /* CHANGETYPE */]:
            var baseMeasure_1 = getTypeMeasures(state.measurements, action.payload)[0];
            var newAuxMeasure = getTypeMeasures(state.measurements, action.payload)[1];
            return Object.assign({}, state, {
                selectedType: action.payload,
                baseMeasure: {
                    value: 1,
                    measure: baseMeasure_1
                },
                auxMeasures: [{
                        value: calculateMeasure(1, baseMeasure_1.amount, newAuxMeasure.amount),
                        measure: newAuxMeasure
                    }]
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__["o" /* MEASURESLOADED */]:
            return Object.assign({}, state, {
                measurements: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_measurements_actions__["r" /* SETTYPES */]:
            return Object.assign({}, state, {
                types: action.payload.map(function (m) { return m.type; }).filter(function (v, i, self) { return self.indexOf(v) === i; }).sort(),
            });
        default:
            return Object.assign({}, state);
    }
}
var getState = function (state) { return state.converter; };
var getMeasurements = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.measurements; });
var getBaseMeasure = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.baseMeasure; });
var getAuxMeasures = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.auxMeasures; });
var getSelectedType = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.selectedType; });
var getTypes = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.types; });
//# sourceMappingURL=measurements.reducer.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasurementsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MeasurementsService = (function () {
    function MeasurementsService() {
    }
    MeasurementsService.prototype.getMeasures = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(Measurements);
        });
    };
    return MeasurementsService;
}());
MeasurementsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], MeasurementsService);

var Measurements = [
    // Lengths are relative to inches
    { id: 101, name: "Cubits", amount: 17.5, type: "Length" },
    { id: 102, name: "Fathoms", amount: 72, type: "Length" },
    { id: 103, name: "Feet", amount: 12, type: "Length" },
    { id: 104, name: "Fingerbreadths", amount: 0.73, type: "Length" },
    { id: 105, name: "Handbreadths", amount: 2.9, type: "Length" },
    { id: 106, name: "Inches", amount: 1, type: "Length" },
    { id: 107, name: "Long Cubits", amount: 20.4, type: "Length" },
    { id: 108, name: "Long Reeds", amount: 122.4, type: "Length" },
    { id: 109, name: "Miles", amount: 63360, type: "Length" },
    { id: 110, name: "Reeds", amount: 105, type: "Length" },
    { id: 111, name: "Roman stadii", amount: 7283.4, type: "Length" },
    { id: 112, name: "Short Cubits", amount: 15, type: "Length" },
    { id: 113, name: "Spans", amount: 8.75, type: "Length" },
    { id: 114, name: "Yards", amount: 36, type: "Length" },
    // Weights are relative to grams
    { id: 201, name: "Bekah", amount: 5.7, type: "Weight" },
    { id: 202, name: "Gerah", amount: 0.57, type: "Weight" },
    { id: 203, name: "Gram", amount: 1, type: "Weight" },
    { id: 204, name: "Shekel", amount: 11.4, type: "Weight" },
    { id: 205, name: "Mina", amount: 570, type: "Weight" },
    { id: 206, name: "Talent", amount: 34200, type: "Weight" },
    { id: 207, name: "Pim", amount: 7.8, type: "Weight" },
    { id: 208, name: "Daric", amount: 8.4, type: "Weight" },
    { id: 209, name: "Pound", amount: 327, type: "Weight" },
    // Currency is relative to a day's wage
    { id: 300, name: "A Day's Wage", amount: 1, type: "Currency" },
    { id: 301, name: "Lepton", amount: 1 / 128, type: "Currency" },
    { id: 302, name: "Quadrons", amount: 1 / 64, type: "Currency" },
    { id: 303, name: "Assarion", amount: 1 / 16, type: "Currency" },
    { id: 304, name: "Denarius", amount: 1, type: "Currency" },
    { id: 305, name: "Drachma", amount: 1, type: "Currency" },
    { id: 306, name: "Didrachma", amount: 2, type: "Currency" },
    { id: 307, name: "Tetradrachma", amount: 4, type: "Currency" },
    { id: 308, name: "Mina", amount: 100, type: "Currency" },
    { id: 309, name: "Talent", amount: 60000, type: "Currency" },
    // Liquid Measures are based on Liters
    { id: 401, name: "Bath", amount: 22, type: "Liquid" },
    { id: 402, name: "Cor", amount: 220, type: "Liquid" },
    { id: 403, name: "Hin", amount: 3.67, type: "Liquid" },
    { id: 404, name: "Liter", amount: 1, type: "Liquid" },
    { id: 405, name: "Log", amount: 0.31, type: "Liquid" },
    // Dry Measures are based on Liters
    { id: 501, name: "Cab", amount: 1.22, type: "Dry" },
    { id: 502, name: "Ephah", amount: 22, type: "Dry" },
    { id: 503, name: "Homer", amount: 220, type: "Dry" },
    { id: 504, name: "Liter", amount: 1, type: "Dry" },
    { id: 505, name: "Omer", amount: 2.2, type: "Dry" },
    { id: 506, name: "Seah", amount: 7.33, type: "Dry" },
    { id: 507, name: "Quart", amount: 1.08, type: "Dry" },
];
//# sourceMappingURL=measurements.service.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardComponent */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KingsModule", function() { return KingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kings__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_kings_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects_kings_effects__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers_kings_reducer__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var KingsModule = (function () {
    function KingsModule() {
    }
    return KingsModule;
}());
KingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ExpanderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__kings__["a" /* KingsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* KingsListModal */],
            __WEBPACK_IMPORTED_MODULE_5__components__["c" /* PersonCardComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__kings__["a" /* KingsComponent */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["i" /* StoreModule */].forFeature('kings', __WEBPACK_IMPORTED_MODULE_8__reducers_kings_reducer__["f" /* kingsReducer */]),
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_7__effects_kings_effects__["a" /* KingsEffects */]]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__kings__["a" /* KingsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* KingsListModal */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_kings_service__["a" /* KingsService */],
        ]
    })
], KingsModule);

//# sourceMappingURL=kings.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expander_component__ = __webpack_require__(325);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__expander_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kings_list_modal__ = __webpack_require__(326);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__kings_list_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_card_component__ = __webpack_require__(327);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__person_card_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = kingsReducer;
/* unused harmony export getState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getKings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedKing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getShowPriests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getShowProphets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getShowSons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__ = __webpack_require__(98);


var initState = {
    kings: [],
    selectedKing: 1,
    showPriests: false,
    showProphets: false,
    showSons: false,
};
function kingsReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__["f" /* NEXT */]:
            return Object.assign({}, state, {
                selectedKing: (state.selectedKing < 20) ? state.selectedKing + 1 : 1
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__["h" /* PREV */]:
            return Object.assign({}, state, {
                selectedKing: (state.selectedKing > 1) ? state.selectedKing - 1 : 1
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__["c" /* KINGSLOADED */]:
            return Object.assign({}, state, {
                kings: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__["j" /* SETKING */]:
            return Object.assign({}, state, {
                selectedKing: (action.payload >= 1 && action.payload <= 20) ? action.payload : state.selectedKing
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__["l" /* TOGGLEPRIESTS */]:
            return Object.assign({}, state, {
                showPriests: !state.showPriests
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__["m" /* TOGGLEPROPHETS */]:
            return Object.assign({}, state, {
                showProphets: !state.showProphets
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__["n" /* TOGGLESONS */]:
            return Object.assign({}, state, {
                showSons: !state.showSons
            });
        default:
            return Object.assign({}, state);
    }
}
var getState = function (state) { return state.kings; };
var getKings = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.kings; });
var getSelectedKing = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.selectedKing; });
var getShowPriests = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.showPriests; });
var getShowProphets = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.showProphets; });
var getShowSons = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.showSons; });
//# sourceMappingURL=kings.reducer.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KingsService = (function () {
    function KingsService() {
    }
    KingsService.prototype.getKings = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(kings);
        });
    };
    return KingsService;
}());
KingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], KingsService);

var kings = [
    {
        "kingNumber": 1,
        "kingName": "Re·ho·boʹam",
        "kingNamePlain": "Rehoboam",
        "age": 41,
        "startReignYear": "997 B.C.E.",
        "endReignYear": "980 B.C.E.",
        "highPriests": ["Zadok"],
        "chosenOffspring": "A·biʹjah",
        "prophets": [
            "A·hiʹjah",
            "Id·do",
            "Shemaiah",
        ],
        "sons": [
            "A·biʹjah",
            "Je'ush",
            "Shem·a·riʹah",
            "Zaʹham",
            "Atʹtai",
            "Ziʹza",
            "She·loʹmith",
            "(21 other sons)",
        ],
        "wives": [
            "Abʹi·ha·il",
            "Maʹha·lath",
            "Maʹa·cah"
        ]
    },
    {
        "kingNumber": 2,
        "kingName": "A·biʹjah",
        "kingNamePlain": "Abijah",
        "startReignYear": "980 B.C.E.",
        "endReignYear": "978 B.C.E.",
        "highPriests": ["Zadok"],
        "chosenOffspring": "Aʹsa",
        "prophets": ["Id·do"],
        "sons": [
            "Aʹsa",
            "(21 other sons)"
        ],
    },
    {
        "kingNumber": 3,
        "kingName": "Aʹsa",
        "kingNamePlain": "Asa",
        "startReignYear": "978 B.C.E.",
        "endReignYear": "937 B.C.E",
        "highPriests": ["Zadok"],
        "chosenOffspring": "Je·hoshʹa·phat",
        "prophets": ["Az·a·riʹah", "Oded", "Hanani", "Jehu (son of Hanani)", "Elijah", "Micaiah"],
        "sons": [
            "Je·hoshʹa·phat"
        ],
    },
    {
        "kingNumber": 4,
        "kingName": "Je·hoshʹa·phat",
        "kingNamePlain": "Jehoshaphat",
        "startReignYear": "937 B.C.E.",
        "endReignYear": "913 B.C.E.",
        "highPriests": ["Amariah"],
        "chosenOffspring": "Je·hoʹram",
        "prophets": ["Jehu (son of Hanani)", "Eliezer", "Jahaziel", "Elijah", "Elishah"],
        "sons": [
            "Je·hoʹram",
            "Az·a·riʹah",
            "Je·hiʹel",
            "Zech·a·riʹah",
            "Miʹcha·el",
            "Sheph·a·tiʹah"
        ],
    },
    {
        "kingNumber": 5,
        "kingName": "Je·hoʹram",
        "kingNamePlain": "Jehoram",
        "age": 32,
        "startReignYear": "913 B.C.E.",
        "endReignYear": "c. 906 B.C.E.",
        "highPriests": ["Amariah"],
        "chosenOffspring": "A·ha·ziʹah",
        "prophets": ["Elijah", "Elishah"],
        "sons": [
            "A·ha·ziʹah"
        ],
    },
    {
        "kingNumber": 6,
        "kingName": "A·ha·ziʹah",
        "kingNamePlain": "Ahaziah",
        "age": 22,
        "startReignYear": "c. 906 B.C.E.",
        "endReignYear": "c. 905 B.C.E.",
        "highPriests": ["Je·hoiʹa·da"],
        "chosenOffspring": "Je·hoʹash",
        "prophets": ["E·liʹjah", "E·liʹshah"],
        "sons": ["Je·hoʹash"],
    },
    {
        "kingNumber": 7,
        "kingName": "Ath·a·liʹah",
        "kingNamePlain": "Athaliah",
        "startReignYear": "c. 905 B.C.E.",
        "endReignYear": "898 B.C.E.",
        "highPriests": ["Je·hoiʹa·da"],
        "chosenOffspring": null,
        "prophets": ["E·liʹshah"],
        "sons": [],
    },
    {
        "kingNumber": 8,
        "kingName": "Je·hoʹash",
        "kingNamePlain": "Jehoash",
        "age": 7,
        "startReignYear": "898 B.C.E.",
        "endReignYear": "858 B.C.E.",
        "highPriests": ["Je·hoiʹa·da", "Zech·a·riʹah", "Jo·haʹnan"],
        "chosenOffspring": "Am·a·ziʹah",
        "prophets": ["E·liʹshah"],
        "sons": ["Am·a·ziʹah"],
    },
    {
        "kingNumber": 9,
        "kingName": "Am·a·ziʹah",
        "kingNamePlain": "Amaziah",
        "age": 25,
        "startReignYear": "858 B.C.E.",
        "endReignYear": "829 B.C.E.",
        "highPriests": ["Jo·haʹnan"],
        "chosenOffspring": "Uz·ziʹah",
        "prophets": ["E·liʹshah", "Jonah", "Hosea", "Amos"],
        "sons": ["Uz·ziʹah"],
    },
    {
        "kingNumber": 10,
        "kingName": "Uz·ziʹah",
        "kingNamePlain": "Uzziah",
        "age": 16,
        "startReignYear": "829 B.C.E.",
        "endReignYear": "777 B.C.E.",
        "highPriests": [
            "Az·a·riʹah II"
        ],
        "prophets": ["Micah", "Hosea", "Isaiah", "Joel (?)"],
        "chosenOffspring": "Joʹtham",
        "sons": ["Joʹtham"],
    },
    {
        "kingNumber": 11,
        "kingName": "Joʹtham",
        "kingNamePlain": "Jotham",
        "age": 25,
        "startReignYear": "777 B.C.E.",
        "endReignYear": "762 B.C.E.",
        "highPriests": [
            "Az·a·riʹah II"
        ],
        "prophets": ["Micah", "Hosea", "Isaiah"],
        "chosenOffspring": "Aʹhaz",
        "sons": ["Aʹhaz"],
    },
    {
        "kingNumber": 12,
        "kingName": "Aʹhaz",
        "kingNamePlain": "Ahaz",
        "age": 20,
        "startReignYear": "762 B.C.E.",
        "endReignYear": "746 B.C.E.",
        "highPriests": [
            "Urijah (?)"
        ],
        "prophets": ["Micah", "Hosea", "Isaiah"],
        "chosenOffspring": "Hez·e·kiʹah",
        "sons": ["Hez·e·kiʹah"],
    },
    {
        "kingNumber": 13,
        "kingName": "Hez·e·kiʹah",
        "kingNamePlain": "Hezekiah",
        "age": 25,
        "startReignYear": "746 B.C.E.",
        "endReignYear": "716 B.C.E.",
        "highPriests": ["Az·a·riʹah (II or III)"],
        "prophets": ["Micah", "Hosea", "Isaiah"],
        "chosenOffspring": "Ma·nasʹseh",
        "sons": ["Ma·nasʹseh"],
    },
    {
        "kingNumber": 14,
        "kingName": "Ma·nasʹseh",
        "kingNamePlain": "Manasseh",
        "age": 12,
        "startReignYear": "716 B.C.E.",
        "endReignYear": "661 B.C.E.",
        "highPriests": ["Az·a·riʹah (II or III)"],
        "chosenOffspring": "Aʹmon",
        "prophets": ["Isaiah (?)"],
        "sons": ["Aʹmon"],
    },
    {
        "kingNumber": 15,
        "kingName": "Aʹmon",
        "kingNamePlain": "Amon",
        "age": 22,
        "startReignYear": "661 B.C.E.",
        "endReignYear": "659 B.C.E.",
        "highPriests": ["Az·a·riʹah (II or III)"],
        "prophets": [],
        "chosenOffspring": "Jo·siʹah",
        "sons": ["Jo·siʹah"],
    },
    {
        "kingNumber": 16,
        "kingName": "Jo·siʹah",
        "kingNamePlain": "Josiah",
        "age": 8,
        "startReignYear": "659 B.C.E.",
        "endReignYear": "628 B.C.E.",
        "highPriests": ["Hilkiah"],
        "prophets": ["Zephaniah", "Jeremiah", "Huldah"],
        "chosenOffspring": "Je·hoiʹa·kim",
        "sons": ["Je·hoʹa·haz", "Jo·haʹnan", "Je·hoiʹa·kim", "Zed·e·kiʹah"],
    },
    {
        "kingNumber": 17,
        "kingName": "Je·hoʹa·haz (Shalʹlum)",
        "kingNamePlain": "Jehoahaz",
        "age": 23,
        "startReignYear": "628 B.C.E.",
        "endReignYear": "628 B.C.E.",
        "highPriests": ["Hilkiah"],
        "prophets": ["Jeremiah"],
        "chosenOffspring": null,
        "sons": [],
    },
    {
        "kingNumber": 18,
        "kingName": "Je·hoiʹa·kim (E·liʹa·kim)",
        "kingNamePlain": "Jehoiakim",
        "age": 25,
        "startReignYear": "628 B.C.E.",
        "endReignYear": "618 B.C.E.",
        "highPriests": ["Hilkiah"],
        "prophets": ["Habakkuk (?), Jeremiah"],
        "chosenOffspring": "Je·hoiʹa·chin",
        "sons": ["Je·hoiʹa·chin"],
    },
    {
        "kingNumber": 19,
        "kingName": "Je·hoiʹa·chin (Jec·o·niʹah)",
        "kingNamePlain": "Jehoiachin",
        "age": 18,
        "startReignYear": "618 B.C.E.",
        "endReignYear": "617 B.C.E.",
        "highPriests": ["Hilkiah"],
        "prophets": ["Jeremiah"],
        "chosenOffspring": "Shealtiel",
        "sons": ["Shealtiel"],
    },
    {
        "kingNumber": 20,
        "kingName": "Zed·e·kiʹah",
        "kingNamePlain": "Zedekiah",
        "age": 21,
        "startReignYear": "617 B.C.E.",
        "endReignYear": "607 B.C.E.",
        "highPriests": ["Se·raiʹah"],
        "prophets": ["Jeremiah", "Ezekiel"],
        "chosenOffspring": null,
        "sons": [],
    },
];
//# sourceMappingURL=kings.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesModule", function() { return SchedulesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedules__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects_schedules_effects__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers_schedules_reducer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_checkpoints_reducer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__effects_checkpoints_effects__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SchedulesModule = (function () {
    function SchedulesModule() {
    }
    return SchedulesModule;
}());
SchedulesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* RemoteSchedulesModal */],
            __WEBPACK_IMPORTED_MODULE_4__schedules__["a" /* SchedulesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* ScheduleCardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["c" /* ScheduleItemComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["d" /* ScheduleSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["e" /* ScheduleViewer */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__schedules__["a" /* SchedulesComponent */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["i" /* StoreModule */].forFeature('schedules', {
                checkpoints: __WEBPACK_IMPORTED_MODULE_9__reducers_checkpoints_reducer__["a" /* checkpointsReducer */],
                schedules: __WEBPACK_IMPORTED_MODULE_8__reducers_schedules_reducer__["g" /* schedulesReducer */]
            }),
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_10__effects_checkpoints_effects__["a" /* CheckpointsEffects */], __WEBPACK_IMPORTED_MODULE_7__effects_schedules_effects__["a" /* SchedulesEffects */]]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* RemoteSchedulesModal */],
            __WEBPACK_IMPORTED_MODULE_4__schedules__["a" /* SchedulesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["e" /* ScheduleViewer */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services__["a" /* CheckpointsService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["b" /* SchedulesService */],
        ]
    })
], SchedulesModule);

//# sourceMappingURL=schedules.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__remote_schedules_component__ = __webpack_require__(330);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__remote_schedules_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_card_component__ = __webpack_require__(331);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__schedule_card_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_item_component__ = __webpack_require__(332);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__schedule_item_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_section_component__ = __webpack_require__(333);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__schedule_section_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_viewer_component__ = __webpack_require__(334);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__schedule_viewer_component__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModule", function() { return TimelineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timeline__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_timeline_reducer__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_timeline_effects__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TimelineModule = (function () {
    function TimelineModule() {
    }
    return TimelineModule;
}());
TimelineModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ProfileModal */],
            __WEBPACK_IMPORTED_MODULE_4__timeline__["a" /* TimelineCommponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* TimelineListModal */],
            __WEBPACK_IMPORTED_MODULE_5__components__["c" /* TimelineRowComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__timeline__["a" /* TimelineCommponent */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["i" /* StoreModule */].forFeature('timeline', __WEBPACK_IMPORTED_MODULE_6__reducers_timeline_reducer__["e" /* timelineReducer */]),
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_8__effects_timeline_effects__["a" /* TimelineEffects */]]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__timeline__["a" /* TimelineCommponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ProfileModal */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* TimelineListModal */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services__["a" /* TimelineService */],
        ]
    })
], TimelineModule);

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineListModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineListModal = (function () {
    function TimelineListModal(platform, params, viewCtrl) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.params.get('groups').subscribe(function (groups) { return _this.groups = Object.assign([], groups); });
        this.params.get('items').subscribe(function (items) { return _this.items = items; });
    }
    TimelineListModal.prototype.selectGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index > -1) {
            this.groups.splice(index, 1);
        }
        else {
            this.groups.push(group);
        }
    };
    TimelineListModal.prototype.isGroupVisible = function (group, groups) {
        return groups.indexOf(group) > -1;
    };
    TimelineListModal.prototype.listAllGroups = function (items) {
        return new Set(items.map(function (item) { return item.group; }));
    };
    TimelineListModal.prototype.dismiss = function (message) {
        var data = {};
        switch (message) {
            case 'save':
                data = { groups: this.groups };
                break;
            default:
                data = {};
                break;
        }
        this.viewCtrl.dismiss(data);
    };
    return TimelineListModal;
}());
TimelineListModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n   <ion-header>\n   <ion-toolbar>\n      <ion-title>\n         Timeline Groups\n      </ion-title>\n      <ion-buttons>\n         <button ion-button (click)=\"dismiss('cancel')\">\n         <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n         <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n         </button>\n      </ion-buttons>\n      <ion-buttons end>\n         <button ion-button (click)=\"dismiss('save')\" [disabled]=\"groups.length > 6\">\n            Save\n         </button>\n      </ion-buttons>\n   </ion-toolbar>\n   </ion-header>\n   <ion-content>\n      <ion-list radio-group>\n         <ion-item-divider text-center\n            [style.backgroundColor]=\"(groups.length > 6) ? 'red' : 'lightgray'\"\n            [style.color]=\"(groups.length > 6) ? 'white' : 'black'\">Choose up to 6 groups</ion-item-divider>\n         <ion-item *ngFor=\"let group of listAllGroups(items)\">\n            <ion-label>{{group}}</ion-label>\n            <ion-checkbox [checked]=\"isGroupVisible(group, (groups))\" (click)=\"selectGroup(group)\"></ion-checkbox>\n         </ion-item>\n      </ion-list>\n   </ion-content>\n   ",
        styles: [".selected {color: blue;}"]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], TimelineListModal);

//# sourceMappingURL=timeline-list.modal.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = timelineReducer;
/* unused harmony export getState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTimelineData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_timeline_actions__ = __webpack_require__(101);


var initState = {
    items: [],
    groups: ["Kings of Judah", "Kings of Samaria", "Prophets", "Events"],
    years: [],
    timelineData: {
        start: 1000,
        end: 500,
        increment: 10
    },
};
function listYears(timelineData) {
    var years = [];
    for (var i = timelineData.start; i >= timelineData.end; i = i - timelineData.increment) {
        years.push(i);
    }
    return years;
}
function getGroupsTimelineData(state, groups) {
    var listedItems = state.items.filter(function (item) { return groups.indexOf(item.group) > -1; });
    var oldestDate = listedItems.map(function (item) { return item.start; }).reduce(function (dt1, dt2) { return dt1 > dt2 ? dt1 : dt2; });
    var newestDate = listedItems.map(function (item) { return item.start; }).reduce(function (dt1, dt2) { return dt1 < dt2 ? dt1 : dt2; });
    var start = Math.ceil(oldestDate / 100) * 100;
    var end = Math.floor(newestDate / 100) * 100;
    return {
        start: start,
        end: end,
        increment: state.timelineData.increment,
    };
}
function getNextZoomIn(increment) {
    switch (increment) {
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
function getNextZoomOut(increment) {
    switch (increment) {
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
function timelineReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_timeline_actions__["e" /* TIMELINELOADED */]:
            return Object.assign({}, state, {
                items: action.payload,
                years: listYears(state.timelineData),
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_timeline_actions__["c" /* SETGROUPS */]:
            if (action.payload.length > 6) {
                return Object.assign({}, state);
            }
            var tlData = getGroupsTimelineData(state, action.payload);
            return Object.assign({}, state, {
                groups: action.payload,
                timelineData: tlData,
                years: listYears(tlData),
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_timeline_actions__["g" /* ZOOMIN */]:
            var zoomInData = Object.assign({}, state.timelineData, {
                increment: getNextZoomIn(state.timelineData.increment),
            });
            return Object.assign({}, state, {
                timelineData: zoomInData,
                years: listYears(zoomInData),
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_timeline_actions__["h" /* ZOOMOUT */]:
            var zoomOutData = Object.assign({}, state.timelineData, {
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
var getState = function (state) { return state.timeline; };
var getGroups = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.groups; });
var getItems = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.items; });
var getYears = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.years; });
var getTimelineData = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.timelineData; });
//# sourceMappingURL=timeline.reducer.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileModal = (function () {
    function ProfileModal(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.profile = this.params.get('profile');
    }
    ProfileModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfileModal.prototype.getTimeFrame = function (start, end) {
        var timeFrame = "";
        return ((start - end) <= 0) ? timeFrame = start + " B.C.E." : timeFrame = start + " - " + end + " B.C.E.";
    };
    return ProfileModal;
}());
ProfileModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{profile.name}}\n    </ion-title>\n    <ion-buttons>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Close</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n   <ion-card>\n      <ion-card-content>\n         <ion-card-title text-center>{{profile.name}}</ion-card-title>\n         <ion-label text-center>{{getTimeFrame(profile.start, profile.end)}}</ion-label>\n         <div text-center>\n            <a outline ion-button target=\"_onblank\" [attr.href]=\"profile.url\">\n               Online Library&nbsp;\n               <ion-icon name=\"md-open\"></ion-icon>\n            </a>\n         </div>\n      </ion-card-content>\n   </ion-card>\n</ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], ProfileModal);

//# sourceMappingURL=profile.modal.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline_service__ = __webpack_require__(350);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__timeline_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pages_module__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: 'pages/converter/converter.module#ConverterModule', name: 'ConverterComponent', segment: 'converter', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'pages/dashboard/dashboard.module#DashboardModule', name: 'DashboardComponent', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'pages/kings/kings.module#KingsModule', name: 'KingsComponent', segment: 'kings', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'pages/schedules/schedules.module#SchedulesModule', name: 'SchedulesComponent', segment: 'schedules', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'pages/timeline/timeline.module#TimelineModule', name: 'TimelineComponent', segment: 'timeline', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["i" /* StoreModule */].forRoot({}),
            __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_measurements_actions__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_measurements_reducer__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConverterComponent = (function () {
    function ConverterComponent(navCtrl, store) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.measurements$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_measurements_reducer__["c" /* getMeasurements */]);
        this.selectedType$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_measurements_reducer__["d" /* getSelectedType */]);
        this.types$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_measurements_reducer__["e" /* getTypes */]);
        this.baseMeasure$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_measurements_reducer__["b" /* getBaseMeasure */]);
        this.auxMeasures$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_measurements_reducer__["a" /* getAuxMeasures */]);
    }
    ConverterComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_measurements_actions__["n" /* InitMeasuresAction */]());
    };
    ConverterComponent.prototype.addMeasurement = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_measurements_actions__["b" /* AddAuxMeasurementAction */]());
    };
    ConverterComponent.prototype.changeAuxMeasure = function (aux) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_measurements_actions__["h" /* ChangeAuxMeasureAction */](aux));
    };
    ConverterComponent.prototype.changeAuxValue = function (aux) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_measurements_actions__["i" /* ChangeAuxValueAction */](aux));
    };
    ConverterComponent.prototype.changeBaseMeasure = function (base) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_measurements_actions__["j" /* ChangeBaseMeasureAction */](base.name));
    };
    ConverterComponent.prototype.changeBaseValue = function (base) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_measurements_actions__["k" /* ChangeBaseValueAction */](base.value));
    };
    ConverterComponent.prototype.changeType = function (type) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_measurements_actions__["l" /* ChangeTypeAction */](type));
    };
    ConverterComponent.prototype.listTypeMeasurements = function (type, measurements) {
        return measurements.filter(function (m) { return m.type == type; });
    };
    ConverterComponent.prototype.trackAux = function (index, item, any) {
        return index;
    };
    return ConverterComponent;
}());
ConverterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Unit Converter</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\"addMeasurement()\">\n        <ion-icon name=\"md-add\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   <ion-card>\n      <ion-card-header no-padding>\n         <ion-list>\n            <ion-item>\n               <ion-label>Measurement Type</ion-label>\n               <ion-select style=\"font-size:12px\" [ngModel]=\"(selectedType$ | async)\" (ngModelChange)=\"changeType($event)\">\n                  <ion-option [selected]=\"type == (selectedType$ | async)\" *ngFor=\"let type of (types$ | async)\">{{type}}</ion-option>\n               </ion-select>\n            </ion-item>\n          </ion-list>\n      </ion-card-header>\n      <ion-card-content no-padding>\n         <ion-list>\n            <ion-item-divider text-center>Units</ion-item-divider>\n            <app-conversion-item\n               [index]=\"0\" [measureValue]=\"(baseMeasure$ | async)\" [measurements]=\"listTypeMeasurements(selectedType$ | async, measurements$ | async)\"\n               (changeValue)=\"changeBaseValue($event)\" (changeMeasure)=\"changeBaseMeasure($event)\">\n            </app-conversion-item>\n            <app-conversion-item *ngFor=\"let aux of (auxMeasures$ | async); let i = index; trackBy:trackAux\"\n               [index]=\"i\" [measureValue]=\"aux\" [measurements]=\"listTypeMeasurements(selectedType$ | async, measurements$ | async)\"\n               (changeValue)=\"changeAuxValue($event)\" (changeMeasure)=\"changeAuxMeasure($event)\">\n            </app-conversion-item>\n         </ion-list>\n      </ion-card-content>\n   </ion-card>\n</ion-content>\n\n<ion-footer>\n  \n</ion-footer>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
], ConverterComponent);

//# sourceMappingURL=converter.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conversion_item_component__ = __webpack_require__(318);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__conversion_item_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversionItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConversionItemComponent = (function () {
    function ConversionItemComponent() {
        this.changeValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.changeMeasure = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ConversionItemComponent.prototype.handleChangeValue = function (index, value) {
        this.changeValue.emit({
            index: index,
            value: value
        });
    };
    ConversionItemComponent.prototype.handleChangeMeasure = function (index, name) {
        this.changeMeasure.emit({
            index: index,
            name: name
        });
    };
    ConversionItemComponent.prototype.isMeasureSelected = function (id) {
        return (id == this.measureValue.measure.id);
    };
    return ConversionItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ConversionItemComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ConversionItemComponent.prototype, "measureValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ConversionItemComponent.prototype, "measurements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ConversionItemComponent.prototype, "changeValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ConversionItemComponent.prototype, "changeMeasure", void 0);
ConversionItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-conversion-item',
        template: "\n   <ion-item>\n      <ion-input [ngModel]=\"measureValue.value\" (ngModelChange)=\"handleChangeValue(index, $event)\"></ion-input>\n      <ion-select style=\"font-size:12px\" [ngModel]=\"measureValue.measure.name\" (ngModelChange)=\"handleChangeMeasure(index, $event)\">\n         <ng-template ngFor let-measure [ngForOf]=\"measurements\">\n            <ion-option [selected]=\"isMeasureSelected(measure.id)\">{{measure.name}}</ion-option>\n         </ng-template>\n      </ion-select>\n   </ion-item>\n   ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    })
], ConversionItemComponent);

//# sourceMappingURL=conversion-item.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasurementsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_measurements_actions__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_measurements_service__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MeasurementsEffects = (function () {
    function MeasurementsEffects($actions, measurementsService) {
        var _this = this;
        this.$actions = $actions;
        this.measurementsService = measurementsService;
        this.$loadMeasurements = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_measurements_actions__["m" /* INIT */])
            .switchMap(function () {
            return _this.measurementsService.getMeasures()
                .map(function (measures) { return new __WEBPACK_IMPORTED_MODULE_7__actions_measurements_actions__["q" /* MeasuresLoadedAction */](measures); })
                .catch(function () { return new __WEBPACK_IMPORTED_MODULE_7__actions_measurements_actions__["p" /* MeasuresFailedAction */](); });
        });
        this.$setTypes = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_measurements_actions__["o" /* MEASURESLOADED */])
            .switchMap(function (action) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_7__actions_measurements_actions__["s" /* TypesSetAction */](action.payload));
        });
    }
    return MeasurementsEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], MeasurementsEffects.prototype, "$loadMeasurements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], MeasurementsEffects.prototype, "$setTypes", void 0);
MeasurementsEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_8__services_measurements_service__["a" /* MeasurementsService */]])
], MeasurementsEffects);

//# sourceMappingURL=measurements.effects.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.navigateToApp = function (app) {
        switch (app) {
            case 'kings':
                this.navCtrl.setRoot('KingsComponent');
                break;
            case 'timeline':
                this.navCtrl.setRoot('TimelineComponent');
                break;
            case 'converter':
                this.navCtrl.setRoot('ConverterComponent');
                break;
            case 'schedules':
                this.navCtrl.setRoot('SchedulesComponent');
                break;
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n   <ion-header>\n     <ion-navbar>\n       <button ion-button menuToggle>\n         <ion-icon name=\"menu\"></ion-icon>\n       </button>\n       <ion-title>Dashboard</ion-title>\n     </ion-navbar>\n   </ion-header>\n   \n   <ion-content>\n      <div class=\"apps--grid\">\n         <div class=\"app\" (click)=\"navigateToApp('kings')\">\n            <div class=\"app--icon app--icon--purple\">\n               <i class=\"fa fa-user fa-2x\"></i>\n            </div>\n            <div class=\"app--title\">Kings</div>\n         </div>\n         <div class=\"app\" (click)=\"navigateToApp('timeline')\">\n            <div class=\"app--icon app--icon--green\">\n               <i class=\"fa fa-sliders-h fa-2x\"></i>\n            </div>\n            <div class=\"app--title\">Timeline</div>\n         </div>\n         <div class=\"app\" (click)=\"navigateToApp('converter')\">\n            <div class=\"app--icon app--icon--skyblue\">\n               <i class=\"fa fa-balance-scale fa-2x\"></i>\n            </div>\n            <div class=\"app--title\">Converter</div>\n         </div>\n         <div class=\"app\" (click)=\"navigateToApp('schedules')\">\n            <div class=\"app--icon app--icon--gray\">\n               <i class=\"fa fa-book fa-2x\"></i>\n            </div>\n            <div class=\"app--title\">Schedules</div>\n         </div>\n      </div>\n   </ion-content>\n   \n   <ion-footer>\n     \n   </ion-footer>\n   "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], DashboardComponent);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_kings_reducer__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KingsComponent = (function () {
    function KingsComponent(navCtrl, modalCtrl, store) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.store = store;
        this.kings$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_kings_reducer__["a" /* getKings */]);
        this.selectedKing$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_kings_reducer__["b" /* getSelectedKing */]);
        this.showPriests$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_kings_reducer__["c" /* getShowPriests */]);
        this.showProphets$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_kings_reducer__["d" /* getShowProphets */]);
        this.showSons$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_kings_reducer__["e" /* getShowSons */]);
    }
    KingsComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["b" /* InitKingsAction */]());
    };
    KingsComponent.prototype.showKingsListModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components__["b" /* KingsListModal */], { kings: this.kings$, selectedKing: this.selectedKing$ });
        modal.present();
        modal.onDidDismiss(function (kingNumber) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["k" /* SetKingAction */](kingNumber));
            _this.slides.slideTo(kingNumber - 1);
        });
    };
    KingsComponent.prototype.nextKing = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["g" /* NextAction */]());
        this.slides.slideNext();
    };
    KingsComponent.prototype.prevKing = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["i" /* PrevAction */]());
        this.slides.slidePrev();
    };
    KingsComponent.prototype.updateKingNumber = function (event) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["k" /* SetKingAction */](event.realIndex + 1));
    };
    KingsComponent.prototype.toggleSons = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["q" /* ToggleSonsAction */]());
    };
    KingsComponent.prototype.togglePriests = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["o" /* TogglePriestsAction */]());
    };
    KingsComponent.prototype.toggleProphets = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["p" /* ToggleProphetsAction */]());
    };
    return KingsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], KingsComponent.prototype, "slides", void 0);
KingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Kings of Judah</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager paginationType=\"progress\" centeredSlides=\"true\" (ionSlideDidChange)=\"updateKingNumber($event)\">\n    <ion-slide *ngFor=\"let king of (kings$ | async)\">\n      <app-person-card [king]=\"king\" \n        [toggleSons]=\"showSons$ | async\" (toggleSonsChange)=\"toggleSons()\"\n        [togglePriests]=\"showPriests$ | async\" (togglePriestsChange)=\"togglePriests()\"\n        [toggleProphets]=\"showProphets$ | async\" (toggleProphetsChange)=\"toggleProphets()\">\n      </app-person-card>\n    </ion-slide>\n  </ion-slides>\n  <ion-fab right bottom>\n    <button ion-fab color=\"primary\" (click)=\"showKingsListModal()\">\n      <ion-icon name=\"md-albums\"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button [disabled]=\"(selectedKing$ | async) == 1\" (click)=\"prevKing()\" block small ion-button icon-only clear>\n            <ion-icon name=\"arrow-back\"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button [disabled]=\"(selectedKing$ | async) == 20\" (click)=\"nextKing()\" block small ion-button icon-only clear>\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
], KingsComponent);

//# sourceMappingURL=kings.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpanderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpanderComponent = (function () {
    function ExpanderComponent() {
        this.toggleExpanderChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ExpanderComponent.prototype.handleToggleExpander = function () {
        this.toggleExpander = !this.toggleExpander;
        this.toggleExpanderChange.emit(this.toggleExpander);
    };
    return ExpanderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ExpanderComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ExpanderComponent.prototype, "boldItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ExpanderComponent.prototype, "list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], ExpanderComponent.prototype, "toggleExpander", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ExpanderComponent.prototype, "toggleExpanderChange", void 0);
ExpanderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-expander',
        template: "\n   <ion-item-group style=\"border-bottom:0.5px solid white\">\n      <button ion-item color=\"secondary\" *ngIf=\"list && list.length > 0\" (click)=\"handleToggleExpander()\">{{title}} ({{list.length}})</button>\n      <span *ngIf=\"toggleExpander\">\n         <ion-item *ngFor=\"let item of list\" [ngClass]=\"{'bold':item == boldItem}\">{{item}}</ion-item>\n      </span>\n   </ion-item-group>\n   "
    })
], ExpanderComponent);

//# sourceMappingURL=expander.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KingsListModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KingsListModal = (function () {
    function KingsListModal(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.kings$ = this.params.get('kings');
        this.selectedKing$ = this.params.get('selectedKing');
    }
    KingsListModal.prototype.dismiss = function (kingNumber) {
        var _this = this;
        if (kingNumber > 0) {
            this.viewCtrl.dismiss(kingNumber);
        }
        else {
            this.selectedKing$.subscribe(function (kingNo) {
                _this.viewCtrl.dismiss(kingNo);
            });
        }
    };
    return KingsListModal;
}());
KingsListModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Choose a king\n    </ion-title>\n    <ion-buttons>\n      <button ion-button (click)=\"dismiss(0)\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n   <ion-list radio-group>\n      <ion-item *ngFor=\"let king of (kings$ | async)\" (click)=\"dismiss(king.kingNumber)\">\n        <span *ngIf=\"king.kingNumber != (selectedKing$ | async)\">\n          {{king.kingName}} <div style=\"color:gray;float: right\" text-right>{{king.startReignYear}}</div>\n        </span>\n        <span *ngIf=\"king.kingNumber == (selectedKing$ | async)\" style=\"color:#488aff;\">\n          {{king.kingName}} <div style=\"color:#488aff;float: right\" text-right>{{king.startReignYear}}</div>\n        </span>\n      </ion-item>\n   </ion-list>\n</ion-content>\n",
        styles: [".selected {color: blue;}"]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], KingsListModal);

//# sourceMappingURL=kings-list.modal.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonCardComponent = (function () {
    function PersonCardComponent() {
        this.toggleSonsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.togglePriestsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.toggleProphetsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    PersonCardComponent.prototype.handleToggleSons = function () {
        this.toggleSons = !this.toggleSons;
        this.toggleSonsChange.emit(this.toggleSons);
    };
    PersonCardComponent.prototype.handleTogglePriests = function () {
        this.togglePriests = !this.togglePriests;
        this.togglePriestsChange.emit(this.togglePriests);
    };
    PersonCardComponent.prototype.handleToggleProphets = function () {
        this.toggleProphets = !this.toggleProphets;
        this.toggleProphetsChange.emit(this.toggleProphets);
    };
    return PersonCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], PersonCardComponent.prototype, "king", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], PersonCardComponent.prototype, "toggleSons", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], PersonCardComponent.prototype, "toggleSonsChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], PersonCardComponent.prototype, "togglePriests", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], PersonCardComponent.prototype, "togglePriestsChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], PersonCardComponent.prototype, "toggleProphets", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], PersonCardComponent.prototype, "toggleProphetsChange", void 0);
PersonCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-person-card',
        template: "\n   <ion-card>\n        <ion-card-header text-center>{{king.startReignYear}} - {{king.endReignYear}}</ion-card-header>\n        <ion-card-content>\n          <ion-card-title>\n            <ion-label *ngIf=\"king.kingNumber != 7\" color=\"primary\" stacked>King</ion-label>\n            <ion-label *ngIf=\"king.kingNumber === 7\" color=\"primary\" stacked>Queen</ion-label>\n            <span (click)=\"showKingsListModal()\">\n              {{king.kingName}}\n              <span style=\"color:cornflowerblue;font-size:14px\">Age: {{king.age||'?'}}</span>\n            </span>\n          </ion-card-title>\n        </ion-card-content>\n\n        <ion-list>\n          <app-expander *ngIf=\"king?.sons && king.sons.length > 0\"\n            [title]=\"'Sons'\" [list]=\"king?.sons\" [boldItem]=\"king?.chosenOffspring\"\n            [toggleExpander]=\"toggleSons\"\n            (toggleExpanderChange)=\"handleToggleSons()\">\n          </app-expander>\n          <app-expander *ngIf=\"king?.highPriests && king.highPriests.length > 0\"\n            [title]=\"'High Priests'\" [list]=\"king?.highPriests\"\n            [toggleExpander]=\"togglePriests\"\n            (toggleExpanderChange)=\"handleTogglePriests()\">\n          </app-expander>\n          <app-expander *ngIf=\"king?.prophets && king.prophets.length > 0\"\n            [title]=\"'Prophets'\" [list]=\"king?.prophets\"\n            [toggleExpander]=\"toggleProphets\"\n            (toggleExpanderChange)=\"handleToggleProphets()\">\n          </app-expander>\n        </ion-list>\n      </ion-card>\n   "
    }),
    __metadata("design:paramtypes", [])
], PersonCardComponent);

//# sourceMappingURL=person-card.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KingsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_kings_service__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KingsEffects = (function () {
    function KingsEffects($actions, kingsService) {
        var _this = this;
        this.$actions = $actions;
        this.kingsService = kingsService;
        this.$loadKings = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["a" /* INIT */])
            .switchMap(function () {
            return _this.kingsService.getKings()
                .map(function (kings) { return new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["e" /* KingsLoadedAction */](kings); })
                .catch(function () { return new __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__["d" /* KingsFailedAction */](); });
        });
    }
    return KingsEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], KingsEffects.prototype, "$loadKings", void 0);
KingsEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_7__services_kings_service__["a" /* KingsService */]])
], KingsEffects);

//# sourceMappingURL=kings.effects.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_schedules_actions__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_schedules_reducer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_checkpoints_actions__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_checkpoints_reducer__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SchedulesComponent = (function () {
    function SchedulesComponent(modalCtrl, navCtrl, scheduleStore, checkpointsStore, toast) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.scheduleStore = scheduleStore;
        this.checkpointsStore = checkpointsStore;
        this.toast = toast;
        this.scheduleStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_schedules_actions__["n" /* InitLocalSchedulesAction */]());
        this.scheduleStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_schedules_actions__["x" /* PinnedLoadedAction */]());
        this.checkpointsStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_checkpoints_actions__["d" /* InitCheckpointsAction */]());
    }
    SchedulesComponent.prototype.ngOnInit = function () {
        this.list$ = this.scheduleStore.select(__WEBPACK_IMPORTED_MODULE_5__reducers_schedules_reducer__["b" /* getList */]);
        this.local$ = this.scheduleStore.select(__WEBPACK_IMPORTED_MODULE_5__reducers_schedules_reducer__["c" /* getLocalSchedules */]);
        this.pinned$ = this.scheduleStore.select(__WEBPACK_IMPORTED_MODULE_5__reducers_schedules_reducer__["d" /* getPinned */]);
        this.downloading$ = this.scheduleStore.select(__WEBPACK_IMPORTED_MODULE_5__reducers_schedules_reducer__["a" /* getDownloading */]);
        this.checkpoints$ = this.scheduleStore.select(__WEBPACK_IMPORTED_MODULE_7__reducers_checkpoints_reducer__["b" /* getLocalCheckpoints */]);
    };
    SchedulesComponent.prototype.changeScheduleList = function (scheduleListName) {
        this.scheduleStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_schedules_actions__["b" /* ChangeScheduleListAction */](scheduleListName));
    };
    SchedulesComponent.prototype.getPinnedSchedules = function (schedules, pinned) {
        return schedules.filter(function (s) { return pinned.indexOf(s.schedule.id) > -1; });
    };
    SchedulesComponent.prototype.handleTapSection = function (schedule, section) {
        var _this = this;
        if (section.sections.length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__components__["e" /* ScheduleViewer */], {
                schedule: {
                    schedule: schedule,
                    checkpoints: section.sections,
                }
            });
        }
        else {
            this.checkpoints$.subscribe(function (local) {
                _this.checkpointsStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_checkpoints_actions__["g" /* InitSaveLocalCheckpointAction */]({
                    local: local,
                    scheduleId: schedule.id,
                    checkpointId: section.id,
                }));
            }).unsubscribe();
        }
    };
    SchedulesComponent.prototype.showDownloadableSchedules = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components__["a" /* RemoteSchedulesModal */]).present();
    };
    SchedulesComponent.prototype.viewSchedule = function (id) {
        var _this = this;
        this.local$.subscribe(function (schedules) {
            var schedule = schedules.find(function (s) { return s.schedule.id == id; });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__components__["e" /* ScheduleViewer */], {
                schedule: schedule
            });
        }).unsubscribe();
    };
    SchedulesComponent.prototype.pinSchedule = function (id) {
        this.scheduleStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_schedules_actions__["v" /* PinScheduleAction */](id));
        this.toast.create({
            message: "This schedule is now pinned.",
            duration: 2000,
            position: 'middle'
        }).present();
    };
    SchedulesComponent.prototype.unpinSchedule = function (id) {
        this.scheduleStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_schedules_actions__["F" /* UnpinScheduleAction */](id));
        this.toast.create({
            message: "This schedule is now unpinned.",
            duration: 2000,
            position: 'middle'
        }).present();
    };
    return SchedulesComponent;
}());
SchedulesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Schedules</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\"showDownloadableSchedules()\">\n        <ion-icon name=\"md-download\"></ion-icon>\n      </button>\n    </ion-buttons>    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   <ion-segment (ngModelChange)=\"changeScheduleList($event)\" [ngModel]=\"(list$ | async)\" padding>\n      <ion-segment-button value=\"pinned\">\n         Pinned\n      </ion-segment-button>\n      <ion-segment-button value=\"all\">\n         All\n      </ion-segment-button>\n   </ion-segment>\n\n   <div text-center *ngIf=\"(local$ | async).length == 0\">\n      <h3><ion-icon name=\"md-sad\"></ion-icon> No Schedules!</h3>\n      <p>Tap <ion-icon (tap)=\"showDownloadableSchedules()\" color=\"primary\" name=\"md-download\"></ion-icon> to view schedules<br />available for download.</p>\n   </div>\n   \n   <div [ngSwitch]=\"list$ | async\">\n      <ng-template [ngSwitchCase]=\"'all'\">\n         <schedule-card\n            *ngFor=\"let s of (local$ | async)\"\n            (onViewSchedule)=\"viewSchedule($event)\"\n            (onTapCheckpoint)=\"handleTapSection(s.schedule, $event)\"\n            (onTapPin)=\"pinSchedule(s.schedule.id)\"\n            (onTapUnpin)=\"unpinSchedule(s.schedule.id)\"\n            [schedule]=\"s\"\n            [pinned]=\"pinned$ | async\"\n            [checkpoints]=\"(checkpoints$ | async)\">\n         </schedule-card>\n      </ng-template>\n\n      <ng-template [ngSwitchCase]=\"'pinned'\">\n         <schedule-card \n            *ngFor=\"let s of getPinnedSchedules((local$ | async), (pinned$ | async))\"\n            (onViewSchedule)=\"viewSchedule($event)\"\n            (onTapCheckpoint)=\"handleTapSection(s.schedule, $event)\"\n            (onTapPin)=\"pinSchedule(s.schedule.id)\"\n            (onTapUnpin)=\"unpinSchedule(s.schedule.id)\"\n            [schedule]=\"s\"\n            [pinned]=\"pinned$ | async\"\n            [checkpoints]=\"(checkpoints$ | async)\">\n         </schedule-card>\n      </ng-template>\n   </div>\n</ion-content>\n\n<ion-footer>\n  \n</ion-footer>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], SchedulesComponent);

//# sourceMappingURL=schedules.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteSchedulesModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_schedules_actions__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_schedules_reducer__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemoteSchedulesModal = (function () {
    function RemoteSchedulesModal(navParams, viewCtrl, store) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.store = store;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_schedules_actions__["o" /* InitRemoteSchedulesAction */]());
    }
    RemoteSchedulesModal.prototype.ngOnInit = function () {
        this.downloading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_schedules_reducer__["a" /* getDownloading */]);
        this.local$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_schedules_reducer__["c" /* getLocalSchedules */]);
        this.remote$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_schedules_reducer__["e" /* getRemoteSchedules */]);
        this.schedule$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_schedules_reducer__["f" /* getState */]);
    };
    RemoteSchedulesModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RemoteSchedulesModal.prototype.deleteSchedule = function (id, slideItem) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_schedules_actions__["l" /* InitDeleteLocalScheduleAction */](id));
        slideItem.close();
    };
    RemoteSchedulesModal.prototype.downloadSchedule = function (schedule) {
        var _this = this;
        this.schedule$.subscribe(function (state) {
            if (_this.canDownload(schedule.id, state.downloading, state.local)) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_schedules_actions__["m" /* InitDownloadScheduleAction */](schedule));
            }
        }).unsubscribe();
    };
    RemoteSchedulesModal.prototype.canDownload = function (id, downloading, local) {
        return !this.isDownloading(id, downloading) && !this.wasDownloaded(id, local);
    };
    RemoteSchedulesModal.prototype.isDownloading = function (id, downloading) {
        return downloading.indexOf(id) > -1;
    };
    RemoteSchedulesModal.prototype.wasDownloaded = function (id, local) {
        return (local.length > 0 && local.map(function (d) { return d.schedule.id; }).indexOf(id) > -1);
    };
    return RemoteSchedulesModal;
}());
RemoteSchedulesModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n   <ion-header>\n      <ion-toolbar>\n         <ion-title>Tap to Download</ion-title>\n         <ion-buttons end>\n            <button ion-button (click)=\"dismiss()\">\n               <span ion-text color=\"primary\" showWhen=\"ios\">Done</span>\n               <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n            </button>\n         </ion-buttons>\n      </ion-toolbar>\n   </ion-header>\n   <ion-content>\n      <ion-list>\n         <ion-item-sliding #slideItem *ngFor=\"let s of (remote$ | async)\">\n            <ion-item (click)=\"downloadSchedule(s)\">\n               {{ s.name }}\n               <!-- Not downloaded -->\n               <ion-icon *ngIf=\"canDownload(s.id, (downloading$ | async), (local$ | async))\" item-end name=\"ios-cloud-download-outline\"></ion-icon>\n               <!-- Downloading -->\n               <ion-spinner item-end *ngIf=\"isDownloading(s.id, (downloading$ | async))\" name=\"bubbles\"></ion-spinner>\n               <!-- Downloaded -->\n               <ion-icon color=\"primary\" *ngIf=\"wasDownloaded(s.id, (local$ | async))\" item-end name=\"md-checkmark\"></ion-icon>\n            </ion-item>\n            <ion-item-options side=\"right\">\n               <button *ngIf=\"wasDownloaded(s.id, (local$ | async))\" color=\"danger\" ion-button (click)=\"deleteSchedule(s.id, slideItem)\">\n                  <ion-icon name=\"md-trash\"></ion-icon>\n                  Delete\n               </button>\n            </ion-item-options>\n         </ion-item-sliding> \n      </ion-list>\n   </ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
], RemoteSchedulesModal);

//# sourceMappingURL=remote-schedules.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleCardComponent = (function () {
    function ScheduleCardComponent() {
        this.onViewSchedule = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onTapCheckpoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onTapPin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onTapUnpin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ScheduleCardComponent.prototype.ngOnInit = function () { };
    ScheduleCardComponent.prototype.getCompletenessText = function () {
        var total = this.getCheckpointsTotal();
        var complete = this.getCheckpointsCompleted();
        return ((complete / total) * 100).toFixed(1) + "%";
    };
    ScheduleCardComponent.prototype.getCheckpointsCompleted = function () {
        var _this = this;
        var checkpoint = this.checkpoints.find(function (s) { return s.scheduleId == _this.schedule.schedule.id; });
        return (checkpoint) ? checkpoint.checkpointIds.length : 0;
    };
    ScheduleCardComponent.prototype.getCheckpointsTotal = function () {
        return (this.schedule) ? this.schedule.checkpoints.map(function (c) { return (c) ? c.sections.length : 0; }).reduce(function (a, b) { return a + b; }, 0) : 0;
    };
    ScheduleCardComponent.prototype.getNextCheckpoint = function () {
        var _this = this;
        var checks = this.checkpoints.find(function (c) { return c.scheduleId == _this.schedule.schedule.id; });
        return this.schedule.checkpoints.find(function (c) { return c.sections.map(function (s) { return s.id; }).filter(function (id) { return (checks) ? checks.checkpointIds.indexOf(id) === -1 : true; }).length > 0; });
    };
    ScheduleCardComponent.prototype.hasCheckpoints = function () {
        return (this.schedule.checkpoints) ? this.schedule.checkpoints.length > 0 : false;
    };
    ScheduleCardComponent.prototype.isPinned = function () {
        var _this = this;
        return this.pinned.filter(function (p) { return p === _this.schedule.schedule.id; }).length > 0;
    };
    ScheduleCardComponent.prototype.isScheduleComplete = function () {
        var total = this.getCheckpointsTotal();
        var complete = this.getCheckpointsCompleted();
        return total === complete;
    };
    ScheduleCardComponent.prototype.tapCheckpoint = function (checkpoint) {
        this.onTapCheckpoint.emit(checkpoint);
    };
    ScheduleCardComponent.prototype.viewSchedule = function () {
        this.onViewSchedule.emit(this.schedule.schedule.id);
    };
    ScheduleCardComponent.prototype.tapPin = function () {
        this.onTapPin.emit();
    };
    ScheduleCardComponent.prototype.tapUnpin = function () {
        this.onTapUnpin.emit();
    };
    return ScheduleCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ScheduleCardComponent.prototype, "checkpoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ScheduleCardComponent.prototype, "nextCheckpoint", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ScheduleCardComponent.prototype, "schedule", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ScheduleCardComponent.prototype, "pinned", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ScheduleCardComponent.prototype, "onViewSchedule", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ScheduleCardComponent.prototype, "onTapCheckpoint", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ScheduleCardComponent.prototype, "onTapPin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ScheduleCardComponent.prototype, "onTapUnpin", void 0);
ScheduleCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'schedule-card',
        template: "\n   <ion-card>\n      <ion-card-header>\n         <div text-left>{{schedule.schedule.name}}</div>\n         <div text-right>\n            <a style=\"color:#488aff\" *ngIf=\"!isPinned(pinned)\" (click)=\"tapPin()\">\n               <i class=\"far fa-thumbtack\" data-fa-transform=\"rotate-45 up-15\"></i>\n            </a>\n            <a style=\"color:#488aff\" *ngIf=\"isPinned(pinned)\" (click)=\"tapUnpin()\">\n               <i class=\"fas fa-thumbtack\" data-fa-transform=\"rotate-45 up-15\"></i>\n            </a>\n         </div>\n      </ion-card-header>\n      <ion-row>\n         <ion-col padding-top text-center>\n            {{ getCompletenessText() }}\n         </ion-col>\n         <ion-col>\n            <button ion-button icon-left clear small\n               *ngIf=\"schedule.checkpoints.length > 0\"\n               (click)=\"viewSchedule()\">\n               <ion-icon name=\"ios-eye-outline\"></ion-icon>\n               <div>View Schedule</div>\n            </button>\n            <p ion-text color=\"danger\" text-center padding-top\n               *ngIf=\"!schedule.checkpoints.length > 0\">\n               <ion-icon name=\"md-warning\"></ion-icon>\n               No Checkpoints\n            </p>\n         </ion-col>\n      </ion-row>\n      <ion-list *ngIf=\"hasCheckpoints() && isScheduleComplete()\">\n         <ion-list-header color=\"secondary\">\n            Completed\n            <ion-icon name=\"md-checkmark\"></ion-icon>\n         </ion-list-header>\n      </ion-list>\n      <ion-list *ngIf=\"hasCheckpoints() && !isScheduleComplete()\">\n         <app-schedule-section [schedule]=\"schedule.schedule\" [checkpoint]=\"getNextCheckpoint()\" (tapCheckpoint)=\"tapCheckpoint($event)\"></app-schedule-section>\n      </ion-list>\n   </ion-card>\n   "
    }),
    __metadata("design:paramtypes", [])
], ScheduleCardComponent);

//# sourceMappingURL=schedule-card.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_checkpoints_reducer__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleItemComponent = (function () {
    function ScheduleItemComponent(store) {
        this.store = store;
        this.tapSection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ScheduleItemComponent.prototype.ngOnInit = function () {
        this.checkpoints$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers_checkpoints_reducer__["b" /* getLocalCheckpoints */]);
    };
    ScheduleItemComponent.prototype.handleTapSection = function (section) {
        this.tapSection.emit(section);
    };
    ScheduleItemComponent.prototype.isComplete = function (checkpoints) {
        var _this = this;
        var checkpoint = checkpoints.find(function (c) { return c.scheduleId == _this.section.schedule; });
        return (checkpoint) ? checkpoint.checkpointIds.indexOf(this.section.id) > -1 : false;
    };
    return ScheduleItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ScheduleItemComponent.prototype, "section", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ScheduleItemComponent.prototype, "tapSection", void 0);
ScheduleItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-schedule-item',
        template: "\n   <ion-item (click)=\"handleTapSection(section)\">\n      <span padding-left>{{section.name}}</span>\n      <ion-icon *ngIf=\"!isComplete(checkpoints$ | async)\" item-end color=\"secondary\" name=\"ios-radio-button-off\"></ion-icon>\n      <ion-icon *ngIf=\"isComplete(checkpoints$ | async)\" item-end color=\"secondary\" name=\"md-checkmark-circle\"></ion-icon>\n   </ion-item>\n   "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
], ScheduleItemComponent);

//# sourceMappingURL=schedule-item.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_checkpoints_reducer__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleSectionComponent = (function () {
    function ScheduleSectionComponent(store) {
        this.store = store;
        this.tapCheckpoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isCollapsed = true;
    }
    ScheduleSectionComponent.prototype.ngOnInit = function () {
        this.checkpoints$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers_checkpoints_reducer__["b" /* getLocalCheckpoints */]);
    };
    ScheduleSectionComponent.prototype.handleTapCheckpoint = function (checkpoint) {
        this.tapCheckpoint.emit(checkpoint);
    };
    ScheduleSectionComponent.prototype.isSectionComplete = function (local) {
        var _this = this;
        var localCheckpoints = local.find(function (s) { return s.scheduleId === _this.schedule.id; });
        var saved = (this.checkpoint) ? this.checkpoint.sections.filter(function (c) { return (localCheckpoints) ? localCheckpoints.checkpointIds.indexOf(c.id) > -1 : false; }) : [];
        var sectionsLength = (this.checkpoint) ? this.checkpoint.sections.length : 0;
        return saved.length === sectionsLength;
    };
    ScheduleSectionComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    return ScheduleSectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ScheduleSectionComponent.prototype, "schedule", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ScheduleSectionComponent.prototype, "checkpoint", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ScheduleSectionComponent.prototype, "tapCheckpoint", void 0);
ScheduleSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-schedule-section',
        template: "\n   <ion-item-divider class=\"schedule-divider\" (click)=\"toggleCollapse()\">\n      {{checkpoint?.name}}\n      <ion-icon *ngIf=\"isCollapsed && isSectionComplete(checkpoints$ | async)\" class=\"section-done\" item-end name=\"md-checkmark\"></ion-icon>\n      <ion-icon *ngIf=\"isCollapsed && !isSectionComplete(checkpoints$ | async)\" item-end name=\"ios-add\"></ion-icon>\n      <ion-icon *ngIf=\"!isCollapsed\" item-end name=\"ios-remove\"></ion-icon>\n   </ion-item-divider>\n   <ng-template [ngIf]=\"!isCollapsed\">\n      <ng-template ngFor let-section [ngForOf]=\"checkpoint?.sections\">\n         <app-schedule-item [section]=\"section\" (tapSection)=\"handleTapCheckpoint($event)\"></app-schedule-item>\n      </ng-template>\n   </ng-template>\n   "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
], ScheduleSectionComponent);

//# sourceMappingURL=schedule-section.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_checkpoints_actions__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_checkpoints_reducer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_schedules_reducer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_schedules_actions__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScheduleViewer = ScheduleViewer_1 = (function () {
    function ScheduleViewer(navCtrl, navParams, store, sanitizer, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.sanitizer = sanitizer;
        this.toast = toast;
        this.schedule = (this.navParams.get('schedule'));
    }
    ScheduleViewer.prototype.ngOnInit = function () {
        this.checkpoints$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__reducers_checkpoints_reducer__["b" /* getLocalCheckpoints */]);
        this.pinned$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__reducers_schedules_reducer__["d" /* getPinned */]);
    };
    ScheduleViewer.prototype.getCompletenessText = function (checkpoints, local) {
        var _this = this;
        var schedule = local.find(function (c) { return c.scheduleId == _this.schedule.schedule.id; });
        var complete = (schedule) ? schedule.checkpointIds.length : 0;
        var total = checkpoints.map(function (c) { return c.sections.length; }).reduce(function (a, b) { return a + b; }, 0);
        return complete + "/" + total;
    };
    ScheduleViewer.prototype.getExportScheduleJSON = function (schedule) {
        var jsonBlob = JSON.stringify(schedule);
        var uriComp = encodeURIComponent(jsonBlob);
        var uri = "data:application/json;charset=utf-8," + uriComp;
        return this.sanitizer.bypassSecurityTrustUrl(uri);
    };
    ScheduleViewer.prototype.getExportScheduleName = function (schedule) {
        return schedule.code + ".v" + schedule.version + ".json";
    };
    ScheduleViewer.prototype.handleTapSection = function (section) {
        var _this = this;
        if (section.sections.length > 0) {
            this.navCtrl.push(ScheduleViewer_1, {
                schedule: {
                    schedule: this.schedule,
                    checkpoints: section.sections,
                }
            });
        }
        else {
            this.checkpoints$.subscribe(function (local) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_checkpoints_actions__["g" /* InitSaveLocalCheckpointAction */]({
                    local: local,
                    scheduleId: _this.schedule.schedule.id,
                    checkpointId: section.id,
                }));
            }).unsubscribe();
        }
    };
    ScheduleViewer.prototype.isPinned = function (pinnedSchedules) {
        var _this = this;
        return pinnedSchedules.filter(function (p) { return p === _this.schedule.schedule.id; }).length > 0;
    };
    ScheduleViewer.prototype.pinSchedule = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_schedules_actions__["v" /* PinScheduleAction */](this.schedule.schedule.id));
        this.toast.create({
            message: "This schedule is now pinned.",
            duration: 2000,
            position: 'middle'
        }).present();
    };
    ScheduleViewer.prototype.unpinSchedule = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_schedules_actions__["F" /* UnpinScheduleAction */](this.schedule.schedule.id));
        this.toast.create({
            message: "This schedule is now unpinned.",
            duration: 2000,
            position: 'middle'
        }).present();
    };
    return ScheduleViewer;
}());
ScheduleViewer = ScheduleViewer_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schedule-section',
        template: "\n<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name=\"menu\"></ion-icon>\n      </button>\n      <ion-title></ion-title>\n      <ion-buttons end>\n         <!-- <a [href]=\"getExportScheduleJSON(schedule)\" download=\"{{getExportScheduleName(schedule.schedule)}}\">\n            <i class=\"fa fa-external-link\"></i>\n         </a> -->\n         <button *ngIf=\"!isPinned(pinned$ | async)\" ion-button icon-only (click)=\"pinSchedule()\">\n            <i class=\"far fa-thumbtack\" data-fa-transform=\"rotate-45 left-3\"></i>\n         </button>\n         <button *ngIf=\"isPinned(pinned$ | async)\" ion-button icon-only (click)=\"unpinSchedule()\">\n            <span class=\"fa-layers\">\n               <i class=\"fas fa-thumbtack\" data-fa-transform=\"rotate-45 left-3\"></i>\n            </span>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n   <h2 text-center>{{schedule.schedule.name}}</h2>\n   <ion-list>\n      <ng-template ngFor let-checkpoint [ngForOf]=\"schedule.checkpoints\">\n         <app-schedule-section [schedule]=\"schedule.schedule\" [checkpoint]=\"checkpoint\" (tapCheckpoint)=\"handleTapSection($event)\"></app-schedule-section>\n      </ng-template>\n   </ion-list>\n</ion-content>\n\n<ion-footer>\n   <ion-toolbar text-center>\n      Progress - {{getCompletenessText(schedule.checkpoints, checkpoints$ | async)}}\n   </ion-toolbar>\n</ion-footer>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], ScheduleViewer);

var ScheduleViewer_1;
//# sourceMappingURL=schedule-viewer.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckpointsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckpointsService = (function () {
    function CheckpointsService(storage, http) {
        this.storage = storage;
        this.http = http;
        this.baseUri = "https://chrome-plateau-178520.appspot.com";
        // this.storage.clear();
    }
    CheckpointsService.prototype.getLocalCheckpoints = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('checkpoints'));
    };
    CheckpointsService.prototype.getRemoteCheckpoints = function () {
        return this.http.get(this.baseUri + "/checkpoints");
    };
    CheckpointsService.prototype.saveLocalCheckpoint = function (payload) {
        var updatedLocal = this.renderLocalCheckpoints(payload.local, payload.scheduleId, payload.checkpointId);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.set("checkpoints", updatedLocal));
    };
    CheckpointsService.prototype.renderLocalCheckpoints = function (local, scheduleId, checkpointId) {
        var updatedSchedule = local.find(function (s) { return s.scheduleId === scheduleId; });
        if (!updatedSchedule) {
            updatedSchedule = {
                scheduleId: scheduleId,
                checkpointIds: [],
            };
        }
        if (updatedSchedule.checkpointIds.indexOf(checkpointId) == -1) {
            updatedSchedule.checkpointIds.push(checkpointId);
        }
        else {
            updatedSchedule.checkpointIds = updatedSchedule.checkpointIds.filter(function (c) { return c !== checkpointId; });
        }
        local = local.filter(function (s) { return s.scheduleId !== scheduleId; });
        local.push(updatedSchedule);
        return local;
    };
    return CheckpointsService;
}());
CheckpointsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], CheckpointsService);

//# sourceMappingURL=checkpoints.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedules__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SchedulesService = (function () {
    function SchedulesService(storage, http) {
        this.storage = storage;
        this.http = http;
        // private baseUri: string = "https://chrome-plateau-178520.appspot.com";
        this.baseUri = "https://lifegems.github.io/lifegems-server-gcp/static";
        // this.storage.clear();
        this.schedules = Object.assign([], [
            __WEBPACK_IMPORTED_MODULE_6__schedules__["d" /* watchtowerComplete */],
            __WEBPACK_IMPORTED_MODULE_6__schedules__["a" /* bibleReadingChrono */],
            __WEBPACK_IMPORTED_MODULE_6__schedules__["b" /* bibleReadingCover */],
            __WEBPACK_IMPORTED_MODULE_6__schedules__["c" /* memorialReading */],
        ]);
    }
    SchedulesService.prototype.deleteLocalSchedule = function (id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('schedules').then(function (local) {
            if (local) {
                local = local.filter(function (s) { return s.schedule.id !== id; });
            }
            else {
                local = [];
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(_this.storage.set("schedules", local));
        }));
    };
    SchedulesService.prototype.downloadRemoteSchedule = function (id) {
        return this.http.get(this.baseUri + "/schedules/" + id + ".json"); //   /checkpoints?scheduleId=${id}`);
    };
    SchedulesService.prototype.getLocalSchedules = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('schedules'));
    };
    SchedulesService.prototype.getRemoteSchedules = function () {
        return this.http.get(this.baseUri + "/schedules.json");
    };
    SchedulesService.prototype.saveLocalSchedule = function (payload) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('schedules').then(function (local) {
            if (local) {
                local.push(payload);
            }
            else {
                local = [payload];
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(_this.storage.set("schedules", local));
        }));
    };
    // deprecated
    SchedulesService.prototype.clearSchedule = function (scheduleKey) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.set(scheduleKey, JSON.stringify(this.schedules.find(function (s) { return s.name == scheduleKey; }))));
    };
    SchedulesService.prototype.getSchedules = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(_this.schedules);
        });
    };
    SchedulesService.prototype.getAllSaved = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge(this.storage.get(__WEBPACK_IMPORTED_MODULE_6__schedules__["a" /* bibleReadingChrono */].name), this.storage.get(__WEBPACK_IMPORTED_MODULE_6__schedules__["b" /* bibleReadingCover */].name), this.storage.get(__WEBPACK_IMPORTED_MODULE_6__schedules__["c" /* memorialReading */].name), this.storage.get(__WEBPACK_IMPORTED_MODULE_6__schedules__["d" /* watchtowerComplete */].name));
    };
    SchedulesService.prototype.getSavedSchedule = function (scheduleKey) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get(scheduleKey));
    };
    SchedulesService.prototype.saveSchedule = function (key, schedules) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.set(key, JSON.stringify(schedules.find(function (s) { return s.name == key; }))));
    };
    SchedulesService.prototype.getLocalPinned = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('pinned'));
    };
    SchedulesService.prototype.removeLocalPinned = function (pinned) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('pinned').then(function (savedPinned) {
            savedPinned = savedPinned ? savedPinned.filter(function (s) { return s !== pinned; }) : [];
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(_this.storage.set("pinned", savedPinned));
        }));
    };
    SchedulesService.prototype.saveLocalPinned = function (pinned) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('pinned').then(function (savedPinned) {
            if (savedPinned) {
                savedPinned.push(pinned);
            }
            else {
                savedPinned = [pinned];
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(_this.storage.set("pinned", savedPinned));
        }));
    };
    return SchedulesService;
}());
SchedulesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], SchedulesService);

//# sourceMappingURL=schedules.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__watchtower_complete__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__watchtower_complete__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bible_reading_chrono__ = __webpack_require__(342);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__bible_reading_chrono__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bible_reading_cover__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__bible_reading_cover__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memorial_reading__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__memorial_reading__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watchtowerComplete; });
var watchtowerComplete = {
    name: "The Watchtower!",
    complete: false,
    sections: [
        {
            name: "2017",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "No. 1", complete: false, sections: [] },
                        { name: "No. 2", complete: false, sections: [] },
                        { name: "No. 3", complete: false, sections: [] },
                        { name: "No. 4", complete: false, sections: [] },
                        { name: "No. 5", complete: false, sections: [] },
                        { name: "No. 6", complete: false, sections: [] },
                    ] },
                { name: "Simplified", complete: false, sections: [
                        { name: "January", complete: false, sections: [] },
                        { name: "February", complete: false, sections: [] },
                        { name: "March", complete: false, sections: [] },
                        { name: "April", complete: false, sections: [] },
                        { name: "May", complete: false, sections: [] },
                        { name: "June", complete: false, sections: [] },
                        { name: "July", complete: false, sections: [] },
                        { name: "August", complete: false, sections: [] },
                        { name: "September", complete: false, sections: [] },
                        { name: "October", complete: false, sections: [] },
                        { name: "November", complete: false, sections: [] },
                        { name: "December", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January", complete: false, sections: [] },
                        { name: "February", complete: false, sections: [] },
                        { name: "March", complete: false, sections: [] },
                        { name: "April", complete: false, sections: [] },
                        { name: "May", complete: false, sections: [] },
                        { name: "June", complete: false, sections: [] },
                        { name: "July", complete: false, sections: [] },
                        { name: "August", complete: false, sections: [] },
                        { name: "September", complete: false, sections: [] },
                        { name: "October", complete: false, sections: [] },
                        { name: "November", complete: false, sections: [] },
                        { name: "December", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2016",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "No. 1", complete: false, sections: [] },
                        { name: "No. 2", complete: false, sections: [] },
                        { name: "No. 3", complete: false, sections: [] },
                        { name: "No. 4", complete: false, sections: [] },
                        { name: "No. 5", complete: false, sections: [] },
                        { name: "No. 6", complete: false, sections: [] },
                    ] },
                { name: "Simplified", complete: false, sections: [
                        { name: "January", complete: false, sections: [] },
                        { name: "February", complete: false, sections: [] },
                        { name: "March", complete: false, sections: [] },
                        { name: "April", complete: false, sections: [] },
                        { name: "May", complete: false, sections: [] },
                        { name: "June", complete: false, sections: [] },
                        { name: "July", complete: false, sections: [] },
                        { name: "August", complete: false, sections: [] },
                        { name: "September", complete: false, sections: [] },
                        { name: "October", complete: false, sections: [] },
                        { name: "November", complete: false, sections: [] },
                        { name: "December", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January", complete: false, sections: [] },
                        { name: "February", complete: false, sections: [] },
                        { name: "March", complete: false, sections: [] },
                        { name: "April", complete: false, sections: [] },
                        { name: "May", complete: false, sections: [] },
                        { name: "June", complete: false, sections: [] },
                        { name: "July", complete: false, sections: [] },
                        { name: "August", complete: false, sections: [] },
                        { name: "September", complete: false, sections: [] },
                        { name: "October", complete: false, sections: [] },
                        { name: "November", complete: false, sections: [] },
                        { name: "December", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2015",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "January 1", complete: false, sections: [] },
                        { name: "February 1", complete: false, sections: [] },
                        { name: "March 1", complete: false, sections: [] },
                        { name: "April 1", complete: false, sections: [] },
                        { name: "May 1", complete: false, sections: [] },
                        { name: "June 1", complete: false, sections: [] },
                        { name: "July 1", complete: false, sections: [] },
                        { name: "August 1", complete: false, sections: [] },
                        { name: "September 1", complete: false, sections: [] },
                        { name: "October 1", complete: false, sections: [] },
                        { name: "November 1", complete: false, sections: [] },
                        { name: "December 1", complete: false, sections: [] },
                    ] },
                { name: "Simplified", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2014",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "January 1", complete: false, sections: [] },
                        { name: "February 1", complete: false, sections: [] },
                        { name: "March 1", complete: false, sections: [] },
                        { name: "April 1", complete: false, sections: [] },
                        { name: "May 1", complete: false, sections: [] },
                        { name: "June 1", complete: false, sections: [] },
                        { name: "July 1", complete: false, sections: [] },
                        { name: "August 1", complete: false, sections: [] },
                        { name: "September 1", complete: false, sections: [] },
                        { name: "October 1", complete: false, sections: [] },
                        { name: "November 1", complete: false, sections: [] },
                        { name: "December 1", complete: false, sections: [] },
                    ] },
                { name: "Simplified", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2013",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "January 1", complete: false, sections: [] },
                        { name: "February 1", complete: false, sections: [] },
                        { name: "March 1", complete: false, sections: [] },
                        { name: "April 1", complete: false, sections: [] },
                        { name: "May 1", complete: false, sections: [] },
                        { name: "June 1", complete: false, sections: [] },
                        { name: "July 1", complete: false, sections: [] },
                        { name: "August 1", complete: false, sections: [] },
                        { name: "September 1", complete: false, sections: [] },
                        { name: "October 1", complete: false, sections: [] },
                        { name: "November 1", complete: false, sections: [] },
                        { name: "December 1", complete: false, sections: [] },
                    ] },
                { name: "Simplified", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2012",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "January 1", complete: false, sections: [] },
                        { name: "February 1", complete: false, sections: [] },
                        { name: "March 1", complete: false, sections: [] },
                        { name: "April 1", complete: false, sections: [] },
                        { name: "May 1", complete: false, sections: [] },
                        { name: "June 1", complete: false, sections: [] },
                        { name: "July 1", complete: false, sections: [] },
                        { name: "August 1", complete: false, sections: [] },
                        { name: "September 1", complete: false, sections: [] },
                        { name: "October 1", complete: false, sections: [] },
                        { name: "November 1", complete: false, sections: [] },
                        { name: "December 1", complete: false, sections: [] },
                    ] },
                { name: "Simplified", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2011",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "January 1", complete: false, sections: [] },
                        { name: "February 1", complete: false, sections: [] },
                        { name: "March 1", complete: false, sections: [] },
                        { name: "April 1", complete: false, sections: [] },
                        { name: "May 1", complete: false, sections: [] },
                        { name: "June 1", complete: false, sections: [] },
                        { name: "July 1", complete: false, sections: [] },
                        { name: "August 1", complete: false, sections: [] },
                        { name: "September 1", complete: false, sections: [] },
                        { name: "October 1", complete: false, sections: [] },
                        { name: "November 1", complete: false, sections: [] },
                        { name: "December 1", complete: false, sections: [] },
                    ] },
                { name: "Simplified", complete: false, sections: [
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2010",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "January 1", complete: false, sections: [] },
                        { name: "February 1", complete: false, sections: [] },
                        { name: "March 1", complete: false, sections: [] },
                        { name: "April 1", complete: false, sections: [] },
                        { name: "May 1", complete: false, sections: [] },
                        { name: "June 1", complete: false, sections: [] },
                        { name: "July 1", complete: false, sections: [] },
                        { name: "August 1", complete: false, sections: [] },
                        { name: "September 1", complete: false, sections: [] },
                        { name: "October 1", complete: false, sections: [] },
                        { name: "November 1", complete: false, sections: [] },
                        { name: "December 1", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2009",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "January 1", complete: false, sections: [] },
                        { name: "February 1", complete: false, sections: [] },
                        { name: "March 1", complete: false, sections: [] },
                        { name: "April 1", complete: false, sections: [] },
                        { name: "May 1", complete: false, sections: [] },
                        { name: "June 1", complete: false, sections: [] },
                        { name: "July 1", complete: false, sections: [] },
                        { name: "August 1", complete: false, sections: [] },
                        { name: "September 1", complete: false, sections: [] },
                        { name: "October 1", complete: false, sections: [] },
                        { name: "November 1", complete: false, sections: [] },
                        { name: "December 1", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2008",
            complete: false,
            sections: [
                { name: "Public", complete: false, sections: [
                        { name: "January 1", complete: false, sections: [] },
                        { name: "February 1", complete: false, sections: [] },
                        { name: "March 1", complete: false, sections: [] },
                        { name: "April 1", complete: false, sections: [] },
                        { name: "May 1", complete: false, sections: [] },
                        { name: "June 1", complete: false, sections: [] },
                        { name: "July 1", complete: false, sections: [] },
                        { name: "August 1", complete: false, sections: [] },
                        { name: "September 1", complete: false, sections: [] },
                        { name: "October 1", complete: false, sections: [] },
                        { name: "November 1", complete: false, sections: [] },
                        { name: "December 1", complete: false, sections: [] },
                    ] },
                { name: "Study", complete: false, sections: [
                        { name: "January 15", complete: false, sections: [] },
                        { name: "February 15", complete: false, sections: [] },
                        { name: "March 15", complete: false, sections: [] },
                        { name: "April 15", complete: false, sections: [] },
                        { name: "May 15", complete: false, sections: [] },
                        { name: "June 15", complete: false, sections: [] },
                        { name: "July 15", complete: false, sections: [] },
                        { name: "August 15", complete: false, sections: [] },
                        { name: "September 15", complete: false, sections: [] },
                        { name: "October 15", complete: false, sections: [] },
                        { name: "November 15", complete: false, sections: [] },
                        { name: "December 15", complete: false, sections: [] },
                    ] },
            ]
        },
        {
            name: "2007",
            complete: false,
            sections: [
                { name: "January 1", complete: false, sections: [] },
                { name: "January 15", complete: false, sections: [] },
                { name: "February 1", complete: false, sections: [] },
                { name: "February 15", complete: false, sections: [] },
                { name: "March 1", complete: false, sections: [] },
                { name: "March 15", complete: false, sections: [] },
                { name: "April 1", complete: false, sections: [] },
                { name: "April 15", complete: false, sections: [] },
                { name: "May 1", complete: false, sections: [] },
                { name: "May 15", complete: false, sections: [] },
                { name: "June 1", complete: false, sections: [] },
                { name: "June 15", complete: false, sections: [] },
                { name: "July 1", complete: false, sections: [] },
                { name: "July 15", complete: false, sections: [] },
                { name: "August 1", complete: false, sections: [] },
                { name: "August 15", complete: false, sections: [] },
                { name: "September 1", complete: false, sections: [] },
                { name: "September 15", complete: false, sections: [] },
                { name: "October 1", complete: false, sections: [] },
                { name: "October 15", complete: false, sections: [] },
                { name: "November 1", complete: false, sections: [] },
                { name: "November 15", complete: false, sections: [] },
                { name: "December 1", complete: false, sections: [] },
                { name: "December 15", complete: false, sections: [] },
            ]
        },
        {
            name: "2006",
            complete: false,
            sections: [
                { name: "January 1", complete: false, sections: [] },
                { name: "January 15", complete: false, sections: [] },
                { name: "February 1", complete: false, sections: [] },
                { name: "February 15", complete: false, sections: [] },
                { name: "March 1", complete: false, sections: [] },
                { name: "March 15", complete: false, sections: [] },
                { name: "April 1", complete: false, sections: [] },
                { name: "April 15", complete: false, sections: [] },
                { name: "May 1", complete: false, sections: [] },
                { name: "May 15", complete: false, sections: [] },
                { name: "June 1", complete: false, sections: [] },
                { name: "June 15", complete: false, sections: [] },
                { name: "July 1", complete: false, sections: [] },
                { name: "July 15", complete: false, sections: [] },
                { name: "August 1", complete: false, sections: [] },
                { name: "August 15", complete: false, sections: [] },
                { name: "September 1", complete: false, sections: [] },
                { name: "September 15", complete: false, sections: [] },
                { name: "October 1", complete: false, sections: [] },
                { name: "October 15", complete: false, sections: [] },
                { name: "November 1", complete: false, sections: [] },
                { name: "November 15", complete: false, sections: [] },
                { name: "December 1", complete: false, sections: [] },
                { name: "December 15", complete: false, sections: [] },
            ]
        },
        {
            name: "2005",
            complete: false,
            sections: [
                { name: "January 1", complete: false, sections: [] },
                { name: "January 15", complete: false, sections: [] },
                { name: "February 1", complete: false, sections: [] },
                { name: "February 15", complete: false, sections: [] },
                { name: "March 1", complete: false, sections: [] },
                { name: "March 15", complete: false, sections: [] },
                { name: "April 1", complete: false, sections: [] },
                { name: "April 15", complete: false, sections: [] },
                { name: "May 1", complete: false, sections: [] },
                { name: "May 15", complete: false, sections: [] },
                { name: "June 1", complete: false, sections: [] },
                { name: "June 15", complete: false, sections: [] },
                { name: "July 1", complete: false, sections: [] },
                { name: "July 15", complete: false, sections: [] },
                { name: "August 1", complete: false, sections: [] },
                { name: "August 15", complete: false, sections: [] },
                { name: "September 1", complete: false, sections: [] },
                { name: "September 15", complete: false, sections: [] },
                { name: "October 1", complete: false, sections: [] },
                { name: "October 15", complete: false, sections: [] },
                { name: "November 1", complete: false, sections: [] },
                { name: "November 15", complete: false, sections: [] },
                { name: "December 1", complete: false, sections: [] },
                { name: "December 15", complete: false, sections: [] },
            ]
        },
        {
            name: "2004",
            complete: false,
            sections: [
                { name: "January 1", complete: false, sections: [] },
                { name: "January 15", complete: false, sections: [] },
                { name: "February 1", complete: false, sections: [] },
                { name: "February 15", complete: false, sections: [] },
                { name: "March 1", complete: false, sections: [] },
                { name: "March 15", complete: false, sections: [] },
                { name: "April 1", complete: false, sections: [] },
                { name: "April 15", complete: false, sections: [] },
                { name: "May 1", complete: false, sections: [] },
                { name: "May 15", complete: false, sections: [] },
                { name: "June 1", complete: false, sections: [] },
                { name: "June 15", complete: false, sections: [] },
                { name: "July 1", complete: false, sections: [] },
                { name: "July 15", complete: false, sections: [] },
                { name: "August 1", complete: false, sections: [] },
                { name: "August 15", complete: false, sections: [] },
                { name: "September 1", complete: false, sections: [] },
                { name: "September 15", complete: false, sections: [] },
                { name: "October 1", complete: false, sections: [] },
                { name: "October 15", complete: false, sections: [] },
                { name: "November 1", complete: false, sections: [] },
                { name: "November 15", complete: false, sections: [] },
                { name: "December 1", complete: false, sections: [] },
                { name: "December 15", complete: false, sections: [] },
            ]
        },
        {
            name: "2003",
            complete: false,
            sections: [
                { name: "January 1", complete: false, sections: [] },
                { name: "January 15", complete: false, sections: [] },
                { name: "February 1", complete: false, sections: [] },
                { name: "February 15", complete: false, sections: [] },
                { name: "March 1", complete: false, sections: [] },
                { name: "March 15", complete: false, sections: [] },
                { name: "April 1", complete: false, sections: [] },
                { name: "April 15", complete: false, sections: [] },
                { name: "May 1", complete: false, sections: [] },
                { name: "May 15", complete: false, sections: [] },
                { name: "June 1", complete: false, sections: [] },
                { name: "June 15", complete: false, sections: [] },
                { name: "July 1", complete: false, sections: [] },
                { name: "July 15", complete: false, sections: [] },
                { name: "August 1", complete: false, sections: [] },
                { name: "August 15", complete: false, sections: [] },
                { name: "September 1", complete: false, sections: [] },
                { name: "September 15", complete: false, sections: [] },
                { name: "October 1", complete: false, sections: [] },
                { name: "October 15", complete: false, sections: [] },
                { name: "November 1", complete: false, sections: [] },
                { name: "November 15", complete: false, sections: [] },
                { name: "December 1", complete: false, sections: [] },
                { name: "December 15", complete: false, sections: [] },
            ]
        },
        {
            name: "2002",
            complete: false,
            sections: [
                { name: "January 1", complete: false, sections: [] },
                { name: "January 15", complete: false, sections: [] },
                { name: "February 1", complete: false, sections: [] },
                { name: "February 15", complete: false, sections: [] },
                { name: "March 1", complete: false, sections: [] },
                { name: "March 15", complete: false, sections: [] },
                { name: "April 1", complete: false, sections: [] },
                { name: "April 15", complete: false, sections: [] },
                { name: "May 1", complete: false, sections: [] },
                { name: "May 15", complete: false, sections: [] },
                { name: "June 1", complete: false, sections: [] },
                { name: "June 15", complete: false, sections: [] },
                { name: "July 1", complete: false, sections: [] },
                { name: "July 15", complete: false, sections: [] },
                { name: "August 1", complete: false, sections: [] },
                { name: "August 15", complete: false, sections: [] },
                { name: "September 1", complete: false, sections: [] },
                { name: "September 15", complete: false, sections: [] },
                { name: "October 1", complete: false, sections: [] },
                { name: "October 15", complete: false, sections: [] },
                { name: "November 1", complete: false, sections: [] },
                { name: "November 15", complete: false, sections: [] },
                { name: "December 1", complete: false, sections: [] },
                { name: "December 15", complete: false, sections: [] },
            ]
        },
        {
            name: "2001",
            complete: false,
            sections: [
                { name: "January 1", complete: false, sections: [] },
                { name: "January 15", complete: false, sections: [] },
                { name: "February 1", complete: false, sections: [] },
                { name: "February 15", complete: false, sections: [] },
                { name: "March 1", complete: false, sections: [] },
                { name: "March 15", complete: false, sections: [] },
                { name: "April 1", complete: false, sections: [] },
                { name: "April 15", complete: false, sections: [] },
                { name: "May 1", complete: false, sections: [] },
                { name: "May 15", complete: false, sections: [] },
                { name: "June 1", complete: false, sections: [] },
                { name: "June 15", complete: false, sections: [] },
                { name: "July 1", complete: false, sections: [] },
                { name: "July 15", complete: false, sections: [] },
                { name: "August 1", complete: false, sections: [] },
                { name: "August 15", complete: false, sections: [] },
                { name: "September 1", complete: false, sections: [] },
                { name: "September 15", complete: false, sections: [] },
                { name: "October 1", complete: false, sections: [] },
                { name: "October 15", complete: false, sections: [] },
                { name: "November 1", complete: false, sections: [] },
                { name: "November 15", complete: false, sections: [] },
                { name: "December 1", complete: false, sections: [] },
                { name: "December 15", complete: false, sections: [] },
            ]
        },
        {
            name: "2000",
            complete: false,
            sections: [
                { name: "January 1", complete: false, sections: [] },
                { name: "January 15", complete: false, sections: [] },
                { name: "February 1", complete: false, sections: [] },
                { name: "February 15", complete: false, sections: [] },
                { name: "March 1", complete: false, sections: [] },
                { name: "March 15", complete: false, sections: [] },
                { name: "April 1", complete: false, sections: [] },
                { name: "April 15", complete: false, sections: [] },
                { name: "May 1", complete: false, sections: [] },
                { name: "May 15", complete: false, sections: [] },
                { name: "June 1", complete: false, sections: [] },
                { name: "June 15", complete: false, sections: [] },
                { name: "July 1", complete: false, sections: [] },
                { name: "July 15", complete: false, sections: [] },
                { name: "August 1", complete: false, sections: [] },
                { name: "August 15", complete: false, sections: [] },
                { name: "September 1", complete: false, sections: [] },
                { name: "September 15", complete: false, sections: [] },
                { name: "October 1", complete: false, sections: [] },
                { name: "October 15", complete: false, sections: [] },
                { name: "November 1", complete: false, sections: [] },
                { name: "November 15", complete: false, sections: [] },
                { name: "December 1", complete: false, sections: [] },
                { name: "December 15", complete: false, sections: [] },
            ]
        },
    ],
};
//# sourceMappingURL=watchtower-complete.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bibleReadingChrono; });
var bibleReadingChrono = {
    name: "Bible - Chronological",
    complete: false,
    sections: [
        {
            name: "Day 1",
            complete: false,
            sections: [
                { name: "Genesis 1", complete: false, sections: [] },
                { name: "Genesis 2", complete: false, sections: [] },
                { name: "Genesis 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 2",
            complete: false,
            sections: [
                { name: "Genesis 4", complete: false, sections: [] },
                { name: "Genesis 5", complete: false, sections: [] },
                { name: "1 Chronicles 1:1-4", complete: false, sections: [] },
                { name: "Genesis 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 3",
            complete: false,
            sections: [
                { name: "Genesis 7", complete: false, sections: [] },
                { name: "Genesis 8", complete: false, sections: [] },
                { name: "Genesis 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 4",
            complete: false,
            sections: [
                { name: "Genesis 10:1-5", complete: false, sections: [] },
                { name: "1 Chronicles 1:5-7", complete: false, sections: [] },
                { name: "Genesis 10:6-20", complete: false, sections: [] },
                { name: "1 Chronicles 1:8-16", complete: false, sections: [] },
                { name: "Genesis 10:21-11:26", complete: false, sections: [] },
                { name: "1 Chronicles 1:17-27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 5",
            complete: false,
            sections: [
                { name: "Genesis 11:27-32", complete: false, sections: [] },
                { name: "Genesis 12", complete: false, sections: [] },
                { name: "Genesis 13", complete: false, sections: [] },
                { name: "Genesis 14", complete: false, sections: [] },
                { name: "Genesis 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 6",
            complete: false,
            sections: [
                { name: "Genesis 16", complete: false, sections: [] },
                { name: "Genesis 17", complete: false, sections: [] },
                { name: "Genesis 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 7",
            complete: false,
            sections: [
                { name: "Genesis 19", complete: false, sections: [] },
                { name: "Genesis 20", complete: false, sections: [] },
                { name: "Genesis 21", complete: false, sections: [] },
                { name: "Genesis 25:12-18", complete: false, sections: [] },
                { name: "1 Chronicles 1:28-31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 8",
            complete: false,
            sections: [
                { name: "Genesis 22", complete: false, sections: [] },
                { name: "Genesis 23", complete: false, sections: [] },
                { name: "Genesis 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 9",
            complete: false,
            sections: [
                { name: "Genesis 25:1-4", complete: false, sections: [] },
                { name: "1 Chronicles 1:32-34", complete: false, sections: [] },
                { name: "Genesis 25:5-11", complete: false, sections: [] },
                { name: "Genesis 25:19-34", complete: false, sections: [] },
                { name: "Genesis 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 10",
            complete: false,
            sections: [
                { name: "Genesis 27", complete: false, sections: [] },
                { name: "Genesis 28:1-9", complete: false, sections: [] },
                { name: "Genesis 36", complete: false, sections: [] },
                { name: "1 Chronicles 1:35-54", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 11",
            complete: false,
            sections: [
                { name: "Genesis 28:10-22", complete: false, sections: [] },
                { name: "Genesis 29", complete: false, sections: [] },
                { name: "Genesis 30", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 12",
            complete: false,
            sections: [
                { name: "Genesis 31", complete: false, sections: [] },
                { name: "Genesis 32", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 13",
            complete: false,
            sections: [
                { name: "Genesis 33", complete: false, sections: [] },
                { name: "Genesis 34", complete: false, sections: [] },
                { name: "Genesis 35", complete: false, sections: [] },
                { name: "1 Chronicles 2:1,2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 14",
            complete: false,
            sections: [
                { name: "Genesis 37", complete: false, sections: [] },
                { name: "Genesis 38", complete: false, sections: [] },
                { name: "Genesis 39", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 15",
            complete: false,
            sections: [
                { name: "Genesis 40", complete: false, sections: [] },
                { name: "Genesis 41", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 16",
            complete: false,
            sections: [
                { name: "Genesis 42", complete: false, sections: [] },
                { name: "Genesis 43", complete: false, sections: [] },
                { name: "Genesis 44", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 17",
            complete: false,
            sections: [
                { name: "Genesis 45", complete: false, sections: [] },
                { name: "Genesis 46:1-9", complete: false, sections: [] },
                { name: "1 Chronicles 5:1-6", complete: false, sections: [] },
                { name: "Genesis 46:10-12", complete: false, sections: [] },
                { name: "1 Chronicles 2:18-55", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 18",
            complete: false,
            sections: [
                { name: "1 Chronicles 4:1-23", complete: false, sections: [] },
                { name: "Genesis 46:13", complete: false, sections: [] },
                { name: "1 Chronicles 7:1-5", complete: false, sections: [] },
                { name: "Genesis 46:14-18", complete: false, sections: [] },
                { name: "1 Chronicles 7:30-40", complete: false, sections: [] },
                { name: "Genesis 46:19-25", complete: false, sections: [] },
                { name: "1 Chronicles 7:6-12", complete: false, sections: [] },
                { name: "Genesis 46:26-34", complete: false, sections: [] },
                { name: "Genesis 47:1-12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 19",
            complete: false,
            sections: [
                { name: "Genesis 47:13-31", complete: false, sections: [] },
                { name: "Genesis 48", complete: false, sections: [] },
                { name: "Genesis 49", complete: false, sections: [] },
                { name: "Genesis 50", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 20",
            complete: false,
            sections: [
                { name: "Job 1", complete: false, sections: [] },
                { name: "Job 2", complete: false, sections: [] },
                { name: "Job 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 21",
            complete: false,
            sections: [
                { name: "Job 4", complete: false, sections: [] },
                { name: "Job 5", complete: false, sections: [] },
                { name: "Job 6", complete: false, sections: [] },
                { name: "Job 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 22",
            complete: false,
            sections: [
                { name: "Job 8", complete: false, sections: [] },
                { name: "Job 9", complete: false, sections: [] },
                { name: "Job 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 23",
            complete: false,
            sections: [
                { name: "Job 11", complete: false, sections: [] },
                { name: "Job 12", complete: false, sections: [] },
                { name: "Job 13", complete: false, sections: [] },
                { name: "Job 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 24",
            complete: false,
            sections: [
                { name: "Job 15", complete: false, sections: [] },
                { name: "Job 16", complete: false, sections: [] },
                { name: "Job 17", complete: false, sections: [] },
                { name: "Job 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 25",
            complete: false,
            sections: [
                { name: "Job 19", complete: false, sections: [] },
                { name: "Job 20", complete: false, sections: [] },
                { name: "Job 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 26",
            complete: false,
            sections: [
                { name: "Job 22", complete: false, sections: [] },
                { name: "Job 23", complete: false, sections: [] },
                { name: "Job 24", complete: false, sections: [] },
                { name: "Job 25", complete: false, sections: [] },
                { name: "Job 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 27",
            complete: false,
            sections: [
                { name: "Job 27", complete: false, sections: [] },
                { name: "Job 28", complete: false, sections: [] },
                { name: "Job 29", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 28",
            complete: false,
            sections: [
                { name: "Job 30", complete: false, sections: [] },
                { name: "Job 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 29",
            complete: false,
            sections: [
                { name: "Job 32", complete: false, sections: [] },
                { name: "Job 33", complete: false, sections: [] },
                { name: "Job 34", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 30",
            complete: false,
            sections: [
                { name: "Job 35", complete: false, sections: [] },
                { name: "Job 36", complete: false, sections: [] },
                { name: "Job 37", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 31",
            complete: false,
            sections: [
                { name: "Job 38", complete: false, sections: [] },
                { name: "Job 39", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 32",
            complete: false,
            sections: [
                { name: "Job 40", complete: false, sections: [] },
                { name: "Job 41", complete: false, sections: [] },
                { name: "Job 42", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 33",
            complete: false,
            sections: [
                { name: "Exodus 1", complete: false, sections: [] },
                { name: "Exodus 2", complete: false, sections: [] },
                { name: "Exodus 3", complete: false, sections: [] },
                { name: "Exodus 4:1-17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 34",
            complete: false,
            sections: [
                { name: "Exodus 4:18-31", complete: false, sections: [] },
                { name: "Exodus 5", complete: false, sections: [] },
                { name: "Exodus 6:1-27", complete: false, sections: [] },
                { name: "1 Chronicles 6:1-4a", complete: false, sections: [] },
                { name: "Exodus 6:28-30", complete: false, sections: [] },
                { name: "Exodus 7:1-13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 35",
            complete: false,
            sections: [
                { name: "Exodus 7:14-25", complete: false, sections: [] },
                { name: "Exodus 8", complete: false, sections: [] },
                { name: "Exodus 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 36",
            complete: false,
            sections: [
                { name: "Exodus 10", complete: false, sections: [] },
                { name: "Exodus 11", complete: false, sections: [] },
                { name: "Exodus 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 37",
            complete: false,
            sections: [
                { name: "Exodus 13", complete: false, sections: [] },
                { name: "Exodus 14", complete: false, sections: [] },
                { name: "Exodus 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 38",
            complete: false,
            sections: [
                { name: "Exodus 16", complete: false, sections: [] },
                { name: "Exodus 17", complete: false, sections: [] },
                { name: "Exodus 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 39",
            complete: false,
            sections: [
                { name: "Exodus 19", complete: false, sections: [] },
                { name: "Exodus 20", complete: false, sections: [] },
                { name: "Exodus 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 40",
            complete: false,
            sections: [
                { name: "Exodus 22", complete: false, sections: [] },
                { name: "Exodus 23", complete: false, sections: [] },
                { name: "Exodus 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 41",
            complete: false,
            sections: [
                { name: "Exodus 25", complete: false, sections: [] },
                { name: "Exodus 26", complete: false, sections: [] },
                { name: "Exodus 27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 42",
            complete: false,
            sections: [
                { name: "Exodus 28", complete: false, sections: [] },
                { name: "Exodus 29", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 43",
            complete: false,
            sections: [
                { name: "Exodus 31", complete: false, sections: [] },
                { name: "Exodus 32", complete: false, sections: [] },
                { name: "Exodus 33:1-6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 44",
            complete: false,
            sections: [
                { name: "Exodus 33:7-23", complete: false, sections: [] },
                { name: "Exodus 34", complete: false, sections: [] },
                { name: "Exodus 35", complete: false, sections: [] },
                { name: "Exodus 36:1-7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 45",
            complete: false,
            sections: [
                { name: "Exodus 36:8-38", complete: false, sections: [] },
                { name: "Exodus 37", complete: false, sections: [] },
                { name: "Exodus 38", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 46",
            complete: false,
            sections: [
                { name: "Exodus 39", complete: false, sections: [] },
                { name: "Exodus 40", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 47",
            complete: false,
            sections: [
                { name: "Leviticus 1", complete: false, sections: [] },
                { name: "Leviticus 2", complete: false, sections: [] },
                { name: "Leviticus 3", complete: false, sections: [] },
                { name: "Leviticus 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 48",
            complete: false,
            sections: [
                { name: "Leviticus 5", complete: false, sections: [] },
                { name: "Leviticus 6", complete: false, sections: [] },
                { name: "Leviticus 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 49",
            complete: false,
            sections: [
                { name: "Leviticus 8", complete: false, sections: [] },
                { name: "Leviticus 9", complete: false, sections: [] },
                { name: "Leviticus 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 50",
            complete: false,
            sections: [
                { name: "Leviticus 11", complete: false, sections: [] },
                { name: "Leviticus 12", complete: false, sections: [] },
                { name: "Leviticus 13:1-46", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 51",
            complete: false,
            sections: [
                { name: "Leviticus 13:47-59", complete: false, sections: [] },
                { name: "Leviticus 14", complete: false, sections: [] },
                { name: "Leviticus 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 52",
            complete: false,
            sections: [
                { name: "Leviticus 16", complete: false, sections: [] },
                { name: "Leviticus 17", complete: false, sections: [] },
                { name: "Leviticus 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 53",
            complete: false,
            sections: [
                { name: "Leviticus 19", complete: false, sections: [] },
                { name: "Leviticus 20", complete: false, sections: [] },
                { name: "Leviticus 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 54",
            complete: false,
            sections: [
                { name: "Leviticus 22", complete: false, sections: [] },
                { name: "Leviticus 23", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 55",
            complete: false,
            sections: [
                { name: "Leviticus 24", complete: false, sections: [] },
                { name: "Leviticus 25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 56",
            complete: false,
            sections: [
                { name: "Leviticus 26", complete: false, sections: [] },
                { name: "Leviticus 27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 57",
            complete: false,
            sections: [
                { name: "Numbers 1", complete: false, sections: [] },
                { name: "Numbers 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 58",
            complete: false,
            sections: [
                { name: "Numbers 3", complete: false, sections: [] },
                { name: "Numbers 4:1-33", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 59",
            complete: false,
            sections: [
                { name: "Numbers 4:34-49", complete: false, sections: [] },
                { name: "Numbers 5", complete: false, sections: [] },
                { name: "Numbers 6:1-27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 60",
            complete: false,
            sections: [
                { name: "Numbers 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 61",
            complete: false,
            sections: [
                { name: "Numbers 8", complete: false, sections: [] },
                { name: "Numbers 9", complete: false, sections: [] },
                { name: "Numbers 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 62",
            complete: false,
            sections: [
                { name: "Numbers 11", complete: false, sections: [] },
                { name: "Numbers 12", complete: false, sections: [] },
                { name: "Numbers 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 63",
            complete: false,
            sections: [
                { name: "Numbers 14", complete: false, sections: [] },
                { name: "Numbers 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 64",
            complete: false,
            sections: [
                { name: "Numbers 16", complete: false, sections: [] },
                { name: "Numbers 17", complete: false, sections: [] },
                { name: "Numbers 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 65",
            complete: false,
            sections: [
                { name: "Numbers 19", complete: false, sections: [] },
                { name: "Numbers 20", complete: false, sections: [] },
                { name: "Numbers 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 66",
            complete: false,
            sections: [
                { name: "Numbers 22", complete: false, sections: [] },
                { name: "Numbers 23", complete: false, sections: [] },
                { name: "Numbers 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 67",
            complete: false,
            sections: [
                { name: "Numbers 25", complete: false, sections: [] },
                { name: "Numbers 26:1-34", complete: false, sections: [] },
                { name: "1 Chronicles 7:13-19", complete: false, sections: [] },
                { name: "Numbers 26:35-37", complete: false, sections: [] },
                { name: "1 Chronicles 7:20-29", complete: false, sections: [] },
                { name: "Numbers 26:38-65", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 68",
            complete: false,
            sections: [
                { name: "Numbers 27", complete: false, sections: [] },
                { name: "Numbers 28", complete: false, sections: [] },
                { name: "Numbers 29", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 69",
            complete: false,
            sections: [
                { name: "Numbers 30", complete: false, sections: [] },
                { name: "Numbers 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 70",
            complete: false,
            sections: [
                { name: "Numbers 32", complete: false, sections: [] },
                { name: "Numbers 33", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 71",
            complete: false,
            sections: [
                { name: "Numbers 34", complete: false, sections: [] },
                { name: "Numbers 35", complete: false, sections: [] },
                { name: "Numbers 36", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 72",
            complete: false,
            sections: [
                { name: "Deuteronomy 1", complete: false, sections: [] },
                { name: "Deuteronomy 2", complete: false, sections: [] },
                { name: "Deuteronomy 3:1-11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 73",
            complete: false,
            sections: [
                { name: "Deuteronomy 3:12-29", complete: false, sections: [] },
                { name: "Deuteronomy 4", complete: false, sections: [] },
                { name: "Deuteronomy 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 74",
            complete: false,
            sections: [
                { name: "Deuteronomy 6", complete: false, sections: [] },
                { name: "Deuteronomy 7", complete: false, sections: [] },
                { name: "Deuteronomy 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 75",
            complete: false,
            sections: [
                { name: "Deuteronomy 9", complete: false, sections: [] },
                { name: "Deuteronomy 10", complete: false, sections: [] },
                { name: "Deuteronomy 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 76",
            complete: false,
            sections: [
                { name: "Deuteronomy 12", complete: false, sections: [] },
                { name: "Deuteronomy 13", complete: false, sections: [] },
                { name: "Deuteronomy 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 77",
            complete: false,
            sections: [
                { name: "Deuteronomy 15", complete: false, sections: [] },
                { name: "Deuteronomy 16", complete: false, sections: [] },
                { name: "Deuteronomy 17", complete: false, sections: [] },
                { name: "Deuteronomy 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 78",
            complete: false,
            sections: [
                { name: "Deuteronomy 19", complete: false, sections: [] },
                { name: "Deuteronomy 20", complete: false, sections: [] },
                { name: "Deuteronomy 21", complete: false, sections: [] },
                { name: "Deuteronomy 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 79",
            complete: false,
            sections: [
                { name: "Deuteronomy 23", complete: false, sections: [] },
                { name: "Deuteronomy 24", complete: false, sections: [] },
                { name: "Deuteronomy 25", complete: false, sections: [] },
                { name: "Deuteronomy 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 80",
            complete: false,
            sections: [
                { name: "Deuteronomy 27", complete: false, sections: [] },
                { name: "Deuteronomy 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 81",
            complete: false,
            sections: [
                { name: "Deuteronomy 29", complete: false, sections: [] },
                { name: "Deuteronomy 30", complete: false, sections: [] },
                { name: "Deuteronomy 31:1-29", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 82",
            complete: false,
            sections: [
                { name: "Deuteronomy 31:30", complete: false, sections: [] },
                { name: "Deuteronomy 32", complete: false, sections: [] },
                { name: "Psalm 90", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 83",
            complete: false,
            sections: [
                { name: "Deuteronomy 33", complete: false, sections: [] },
                { name: "Deuteronomy 34", complete: false, sections: [] },
                { name: "Joshua 1", complete: false, sections: [] },
                { name: "Joshua 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 84",
            complete: false,
            sections: [
                { name: "Joshua 3", complete: false, sections: [] },
                { name: "Joshua 4", complete: false, sections: [] },
                { name: "Joshua 5", complete: false, sections: [] },
                { name: "Joshua 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 85",
            complete: false,
            sections: [
                { name: "Joshua 7", complete: false, sections: [] },
                { name: "Joshua 8", complete: false, sections: [] },
                { name: "Joshua 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 86",
            complete: false,
            sections: [
                { name: "Joshua 10", complete: false, sections: [] },
                { name: "Joshua 11", complete: false, sections: [] },
                { name: "Joshua 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 87",
            complete: false,
            sections: [
                { name: "Joshua 13", complete: false, sections: [] },
                { name: "Joshua 14", complete: false, sections: [] },
                { name: "Joshua 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 88",
            complete: false,
            sections: [
                { name: "Joshua 16", complete: false, sections: [] },
                { name: "Joshua 17", complete: false, sections: [] },
                { name: "Joshua 18", complete: false, sections: [] },
                { name: "Joshua 19:1-9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 89",
            complete: false,
            sections: [
                { name: "1 Chronicles 4:24-33", complete: false, sections: [] },
                { name: "Joshua 19:10-31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 90",
            complete: false,
            sections: [
                { name: "Joshua 19:32-51", complete: false, sections: [] },
                { name: "Joshua 20", complete: false, sections: [] },
                { name: "Joshua 21", complete: false, sections: [] },
                { name: "1 Chronicles 6:54-81", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 91",
            complete: false,
            sections: [
                { name: "Joshua 22", complete: false, sections: [] },
                { name: "Joshua 23", complete: false, sections: [] },
                { name: "Joshua 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 92",
            complete: false,
            sections: [
                { name: "Judges 1", complete: false, sections: [] },
                { name: "Judges 2", complete: false, sections: [] },
                { name: "Judges 3:1-6", complete: false, sections: [] },
                { name: "Judges 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 93",
            complete: false,
            sections: [
                { name: "Judges 18", complete: false, sections: [] },
                { name: "Judges 3:7-31", complete: false, sections: [] },
                { name: "Judges 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 94",
            complete: false,
            sections: [
                { name: "Judges 5", complete: false, sections: [] },
                { name: "Judges 6", complete: false, sections: [] },
                { name: "Judges 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 95",
            complete: false,
            sections: [
                { name: "Judges 8", complete: false, sections: [] },
                { name: "Judges 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 96",
            complete: false,
            sections: [
                { name: "Judges 10", complete: false, sections: [] },
                { name: "Judges 11", complete: false, sections: [] },
                { name: "Judges 12", complete: false, sections: [] },
                { name: "Judges 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 97",
            complete: false,
            sections: [
                { name: "Judges 19", complete: false, sections: [] },
                { name: "Judges 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 98",
            complete: false,
            sections: [
                { name: "Judges 21", complete: false, sections: [] },
                { name: "1 Chronicles 6:4b-15", complete: false, sections: [] },
                { name: "Ruth 1", complete: false, sections: [] },
                { name: "Ruth 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 99",
            complete: false,
            sections: [
                { name: "Ruth 3", complete: false, sections: [] },
                { name: "Ruth 4", complete: false, sections: [] },
                { name: "1 Chronicles 2:3-16", complete: false, sections: [] },
                { name: "1 Samuel 1", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 100",
            complete: false,
            sections: [
                { name: "1 Samuel 2:1-10", complete: false, sections: [] },
                { name: "Psalm 113", complete: false, sections: [] },
                { name: "1 Samuel 2:11-21", complete: false, sections: [] },
                { name: "Judges 14", complete: false, sections: [] },
                { name: "Judges 15", complete: false, sections: [] },
                { name: "Judges 16:1-22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 101",
            complete: false,
            sections: [
                { name: "Judges 16:23-31", complete: false, sections: [] },
                { name: "1 Samuel 2:22-36", complete: false, sections: [] },
                { name: "1 Samuel 3", complete: false, sections: [] },
                { name: "1 Samuel 4", complete: false, sections: [] },
                { name: "1 Samuel 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 102",
            complete: false,
            sections: [
                { name: "1 Samuel 6", complete: false, sections: [] },
                { name: "1 Samuel 7", complete: false, sections: [] },
                { name: "1 Samuel 8", complete: false, sections: [] },
                { name: "1 Samuel 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 103",
            complete: false,
            sections: [
                { name: "1 Samuel 10", complete: false, sections: [] },
                { name: "1 Samuel 11", complete: false, sections: [] },
                { name: "1 Samuel 12", complete: false, sections: [] },
                { name: "1 Samuel 13:1-22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 104",
            complete: false,
            sections: [
                { name: "1 Samuel 13:23", complete: false, sections: [] },
                { name: "1 Samuel 14", complete: false, sections: [] },
                { name: "1 Chronicles 8", complete: false, sections: [] },
                { name: "1 Chronicles 9:1a", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 105",
            complete: false,
            sections: [
                { name: "1 Chronicles 9:35-44", complete: false, sections: [] },
                { name: "1 Chronicles 5:7-10", complete: false, sections: [] },
                { name: "1 Chronicles 5:18-22", complete: false, sections: [] },
                { name: "1 Samuel 15", complete: false, sections: [] },
                { name: "1 Samuel 16", complete: false, sections: [] },
                { name: "Psalm 110", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 106",
            complete: false,
            sections: [
                { name: "1 Samuel 17", complete: false, sections: [] },
                { name: "1 Samuel 18", complete: false, sections: [] },
                { name: "Psalm 144", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 107",
            complete: false,
            sections: [
                { name: "1 Samuel 19", complete: false, sections: [] },
                { name: "1 Samuel 20", complete: false, sections: [] },
                { name: "Psalm 59", complete: false, sections: [] },
                { name: "Psalm 133", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 108",
            complete: false,
            sections: [
                { name: "1 Samuel 21", complete: false, sections: [] },
                { name: "Psalm 34", complete: false, sections: [] },
                { name: "Psalm 56", complete: false, sections: [] },
                { name: "1 Samuel 22:1-5", complete: false, sections: [] },
                { name: "Psalm 57", complete: false, sections: [] },
                { name: "Psalm 142", complete: false, sections: [] },
                { name: "1 Chronicles 12:8-18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 109",
            complete: false,
            sections: [
                { name: "1 Samuel 22:6-23", complete: false, sections: [] },
                { name: "Psalm 52", complete: false, sections: [] },
                { name: "1 Samuel 23", complete: false, sections: [] },
                { name: "Psalm 54", complete: false, sections: [] },
                { name: "Psalm 63", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 110",
            complete: false,
            sections: [
                { name: "Psalm 13", complete: false, sections: [] },
                { name: "Psalm 22", complete: false, sections: [] },
                { name: "1 Samuel 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 111",
            complete: false,
            sections: [
                { name: "Psalm 7", complete: false, sections: [] },
                { name: "Psalm 17", complete: false, sections: [] },
                { name: "Psalm 35", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 112",
            complete: false,
            sections: [
                { name: "1 Samuel 25", complete: false, sections: [] },
                { name: "Psalm 14", complete: false, sections: [] },
                { name: "Psalm 53", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 113",
            complete: false,
            sections: [
                { name: "2 Samuel 25", complete: false, sections: [] },
                { name: "Psalm 18", complete: false, sections: [] },
                { name: "1 Samuel 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 114",
            complete: false,
            sections: [
                { name: "1 Samuel 27", complete: false, sections: [] },
                { name: "Psalm 31", complete: false, sections: [] },
                { name: "1 Chronicles 12:1-7", complete: false, sections: [] },
                { name: "1 Samuel 28:1,2", complete: false, sections: [] },
                { name: "1 Samuel 28:1,2", complete: false, sections: [] },
                { name: "1 Samuel 29", complete: false, sections: [] },
                { name: "1 Chronicles 12:19-22", complete: false, sections: [] },
                { name: "Psalm 5", complete: false, sections: [] },
                { name: "Psalm 40", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 115",
            complete: false,
            sections: [
                { name: "Psalm 69", complete: false, sections: [] },
                { name: "Psalm 86", complete: false, sections: [] },
                { name: "Psalm 131", complete: false, sections: [] },
                { name: "1 Samuel 28:3-25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 116",
            complete: false,
            sections: [
                { name: "1 Samuel 30", complete: false, sections: [] },
                { name: "1 Samuel 31", complete: false, sections: [] },
                { name: "1 Chronicles 10", complete: false, sections: [] },
                { name: "2 Samuel 4:4", complete: false, sections: [] },
                { name: "2 Samuel 1", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 117",
            complete: false,
            sections: [
                { name: "2 Samuel 2", complete: false, sections: [] },
                { name: "2 Samuel 3:1-5", complete: false, sections: [] },
                { name: "1 Chronicles 3:1-4a", complete: false, sections: [] },
                { name: "2 Samuel 3:6-39", complete: false, sections: [] },
                { name: "2 Samuel 4:1-3", complete: false, sections: [] },
                { name: "2 Samuel 4:5-12", complete: false, sections: [] },
                { name: "2 Samuel 5:1-5", complete: false, sections: [] },
                { name: "1 Chronicles 11:1-3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 118",
            complete: false,
            sections: [
                { name: "1 Chronicles 12:23-40", complete: false, sections: [] },
                { name: "Psalm 2", complete: false, sections: [] },
                { name: "Psalm 78", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 119",
            complete: false,
            sections: [
                { name: "2 Samuel 5:6-10", complete: false, sections: [] },
                { name: "1 Chronicles 11:4-9", complete: false, sections: [] },
                { name: "2 Samuel 5:17-21", complete: false, sections: [] },
                { name: "1 Chronicles 14:8-12", complete: false, sections: [] },
                { name: "2 Samuel 23:13-19", complete: false, sections: [] },
                { name: "1 Chronicles 11:15-21", complete: false, sections: [] },
                { name: "2 Samuel 5:22-25", complete: false, sections: [] },
                { name: "1 Chronicles 14:13-17", complete: false, sections: [] },
                { name: "2 Samuel 5:11,12", complete: false, sections: [] },
                { name: "1 Chronicles 14:1,2", complete: false, sections: [] },
                { name: "1 Chronicles 13", complete: false, sections: [] },
                { name: "2 Samuel 6:1-11", complete: false, sections: [] },
                { name: "Psalm 101", complete: false, sections: [] },
                { name: "Psalm 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 120",
            complete: false,
            sections: [
                { name: "2 Samuel 6:12-23", complete: false, sections: [] },
                { name: "1 Chronicles 15", complete: false, sections: [] },
                { name: "1 Chronicles 16", complete: false, sections: [] },
                { name: "Psalm 15", complete: false, sections: [] },
                { name: "Psalm 30", complete: false, sections: [] },
                { name: "Psalm 122", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 121",
            complete: false,
            sections: [
                { name: "Psalm 103", complete: false, sections: [] },
                { name: "2 Samuel 12:26-31", complete: false, sections: [] },
                { name: "1 Chronicles 20:1b-3", complete: false, sections: [] },
                { name: "Psalm 21", complete: false, sections: [] },
                { name: "2 Samuel 12:24b-25", complete: false, sections: [] },
                { name: "2 Samuel 8:2", complete: false, sections: [] },
                { name: "1 Chronicles 18:2", complete: false, sections: [] },
                { name: "2 Samuel 8:3-4", complete: false, sections: [] },
                { name: "1 Chronicles 18:3-4", complete: false, sections: [] },
                { name: "2 Samuel 8:7-8", complete: false, sections: [] },
                { name: "1 Chronicles 18:7-8", complete: false, sections: [] },
                { name: "2 Samuel 8:5-6", complete: false, sections: [] },
                { name: "1 Chronicles 18:5-6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 122",
            complete: false,
            sections: [
                { name: "2 Samuel 8:9-14", complete: false, sections: [] },
                { name: "1 Chronicles 18:9-13", complete: false, sections: [] },
                { name: "Psalm 44", complete: false, sections: [] },
                { name: "Psalm 20", complete: false, sections: [] },
                { name: "Psalm 60", complete: false, sections: [] },
                { name: "Psalm 108", complete: false, sections: [] },
                { name: "Psalm 124", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 123",
            complete: false,
            sections: [
                { name: "2 Samuel 23:20-39", complete: false, sections: [] },
                { name: "1 Chronicles 11:22-47", complete: false, sections: [] },
                { name: "2 Samuel 8:15-18", complete: false, sections: [] },
                { name: "1 Chronicles 18:14-17", complete: false, sections: [] },
                { name: "2 Samuel 7", complete: false, sections: [] },
                { name: "1 Chronicles 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 124",
            complete: false,
            sections: [
                { name: "Psalm 138", complete: false, sections: [] },
                { name: "Psalm 139", complete: false, sections: [] },
                { name: "Psalm 145", complete: false, sections: [] },
                { name: "2 Samuel 21:1-14", complete: false, sections: [] },
                { name: "2 Samuel 9", complete: false, sections: [] },
                { name: "Psalm 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 125",
            complete: false,
            sections: [
                { name: "2 Samuel 5:13-16", complete: false, sections: [] },
                { name: "1 Chronicles 14:3-7", complete: false, sections: [] },
                { name: "1 Chronicles 3:4b-9", complete: false, sections: [] },
                { name: "2 Samuel 13", complete: false, sections: [] },
                { name: "2 Samuel 14", complete: false, sections: [] },
                { name: "2 Samuel 15:1-6", complete: false, sections: [] },
                { name: "Psalm 109", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 126",
            complete: false,
            sections: [
                { name: "2 Samuel 24", complete: false, sections: [] },
                { name: "Psalm 38", complete: false, sections: [] },
                { name: "1 Chronicles 21:4-30", complete: false, sections: [] },
                { name: "2 Samuel 15:7-36", complete: false, sections: [] },
                { name: "Psalm 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 127",
            complete: false,
            sections: [
                { name: "Psalm 4", complete: false, sections: [] },
                { name: "Psalm 11", complete: false, sections: [] },
                { name: "Psalm 23", complete: false, sections: [] },
                { name: "Psalm 26", complete: false, sections: [] },
                { name: "2 Samuel 16:1-14", complete: false, sections: [] },
                { name: "Psalm 12", complete: false, sections: [] },
                { name: "Psalm 36", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 128",
            complete: false,
            sections: [
                { name: "Psalm 37", complete: false, sections: [] },
                { name: "Psalm 9", complete: false, sections: [] },
                { name: "Psalm 10", complete: false, sections: [] },
                { name: "2 Samuel 15:37", complete: false, sections: [] },
                { name: "2 Samuel 16:15", complete: false, sections: [] },
                { name: "Psalm 27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 129",
            complete: false,
            sections: [
                { name: "2 Samuel 16:16-23", complete: false, sections: [] },
                { name: "2 Samuel 17:1-23", complete: false, sections: [] },
                { name: "Psalm 28", complete: false, sections: [] },
                { name: "Psalm 41", complete: false, sections: [] },
                { name: "Psalm 42", complete: false, sections: [] },
                { name: "Psalm 43", complete: false, sections: [] },
                { name: "Psalm 55", complete: false, sections: [] },
                { name: "Psalm 64", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 130",
            complete: false,
            sections: [
                { name: "2 Samuel 17:24-26", complete: false, sections: [] },
                { name: "1 Chronicles 2:17", complete: false, sections: [] },
                { name: "2 Samuel 17:27-29", complete: false, sections: [] },
                { name: "2 Samuel 18:1-18", complete: false, sections: [] },
                { name: "Psalm 58", complete: false, sections: [] },
                { name: "Psalm 61", complete: false, sections: [] },
                { name: "Psalm 62", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 131",
            complete: false,
            sections: [
                { name: "2 Samuel 18:19-33", complete: false, sections: [] },
                { name: "Psalm 39", complete: false, sections: [] },
                { name: "Psalm 70", complete: false, sections: [] },
                { name: "Psalm 71", complete: false, sections: [] },
                { name: "Psalm 84", complete: false, sections: [] },
                { name: "Psalm 143", complete: false, sections: [] },
                { name: "2 Samuel 19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 132",
            complete: false,
            sections: [
                { name: "2 Samuel 20", complete: false, sections: [] },
                { name: "Psalm 140", complete: false, sections: [] },
                { name: "Psalm 141", complete: false, sections: [] },
                { name: "1 Chronicles 22", complete: false, sections: [] },
                { name: "Psalm 1", complete: false, sections: [] },
                { name: "Psalm 29", complete: false, sections: [] },
                { name: "Psalm 33", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 133",
            complete: false,
            sections: [
                { name: "1 Chronicles 23:1-23", complete: false, sections: [] },
                { name: "1 Chronicles 6:16-30", complete: false, sections: [] },
                { name: "1 Chronicles 23:24-32", complete: false, sections: [] },
                { name: "1 Chronicles 24:1-31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 134",
            complete: false,
            sections: [
                { name: "1 Chronicles 25", complete: false, sections: [] },
                { name: "1 Chronicles 6:31-53", complete: false, sections: [] },
                { name: "1 Chronicles 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 135",
            complete: false,
            sections: [
                { name: "1 Chronicles 27", complete: false, sections: [] },
                { name: "1 Chronicles 28", complete: false, sections: [] },
                { name: "1 Chronicles 29:1-22", complete: false, sections: [] },
                { name: "1 Kings 1:1-27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 136",
            complete: false,
            sections: [
                { name: "1 Kings 1:28-40", complete: false, sections: [] },
                { name: "Psalm 25", complete: false, sections: [] },
                { name: "1 Kings 1:41-53", complete: false, sections: [] },
                { name: "1 Kings 2:1-9", complete: false, sections: [] },
                { name: "2 Samuel 23:1-7", complete: false, sections: [] },
                { name: "1 Kings 2:10,11", complete: false, sections: [] },
                { name: "1 Chronicles 29:26-30", complete: false, sections: [] },
                { name: "1 Kings 2:12", complete: false, sections: [] },
                { name: "1 Chronicles 29:23-25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 137",
            complete: false,
            sections: [
                { name: "1 Kings 2:13-46", complete: false, sections: [] },
                { name: "1 Kings 3:1-15", complete: false, sections: [] },
                { name: "2 Chronicles 1:1-13", complete: false, sections: [] },
                { name: "1 Kings 3:16-28", complete: false, sections: [] },
                { name: "Psalm 72", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 138",
            complete: false,
            sections: [
                { name: "Psalm 45", complete: false, sections: [] },
                { name: "Song of Solomon 1", complete: false, sections: [] },
                { name: "Song of Solomon 2", complete: false, sections: [] },
                { name: "Song of Solomon 3", complete: false, sections: [] },
                { name: "Song of Solomon 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 139",
            complete: false,
            sections: [
                { name: "Song of Solomon 6", complete: false, sections: [] },
                { name: "Song of Solomon 7", complete: false, sections: [] },
                { name: "Song of Solomon 8", complete: false, sections: [] },
                { name: "Song of Solomon 9", complete: false, sections: [] },
                { name: "1 Kings 5:1-12", complete: false, sections: [] },
                { name: "2 Chronicles 2:1", complete: false, sections: [] },
                { name: "2 Chronicles 2:3-16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 140",
            complete: false,
            sections: [
                { name: "1 Kings 5:13-18", complete: false, sections: [] },
                { name: "2 Chronicles 2:2", complete: false, sections: [] },
                { name: "2 Chronicles 2:17,18", complete: false, sections: [] },
                { name: "1 Kings 9:15,16", complete: false, sections: [] },
                { name: "1 Kings 9:20-23", complete: false, sections: [] },
                { name: "2 Chronicles 8:7-10", complete: false, sections: [] },
                { name: "1 Kings 6", complete: false, sections: [] },
                { name: "2 Chronicles 3", complete: false, sections: [] },
                { name: "Psalm 127", complete: false, sections: [] },
                { name: "1 Kings 7:1-12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 141",
            complete: false,
            sections: [
                { name: "1 Kings 7:13-51", complete: false, sections: [] },
                { name: "2 Chronicles 4:1-22", complete: false, sections: [] },
                { name: "2 Chronicles 5:1", complete: false, sections: [] },
                { name: "1 Kings 8:1-21", complete: false, sections: [] },
                { name: "2 Chronicles 5:2-14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 142",
            complete: false,
            sections: [
                { name: "2 Chronicles 6:1-11", complete: false, sections: [] },
                { name: "1 Kings 8:22-61", complete: false, sections: [] },
                { name: "2 Chronicles 6:12-42", complete: false, sections: [] },
                { name: "2 Chronicles 7:1-3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 143",
            complete: false,
            sections: [
                { name: "1 Kings 8:62-66", complete: false, sections: [] },
                { name: "2 Chronicles 7:4-10", complete: false, sections: [] },
                { name: "Psalm 132", complete: false, sections: [] },
                { name: "Psalm 33", complete: false, sections: [] },
                { name: "1 Kings 9:1-9", complete: false, sections: [] },
                { name: "2 Chronicles 7:11-22", complete: false, sections: [] },
                { name: "1 Kings 9:10-14", complete: false, sections: [] },
                { name: "2 Chronicles 8:1-3", complete: false, sections: [] },
                { name: "1 Kings 9:24", complete: false, sections: [] },
                { name: "2 Chronicles 8:11", complete: false, sections: [] },
                { name: "1 Kings 9:25", complete: false, sections: [] },
                { name: "2 Chronicles 8:12-16", complete: false, sections: [] },
                { name: "1 Kings 9:17-19", complete: false, sections: [] },
                { name: "2 Chronicles 8:4-6", complete: false, sections: [] },
                { name: "1 Kings 9:26-28", complete: false, sections: [] },
                { name: "2 Chronicles 8:17,18", complete: false, sections: [] },
                { name: "1 Kings 10:22", complete: false, sections: [] },
                { name: "2 Chronicles 9:21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 144",
            complete: false,
            sections: [
                { name: "1 Kings 10:1-13", complete: false, sections: [] },
                { name: "2 Chronicles 9:1-12", complete: false, sections: [] },
                { name: "1 Kings 4:1-19", complete: false, sections: [] },
                { name: "1 Kings 4:29-34", complete: false, sections: [] },
                { name: "Proverbs 1", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 145",
            complete: false,
            sections: [
                { name: "Proverbs 2", complete: false, sections: [] },
                { name: "Proverbs 3", complete: false, sections: [] },
                { name: "Proverbs 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 146",
            complete: false,
            sections: [
                { name: "Proverbs 5", complete: false, sections: [] },
                { name: "Proverbs 6", complete: false, sections: [] },
                { name: "Proverbs 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 147",
            complete: false,
            sections: [
                { name: "Proverbs 8", complete: false, sections: [] },
                { name: "Proverbs 9", complete: false, sections: [] },
                { name: "Proverbs 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 148",
            complete: false,
            sections: [
                { name: "Proverbs 11", complete: false, sections: [] },
                { name: "Proverbs 12", complete: false, sections: [] },
                { name: "Proverbs 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 149",
            complete: false,
            sections: [
                { name: "Proverbs 14", complete: false, sections: [] },
                { name: "Proverbs 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 150",
            complete: false,
            sections: [
                { name: "Proverbs 16", complete: false, sections: [] },
                { name: "Proverbs 17", complete: false, sections: [] },
                { name: "Proverbs 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 151",
            complete: false,
            sections: [
                { name: "Proverbs 19", complete: false, sections: [] },
                { name: "Proverbs 20", complete: false, sections: [] },
                { name: "Proverbs 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 152",
            complete: false,
            sections: [
                { name: "Proverbs 22", complete: false, sections: [] },
                { name: "Proverbs 23", complete: false, sections: [] },
                { name: "Proverbs 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 153",
            complete: false,
            sections: [
                { name: "Proverbs 25", complete: false, sections: [] },
                { name: "Proverbs 26", complete: false, sections: [] },
                { name: "Proverbs 27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 154",
            complete: false,
            sections: [
                { name: "Proverbs 28", complete: false, sections: [] },
                { name: "Proverbs 29", complete: false, sections: [] },
                { name: "Proverbs 30", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 155",
            complete: false,
            sections: [
                { name: "Proverbs 31", complete: false, sections: [] },
                { name: "1 Kings 4:20-28", complete: false, sections: [] },
                { name: "1 Kings 10:14-21", complete: false, sections: [] },
                { name: "2 Chronicles 9:13-20", complete: false, sections: [] },
                { name: "1 Kings 10:23-25", complete: false, sections: [] },
                { name: "2 Chronicles 9:22-24", complete: false, sections: [] },
                { name: "1 Kings 10:26-29", complete: false, sections: [] },
                { name: "2 Chronicles 1:14-17", complete: false, sections: [] },
                { name: "2 Chronicles 9:25-28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 156",
            complete: false,
            sections: [
                { name: "1 Kings 11:1-40", complete: false, sections: [] },
                { name: "Ecclesiastes 1", complete: false, sections: [] },
                { name: "Ecclesiastes 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 157",
            complete: false,
            sections: [
                { name: "Ecclesiastes 3", complete: false, sections: [] },
                { name: "Ecclesiastes 4", complete: false, sections: [] },
                { name: "Ecclesiastes 5", complete: false, sections: [] },
                { name: "Ecclesiastes 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 158",
            complete: false,
            sections: [
                { name: "Ecclesiastes 7", complete: false, sections: [] },
                { name: "Ecclesiastes 8", complete: false, sections: [] },
                { name: "Ecclesiastes 9", complete: false, sections: [] },
                { name: "Ecclesiastes 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 159",
            complete: false,
            sections: [
                { name: "Ecclesiastes 11", complete: false, sections: [] },
                { name: "Ecclesiastes 12", complete: false, sections: [] },
                { name: "Psalm 73", complete: false, sections: [] },
                { name: "Psalm 88", complete: false, sections: [] },
                { name: "1 Kings 11:41-43", complete: false, sections: [] },
                { name: "1 Kings 12:1-19", complete: false, sections: [] },
                { name: "2 Chronicles 10", complete: false, sections: [] },
                { name: "1 Kings 12:20-24", complete: false, sections: [] },
                { name: "2 Chronicles 11:1-4", complete: false, sections: [] },
                { name: "1 Kings 12:25-31", complete: false, sections: [] },
                { name: "2 Chronicles 11:13-17", complete: false, sections: [] },
                { name: "1 Kings 12:32,33", complete: false, sections: [] },
                { name: "1 Kings 13:1-34", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 160",
            complete: false,
            sections: [
                { name: "1 Kings 14:1-18", complete: false, sections: [] },
                { name: "2 Chronicles 11:5-12", complete: false, sections: [] },
                { name: "2 Chronicles 11:18-23", complete: false, sections: [] },
                { name: "1 Kings 14:22-28", complete: false, sections: [] },
                { name: "2 Chronicles 12:1-12", complete: false, sections: [] },
                { name: "Psalm 89", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 161",
            complete: false,
            sections: [
                { name: "1 Kings 14:29-31", complete: false, sections: [] },
                { name: "2 Chronicles 12:15,16", complete: false, sections: [] },
                { name: "1 Kings 15:1-8", complete: false, sections: [] },
                { name: "2 Chronicles 13:1-22", complete: false, sections: [] },
                { name: "2 Chronicles 14:1", complete: false, sections: [] },
                { name: "1 Kings 15:9-11", complete: false, sections: [] },
                { name: "2 Chronicles 14:2-7", complete: false, sections: [] },
                { name: "1 Kings 14:19,20", complete: false, sections: [] },
                { name: "1 Kings 15:25-31", complete: false, sections: [] },
                { name: "2 Chronicles 14:8-15", complete: false, sections: [] },
                { name: "2 Chronicles 15:1-7", complete: false, sections: [] },
                { name: "1 Kings 15:12-15", complete: false, sections: [] },
                { name: "2 Chronicles 15:8-19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 162",
            complete: false,
            sections: [
                { name: "1 Kings 15:33,34", complete: false, sections: [] },
                { name: "1 Kings 15:16", complete: false, sections: [] },
                { name: "1 Kings 15:32", complete: false, sections: [] },
                { name: "1 Kings 15:17-22", complete: false, sections: [] },
                { name: "2 Chronicles 16:1-10", complete: false, sections: [] },
                { name: "1 Kings 16:1-33", complete: false, sections: [] },
                { name: "1 Kings 15:23,24", complete: false, sections: [] },
                { name: "2 Chronicles 16:11-14", complete: false, sections: [] },
                { name: "1 Kings 22:41-46", complete: false, sections: [] },
                { name: "2 Chronicles 20:31-34", complete: false, sections: [] },
                { name: "2 Chronicles 17", complete: false, sections: [] },
                { name: "2 Chronicles 18:1", complete: false, sections: [] },
                { name: "1 Kings 16:34", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 163",
            complete: false,
            sections: [
                { name: "1 Kings 17", complete: false, sections: [] },
                { name: "1 Kings 18", complete: false, sections: [] },
                { name: "1 Kings 19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 164",
            complete: false,
            sections: [
                { name: "Psalm 104", complete: false, sections: [] },
                { name: "Psalm 114", complete: false, sections: [] },
                { name: "Psalm 115", complete: false, sections: [] },
                { name: "1 Kings 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 165",
            complete: false,
            sections: [
                { name: "1 Kings 21", complete: false, sections: [] },
                { name: "1 Kings 22:51-53", complete: false, sections: [] },
                { name: "1 Kings 22:1-35", complete: false, sections: [] },
                { name: "2 Chronicles 18:2-34", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 166",
            complete: false,
            sections: [
                { name: "1 Kings 22:36-40", complete: false, sections: [] },
                { name: "2 Kings 1:1", complete: false, sections: [] },
                { name: "2 Chronicles 19", complete: false, sections: [] },
                { name: "1 Kings 20:1-30", complete: false, sections: [] },
                { name: "Psalm 46", complete: false, sections: [] },
                { name: "Psalm 47", complete: false, sections: [] },
                { name: "Psalm 48", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 167",
            complete: false,
            sections: [
                { name: "Psalm 49", complete: false, sections: [] },
                { name: "Psalm 83", complete: false, sections: [] },
                { name: "Psalm 91", complete: false, sections: [] },
                { name: "1 Kings 22:47-49", complete: false, sections: [] },
                { name: "2 Chronicles 20:35-37", complete: false, sections: [] },
                { name: "2 Kings 1:2-18", complete: false, sections: [] },
                { name: "2 Kings 3:1-3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 168",
            complete: false,
            sections: []
        },
        {
            name: "Day 169",
            complete: false,
            sections: []
        },
        {
            name: "Day 170",
            complete: false,
            sections: []
        },
        {
            name: "Day 171",
            complete: false,
            sections: []
        },
        {
            name: "Day 172",
            complete: false,
            sections: []
        },
        {
            name: "Day 173",
            complete: false,
            sections: []
        },
        {
            name: "Day 174",
            complete: false,
            sections: []
        },
        {
            name: "Day 175",
            complete: false,
            sections: []
        },
        {
            name: "Day 176",
            complete: false,
            sections: []
        },
        {
            name: "Day 177",
            complete: false,
            sections: []
        },
        {
            name: "Day 178",
            complete: false,
            sections: []
        },
        {
            name: "Day 179",
            complete: false,
            sections: []
        },
        {
            name: "Day 180",
            complete: false,
            sections: []
        },
        {
            name: "Day 181",
            complete: false,
            sections: []
        },
        {
            name: "Day 182",
            complete: false,
            sections: []
        },
        {
            name: "Day 183",
            complete: false,
            sections: []
        },
        {
            name: "Day 184",
            complete: false,
            sections: []
        },
        {
            name: "Day 185",
            complete: false,
            sections: []
        },
        {
            name: "Day 186",
            complete: false,
            sections: []
        },
        {
            name: "Day 187",
            complete: false,
            sections: []
        },
        {
            name: "Day 188",
            complete: false,
            sections: []
        },
        {
            name: "Day 189",
            complete: false,
            sections: []
        },
        {
            name: "Day 190",
            complete: false,
            sections: []
        },
        {
            name: "Day 191",
            complete: false,
            sections: []
        },
        {
            name: "Day 192",
            complete: false,
            sections: []
        },
        {
            name: "Day 193",
            complete: false,
            sections: []
        },
        {
            name: "Day 194",
            complete: false,
            sections: []
        },
        {
            name: "Day 195",
            complete: false,
            sections: []
        },
        {
            name: "Day 196",
            complete: false,
            sections: []
        },
        {
            name: "Day 197",
            complete: false,
            sections: []
        },
        {
            name: "Day 198",
            complete: false,
            sections: []
        },
        {
            name: "Day 199",
            complete: false,
            sections: []
        },
        {
            name: "Day 200",
            complete: false,
            sections: []
        },
        {
            name: "Day 201",
            complete: false,
            sections: []
        },
        {
            name: "Day 202",
            complete: false,
            sections: []
        },
        {
            name: "Day 203",
            complete: false,
            sections: []
        },
        {
            name: "Day 204",
            complete: false,
            sections: []
        },
        {
            name: "Day 205",
            complete: false,
            sections: []
        },
        {
            name: "Day 206",
            complete: false,
            sections: []
        },
        {
            name: "Day 207",
            complete: false,
            sections: []
        },
        {
            name: "Day 208",
            complete: false,
            sections: []
        },
        {
            name: "Day 209",
            complete: false,
            sections: []
        },
        {
            name: "Day 210",
            complete: false,
            sections: []
        },
        {
            name: "Day 211",
            complete: false,
            sections: []
        },
        {
            name: "Day 212",
            complete: false,
            sections: []
        },
        {
            name: "Day 213",
            complete: false,
            sections: []
        },
        {
            name: "Day 214",
            complete: false,
            sections: []
        },
        {
            name: "Day 215",
            complete: false,
            sections: []
        },
        {
            name: "Day 216",
            complete: false,
            sections: []
        },
        {
            name: "Day 217",
            complete: false,
            sections: []
        },
        {
            name: "Day 218",
            complete: false,
            sections: []
        },
        {
            name: "Day 219",
            complete: false,
            sections: []
        },
        {
            name: "Day 220",
            complete: false,
            sections: []
        },
        {
            name: "Day 221",
            complete: false,
            sections: []
        },
        {
            name: "Day 222",
            complete: false,
            sections: []
        },
        {
            name: "Day 223",
            complete: false,
            sections: []
        },
        {
            name: "Day 224",
            complete: false,
            sections: []
        },
        {
            name: "Day 225",
            complete: false,
            sections: []
        },
        {
            name: "Day 226",
            complete: false,
            sections: []
        },
        {
            name: "Day 227",
            complete: false,
            sections: []
        },
        {
            name: "Day 228",
            complete: false,
            sections: []
        },
        {
            name: "Day 229",
            complete: false,
            sections: []
        },
        {
            name: "Day 230",
            complete: false,
            sections: []
        },
        {
            name: "Day 231",
            complete: false,
            sections: []
        },
        {
            name: "Day 232",
            complete: false,
            sections: []
        },
        {
            name: "Day 233",
            complete: false,
            sections: []
        },
        {
            name: "Day 234",
            complete: false,
            sections: []
        },
        {
            name: "Day 235",
            complete: false,
            sections: []
        },
        {
            name: "Day 236",
            complete: false,
            sections: []
        },
        {
            name: "Day 237",
            complete: false,
            sections: []
        },
        {
            name: "Day 238",
            complete: false,
            sections: []
        },
        {
            name: "Day 239",
            complete: false,
            sections: []
        },
        {
            name: "Day 240",
            complete: false,
            sections: []
        },
        {
            name: "Day 241",
            complete: false,
            sections: []
        },
        {
            name: "Day 242",
            complete: false,
            sections: []
        },
        {
            name: "Day 243",
            complete: false,
            sections: []
        },
        {
            name: "Day 244",
            complete: false,
            sections: []
        },
        {
            name: "Day 245",
            complete: false,
            sections: []
        },
        {
            name: "Day 246",
            complete: false,
            sections: []
        },
        {
            name: "Day 247",
            complete: false,
            sections: []
        },
        {
            name: "Day 248",
            complete: false,
            sections: []
        },
        {
            name: "Day 249",
            complete: false,
            sections: []
        },
        {
            name: "Day 250",
            complete: false,
            sections: []
        },
        {
            name: "Day 251",
            complete: false,
            sections: []
        },
        {
            name: "Day 252",
            complete: false,
            sections: []
        },
        {
            name: "Day 253",
            complete: false,
            sections: []
        },
        {
            name: "Day 254",
            complete: false,
            sections: []
        },
        {
            name: "Day 255",
            complete: false,
            sections: []
        },
        {
            name: "Day 256",
            complete: false,
            sections: []
        },
        {
            name: "Day 257",
            complete: false,
            sections: []
        },
        {
            name: "Day 258",
            complete: false,
            sections: []
        },
        {
            name: "Day 259",
            complete: false,
            sections: []
        },
        {
            name: "Day 260",
            complete: false,
            sections: []
        },
        {
            name: "Day 261",
            complete: false,
            sections: []
        },
        {
            name: "Day 262",
            complete: false,
            sections: []
        },
        {
            name: "Day 263",
            complete: false,
            sections: []
        },
        {
            name: "Day 264",
            complete: false,
            sections: []
        },
        {
            name: "Day 265",
            complete: false,
            sections: []
        },
        {
            name: "Day 266",
            complete: false,
            sections: []
        },
        {
            name: "Day 267",
            complete: false,
            sections: []
        },
        {
            name: "Day 268",
            complete: false,
            sections: []
        },
        {
            name: "Day 269",
            complete: false,
            sections: []
        },
        {
            name: "Day 270",
            complete: false,
            sections: []
        },
        {
            name: "Day 271",
            complete: false,
            sections: []
        },
        {
            name: "Day 272",
            complete: false,
            sections: []
        },
        {
            name: "Day 273",
            complete: false,
            sections: []
        },
        {
            name: "Day 274",
            complete: false,
            sections: []
        },
        {
            name: "Day 275",
            complete: false,
            sections: []
        },
        {
            name: "Day 276",
            complete: false,
            sections: []
        },
        {
            name: "Day 277",
            complete: false,
            sections: []
        },
        {
            name: "Day 278",
            complete: false,
            sections: []
        },
        {
            name: "Day 279",
            complete: false,
            sections: []
        },
        {
            name: "Day 280",
            complete: false,
            sections: []
        },
        {
            name: "Day 281",
            complete: false,
            sections: []
        },
        {
            name: "Day 282",
            complete: false,
            sections: []
        },
        {
            name: "Day 283",
            complete: false,
            sections: []
        },
        {
            name: "Day 284",
            complete: false,
            sections: []
        },
        {
            name: "Day 285",
            complete: false,
            sections: []
        },
        {
            name: "Day 286",
            complete: false,
            sections: []
        },
        {
            name: "Day 287",
            complete: false,
            sections: []
        },
        {
            name: "Day 288",
            complete: false,
            sections: []
        },
        {
            name: "Day 289",
            complete: false,
            sections: []
        },
        {
            name: "Day 290",
            complete: false,
            sections: []
        },
        {
            name: "Day 291",
            complete: false,
            sections: []
        },
        {
            name: "Day 292",
            complete: false,
            sections: []
        },
        {
            name: "Day 293",
            complete: false,
            sections: []
        },
        {
            name: "Day 294",
            complete: false,
            sections: []
        },
        {
            name: "Day 295",
            complete: false,
            sections: []
        },
        {
            name: "Day 296",
            complete: false,
            sections: []
        },
        {
            name: "Day 297",
            complete: false,
            sections: []
        },
        {
            name: "Day 298",
            complete: false,
            sections: []
        },
        {
            name: "Day 299",
            complete: false,
            sections: []
        },
        {
            name: "Day 300",
            complete: false,
            sections: []
        },
        {
            name: "Day 301",
            complete: false,
            sections: []
        },
        {
            name: "Day 302",
            complete: false,
            sections: []
        },
        {
            name: "Day 303",
            complete: false,
            sections: []
        },
        {
            name: "Day 304",
            complete: false,
            sections: []
        },
        {
            name: "Day 305",
            complete: false,
            sections: []
        },
        {
            name: "Day 306",
            complete: false,
            sections: []
        },
        {
            name: "Day 307",
            complete: false,
            sections: []
        },
        {
            name: "Day 308",
            complete: false,
            sections: []
        },
        {
            name: "Day 309",
            complete: false,
            sections: []
        },
        {
            name: "Day 310",
            complete: false,
            sections: []
        },
        {
            name: "Day 311",
            complete: false,
            sections: []
        },
        {
            name: "Day 312",
            complete: false,
            sections: []
        },
        {
            name: "Day 313",
            complete: false,
            sections: []
        },
        {
            name: "Day 314",
            complete: false,
            sections: []
        },
        {
            name: "Day 315",
            complete: false,
            sections: []
        },
        {
            name: "Day 316",
            complete: false,
            sections: []
        },
        {
            name: "Day 317",
            complete: false,
            sections: []
        },
        {
            name: "Day 318",
            complete: false,
            sections: []
        },
        {
            name: "Day 319",
            complete: false,
            sections: []
        },
        {
            name: "Day 320",
            complete: false,
            sections: []
        },
        {
            name: "Day 321",
            complete: false,
            sections: []
        },
        {
            name: "Day 322",
            complete: false,
            sections: []
        },
        {
            name: "Day 323",
            complete: false,
            sections: []
        },
        {
            name: "Day 324",
            complete: false,
            sections: []
        },
        {
            name: "Day 325",
            complete: false,
            sections: []
        },
        {
            name: "Day 326",
            complete: false,
            sections: []
        },
        {
            name: "Day 327",
            complete: false,
            sections: []
        },
        {
            name: "Day 328",
            complete: false,
            sections: []
        },
        {
            name: "Day 329",
            complete: false,
            sections: []
        },
        {
            name: "Day 330",
            complete: false,
            sections: []
        },
        {
            name: "Day 331",
            complete: false,
            sections: []
        },
        {
            name: "Day 332",
            complete: false,
            sections: []
        },
        {
            name: "Day 333",
            complete: false,
            sections: []
        },
        {
            name: "Day 334",
            complete: false,
            sections: []
        },
        {
            name: "Day 335",
            complete: false,
            sections: []
        },
        {
            name: "Day 336",
            complete: false,
            sections: []
        },
        {
            name: "Day 337",
            complete: false,
            sections: []
        },
        {
            name: "Day 338",
            complete: false,
            sections: []
        },
        {
            name: "Day 339",
            complete: false,
            sections: []
        },
        {
            name: "Day 340",
            complete: false,
            sections: []
        },
        {
            name: "Day 341",
            complete: false,
            sections: []
        },
        {
            name: "Day 342",
            complete: false,
            sections: []
        },
        {
            name: "Day 343",
            complete: false,
            sections: []
        },
        {
            name: "Day 344",
            complete: false,
            sections: []
        },
        {
            name: "Day 345",
            complete: false,
            sections: []
        },
        {
            name: "Day 346",
            complete: false,
            sections: []
        },
        {
            name: "Day 347",
            complete: false,
            sections: []
        },
        {
            name: "Day 348",
            complete: false,
            sections: []
        },
        {
            name: "Day 349",
            complete: false,
            sections: []
        },
        {
            name: "Day 350",
            complete: false,
            sections: []
        },
        {
            name: "Day 351",
            complete: false,
            sections: []
        },
        {
            name: "Day 352",
            complete: false,
            sections: []
        },
        {
            name: "Day 353",
            complete: false,
            sections: []
        },
        {
            name: "Day 354",
            complete: false,
            sections: []
        },
        {
            name: "Day 355",
            complete: false,
            sections: []
        },
        {
            name: "Day 356",
            complete: false,
            sections: []
        },
        {
            name: "Day 357",
            complete: false,
            sections: []
        },
        {
            name: "Day 358",
            complete: false,
            sections: []
        },
        {
            name: "Day 359",
            complete: false,
            sections: []
        },
        {
            name: "Day 360",
            complete: false,
            sections: []
        },
        {
            name: "Day 361",
            complete: false,
            sections: []
        },
        {
            name: "Day 362",
            complete: false,
            sections: []
        },
        {
            name: "Day 363",
            complete: false,
            sections: []
        },
        {
            name: "Day 364",
            complete: false,
            sections: []
        },
        {
            name: "Day 365",
            complete: false,
            sections: []
        },
    ],
};
//# sourceMappingURL=bible-reading-chrono.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bibleReadingCover; });
var bibleReadingCover = {
    name: "Bible - Cover to Cover",
    complete: false,
    sections: [
        {
            name: "Day 1",
            complete: false,
            sections: [
                { name: "Genesis 1", complete: false, sections: [] },
                { name: "Genesis 2", complete: false, sections: [] },
                { name: "Genesis 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 2",
            complete: false,
            sections: [
                { name: "Genesis 4", complete: false, sections: [] },
                { name: "Genesis 5", complete: false, sections: [] },
                { name: "Genesis 6", complete: false, sections: [] },
                { name: "Genesis 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 3",
            complete: false,
            sections: [
                { name: "Genesis 8", complete: false, sections: [] },
                { name: "Genesis 9", complete: false, sections: [] },
                { name: "Genesis 10", complete: false, sections: [] },
                { name: "Genesis 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 4",
            complete: false,
            sections: [
                { name: "Genesis 12", complete: false, sections: [] },
                { name: "Genesis 13", complete: false, sections: [] },
                { name: "Genesis 14", complete: false, sections: [] },
                { name: "Genesis 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 5",
            complete: false,
            sections: [
                { name: "Genesis 16", complete: false, sections: [] },
                { name: "Genesis 17", complete: false, sections: [] },
                { name: "Genesis 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 6",
            complete: false,
            sections: [
                { name: "Genesis 19", complete: false, sections: [] },
                { name: "Genesis 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 7",
            complete: false,
            sections: [
                { name: "Genesis 21", complete: false, sections: [] },
                { name: "Genesis 22", complete: false, sections: [] },
                { name: "Genesis 23", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 8",
            complete: false,
            sections: [
                { name: "Genesis 24", complete: false, sections: [] },
                { name: "Genesis 25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 9",
            complete: false,
            sections: [
                { name: "Genesis 26", complete: false, sections: [] },
                { name: "Genesis 27", complete: false, sections: [] },
                { name: "Genesis 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 10",
            complete: false,
            sections: [
                { name: "Genesis 29", complete: false, sections: [] },
                { name: "Genesis 30", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 11",
            complete: false,
            sections: [
                { name: "Genesis 31", complete: false, sections: [] },
                { name: "Genesis 32", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 12",
            complete: false,
            sections: [
                { name: "Genesis 33", complete: false, sections: [] },
                { name: "Genesis 34", complete: false, sections: [] },
                { name: "Genesis 35", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 13",
            complete: false,
            sections: [
                { name: "Genesis 36", complete: false, sections: [] },
                { name: "Genesis 37", complete: false, sections: [] },
                { name: "Genesis 38", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 14",
            complete: false,
            sections: [
                { name: "Genesis 39", complete: false, sections: [] },
                { name: "Genesis 40", complete: false, sections: [] },
                { name: "Genesis 41", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 15",
            complete: false,
            sections: [
                { name: "Genesis 42", complete: false, sections: [] },
                { name: "Genesis 43", complete: false, sections: [] },
                { name: "Genesis 44", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 16",
            complete: false,
            sections: [
                { name: "Genesis 45", complete: false, sections: [] },
                { name: "Genesis 46", complete: false, sections: [] },
                { name: "Genesis 47", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 17",
            complete: false,
            sections: [
                { name: "Genesis 48", complete: false, sections: [] },
                { name: "Genesis 49", complete: false, sections: [] },
                { name: "Genesis 50", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 18",
            complete: false,
            sections: [
                { name: "Exodus 1", complete: false, sections: [] },
                { name: "Exodus 2", complete: false, sections: [] },
                { name: "Exodus 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 19",
            complete: false,
            sections: [
                { name: "Exodus 4", complete: false, sections: [] },
                { name: "Exodus 5", complete: false, sections: [] },
                { name: "Exodus 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 20",
            complete: false,
            sections: [
                { name: "Exodus 7", complete: false, sections: [] },
                { name: "Exodus 8", complete: false, sections: [] },
                { name: "Exodus 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 21",
            complete: false,
            sections: [
                { name: "Exodus 10", complete: false, sections: [] },
                { name: "Exodus 11", complete: false, sections: [] },
                { name: "Exodus 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 22",
            complete: false,
            sections: [
                { name: "Exodus 13", complete: false, sections: [] },
                { name: "Exodus 14", complete: false, sections: [] },
                { name: "Exodus 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 23",
            complete: false,
            sections: [
                { name: "Exodus 16", complete: false, sections: [] },
                { name: "Exodus 17", complete: false, sections: [] },
                { name: "Exodus 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 24",
            complete: false,
            sections: [
                { name: "Exodus 19", complete: false, sections: [] },
                { name: "Exodus 20", complete: false, sections: [] },
                { name: "Exodus 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 25",
            complete: false,
            sections: [
                { name: "Exodus 22", complete: false, sections: [] },
                { name: "Exodus 23", complete: false, sections: [] },
                { name: "Exodus 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 26",
            complete: false,
            sections: [
                { name: "Exodus 25", complete: false, sections: [] },
                { name: "Exodus 26", complete: false, sections: [] },
                { name: "Exodus 27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 27",
            complete: false,
            sections: [
                { name: "Exodus 28", complete: false, sections: [] },
                { name: "Exodus 29", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 28",
            complete: false,
            sections: [
                { name: "Exodus 30", complete: false, sections: [] },
                { name: "Exodus 31", complete: false, sections: [] },
                { name: "Exodus 32", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 29",
            complete: false,
            sections: [
                { name: "Exodus 33", complete: false, sections: [] },
                { name: "Exodus 34", complete: false, sections: [] },
                { name: "Exodus 35", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 30",
            complete: false,
            sections: [
                { name: "Exodus 36", complete: false, sections: [] },
                { name: "Exodus 37", complete: false, sections: [] },
                { name: "Exodus 38", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 31",
            complete: false,
            sections: [
                { name: "Exodus 39", complete: false, sections: [] },
                { name: "Exodus 40", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 32",
            complete: false,
            sections: [
                { name: "Leviticus 1", complete: false, sections: [] },
                { name: "Leviticus 2", complete: false, sections: [] },
                { name: "Leviticus 3", complete: false, sections: [] },
                { name: "Leviticus 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 33",
            complete: false,
            sections: [
                { name: "Leviticus 5", complete: false, sections: [] },
                { name: "Leviticus 6", complete: false, sections: [] },
                { name: "Leviticus 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 34",
            complete: false,
            sections: [
                { name: "Leviticus 8", complete: false, sections: [] },
                { name: "Leviticus 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 35",
            complete: false,
            sections: [
                { name: "Leviticus 10", complete: false, sections: [] },
                { name: "Leviticus 11", complete: false, sections: [] },
                { name: "Leviticus 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 36",
            complete: false,
            sections: [
                { name: "Leviticus 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 37",
            complete: false,
            sections: [
                { name: "Leviticus 14", complete: false, sections: [] },
                { name: "Leviticus 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 38",
            complete: false,
            sections: [
                { name: "Leviticus 16", complete: false, sections: [] },
                { name: "Leviticus 17", complete: false, sections: [] },
                { name: "Leviticus 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 39",
            complete: false,
            sections: [
                { name: "Leviticus 19", complete: false, sections: [] },
                { name: "Leviticus 20", complete: false, sections: [] },
                { name: "Leviticus 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 40",
            complete: false,
            sections: [
                { name: "Leviticus 22", complete: false, sections: [] },
                { name: "Leviticus 23", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 41",
            complete: false,
            sections: [
                { name: "Leviticus 24", complete: false, sections: [] },
                { name: "Leviticus 25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 42",
            complete: false,
            sections: [
                { name: "Leviticus 26", complete: false, sections: [] },
                { name: "Leviticus 27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 43",
            complete: false,
            sections: [
                { name: "Numbers 1", complete: false, sections: [] },
                { name: "Numbers 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 44",
            complete: false,
            sections: [
                { name: "Numbers 3", complete: false, sections: [] },
                { name: "Numbers 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 45",
            complete: false,
            sections: [
                { name: "Numbers 5", complete: false, sections: [] },
                { name: "Numbers 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 46",
            complete: false,
            sections: [
                { name: "Numbers 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 47",
            complete: false,
            sections: [
                { name: "Numbers 8", complete: false, sections: [] },
                { name: "Numbers 9", complete: false, sections: [] },
                { name: "Numbers 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 48",
            complete: false,
            sections: [
                { name: "Numbers 11", complete: false, sections: [] },
                { name: "Numbers 12", complete: false, sections: [] },
                { name: "Numbers 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 49",
            complete: false,
            sections: [
                { name: "Numbers 14", complete: false, sections: [] },
                { name: "Numbers 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 50",
            complete: false,
            sections: [
                { name: "Numbers 16", complete: false, sections: [] },
                { name: "Numbers 17", complete: false, sections: [] },
                { name: "Numbers 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 51",
            complete: false,
            sections: [
                { name: "Numbers 19", complete: false, sections: [] },
                { name: "Numbers 20", complete: false, sections: [] },
                { name: "Numbers 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 52",
            complete: false,
            sections: [
                { name: "Numbers 22", complete: false, sections: [] },
                { name: "Numbers 23", complete: false, sections: [] },
                { name: "Numbers 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 53",
            complete: false,
            sections: [
                { name: "Numbers 25", complete: false, sections: [] },
                { name: "Numbers 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 54",
            complete: false,
            sections: [
                { name: "Numbers 27", complete: false, sections: [] },
                { name: "Numbers 28", complete: false, sections: [] },
                { name: "Numbers 29", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 55",
            complete: false,
            sections: [
                { name: "Numbers 30", complete: false, sections: [] },
                { name: "Numbers 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 56",
            complete: false,
            sections: [
                { name: "Numbers 32", complete: false, sections: [] },
                { name: "Numbers 33", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 57",
            complete: false,
            sections: [
                { name: "Numbers 34", complete: false, sections: [] },
                { name: "Numbers 35", complete: false, sections: [] },
                { name: "Numbers 36", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 58",
            complete: false,
            sections: [
                { name: "Deuteronomy 1", complete: false, sections: [] },
                { name: "Deuteronomy 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 59",
            complete: false,
            sections: [
                { name: "Deuteronomy 3", complete: false, sections: [] },
                { name: "Deuteronomy 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 60",
            complete: false,
            sections: [
                { name: "Deuteronomy 5", complete: false, sections: [] },
                { name: "Deuteronomy 6", complete: false, sections: [] },
                { name: "Deuteronomy 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 61",
            complete: false,
            sections: [
                { name: "Deuteronomy 8", complete: false, sections: [] },
                { name: "Deuteronomy 9", complete: false, sections: [] },
                { name: "Deuteronomy 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 62",
            complete: false,
            sections: [
                { name: "Deuteronomy 11", complete: false, sections: [] },
                { name: "Deuteronomy 12", complete: false, sections: [] },
                { name: "Deuteronomy 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 63",
            complete: false,
            sections: [
                { name: "Deuteronomy 14", complete: false, sections: [] },
                { name: "Deuteronomy 15", complete: false, sections: [] },
                { name: "Deuteronomy 16", complete: false, sections: [] },
                { name: "Deuteronomy 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 64",
            complete: false,
            sections: [
                { name: "Deuteronomy 18", complete: false, sections: [] },
                { name: "Deuteronomy 19", complete: false, sections: [] },
                { name: "Deuteronomy 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 65",
            complete: false,
            sections: [
                { name: "Deuteronomy 21", complete: false, sections: [] },
                { name: "Deuteronomy 22", complete: false, sections: [] },
                { name: "Deuteronomy 23", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 66",
            complete: false,
            sections: [
                { name: "Deuteronomy 24", complete: false, sections: [] },
                { name: "Deuteronomy 25", complete: false, sections: [] },
                { name: "Deuteronomy 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 67",
            complete: false,
            sections: [
                { name: "Deuteronomy 27", complete: false, sections: [] },
                { name: "Deuteronomy 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 68",
            complete: false,
            sections: [
                { name: "Deuteronomy 29", complete: false, sections: [] },
                { name: "Deuteronomy 30", complete: false, sections: [] },
                { name: "Deuteronomy 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 69",
            complete: false,
            sections: [
                { name: "Deuteronomy 32", complete: false, sections: [] },
                { name: "Deuteronomy 33", complete: false, sections: [] },
                { name: "Deuteronomy 34", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 70",
            complete: false,
            sections: [
                { name: "Joshua 1", complete: false, sections: [] },
                { name: "Joshua 2", complete: false, sections: [] },
                { name: "Joshua 3", complete: false, sections: [] },
                { name: "Joshua 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 71",
            complete: false,
            sections: [
                { name: "Joshua 5", complete: false, sections: [] },
                { name: "Joshua 6", complete: false, sections: [] },
                { name: "Joshua 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 72",
            complete: false,
            sections: [
                { name: "Joshua 8", complete: false, sections: [] },
                { name: "Joshua 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 73",
            complete: false,
            sections: [
                { name: "Joshua 10", complete: false, sections: [] },
                { name: "Joshua 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 74",
            complete: false,
            sections: [
                { name: "Joshua 12", complete: false, sections: [] },
                { name: "Joshua 13", complete: false, sections: [] },
                { name: "Joshua 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 75",
            complete: false,
            sections: [
                { name: "Joshua 15", complete: false, sections: [] },
                { name: "Joshua 16", complete: false, sections: [] },
                { name: "Joshua 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 76",
            complete: false,
            sections: [
                { name: "Joshua 18", complete: false, sections: [] },
                { name: "Joshua 19", complete: false, sections: [] },
                { name: "Joshua 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 77",
            complete: false,
            sections: [
                { name: "Joshua 21", complete: false, sections: [] },
                { name: "Joshua 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 78",
            complete: false,
            sections: [
                { name: "Joshua 23", complete: false, sections: [] },
                { name: "Joshua 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 79",
            complete: false,
            sections: [
                { name: "Judges 1", complete: false, sections: [] },
                { name: "Judges 2", complete: false, sections: [] },
                { name: "Judges 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 80",
            complete: false,
            sections: [
                { name: "Judges 4", complete: false, sections: [] },
                { name: "Judges 5", complete: false, sections: [] },
                { name: "Judges 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 81",
            complete: false,
            sections: [
                { name: "Judges 7", complete: false, sections: [] },
                { name: "Judges 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 82",
            complete: false,
            sections: [
                { name: "Judges 9", complete: false, sections: [] },
                { name: "Judges 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 83",
            complete: false,
            sections: [
                { name: "Judges 11", complete: false, sections: [] },
                { name: "Judges 12", complete: false, sections: [] },
                { name: "Judges 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 84",
            complete: false,
            sections: [
                { name: "Judges 14", complete: false, sections: [] },
                { name: "Judges 15", complete: false, sections: [] },
                { name: "Judges 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 85",
            complete: false,
            sections: [
                { name: "Judges 17", complete: false, sections: [] },
                { name: "Judges 18", complete: false, sections: [] },
                { name: "Judges 19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 86",
            complete: false,
            sections: [
                { name: "Judges 20", complete: false, sections: [] },
                { name: "Judges 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 87",
            complete: false,
            sections: [
                { name: "Ruth 1", complete: false, sections: [] },
                { name: "Ruth 2", complete: false, sections: [] },
                { name: "Ruth 3", complete: false, sections: [] },
                { name: "Ruth 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 88",
            complete: false,
            sections: [
                { name: "1 Samuel 1", complete: false, sections: [] },
                { name: "1 Samuel 2", complete: false, sections: [] },
                { name: "1 Samuel 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 89",
            complete: false,
            sections: [
                { name: "1 Samuel 4", complete: false, sections: [] },
                { name: "1 Samuel 5", complete: false, sections: [] },
                { name: "1 Samuel 6", complete: false, sections: [] },
                { name: "1 Samuel 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 90",
            complete: false,
            sections: [
                { name: "1 Samuel 8", complete: false, sections: [] },
                { name: "1 Samuel 9", complete: false, sections: [] },
                { name: "1 Samuel 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 91",
            complete: false,
            sections: [
                { name: "1 Samuel 11", complete: false, sections: [] },
                { name: "1 Samuel 12", complete: false, sections: [] },
                { name: "1 Samuel 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 92",
            complete: false,
            sections: [
                { name: "1 Samuel 14", complete: false, sections: [] },
                { name: "1 Samuel 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 93",
            complete: false,
            sections: [
                { name: "1 Samuel 16", complete: false, sections: [] },
                { name: "1 Samuel 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 94",
            complete: false,
            sections: [
                { name: "1 Samuel 18", complete: false, sections: [] },
                { name: "1 Samuel 19", complete: false, sections: [] },
                { name: "1 Samuel 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 95",
            complete: false,
            sections: [
                { name: "1 Samuel 21", complete: false, sections: [] },
                { name: "1 Samuel 22", complete: false, sections: [] },
                { name: "1 Samuel 23", complete: false, sections: [] },
                { name: "1 Samuel 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 96",
            complete: false,
            sections: [
                { name: "1 Samuel 25", complete: false, sections: [] },
                { name: "1 Samuel 26", complete: false, sections: [] },
                { name: "1 Samuel 27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 97",
            complete: false,
            sections: [
                { name: "1 Samuel 28", complete: false, sections: [] },
                { name: "1 Samuel 29", complete: false, sections: [] },
                { name: "1 Samuel 30", complete: false, sections: [] },
                { name: "1 Samuel 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 98",
            complete: false,
            sections: [
                { name: "2 Samuel 1", complete: false, sections: [] },
                { name: "2 Samuel 2", complete: false, sections: [] },
                { name: "2 Samuel 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 99",
            complete: false,
            sections: [
                { name: "2 Samuel 4", complete: false, sections: [] },
                { name: "2 Samuel 5", complete: false, sections: [] },
                { name: "2 Samuel 6", complete: false, sections: [] },
                { name: "2 Samuel 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 100",
            complete: false,
            sections: [
                { name: "2 Samuel 8", complete: false, sections: [] },
                { name: "2 Samuel 9", complete: false, sections: [] },
                { name: "2 Samuel 10", complete: false, sections: [] },
                { name: "2 Samuel 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 101",
            complete: false,
            sections: [
                { name: "2 Samuel 12", complete: false, sections: [] },
                { name: "2 Samuel 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 102",
            complete: false,
            sections: [
                { name: "2 Samuel 14", complete: false, sections: [] },
                { name: "2 Samuel 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 103",
            complete: false,
            sections: [
                { name: "2 Samuel 16", complete: false, sections: [] },
                { name: "2 Samuel 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 104",
            complete: false,
            sections: [
                { name: "2 Samuel 18", complete: false, sections: [] },
                { name: "2 Samuel 19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 105",
            complete: false,
            sections: [
                { name: "2 Samuel 20", complete: false, sections: [] },
                { name: "2 Samuel 21", complete: false, sections: [] },
                { name: "2 Samuel 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 106",
            complete: false,
            sections: [
                { name: "2 Samuel 23", complete: false, sections: [] },
                { name: "2 Samuel 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 107",
            complete: false,
            sections: [
                { name: "1 Kings 1", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 108",
            complete: false,
            sections: [
                { name: "1 Kings 2", complete: false, sections: [] },
                { name: "1 Kings 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 109",
            complete: false,
            sections: [
                { name: "1 Kings 4", complete: false, sections: [] },
                { name: "1 Kings 5", complete: false, sections: [] },
                { name: "1 Kings 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 110",
            complete: false,
            sections: [
                { name: "1 Kings 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 111",
            complete: false,
            sections: [
                { name: "1 Kings 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 112",
            complete: false,
            sections: [
                { name: "1 Kings 9", complete: false, sections: [] },
                { name: "1 Kings 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 113",
            complete: false,
            sections: [
                { name: "1 Kings 11", complete: false, sections: [] },
                { name: "1 Kings 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 114",
            complete: false,
            sections: [
                { name: "1 Kings 13", complete: false, sections: [] },
                { name: "1 Kings 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 115",
            complete: false,
            sections: [
                { name: "1 Kings 15", complete: false, sections: [] },
                { name: "1 Kings 16", complete: false, sections: [] },
                { name: "1 Kings 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 116",
            complete: false,
            sections: [
                { name: "1 Kings 18", complete: false, sections: [] },
                { name: "1 Kings 19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 117",
            complete: false,
            sections: [
                { name: "1 Kings 20", complete: false, sections: [] },
                { name: "1 Kings 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 118",
            complete: false,
            sections: [
                { name: "1 Kings 22", complete: false, sections: [] },
                { name: "2 Kings 1", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 119",
            complete: false,
            sections: [
                { name: "2 Kings 2", complete: false, sections: [] },
                { name: "2 Kings 3", complete: false, sections: [] },
                { name: "2 Kings 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 120",
            complete: false,
            sections: [
                { name: "2 Kings 5", complete: false, sections: [] },
                { name: "2 Kings 6", complete: false, sections: [] },
                { name: "2 Kings 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 121",
            complete: false,
            sections: [
                { name: "2 Kings 8", complete: false, sections: [] },
                { name: "2 Kings 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 122",
            complete: false,
            sections: [
                { name: "2 Kings 10", complete: false, sections: [] },
                { name: "2 Kings 11", complete: false, sections: [] },
                { name: "2 Kings 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 123",
            complete: false,
            sections: [
                { name: "2 Kings 13", complete: false, sections: [] },
                { name: "2 Kings 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 124",
            complete: false,
            sections: [
                { name: "2 Kings 15", complete: false, sections: [] },
                { name: "2 Kings 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 125",
            complete: false,
            sections: [
                { name: "2 Kings 17", complete: false, sections: [] },
                { name: "2 Kings 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 126",
            complete: false,
            sections: [
                { name: "2 Kings 19", complete: false, sections: [] },
                { name: "2 Kings 20", complete: false, sections: [] },
                { name: "2 Kings 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 127",
            complete: false,
            sections: [
                { name: "2 Kings 22", complete: false, sections: [] },
                { name: "2 Kings 23", complete: false, sections: [] },
                { name: "2 Kings 24", complete: false, sections: [] },
                { name: "2 Kings 25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 128",
            complete: false,
            sections: [
                { name: "1 Chronicles 1", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 129",
            complete: false,
            sections: [
                { name: "1 Chronicles 2", complete: false, sections: [] },
                { name: "1 Chronicles 3", complete: false, sections: [] },
                { name: "1 Chronicles 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 130",
            complete: false,
            sections: [
                { name: "1 Chronicles 5", complete: false, sections: [] },
                { name: "1 Chronicles 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 131",
            complete: false,
            sections: [
                { name: "1 Chronicles 7", complete: false, sections: [] },
                { name: "1 Chronicles 8", complete: false, sections: [] },
                { name: "1 Chronicles 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 132",
            complete: false,
            sections: [
                { name: "1 Chronicles 10", complete: false, sections: [] },
                { name: "1 Chronicles 11", complete: false, sections: [] },
                { name: "1 Chronicles 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 133",
            complete: false,
            sections: [
                { name: "1 Chronicles 13", complete: false, sections: [] },
                { name: "1 Chronicles 14", complete: false, sections: [] },
                { name: "1 Chronicles 15", complete: false, sections: [] },
                { name: "1 Chronicles 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 134",
            complete: false,
            sections: [
                { name: "1 Chronicles 17", complete: false, sections: [] },
                { name: "1 Chronicles 18", complete: false, sections: [] },
                { name: "1 Chronicles 19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 135",
            complete: false,
            sections: [
                { name: "1 Chronicles 20", complete: false, sections: [] },
                { name: "1 Chronicles 21", complete: false, sections: [] },
                { name: "1 Chronicles 22", complete: false, sections: [] },
                { name: "1 Chronicles 23", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 136",
            complete: false,
            sections: [
                { name: "1 Chronicles 24", complete: false, sections: [] },
                { name: "1 Chronicles 25", complete: false, sections: [] },
                { name: "1 Chronicles 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 137",
            complete: false,
            sections: [
                { name: "1 Chronicles 27", complete: false, sections: [] },
                { name: "1 Chronicles 28", complete: false, sections: [] },
                { name: "1 Chronicles 29", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 138",
            complete: false,
            sections: [
                { name: "2 Chronicles 1", complete: false, sections: [] },
                { name: "2 Chronicles 2", complete: false, sections: [] },
                { name: "2 Chronicles 3", complete: false, sections: [] },
                { name: "2 Chronicles 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 139",
            complete: false,
            sections: [
                { name: "2 Chronicles 5", complete: false, sections: [] },
                { name: "2 Chronicles 6", complete: false, sections: [] },
                { name: "2 Chronicles 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 140",
            complete: false,
            sections: [
                { name: "2 Chronicles 8", complete: false, sections: [] },
                { name: "2 Chronicles 9", complete: false, sections: [] },
                { name: "2 Chronicles 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 141",
            complete: false,
            sections: [
                { name: "2 Chronicles 11", complete: false, sections: [] },
                { name: "2 Chronicles 12", complete: false, sections: [] },
                { name: "2 Chronicles 13", complete: false, sections: [] },
                { name: "2 Chronicles 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 142",
            complete: false,
            sections: [
                { name: "2 Chronicles 15", complete: false, sections: [] },
                { name: "2 Chronicles 16", complete: false, sections: [] },
                { name: "2 Chronicles 17", complete: false, sections: [] },
                { name: "2 Chronicles 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 143",
            complete: false,
            sections: [
                { name: "2 Chronicles 19", complete: false, sections: [] },
                { name: "2 Chronicles 20", complete: false, sections: [] },
                { name: "2 Chronicles 21", complete: false, sections: [] },
                { name: "2 Chronicles 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 144",
            complete: false,
            sections: [
                { name: "2 Chronicles 23", complete: false, sections: [] },
                { name: "2 Chronicles 24", complete: false, sections: [] },
                { name: "2 Chronicles 25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 145",
            complete: false,
            sections: [
                { name: "2 Chronicles 26", complete: false, sections: [] },
                { name: "2 Chronicles 27", complete: false, sections: [] },
                { name: "2 Chronicles 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 146",
            complete: false,
            sections: [
                { name: "2 Chronicles 29", complete: false, sections: [] },
                { name: "2 Chronicles 30", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 147",
            complete: false,
            sections: [
                { name: "2 Chronicles 31", complete: false, sections: [] },
                { name: "2 Chronicles 32", complete: false, sections: [] },
                { name: "2 Chronicles 33", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 148",
            complete: false,
            sections: [
                { name: "2 Chronicles 34", complete: false, sections: [] },
                { name: "2 Chronicles 35", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 149",
            complete: false,
            sections: [
                { name: "2 Chronicles 36", complete: false, sections: [] },
                { name: "Ezra 1", complete: false, sections: [] },
                { name: "Ezra 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 150",
            complete: false,
            sections: [
                { name: "Ezra 3", complete: false, sections: [] },
                { name: "Ezra 4", complete: false, sections: [] },
                { name: "Ezra 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 151",
            complete: false,
            sections: [
                { name: "Ezra 6", complete: false, sections: [] },
                { name: "Ezra 7", complete: false, sections: [] },
                { name: "Ezra 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 152",
            complete: false,
            sections: [
                { name: "Ezra 9", complete: false, sections: [] },
                { name: "Ezra 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 153",
            complete: false,
            sections: [
                { name: "Nehemiah 1", complete: false, sections: [] },
                { name: "Nehemiah 2", complete: false, sections: [] },
                { name: "Nehemiah 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 154",
            complete: false,
            sections: [
                { name: "Nehemiah 4", complete: false, sections: [] },
                { name: "Nehemiah 5", complete: false, sections: [] },
                { name: "Nehemiah 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 155",
            complete: false,
            sections: [
                { name: "Nehemiah 7", complete: false, sections: [] },
                { name: "Nehemiah 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 156",
            complete: false,
            sections: [
                { name: "Nehemiah 9", complete: false, sections: [] },
                { name: "Nehemiah 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 157",
            complete: false,
            sections: [
                { name: "Nehemiah 11", complete: false, sections: [] },
                { name: "Nehemiah 12", complete: false, sections: [] },
                { name: "Nehemiah 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 158",
            complete: false,
            sections: [
                { name: "Esther 1", complete: false, sections: [] },
                { name: "Esther 2", complete: false, sections: [] },
                { name: "Esther 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 159",
            complete: false,
            sections: [
                { name: "Esther 4", complete: false, sections: [] },
                { name: "Esther 5", complete: false, sections: [] },
                { name: "Esther 6", complete: false, sections: [] },
                { name: "Esther 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 160",
            complete: false,
            sections: [
                { name: "Esther 8", complete: false, sections: [] },
                { name: "Esther 9", complete: false, sections: [] },
                { name: "Esther 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 161",
            complete: false,
            sections: [
                { name: "Job 1", complete: false, sections: [] },
                { name: "Job 2", complete: false, sections: [] },
                { name: "Job 3", complete: false, sections: [] },
                { name: "Job 4", complete: false, sections: [] },
                { name: "Job 5", complete: false, sections: [] },
                { name: "Job 6", complete: false, sections: [] },
                { name: "Job 7", complete: false, sections: [] },
                { name: "Job 8", complete: false, sections: [] },
                { name: "Job 9", complete: false, sections: [] },
                { name: "Job 10", complete: false, sections: [] },
                { name: "Job 11", complete: false, sections: [] },
                { name: "Job 12", complete: false, sections: [] },
                { name: "Job 13", complete: false, sections: [] },
                { name: "Job 14", complete: false, sections: [] },
                { name: "Job 15", complete: false, sections: [] },
                { name: "Job 16", complete: false, sections: [] },
                { name: "Job 17", complete: false, sections: [] },
                { name: "Job 18", complete: false, sections: [] },
                { name: "Job 19", complete: false, sections: [] },
                { name: "Job 20", complete: false, sections: [] },
                { name: "Job 21", complete: false, sections: [] },
                { name: "Job 22", complete: false, sections: [] },
                { name: "Job 23", complete: false, sections: [] },
                { name: "Job 24", complete: false, sections: [] },
                { name: "Job 25", complete: false, sections: [] },
                { name: "Job 26", complete: false, sections: [] },
                { name: "Job 27", complete: false, sections: [] },
                { name: "Job 28", complete: false, sections: [] },
                { name: "Job 29", complete: false, sections: [] },
                { name: "Job 30", complete: false, sections: [] },
                { name: "Job 31", complete: false, sections: [] },
                { name: "Job 32", complete: false, sections: [] },
                { name: "Job 33", complete: false, sections: [] },
                { name: "Job 34", complete: false, sections: [] },
                { name: "Job 35", complete: false, sections: [] },
                { name: "Job 36", complete: false, sections: [] },
                { name: "Job 37", complete: false, sections: [] },
                { name: "Job 38", complete: false, sections: [] },
                { name: "Job 39", complete: false, sections: [] },
                { name: "Job 40", complete: false, sections: [] },
                { name: "Job 41", complete: false, sections: [] },
                { name: "Job 42", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 163",
            complete: false,
            sections: []
        },
        {
            name: "Day 164",
            complete: false,
            sections: []
        },
        {
            name: "Day 165",
            complete: false,
            sections: []
        },
        {
            name: "Day 166",
            complete: false,
            sections: []
        },
        {
            name: "Day 167",
            complete: false,
            sections: []
        },
        {
            name: "Day 168",
            complete: false,
            sections: []
        },
        {
            name: "Day 169",
            complete: false,
            sections: [
                { name: "Psalm 1", complete: false, sections: [] },
                { name: "Psalm 2", complete: false, sections: [] },
                { name: "Psalm 3", complete: false, sections: [] },
                { name: "Psalm 4", complete: false, sections: [] },
                { name: "Psalm 5", complete: false, sections: [] },
                { name: "Psalm 6", complete: false, sections: [] },
                { name: "Psalm 7", complete: false, sections: [] },
                { name: "Psalm 8", complete: false, sections: [] },
                { name: "Psalm 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 170",
            complete: false,
            sections: [
                { name: "Psalm 10", complete: false, sections: [] },
                { name: "Psalm 11", complete: false, sections: [] },
                { name: "Psalm 12", complete: false, sections: [] },
                { name: "Psalm 13", complete: false, sections: [] },
                { name: "Psalm 14", complete: false, sections: [] },
                { name: "Psalm 15", complete: false, sections: [] },
                { name: "Psalm 16", complete: false, sections: [] },
                { name: "Psalm 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 171",
            complete: false,
            sections: [
                { name: "Psalm 18", complete: false, sections: [] },
                { name: "Psalm 19", complete: false, sections: [] },
                { name: "Psalm 20", complete: false, sections: [] },
                { name: "Psalm 21", complete: false, sections: [] },
                { name: "Psalm 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 172",
            complete: false,
            sections: [
                { name: "Psalm 23", complete: false, sections: [] },
                { name: "Psalm 24", complete: false, sections: [] },
                { name: "Psalm 25", complete: false, sections: [] },
                { name: "Psalm 26", complete: false, sections: [] },
                { name: "Psalm 27", complete: false, sections: [] },
                { name: "Psalm 28", complete: false, sections: [] },
                { name: "Psalm 29", complete: false, sections: [] },
                { name: "Psalm 30", complete: false, sections: [] },
                { name: "Psalm 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 173",
            complete: false,
            sections: [
                { name: "Psalm 32", complete: false, sections: [] },
                { name: "Psalm 33", complete: false, sections: [] },
                { name: "Psalm 34", complete: false, sections: [] },
                { name: "Psalm 35", complete: false, sections: [] },
                { name: "Psalm 36", complete: false, sections: [] },
                { name: "Psalm 37", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 174",
            complete: false,
            sections: [
                { name: "Psalm 38", complete: false, sections: [] },
                { name: "Psalm 39", complete: false, sections: [] },
                { name: "Psalm 40", complete: false, sections: [] },
                { name: "Psalm 41", complete: false, sections: [] },
                { name: "Psalm 42", complete: false, sections: [] },
                { name: "Psalm 43", complete: false, sections: [] },
                { name: "Psalm 44", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 175",
            complete: false,
            sections: [
                { name: "Psalm 45", complete: false, sections: [] },
                { name: "Psalm 46", complete: false, sections: [] },
                { name: "Psalm 47", complete: false, sections: [] },
                { name: "Psalm 48", complete: false, sections: [] },
                { name: "Psalm 49", complete: false, sections: [] },
                { name: "Psalm 50", complete: false, sections: [] },
                { name: "Psalm 51", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 176",
            complete: false,
            sections: [
                { name: "Psalm 52", complete: false, sections: [] },
                { name: "Psalm 53", complete: false, sections: [] },
                { name: "Psalm 54", complete: false, sections: [] },
                { name: "Psalm 55", complete: false, sections: [] },
                { name: "Psalm 56", complete: false, sections: [] },
                { name: "Psalm 57", complete: false, sections: [] },
                { name: "Psalm 58", complete: false, sections: [] },
                { name: "Psalm 59", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 177",
            complete: false,
            sections: [
                { name: "Psalm 60", complete: false, sections: [] },
                { name: "Psalm 61", complete: false, sections: [] },
                { name: "Psalm 62", complete: false, sections: [] },
                { name: "Psalm 63", complete: false, sections: [] },
                { name: "Psalm 64", complete: false, sections: [] },
                { name: "Psalm 65", complete: false, sections: [] },
                { name: "Psalm 66", complete: false, sections: [] },
                { name: "Psalm 67", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 178",
            complete: false,
            sections: [
                { name: "Psalm 68", complete: false, sections: [] },
                { name: "Psalm 69", complete: false, sections: [] },
                { name: "Psalm 70", complete: false, sections: [] },
                { name: "Psalm 71", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 179",
            complete: false,
            sections: [
                { name: "Psalm 72", complete: false, sections: [] },
                { name: "Psalm 73", complete: false, sections: [] },
                { name: "Psalm 74", complete: false, sections: [] },
                { name: "Psalm 75", complete: false, sections: [] },
                { name: "Psalm 76", complete: false, sections: [] },
                { name: "Psalm 77", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 180",
            complete: false,
            sections: [
                { name: "Psalm 78", complete: false, sections: [] },
                { name: "Psalm 79", complete: false, sections: [] },
                { name: "Psalm 80", complete: false, sections: [] },
                { name: "Psalm 81", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 181",
            complete: false,
            sections: [
                { name: "Psalm 82", complete: false, sections: [] },
                { name: "Psalm 83", complete: false, sections: [] },
                { name: "Psalm 84", complete: false, sections: [] },
                { name: "Psalm 85", complete: false, sections: [] },
                { name: "Psalm 86", complete: false, sections: [] },
                { name: "Psalm 87", complete: false, sections: [] },
                { name: "Psalm 88", complete: false, sections: [] },
                { name: "Psalm 89", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 182",
            complete: false,
            sections: [
                { name: "Psalm 90", complete: false, sections: [] },
                { name: "Psalm 91", complete: false, sections: [] },
                { name: "Psalm 92", complete: false, sections: [] },
                { name: "Psalm 93", complete: false, sections: [] },
                { name: "Psalm 94", complete: false, sections: [] },
                { name: "Psalm 95", complete: false, sections: [] },
                { name: "Psalm 96", complete: false, sections: [] },
                { name: "Psalm 97", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 183",
            complete: false,
            sections: [
                { name: "Psalm 98", complete: false, sections: [] },
                { name: "Psalm 99", complete: false, sections: [] },
                { name: "Psalm 100", complete: false, sections: [] },
                { name: "Psalm 101", complete: false, sections: [] },
                { name: "Psalm 102", complete: false, sections: [] },
                { name: "Psalm 103", complete: false, sections: [] },
                { name: "Psalm 104", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 184",
            complete: false,
            sections: [
                { name: "Psalm 105", complete: false, sections: [] },
                { name: "Psalm 106", complete: false, sections: [] },
                { name: "Psalm 107", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 185",
            complete: false,
            sections: [
                { name: "Psalm 108", complete: false, sections: [] },
                { name: "Psalm 109", complete: false, sections: [] },
                { name: "Psalm 110", complete: false, sections: [] },
                { name: "Psalm 111", complete: false, sections: [] },
                { name: "Psalm 112", complete: false, sections: [] },
                { name: "Psalm 113", complete: false, sections: [] },
                { name: "Psalm 114", complete: false, sections: [] },
                { name: "Psalm 115", complete: false, sections: [] },
                { name: "Psalm 116", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 186",
            complete: false,
            sections: [
                { name: "Psalm 117", complete: false, sections: [] },
                { name: "Psalm 118", complete: false, sections: [] },
                { name: "Psalm 119:1-72", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 187",
            complete: false,
            sections: [
                { name: "Psalm 119:73-176", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 188",
            complete: false,
            sections: [
                { name: "Psalm 120", complete: false, sections: [] },
                { name: "Psalm 121", complete: false, sections: [] },
                { name: "Psalm 122", complete: false, sections: [] },
                { name: "Psalm 123", complete: false, sections: [] },
                { name: "Psalm 124", complete: false, sections: [] },
                { name: "Psalm 125", complete: false, sections: [] },
                { name: "Psalm 126", complete: false, sections: [] },
                { name: "Psalm 127", complete: false, sections: [] },
                { name: "Psalm 128", complete: false, sections: [] },
                { name: "Psalm 129", complete: false, sections: [] },
                { name: "Psalm 130", complete: false, sections: [] },
                { name: "Psalm 131", complete: false, sections: [] },
                { name: "Psalm 132", complete: false, sections: [] },
                { name: "Psalm 133", complete: false, sections: [] },
                { name: "Psalm 134", complete: false, sections: [] },
                { name: "Psalm 135", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 189",
            complete: false,
            sections: [
                { name: "Psalm 136", complete: false, sections: [] },
                { name: "Psalm 137", complete: false, sections: [] },
                { name: "Psalm 138", complete: false, sections: [] },
                { name: "Psalm 139", complete: false, sections: [] },
                { name: "Psalm 140", complete: false, sections: [] },
                { name: "Psalm 141", complete: false, sections: [] },
                { name: "Psalm 142", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 190",
            complete: false,
            sections: [
                { name: "Psalm 143", complete: false, sections: [] },
                { name: "Psalm 144", complete: false, sections: [] },
                { name: "Psalm 145", complete: false, sections: [] },
                { name: "Psalm 146", complete: false, sections: [] },
                { name: "Psalm 147", complete: false, sections: [] },
                { name: "Psalm 148", complete: false, sections: [] },
                { name: "Psalm 149", complete: false, sections: [] },
                { name: "Psalm 150", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 191",
            complete: false,
            sections: [
                { name: "Proverbs 1", complete: false, sections: [] },
                { name: "Proverbs 2", complete: false, sections: [] },
                { name: "Proverbs 3", complete: false, sections: [] },
                { name: "Proverbs 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 192",
            complete: false,
            sections: [
                { name: "Proverbs 5", complete: false, sections: [] },
                { name: "Proverbs 6", complete: false, sections: [] },
                { name: "Proverbs 7", complete: false, sections: [] },
                { name: "Proverbs 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 193",
            complete: false,
            sections: [
                { name: "Proverbs 9", complete: false, sections: [] },
                { name: "Proverbs 10", complete: false, sections: [] },
                { name: "Proverbs 11", complete: false, sections: [] },
                { name: "Proverbs 12", complete: false, sections: [] },
                { name: "Proverbs 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 194",
            complete: false,
            sections: [
                { name: "Proverbs 14", complete: false, sections: [] },
                { name: "Proverbs 15", complete: false, sections: [] },
                { name: "Proverbs 16", complete: false, sections: [] },
                { name: "Proverbs 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 195",
            complete: false,
            sections: [
                { name: "Proverbs 18", complete: false, sections: [] },
                { name: "Proverbs 19", complete: false, sections: [] },
                { name: "Proverbs 20", complete: false, sections: [] },
                { name: "Proverbs 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 196",
            complete: false,
            sections: [
                { name: "Proverbs 22", complete: false, sections: [] },
                { name: "Proverbs 23", complete: false, sections: [] },
                { name: "Proverbs 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 197",
            complete: false,
            sections: [
                { name: "Proverbs 25", complete: false, sections: [] },
                { name: "Proverbs 26", complete: false, sections: [] },
                { name: "Proverbs 27", complete: false, sections: [] },
                { name: "Proverbs 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 198",
            complete: false,
            sections: [
                { name: "Proverbs 29", complete: false, sections: [] },
                { name: "Proverbs 30", complete: false, sections: [] },
                { name: "Proverbs 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 199",
            complete: false,
            sections: [
                { name: "Ecclesiastes 1", complete: false, sections: [] },
                { name: "Ecclesiastes 2", complete: false, sections: [] },
                { name: "Ecclesiastes 3", complete: false, sections: [] },
                { name: "Ecclesiastes 4", complete: false, sections: [] },
                { name: "Ecclesiastes 5", complete: false, sections: [] },
                { name: "Ecclesiastes 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 200",
            complete: false,
            sections: [
                { name: "Ecclesiastes 7", complete: false, sections: [] },
                { name: "Ecclesiastes 8", complete: false, sections: [] },
                { name: "Ecclesiastes 9", complete: false, sections: [] },
                { name: "Ecclesiastes 10", complete: false, sections: [] },
                { name: "Ecclesiastes 11", complete: false, sections: [] },
                { name: "Ecclesiastes 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 201",
            complete: false,
            sections: [
                { name: "Song of Solomon 1", complete: false, sections: [] },
                { name: "Song of Solomon 2", complete: false, sections: [] },
                { name: "Song of Solomon 3", complete: false, sections: [] },
                { name: "Song of Solomon 4", complete: false, sections: [] },
                { name: "Song of Solomon 5", complete: false, sections: [] },
                { name: "Song of Solomon 6", complete: false, sections: [] },
                { name: "Song of Solomon 7", complete: false, sections: [] },
                { name: "Song of Solomon 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 202",
            complete: false,
            sections: [
                { name: "Isaiah 1", complete: false, sections: [] },
                { name: "Isaiah 2", complete: false, sections: [] },
                { name: "Isaiah 3", complete: false, sections: [] },
                { name: "Isaiah 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 203",
            complete: false,
            sections: [
                { name: "Isaiah 5", complete: false, sections: [] },
                { name: "Isaiah 6", complete: false, sections: [] },
                { name: "Isaiah 7", complete: false, sections: [] },
                { name: "Isaiah 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 204",
            complete: false,
            sections: [
                { name: "Isaiah 9", complete: false, sections: [] },
                { name: "Isaiah 10", complete: false, sections: [] },
                { name: "Isaiah 11", complete: false, sections: [] },
                { name: "Isaiah 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 205",
            complete: false,
            sections: [
                { name: "Isaiah 13", complete: false, sections: [] },
                { name: "Isaiah 14", complete: false, sections: [] },
                { name: "Isaiah 15", complete: false, sections: [] },
                { name: "Isaiah 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 206",
            complete: false,
            sections: [
                { name: "Isaiah 17", complete: false, sections: [] },
                { name: "Isaiah 18", complete: false, sections: [] },
                { name: "Isaiah 19", complete: false, sections: [] },
                { name: "Isaiah 20", complete: false, sections: [] },
                { name: "Isaiah 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 207",
            complete: false,
            sections: [
                { name: "Isaiah 22", complete: false, sections: [] },
                { name: "Isaiah 23", complete: false, sections: [] },
                { name: "Isaiah 24", complete: false, sections: [] },
                { name: "Isaiah 25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 208",
            complete: false,
            sections: [
                { name: "Isaiah 26", complete: false, sections: [] },
                { name: "Isaiah 27", complete: false, sections: [] },
                { name: "Isaiah 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 209",
            complete: false,
            sections: [
                { name: "Isaiah 29", complete: false, sections: [] },
                { name: "Isaiah 30", complete: false, sections: [] },
                { name: "Isaiah 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 210",
            complete: false,
            sections: [
                { name: "Isaiah 32", complete: false, sections: [] },
                { name: "Isaiah 33", complete: false, sections: [] },
                { name: "Isaiah 34", complete: false, sections: [] },
                { name: "Isaiah 35", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 211",
            complete: false,
            sections: [
                { name: "Isaiah 36", complete: false, sections: [] },
                { name: "Isaiah 37", complete: false, sections: [] },
                { name: "Isaiah 38", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 212",
            complete: false,
            sections: [
                { name: "Isaiah 39", complete: false, sections: [] },
                { name: "Isaiah 40", complete: false, sections: [] },
                { name: "Isaiah 41", complete: false, sections: [] },
                { name: "Isaiah 42", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 213",
            complete: false,
            sections: [
                { name: "Isaiah 43", complete: false, sections: [] },
                { name: "Isaiah 44", complete: false, sections: [] },
                { name: "Isaiah 45", complete: false, sections: [] },
                { name: "Isaiah 46", complete: false, sections: [] },
                { name: "Isaiah 47", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 214",
            complete: false,
            sections: [
                { name: "Isaiah 48", complete: false, sections: [] },
                { name: "Isaiah 49", complete: false, sections: [] },
                { name: "Isaiah 50", complete: false, sections: [] },
                { name: "Isaiah 51", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 215",
            complete: false,
            sections: [
                { name: "Isaiah 52", complete: false, sections: [] },
                { name: "Isaiah 53", complete: false, sections: [] },
                { name: "Isaiah 54", complete: false, sections: [] },
                { name: "Isaiah 55", complete: false, sections: [] },
                { name: "Isaiah 56", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 216",
            complete: false,
            sections: [
                { name: "Isaiah 57", complete: false, sections: [] },
                { name: "Isaiah 58", complete: false, sections: [] },
                { name: "Isaiah 59", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 217",
            complete: false,
            sections: [
                { name: "Isaiah 60", complete: false, sections: [] },
                { name: "Isaiah 61", complete: false, sections: [] },
                { name: "Isaiah 62", complete: false, sections: [] },
                { name: "Isaiah 63", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 218",
            complete: false,
            sections: [
                { name: "Isaiah 64", complete: false, sections: [] },
                { name: "Isaiah 65", complete: false, sections: [] },
                { name: "Isaiah 66", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 219",
            complete: false,
            sections: [
                { name: "Jeremiah 1", complete: false, sections: [] },
                { name: "Jeremiah 2", complete: false, sections: [] },
                { name: "Jeremiah 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 220",
            complete: false,
            sections: [
                { name: "Jeremiah 4", complete: false, sections: [] },
                { name: "Jeremiah 5", complete: false, sections: [] },
                { name: "Jeremiah 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 221",
            complete: false,
            sections: [
                { name: "Jeremiah 7", complete: false, sections: [] },
                { name: "Jeremiah 8", complete: false, sections: [] },
                { name: "Jeremiah 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 222",
            complete: false,
            sections: [
                { name: "Jeremiah 10", complete: false, sections: [] },
                { name: "Jeremiah 11", complete: false, sections: [] },
                { name: "Jeremiah 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 223",
            complete: false,
            sections: [
                { name: "Jeremiah 13", complete: false, sections: [] },
                { name: "Jeremiah 14", complete: false, sections: [] },
                { name: "Jeremiah 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 224",
            complete: false,
            sections: [
                { name: "Jeremiah 16", complete: false, sections: [] },
                { name: "Jeremiah 17", complete: false, sections: [] },
                { name: "Jeremiah 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 225",
            complete: false,
            sections: [
                { name: "Jeremiah 19", complete: false, sections: [] },
                { name: "Jeremiah 20", complete: false, sections: [] },
                { name: "Jeremiah 21", complete: false, sections: [] },
                { name: "Jeremiah 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 226",
            complete: false,
            sections: [
                { name: "Jeremiah 23", complete: false, sections: [] },
                { name: "Jeremiah 24", complete: false, sections: [] },
                { name: "Jeremiah 25:1-16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 227",
            complete: false,
            sections: [
                { name: "Jeremiah 25:17-38", complete: false, sections: [] },
                { name: "Jeremiah 26", complete: false, sections: [] },
                { name: "Jeremiah 27", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 228",
            complete: false,
            sections: [
                { name: "Jeremiah 28", complete: false, sections: [] },
                { name: "Jeremiah 29", complete: false, sections: [] },
                { name: "Jeremiah 30", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 229",
            complete: false,
            sections: [
                { name: "Jeremiah 31", complete: false, sections: [] },
                { name: "Jeremiah 32", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 230",
            complete: false,
            sections: [
                { name: "Jeremiah 33", complete: false, sections: [] },
                { name: "Jeremiah 34", complete: false, sections: [] },
                { name: "Jeremiah 35", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 231",
            complete: false,
            sections: [
                { name: "Jeremiah 36", complete: false, sections: [] },
                { name: "Jeremiah 37", complete: false, sections: [] },
                { name: "Jeremiah 38", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 232",
            complete: false,
            sections: [
                { name: "Jeremiah 39", complete: false, sections: [] },
                { name: "Jeremiah 40", complete: false, sections: [] },
                { name: "Jeremiah 41", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 233",
            complete: false,
            sections: [
                { name: "Jeremiah 42", complete: false, sections: [] },
                { name: "Jeremiah 43", complete: false, sections: [] },
                { name: "Jeremiah 44", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 234",
            complete: false,
            sections: [
                { name: "Jeremiah 45", complete: false, sections: [] },
                { name: "Jeremiah 46", complete: false, sections: [] },
                { name: "Jeremiah 47", complete: false, sections: [] },
                { name: "Jeremiah 48", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 235",
            complete: false,
            sections: [
                { name: "Jeremiah 49", complete: false, sections: [] },
                { name: "Jeremiah 50", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 236",
            complete: false,
            sections: [
                { name: "Jeremiah 51", complete: false, sections: [] },
                { name: "Jeremiah 52", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 237",
            complete: false,
            sections: [
                { name: "Lamentations 1", complete: false, sections: [] },
                { name: "Lamentations 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 238",
            complete: false,
            sections: [
                { name: "Lamentations 3", complete: false, sections: [] },
                { name: "Lamentations 4", complete: false, sections: [] },
                { name: "Lamentations 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 239",
            complete: false,
            sections: [
                { name: "Ezekiel 1", complete: false, sections: [] },
                { name: "Ezekiel 2", complete: false, sections: [] },
                { name: "Ezekiel 3", complete: false, sections: [] },
                { name: "Ezekiel 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 240",
            complete: false,
            sections: [
                { name: "Ezekiel 5", complete: false, sections: [] },
                { name: "Ezekiel 6", complete: false, sections: [] },
                { name: "Ezekiel 7", complete: false, sections: [] },
                { name: "Ezekiel 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 241",
            complete: false,
            sections: [
                { name: "Ezekiel 9", complete: false, sections: [] },
                { name: "Ezekiel 10", complete: false, sections: [] },
                { name: "Ezekiel 11", complete: false, sections: [] },
                { name: "Ezekiel 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 242",
            complete: false,
            sections: [
                { name: "Ezekiel 13", complete: false, sections: [] },
                { name: "Ezekiel 14", complete: false, sections: [] },
                { name: "Ezekiel 15", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 243",
            complete: false,
            sections: [
                { name: "Ezekiel 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 244",
            complete: false,
            sections: [
                { name: "Ezekiel 17", complete: false, sections: [] },
                { name: "Ezekiel 18", complete: false, sections: [] },
                { name: "Ezekiel 19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 245",
            complete: false,
            sections: [
                { name: "Ezekiel 20", complete: false, sections: [] },
                { name: "Ezekiel 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 246",
            complete: false,
            sections: [
                { name: "Ezekiel 22", complete: false, sections: [] },
                { name: "Ezekiel 23", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 247",
            complete: false,
            sections: [
                { name: "Ezekiel 24", complete: false, sections: [] },
                { name: "Ezekiel 25", complete: false, sections: [] },
                { name: "Ezekiel 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 248",
            complete: false,
            sections: [
                { name: "Ezekiel 27", complete: false, sections: [] },
                { name: "Ezekiel 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 249",
            complete: false,
            sections: [
                { name: "Ezekiel 29", complete: false, sections: [] },
                { name: "Ezekiel 30", complete: false, sections: [] },
                { name: "Ezekiel 31", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 250",
            complete: false,
            sections: [
                { name: "Ezekiel 32", complete: false, sections: [] },
                { name: "Ezekiel 33", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 251",
            complete: false,
            sections: [
                { name: "Ezekiel 34", complete: false, sections: [] },
                { name: "Ezekiel 35", complete: false, sections: [] },
                { name: "Ezekiel 36", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 252",
            complete: false,
            sections: [
                { name: "Ezekiel 37", complete: false, sections: [] },
                { name: "Ezekiel 38", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 253",
            complete: false,
            sections: [
                { name: "Ezekiel 39", complete: false, sections: [] },
                { name: "Ezekiel 40", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 254",
            complete: false,
            sections: [
                { name: "Ezekiel 41", complete: false, sections: [] },
                { name: "Ezekiel 42", complete: false, sections: [] },
                { name: "Ezekiel 43", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 255",
            complete: false,
            sections: [
                { name: "Ezekiel 44", complete: false, sections: [] },
                { name: "Ezekiel 45", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 256",
            complete: false,
            sections: [
                { name: "Ezekiel 46", complete: false, sections: [] },
                { name: "Ezekiel 47", complete: false, sections: [] },
                { name: "Ezekiel 48", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 257",
            complete: false,
            sections: [
                { name: "Daniel 1", complete: false, sections: [] },
                { name: "Daniel 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 258",
            complete: false,
            sections: [
                { name: "Daniel 3", complete: false, sections: [] },
                { name: "Daniel 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 259",
            complete: false,
            sections: [
                { name: "Daniel 5", complete: false, sections: [] },
                { name: "Daniel 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 260",
            complete: false,
            sections: [
                { name: "Daniel 7", complete: false, sections: [] },
                { name: "Daniel 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 261",
            complete: false,
            sections: [
                { name: "Daniel 9", complete: false, sections: [] },
                { name: "Daniel 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 262",
            complete: false,
            sections: [
                { name: "Daniel 11", complete: false, sections: [] },
                { name: "Daniel 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 263",
            complete: false,
            sections: [
                { name: "Hosea 1", complete: false, sections: [] },
                { name: "Hosea 2", complete: false, sections: [] },
                { name: "Hosea 3", complete: false, sections: [] },
                { name: "Hosea 4", complete: false, sections: [] },
                { name: "Hosea 5", complete: false, sections: [] },
                { name: "Hosea 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 264",
            complete: false,
            sections: [
                { name: "Hosea 7", complete: false, sections: [] },
                { name: "Hosea 8", complete: false, sections: [] },
                { name: "Hosea 9", complete: false, sections: [] },
                { name: "Hosea 10", complete: false, sections: [] },
                { name: "Hosea 11", complete: false, sections: [] },
                { name: "Hosea 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 265",
            complete: false,
            sections: [
                { name: "Hosea 13", complete: false, sections: [] },
                { name: "Hosea 14", complete: false, sections: [] },
                { name: "Joel", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 266",
            complete: false,
            sections: [
                { name: "Amos 1", complete: false, sections: [] },
                { name: "Amos 2", complete: false, sections: [] },
                { name: "Amos 3", complete: false, sections: [] },
                { name: "Amos 4", complete: false, sections: [] },
                { name: "Amos 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 267",
            complete: false,
            sections: [
                { name: "Amos 6", complete: false, sections: [] },
                { name: "Amos 7", complete: false, sections: [] },
                { name: "Amos 8", complete: false, sections: [] },
                { name: "Amos 9", complete: false, sections: [] },
                { name: "Obadiah", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 268",
            complete: false,
            sections: [
                { name: "Jonah 1", complete: false, sections: [] },
                { name: "Jonah 2", complete: false, sections: [] },
                { name: "Jonah 3", complete: false, sections: [] },
                { name: "Jonah 4", complete: false, sections: [] },
                { name: "Micah 1", complete: false, sections: [] },
                { name: "Micah 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 269",
            complete: false,
            sections: [
                { name: "Micah 3", complete: false, sections: [] },
                { name: "Micah 4", complete: false, sections: [] },
                { name: "Micah 5", complete: false, sections: [] },
                { name: "Micah 6", complete: false, sections: [] },
                { name: "Micah 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 270",
            complete: false,
            sections: [
                { name: "Nahum", complete: false, sections: [] },
                { name: "Habakkuk", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 271",
            complete: false,
            sections: [
                { name: "Zephaniah", complete: false, sections: [] },
                { name: "Haggai", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 272",
            complete: false,
            sections: [
                { name: "Zechariah 1", complete: false, sections: [] },
                { name: "Zechariah 2", complete: false, sections: [] },
                { name: "Zechariah 3", complete: false, sections: [] },
                { name: "Zechariah 4", complete: false, sections: [] },
                { name: "Zechariah 5", complete: false, sections: [] },
                { name: "Zechariah 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 273",
            complete: false,
            sections: [
                { name: "Zechariah 7", complete: false, sections: [] },
                { name: "Zechariah 8", complete: false, sections: [] },
                { name: "Zechariah 9", complete: false, sections: [] },
                { name: "Zechariah 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 274",
            complete: false,
            sections: [
                { name: "Zechariah 11", complete: false, sections: [] },
                { name: "Zechariah 12", complete: false, sections: [] },
                { name: "Zechariah 13", complete: false, sections: [] },
                { name: "Zechariah 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 275",
            complete: false,
            sections: [
                { name: "Malachi 1", complete: false, sections: [] },
                { name: "Malachi 2", complete: false, sections: [] },
                { name: "Malachi 3", complete: false, sections: [] },
                { name: "Malachi 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 276",
            complete: false,
            sections: [
                { name: "Matthew 1", complete: false, sections: [] },
                { name: "Matthew 2", complete: false, sections: [] },
                { name: "Matthew 3", complete: false, sections: [] },
                { name: "Matthew 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 277",
            complete: false,
            sections: [
                { name: "Matthew 5", complete: false, sections: [] },
                { name: "Matthew 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 278",
            complete: false,
            sections: [
                { name: "Matthew 7", complete: false, sections: [] },
                { name: "Matthew 8", complete: false, sections: [] },
                { name: "Matthew 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 279",
            complete: false,
            sections: [
                { name: "Matthew 10", complete: false, sections: [] },
                { name: "Matthew 11", complete: false, sections: [] },
                { name: "Matthew 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 280",
            complete: false,
            sections: [
                { name: "Matthew 13", complete: false, sections: [] },
                { name: "Matthew 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 281",
            complete: false,
            sections: [
                { name: "Matthew 15", complete: false, sections: [] },
                { name: "Matthew 16", complete: false, sections: [] },
                { name: "Matthew 17", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 282",
            complete: false,
            sections: [
                { name: "Matthew 18", complete: false, sections: [] },
                { name: "Matthew 19", complete: false, sections: [] },
                { name: "Matthew 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 283",
            complete: false,
            sections: [
                { name: "Matthew 21", complete: false, sections: [] },
                { name: "Matthew 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 284",
            complete: false,
            sections: [
                { name: "Matthew 23", complete: false, sections: [] },
                { name: "Matthew 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 285",
            complete: false,
            sections: [
                { name: "Matthew 25", complete: false, sections: [] },
                { name: "Matthew 26", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 286",
            complete: false,
            sections: [
                { name: "Matthew 27", complete: false, sections: [] },
                { name: "Matthew 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 287",
            complete: false,
            sections: [
                { name: "Mark 1", complete: false, sections: [] },
                { name: "Mark 2", complete: false, sections: [] },
                { name: "Mark 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 288",
            complete: false,
            sections: [
                { name: "Mark 4", complete: false, sections: [] },
                { name: "Mark 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 289",
            complete: false,
            sections: [
                { name: "Mark 6", complete: false, sections: [] },
                { name: "Mark 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 290",
            complete: false,
            sections: [
                { name: "Mark 8", complete: false, sections: [] },
                { name: "Mark 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 291",
            complete: false,
            sections: [
                { name: "Mark 10", complete: false, sections: [] },
                { name: "Mark 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 292",
            complete: false,
            sections: [
                { name: "Mark 12", complete: false, sections: [] },
                { name: "Mark 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 293",
            complete: false,
            sections: [
                { name: "Mark 14", complete: false, sections: [] },
                { name: "Mark 15", complete: false, sections: [] },
                { name: "Mark 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 294",
            complete: false,
            sections: [
                { name: "Luke 1", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 295",
            complete: false,
            sections: [
                { name: "Luke 2", complete: false, sections: [] },
                { name: "Luke 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 296",
            complete: false,
            sections: [
                { name: "Luke 4", complete: false, sections: [] },
                { name: "Luke 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 297",
            complete: false,
            sections: [
                { name: "Luke 6", complete: false, sections: [] },
                { name: "Luke 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 298",
            complete: false,
            sections: [
                { name: "Luke 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 299",
            complete: false,
            sections: [
                { name: "Luke 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 300",
            complete: false,
            sections: [
                { name: "Luke 10", complete: false, sections: [] },
                { name: "Luke 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 301",
            complete: false,
            sections: [
                { name: "Luke 12", complete: false, sections: [] },
                { name: "Luke 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 302",
            complete: false,
            sections: [
                { name: "Luke 14", complete: false, sections: [] },
                { name: "Luke 15", complete: false, sections: [] },
                { name: "Luke 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 303",
            complete: false,
            sections: [
                { name: "Luke 17", complete: false, sections: [] },
                { name: "Luke 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 304",
            complete: false,
            sections: [
                { name: "Luke 19", complete: false, sections: [] },
                { name: "Luke 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 305",
            complete: false,
            sections: [
                { name: "Luke 21", complete: false, sections: [] },
                { name: "Luke 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 306",
            complete: false,
            sections: [
                { name: "Luke 23", complete: false, sections: [] },
                { name: "Luke 24", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 307",
            complete: false,
            sections: [
                { name: "John 1", complete: false, sections: [] },
                { name: "John 2", complete: false, sections: [] },
                { name: "John 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 308",
            complete: false,
            sections: [
                { name: "John 4", complete: false, sections: [] },
                { name: "John 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 309",
            complete: false,
            sections: [
                { name: "John 6", complete: false, sections: [] },
                { name: "John 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 310",
            complete: false,
            sections: [
                { name: "John 8", complete: false, sections: [] },
                { name: "John 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 311",
            complete: false,
            sections: [
                { name: "John 10", complete: false, sections: [] },
                { name: "John 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 312",
            complete: false,
            sections: [
                { name: "John 12", complete: false, sections: [] },
                { name: "John 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 313",
            complete: false,
            sections: [
                { name: "John 14", complete: false, sections: [] },
                { name: "John 15", complete: false, sections: [] },
                { name: "John 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 314",
            complete: false,
            sections: [
                { name: "John 17", complete: false, sections: [] },
                { name: "John 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 315",
            complete: false,
            sections: [
                { name: "John 19", complete: false, sections: [] },
                { name: "John 20", complete: false, sections: [] },
                { name: "John 21", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 316",
            complete: false,
            sections: [
                { name: "Acts 1", complete: false, sections: [] },
                { name: "Acts 2", complete: false, sections: [] },
                { name: "Acts 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 317",
            complete: false,
            sections: [
                { name: "Acts 4", complete: false, sections: [] },
                { name: "Acts 5", complete: false, sections: [] },
                { name: "Acts 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 318",
            complete: false,
            sections: [
                { name: "Acts 7", complete: false, sections: [] },
                { name: "Acts 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 319",
            complete: false,
            sections: [
                { name: "Acts 9", complete: false, sections: [] },
                { name: "Acts 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 320",
            complete: false,
            sections: [
                { name: "Acts 11", complete: false, sections: [] },
                { name: "Acts 12", complete: false, sections: [] },
                { name: "Acts 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 321",
            complete: false,
            sections: [
                { name: "Acts 14", complete: false, sections: [] },
                { name: "Acts 15", complete: false, sections: [] },
                { name: "Acts 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 322",
            complete: false,
            sections: [
                { name: "Acts 17", complete: false, sections: [] },
                { name: "Acts 18", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 323",
            complete: false,
            sections: [
                { name: "Acts 19", complete: false, sections: [] },
                { name: "Acts 20", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 324",
            complete: false,
            sections: [
                { name: "Acts 21", complete: false, sections: [] },
                { name: "Acts 22", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 325",
            complete: false,
            sections: [
                { name: "Acts 23", complete: false, sections: [] },
                { name: "Acts 24", complete: false, sections: [] },
                { name: "Acts 25", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 326",
            complete: false,
            sections: [
                { name: "Acts 26", complete: false, sections: [] },
                { name: "Acts 27", complete: false, sections: [] },
                { name: "Acts 28", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 327",
            complete: false,
            sections: [
                { name: "Romans 1", complete: false, sections: [] },
                { name: "Romans 2", complete: false, sections: [] },
                { name: "Romans 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 328",
            complete: false,
            sections: [
                { name: "Romans 4", complete: false, sections: [] },
                { name: "Romans 5", complete: false, sections: [] },
                { name: "Romans 6", complete: false, sections: [] },
                { name: "Romans 7", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 329",
            complete: false,
            sections: [
                { name: "Romans 8", complete: false, sections: [] },
                { name: "Romans 9", complete: false, sections: [] },
                { name: "Romans 10", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 330",
            complete: false,
            sections: [
                { name: "Romans 11", complete: false, sections: [] },
                { name: "Romans 12", complete: false, sections: [] },
                { name: "Romans 13", complete: false, sections: [] },
                { name: "Romans 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 331",
            complete: false,
            sections: [
                { name: "Romans 15", complete: false, sections: [] },
                { name: "Romans 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 332",
            complete: false,
            sections: [
                { name: "1 Corinthians 1", complete: false, sections: [] },
                { name: "1 Corinthians 2", complete: false, sections: [] },
                { name: "1 Corinthians 3", complete: false, sections: [] },
                { name: "1 Corinthians 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 333",
            complete: false,
            sections: [
                { name: "1 Corinthians 5", complete: false, sections: [] },
                { name: "1 Corinthians 6", complete: false, sections: [] },
                { name: "1 Corinthians 7", complete: false, sections: [] },
                { name: "1 Corinthians 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 334",
            complete: false,
            sections: [
                { name: "1 Corinthians 9", complete: false, sections: [] },
                { name: "1 Corinthians 10", complete: false, sections: [] },
                { name: "1 Corinthians 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 335",
            complete: false,
            sections: [
                { name: "1 Corinthians 12", complete: false, sections: [] },
                { name: "1 Corinthians 13", complete: false, sections: [] },
                { name: "1 Corinthians 14", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 336",
            complete: false,
            sections: [
                { name: "1 Corinthians 15", complete: false, sections: [] },
                { name: "1 Corinthians 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 337",
            complete: false,
            sections: [
                { name: "2 Corinthians 1", complete: false, sections: [] },
                { name: "2 Corinthians 2", complete: false, sections: [] },
                { name: "2 Corinthians 3", complete: false, sections: [] },
                { name: "2 Corinthians 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 338",
            complete: false,
            sections: [
                { name: "2 Corinthians 5", complete: false, sections: [] },
                { name: "2 Corinthians 6", complete: false, sections: [] },
                { name: "2 Corinthians 7", complete: false, sections: [] },
                { name: "2 Corinthians 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 339",
            complete: false,
            sections: [
                { name: "2 Corinthians 9", complete: false, sections: [] },
                { name: "2 Corinthians 10", complete: false, sections: [] },
                { name: "2 Corinthians 11", complete: false, sections: [] },
                { name: "2 Corinthians 12", complete: false, sections: [] },
                { name: "2 Corinthians 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 340",
            complete: false,
            sections: [
                { name: "Galatians 1", complete: false, sections: [] },
                { name: "Galatians 2", complete: false, sections: [] },
                { name: "Galatians 3", complete: false, sections: [] },
                { name: "Galatians 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 341",
            complete: false,
            sections: [
                { name: "Galatians 5", complete: false, sections: [] },
                { name: "Galatians 6", complete: false, sections: [] },
                { name: "Ephesians 1", complete: false, sections: [] },
                { name: "Ephesians 2", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 342",
            complete: false,
            sections: [
                { name: "Ephesians 3", complete: false, sections: [] },
                { name: "Ephesians 4", complete: false, sections: [] },
                { name: "Ephesians 5", complete: false, sections: [] },
                { name: "Ephesians 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 343",
            complete: false,
            sections: [
                { name: "Philippians 1", complete: false, sections: [] },
                { name: "Philippians 2", complete: false, sections: [] },
                { name: "Philippians 3", complete: false, sections: [] },
                { name: "Philippians 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 344",
            complete: false,
            sections: [
                { name: "Colossians 1", complete: false, sections: [] },
                { name: "Colossians 2", complete: false, sections: [] },
                { name: "Colossians 3", complete: false, sections: [] },
                { name: "Colossians 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 345",
            complete: false,
            sections: [
                { name: "1 Thessalonians 1", complete: false, sections: [] },
                { name: "1 Thessalonians 2", complete: false, sections: [] },
                { name: "1 Thessalonians 3", complete: false, sections: [] },
                { name: "1 Thessalonians 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 346",
            complete: false,
            sections: [
                { name: "1 Thessalonians 5", complete: false, sections: [] },
                { name: "2 Thessalonians 1", complete: false, sections: [] },
                { name: "2 Thessalonians 2", complete: false, sections: [] },
                { name: "2 Thessalonians 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 347",
            complete: false,
            sections: [
                { name: "1 Timothy 1", complete: false, sections: [] },
                { name: "1 Timothy 2", complete: false, sections: [] },
                { name: "1 Timothy 3", complete: false, sections: [] },
                { name: "1 Timothy 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 348",
            complete: false,
            sections: [
                { name: "1 Timothy 5", complete: false, sections: [] },
                { name: "1 Timothy 6", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 349",
            complete: false,
            sections: [
                { name: "2 Timothy 1", complete: false, sections: [] },
                { name: "2 Timothy 2", complete: false, sections: [] },
                { name: "2 Timothy 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 350",
            complete: false,
            sections: [
                { name: "Titus 1", complete: false, sections: [] },
                { name: "Titus 2", complete: false, sections: [] },
                { name: "Titus 3", complete: false, sections: [] },
                { name: "Philemon", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 351",
            complete: false,
            sections: [
                { name: "Hebrews 1", complete: false, sections: [] },
                { name: "Hebrews 2", complete: false, sections: [] },
                { name: "Hebrews 3", complete: false, sections: [] },
                { name: "Hebrews 4", complete: false, sections: [] },
                { name: "Hebrews 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 352",
            complete: false,
            sections: [
                { name: "Hebrews 6", complete: false, sections: [] },
                { name: "Hebrews 7", complete: false, sections: [] },
                { name: "Hebrews 8", complete: false, sections: [] },
                { name: "Hebrews 9", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 353",
            complete: false,
            sections: [
                { name: "Hebrews 10", complete: false, sections: [] },
                { name: "Hebrews 11", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 354",
            complete: false,
            sections: [
                { name: "Hebrews 12", complete: false, sections: [] },
                { name: "Hebrews 13", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 355",
            complete: false,
            sections: [
                { name: "James 1", complete: false, sections: [] },
                { name: "James 2", complete: false, sections: [] },
                { name: "James 3", complete: false, sections: [] },
                { name: "James 4", complete: false, sections: [] },
                { name: "James 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 356",
            complete: false,
            sections: [
                { name: "1 Peter 1", complete: false, sections: [] },
                { name: "1 Peter 2", complete: false, sections: [] },
                { name: "1 Peter 3", complete: false, sections: [] },
                { name: "1 Peter 4", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 357",
            complete: false,
            sections: [
                { name: "1 Peter 5", complete: false, sections: [] },
                { name: "1 Peter 1", complete: false, sections: [] },
                { name: "2 Peter 2", complete: false, sections: [] },
                { name: "2 Peter 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 358",
            complete: false,
            sections: [
                { name: "1 John 1", complete: false, sections: [] },
                { name: "1 John 2", complete: false, sections: [] },
                { name: "1 John 3", complete: false, sections: [] },
                { name: "1 John 4", complete: false, sections: [] },
                { name: "1 John 5", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 359",
            complete: false,
            sections: [
                { name: "2 John", complete: false, sections: [] },
                { name: "3 John", complete: false, sections: [] },
                { name: "Jude", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 360",
            complete: false,
            sections: [
                { name: "Revelation 1", complete: false, sections: [] },
                { name: "Revelation 2", complete: false, sections: [] },
                { name: "Revelation 3", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 361",
            complete: false,
            sections: [
                { name: "Revelation 4", complete: false, sections: [] },
                { name: "Revelation 5", complete: false, sections: [] },
                { name: "Revelation 6", complete: false, sections: [] },
                { name: "Revelation 7", complete: false, sections: [] },
                { name: "Revelation 8", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 362",
            complete: false,
            sections: [
                { name: "Revelation 9", complete: false, sections: [] },
                { name: "Revelation 10", complete: false, sections: [] },
                { name: "Revelation 11", complete: false, sections: [] },
                { name: "Revelation 12", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 363",
            complete: false,
            sections: [
                { name: "Revelation 13", complete: false, sections: [] },
                { name: "Revelation 14", complete: false, sections: [] },
                { name: "Revelation 15", complete: false, sections: [] },
                { name: "Revelation 16", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 364",
            complete: false,
            sections: [
                { name: "Revelation 17", complete: false, sections: [] },
                { name: "Revelation 18", complete: false, sections: [] },
                { name: "Revelation 19", complete: false, sections: [] },
            ]
        },
        {
            name: "Day 365",
            complete: false,
            sections: [
                { name: "Revelation 20", complete: false, sections: [] },
                { name: "Revelation 21", complete: false, sections: [] },
                { name: "Revelation 22", complete: false, sections: [] },
            ]
        },
    ],
};
//# sourceMappingURL=bible-reading-cover.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memorialReading; });
var memorialReading = {
    name: "Bible - Memorial Reading",
    complete: false,
    sections: [
        {
            name: "Nisan 8 (Sabbath)",
            complete: false,
            sections: [
                { name: "John 11:55-12:1", complete: false, sections: [] },
            ]
        },
        {
            name: "Nisan 9",
            complete: false,
            sections: [
                { name: "Matthew 26:6-13", complete: false, sections: [] },
                { name: "Mark 14:3-9", complete: false, sections: [] },
                { name: "John 12:2-11", complete: false, sections: [] },
                { name: "Matthew 21:1-11, 14-17", complete: false, sections: [] },
                { name: "Mark 11:1-11", complete: false, sections: [] },
                { name: "Luke 19:29-44", complete: false, sections: [] },
                { name: "John 12:12-19", complete: false, sections: [] },
            ]
        },
        {
            name: "Nisan 10",
            complete: false,
            sections: [
                { name: "Matthew 21:18,19", complete: false, sections: [] },
                { name: "Matthew 21:12,13", complete: false, sections: [] },
                { name: "Mark 11:12-19", complete: false, sections: [] },
                { name: "Luke 19:45-48", complete: false, sections: [] },
                { name: "John 12:20-50", complete: false, sections: [] },
            ]
        },
        {
            name: "Nisan 11",
            complete: false,
            sections: [
                { name: "Matthew 21:19-25:46", complete: false, sections: [] },
                { name: "Mark 11:20-13:37", complete: false, sections: [] },
                { name: "Luke 20:1-21:38", complete: false, sections: [] },
            ]
        },
        {
            name: "Nisan 12",
            complete: false,
            sections: [
                { name: "Matthew 26:1-5, 14-16", complete: false, sections: [] },
                { name: "Mark 14:1, 2, 10, 11", complete: false, sections: [] },
                { name: "Luke 22:1-6", complete: false, sections: [] },
            ]
        },
        {
            name: "Nisan 13",
            complete: false,
            sections: [
                { name: "Matthew 26:17-19", complete: false, sections: [] },
                { name: "Mark 14:12-16", complete: false, sections: [] },
                { name: "Luke 22:7-13", complete: false, sections: [] },
            ]
        },
        {
            name: "Nisan 14",
            complete: false,
            sections: [
                { name: "Matthew 26:20-35", complete: false, sections: [] },
                { name: "Mark 14:17-31", complete: false, sections: [] },
                { name: "Luke 22:14-38", complete: false, sections: [] },
                { name: "John 13:1-17:26", complete: false, sections: [] },
                { name: "Matthew 26:36-75", complete: false, sections: [] },
                { name: "Mark 14:32-72", complete: false, sections: [] },
                { name: "Luke 22:39-65", complete: false, sections: [] },
                { name: "John 18:1-27", complete: false, sections: [] },
                { name: "Matthew 27:1-61", complete: false, sections: [] },
                { name: "Mark 15:1-47", complete: false, sections: [] },
                { name: "Luke 22:66-23:56", complete: false, sections: [] },
                { name: "John 18:28-19:42", complete: false, sections: [] },
            ]
        },
        {
            name: "Nisan 15",
            complete: false,
            sections: [
                { name: "Matthew 27:62-66", complete: false, sections: [] },
            ]
        },
        {
            name: "Nisan 16",
            complete: false,
            sections: [
                { name: "Mark 16:1", complete: false, sections: [] },
                { name: "Matthew 28:1-15", complete: false, sections: [] },
                { name: "Mark 16:2-8", complete: false, sections: [] },
                { name: "Luke 24:1-49", complete: false, sections: [] },
                { name: "John 20:1-25", complete: false, sections: [] },
            ]
        },
    ]
};
//# sourceMappingURL=memorial-reading.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SchedulesEffects = (function () {
    function SchedulesEffects($actions, schedulesService) {
        var _this = this;
        this.$actions = $actions;
        this.schedulesService = schedulesService;
        this.$initSchedules = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["g" /* INIT */])
            .mergeMap(function () { return [
            new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["o" /* InitRemoteSchedulesAction */](),
            new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["n" /* InitLocalSchedulesAction */]()
        ]; });
        this.$loadLocalSchedules = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["j" /* INITLOCAL */])
            .switchMap(function () {
            return _this.schedulesService.getLocalSchedules()
                .map(function (schedules) {
                var payload = (schedules) ? schedules : [];
                return new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["q" /* LocalSchedulesLoadedAction */](payload);
            });
        });
        this.$loadRemoteSchedules = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["k" /* INITREMOTE */])
            .switchMap(function () {
            return _this.schedulesService.getRemoteSchedules()
                .map(function (schedules) { return new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["A" /* RemoteSchedulesLoadedAction */](schedules); });
        });
        this.$downloadRemoteSchedule = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["i" /* INITDOWNLOAD */])
            .switchMap(function (action) {
            return _this.schedulesService.downloadRemoteSchedule(action.payload.id)
                .map(function (checkpoints) { return new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["C" /* SaveLocalScheduleAction */]({ schedule: action.payload, checkpoints: checkpoints }); });
        });
        this.$saveLocalSchedule = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["B" /* SAVELOCALSCHEDULE */])
            .switchMap(function (action) {
            return _this.schedulesService.saveLocalSchedule(action.payload)
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["f" /* DownloadSuccessAction */](action.payload); });
        });
        this.$deleteLocalSchedule = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["h" /* INITDELETELOCAL */])
            .switchMap(function (action) {
            return _this.schedulesService.deleteLocalSchedule(action.payload)
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["e" /* DeleteLocalSuccessAction */](action.payload); });
        });
        this.loadLocalPinned = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["r" /* PINNEDLOADED */])
            .switchMap(function (action) {
            return _this.schedulesService.getLocalPinned()
                .map(function (data) {
                var pinned = data ? data : [];
                return new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["y" /* PinnedLoadedSuccessAction */](pinned);
            });
        });
        this.localPinSchedule = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["t" /* PINSCHEDULES */])
            .switchMap(function (action) {
            return _this.schedulesService.saveLocalPinned(action.payload)
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["w" /* PinScheduleSuccessAction */](action.payload); });
        });
        this.localUnpinSchedule = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["D" /* UNPINSCHEDULES */])
            .switchMap(function (action) {
            return _this.schedulesService.removeLocalPinned(action.payload)
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_8__actions_schedules_actions__["G" /* UnpinScheduleSuccessAction */](action.payload); });
        });
    }
    return SchedulesEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "$initSchedules", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "$loadLocalSchedules", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "$loadRemoteSchedules", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "$downloadRemoteSchedule", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "$saveLocalSchedule", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "$deleteLocalSchedule", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "loadLocalPinned", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "localPinSchedule", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SchedulesEffects.prototype, "localUnpinSchedule", void 0);
SchedulesEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_9__services__["b" /* SchedulesService */]])
], SchedulesEffects);

//# sourceMappingURL=schedules.effects.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckpointsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_checkpoints_actions__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CheckpointsEffects = (function () {
    function CheckpointsEffects($actions, checkpointsService) {
        var _this = this;
        this.$actions = $actions;
        this.checkpointsService = checkpointsService;
        this.$initCheckpoints = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_checkpoints_actions__["a" /* INIT */])
            .mergeMap(function () { return [
            new __WEBPACK_IMPORTED_MODULE_8__actions_checkpoints_actions__["f" /* InitRemoteCheckpointsAction */](),
            new __WEBPACK_IMPORTED_MODULE_8__actions_checkpoints_actions__["e" /* InitLocalCheckpointsAction */]()
        ]; });
        this.$loadLocalCheckpoints = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_checkpoints_actions__["b" /* INITLOCAL */])
            .switchMap(function () {
            return _this.checkpointsService.getLocalCheckpoints()
                .map(function (checkpoints) {
                var payload = (checkpoints) ? checkpoints : [];
                return new __WEBPACK_IMPORTED_MODULE_8__actions_checkpoints_actions__["i" /* LocalCheckpointsLoadedAction */](payload);
            });
        });
        this.$saveLocalCheckpoint = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_checkpoints_actions__["c" /* INITSAVELOCALCHECKPOINT */])
            .switchMap(function (action) {
            return _this.checkpointsService.saveLocalCheckpoint(action.payload)
                .map(function (checkpoints) { return new __WEBPACK_IMPORTED_MODULE_8__actions_checkpoints_actions__["l" /* SaveLocalSuccessAction */](checkpoints); });
        });
    }
    return CheckpointsEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], CheckpointsEffects.prototype, "$initCheckpoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], CheckpointsEffects.prototype, "$loadLocalCheckpoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], CheckpointsEffects.prototype, "$saveLocalCheckpoint", void 0);
CheckpointsEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_9__services__["a" /* CheckpointsService */]])
], CheckpointsEffects);

//# sourceMappingURL=checkpoints.effects.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineCommponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_timeline_list_modal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_timeline_actions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_timeline_reducer__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TimelineCommponent = (function () {
    function TimelineCommponent(navCtrl, modalCtrl, store) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.store = store;
        this.groups$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_timeline_reducer__["a" /* getGroups */]);
        this.items$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_timeline_reducer__["b" /* getItems */]);
        this.years$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_timeline_reducer__["d" /* getYears */]);
        this.timelineData$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers_timeline_reducer__["c" /* getTimelineData */]);
    }
    TimelineCommponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_timeline_actions__["b" /* InitTimelineAction */]());
    };
    TimelineCommponent.prototype.showGroupSelection = function (items$, groups$) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_timeline_list_modal__["a" /* TimelineListModal */], {
            items: items$,
            groups: groups$
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data && data.groups && data.groups.length <= 6) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_timeline_actions__["d" /* SetGroupsAction */](data.groups));
            }
        });
    };
    TimelineCommponent.prototype.getGroupRowCount = function (items, group) {
        return this.listGroupItems(items, group).map(function (item) { return item.tier; }).reduce(function (a, b) { return a > b ? a : b; });
    };
    TimelineCommponent.prototype.getTimelineWidth = function (timelineData) {
        return ((timelineData.start - timelineData.end) * timelineData.increment) + 'px';
    };
    TimelineCommponent.prototype.listGroupItems = function (items, group) {
        return items.filter(function (item) { return item.group == group; });
    };
    TimelineCommponent.prototype.listYearItems = function (years) {
        return years.filter(function (y) { return y <= 4100; }).map(function (year) {
            return {
                name: (year == 4100) ? "Creation" : year + " B.C.E.",
                start: year,
                end: year,
                tier: 1,
                url: "",
                group: "TIMELINE_DATES"
            };
        });
    };
    TimelineCommponent.prototype.zoomIn = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_timeline_actions__["i" /* ZoomInAction */]());
    };
    TimelineCommponent.prototype.zoomOut = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_timeline_actions__["j" /* ZoomOutAction */]());
    };
    return TimelineCommponent;
}());
TimelineCommponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: 'TimelineComponent'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n<ion-navbar>\n   <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n   </button>\n   <ion-title>Timeline</ion-title>\n   <ion-buttons end>\n      <button ion-button icon-only (click)=\"showGroupSelection(items$, groups$)\">\n         <ion-icon name=\"md-options\"></ion-icon>\n      </button>\n   </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n   <div class=\"timeline--outer\">\n      <div [style.width]=\"getTimelineWidth(timelineData$ | async)\" class=\"timeline--inner\">\n         <ion-grid class=\"timeline--grid\" no-padding>\n            <ion-row class=\"box box--1\">\n               <app-timeline-row [timelineData]=\"(timelineData$ | async)\" [rows]=\"1\" [rowNumber]=\"1\" [items]=\"listYearItems(years$ | async)\"></app-timeline-row>\n            </ion-row>\n            <ion-row class=\"box box--2\" *ngFor=\"let group of (groups$ | async); let i = index\">\n               <app-timeline-row [timelineData]=\"(timelineData$ | async)\" [rows]=\"getGroupRowCount((items$ | async), group)\" [rowNumber]=\"i + 1\" [items]=\"listGroupItems((items$ | async), group)\"></app-timeline-row>\n            </ion-row>\n         </ion-grid>\n      </div>\n   </div>\n   <ion-fab right bottom>\n      <button ion-fab><ion-icon name=\"md-settings\"></ion-icon></button>\n      <ion-fab-list side=\"left\">\n         <button ion-fab mini\n            [ngClass]=\"{'disabled':(timelineData$ | async).increment <= 1}\"\n            [disabled]=\"(timelineData$ | async).increment <= 1\"\n            (click)=\"zoomIn()\"><ion-icon name=\"md-add\"></ion-icon></button>\n         <button ion-fab mini\n            [ngClass]=\"{'disabled':(timelineData$ | async).increment >= 50}\"\n            [disabled]=\"(timelineData$ | async).increment >= 50\"\n            (click)=\"zoomOut()\"><ion-icon name=\"md-remove\"></ion-icon></button>\n      </ion-fab-list>\n   </ion-fab>\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
], TimelineCommponent);

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_modal__ = __webpack_require__(204);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeline_list_modal__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__timeline_list_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline_row_component__ = __webpack_require__(349);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__timeline_row_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_modal__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineRowComponent = (function () {
    function TimelineRowComponent(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    TimelineRowComponent.prototype.clickTimelineItem = function (item) {
        if (item.url) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_profile_modal__["a" /* ProfileModal */], { profile: item });
            modal.present();
        }
    };
    TimelineRowComponent.prototype.pixelize = function (digit) {
        return digit + 'px';
    };
    TimelineRowComponent.prototype.getYearPosition = function (start, year, increment) {
        //   1 year  =   10px
        //  10 years =  100px
        // 100 years = 1000px
        return (start - year) * (100 / increment);
    };
    TimelineRowComponent.prototype.getYearAlignment = function (timelineData, year) {
        return this.pixelize(this.getYearPosition(timelineData.start, year, timelineData.increment));
    };
    TimelineRowComponent.prototype.getWidth = function (timelineData, start, end) {
        var width = this.getYearPosition(timelineData.start, end, timelineData.increment) - this.getYearPosition(timelineData.start, start, timelineData.increment);
        if (width === 0) {
            width = 300;
        }
        else if (this.isItemShort(start, end, timelineData.increment)) {
            width += 100;
        }
        return this.pixelize(width);
    };
    TimelineRowComponent.prototype.getBorderWidth = function (timelineData, start, end) {
        var width = this.getYearPosition(timelineData.start, end, timelineData.increment) - this.getYearPosition(timelineData.start, start, timelineData.increment);
        if (width === 0 || !this.isItemShort(start, end, timelineData.increment)) {
            width = 1;
        }
        return this.pixelize(width);
    };
    TimelineRowComponent.prototype.isItemShort = function (start, end, increment) {
        return (start - end) < (increment / 2);
    };
    return TimelineRowComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], TimelineRowComponent.prototype, "rows", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], TimelineRowComponent.prototype, "rowNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], TimelineRowComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TimelineRowComponent.prototype, "timelineData", void 0);
TimelineRowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-timeline-row',
        template: "\n   <ol class=\"tl--items\">\n      <li class=\"tl--item\" \n      (click)=\"clickTimelineItem(item)\"\n         [ngClass]=\"[\n            'tl--row-' + rows + '-' + item.tier, \n            isItemShort(item.start, item.end, timelineData.increment) ? 'tl--side-' + rowNumber :'tl--bg-' + rowNumber\n         ]\"\n         [style.border-left-width]=\"getBorderWidth(timelineData, item.start, item.end)\"\n         [style.padding-left]=\"isItemShort(item.start, item.end, timelineData.increment) ? '0px' : '5px'\"\n         [style.left]=\"getYearAlignment(timelineData, item.start)\"\n         [style.width]=\"getWidth(timelineData, item.start, item.end)\"\n         *ngFor=\"let item of items\">\n         <span [style.color]=\"(item.group == 'TIMELINE_DATES') ? '#003740':'black'\" \n         class=\"tl--item-title\">{{(isItemShort(item.start, item.end, timelineData.increment)) ? '&#9664; ' + item.name : item.name}}</span>\n      </li>\n   </ol>\n   ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], TimelineRowComponent);

//# sourceMappingURL=timeline-row.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimelineService = (function () {
    function TimelineService() {
    }
    TimelineService.prototype.getAllItems = function () {
        var items = bibleBooksCoverage.concat(events, kingsOfJudah, kingsOfSamaria, lifespans, prophets, outstandingHistoricalDates);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(items);
        });
    };
    return TimelineService;
}());
TimelineService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], TimelineService);

var lifespans = [
    { name: "Jehovah", start: 4100, end: 1, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehovah", group: "Lifespans" },
    { name: "Adam", start: 4026, end: 3096, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Adam", group: "Lifespans" },
    { name: "Enoch", start: 3404, end: 3039, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Enoch", group: "Lifespans" },
    { name: "Methuselah", start: 3339, end: 2370, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Methuselah", group: "Lifespans" },
];
var outstandingHistoricalDates = [
    { name: "Adam's creation", start: 4026, end: 4026, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Adam", group: "Outstanding Historical Dates" },
    { name: "Edenic covenant made, first prophecy", start: 4026, end: 4026, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Covenant", group: "Outstanding Historical Dates" },
    { name: "Cain slays Abel", start: 3896, end: 3896, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Cain", group: "Outstanding Historical Dates" },
    { name: "Birth of Seth", start: 3896, end: 3896, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Seth", group: "Outstanding Historical Dates" },
    { name: "Birth of righteous Enoch", start: 3404, end: 3404, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Enoch", group: "Outstanding Historical Dates" },
    { name: "Birth of Methuselah", start: 3339, end: 3339, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Methuselah", group: "Outstanding Historical Dates" },
    { name: "Birth of Lamech", start: 3152, end: 3152, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Lamech", group: "Outstanding Historical Dates" },
    { name: "Death of Adam", start: 3096, end: 3096, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Adam", group: "Outstanding Historical Dates" },
    { name: "Transference of Enoch", start: 3039, end: 3039, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Enoch", group: "Outstanding Historical Dates" },
    { name: "Birth of Noah", start: 2970, end: 2970, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Noah", group: "Outstanding Historical Dates" },
    { name: "God's pronouncement as to mankind", start: 2490, end: 2490, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Flood", group: "Outstanding Historical Dates" },
    { name: "Birth of Japeth", start: 2470, end: 2470, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Japeth", group: "Outstanding Historical Dates" },
    { name: "Birth of Shem", start: 2468, end: 2468, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Shem", group: "Outstanding Historical Dates" },
    { name: "Death of Methuselah", start: 2370, end: 2370, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Methuselah", group: "Outstanding Historical Dates" },
    { name: "The Great Flood", start: 2370, end: 2370, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Flood", group: "Outstanding Historical Dates" },
];
var bibleBooksCoverage = [
    { name: 'Genesis', start: 4100, end: 1657, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Genesis", group: "Bible Books Time Period" },
    { name: 'Exodus', start: 1657, end: 1512, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Exodus", group: "Bible Books Time Period" },
    { name: 'Leviticus', start: 1512, end: 1512, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Leviticus", group: "Bible Books Time Period" },
    { name: 'Numbers', start: 1512, end: 1473, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Numbers", group: "Bible Books Time Period" },
    { name: 'Deuteronomy', start: 1473, end: 1473, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Deuteronomy", group: "Bible Books Time Period" },
    { name: 'Joshua', start: 1473, end: 1450, tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Joshua", group: "Bible Books Time Period" },
    { name: 'Judges', start: 1450, end: 1120, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Judges", group: "Bible Books Time Period" },
    { name: 'Ruth', start: 1131, end: 1120, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ruth", group: "Bible Books Time Period" },
    { name: '1 Samuel', start: 1180, end: 1078, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=1%20Samuel", group: "Bible Books Time Period" },
    { name: '2 Samuel', start: 1077, end: 1040, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=2%20Samuel", group: "Bible Books Time Period" },
    { name: '1 Kings', start: 1040, end: 911, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=1%20Kings", group: "Bible Books Time Period" },
    { name: '2 Kings', start: 920, end: 580, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=2%20Kings", group: "Bible Books Time Period" },
    { name: '1 Chronicles', start: 1077, end: 1037, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=1%20Chronicles", group: "Bible Books Time Period" },
    { name: '2 Chronicles', start: 1037, end: 537, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=2%20Chronicles", group: "Bible Books Time Period" },
    { name: 'Ezra', start: 537, end: 467, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ezra", group: "Bible Books Time Period" },
    { name: 'Nehemiah', start: 456, end: 443, tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nehemiah", group: "Bible Books Time Period" },
    { name: 'Esther', start: 493, end: 475, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Esther", group: "Bible Books Time Period" },
    { name: 'Psalms', start: 460, end: 460, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Psalms", group: "Bible Books Time Period" },
    { name: 'Proverbs', start: 717, end: 717, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Proverbs", group: "Bible Books Time Period" },
    { name: 'Ecclesiastes', start: 1000, end: 1000, tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ecclesiastes", group: "Bible Books Time Period" },
    { name: 'Song of Solomon', start: 1020, end: 1020, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Song%20of%20Solomon", group: "Bible Books Time Period" },
    { name: 'Isaiah', start: 778, end: 732, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Isaiah", group: "Bible Books Time Period" },
    { name: 'Jeremiah', start: 647, end: 580, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeremiah", group: "Bible Books Time Period" },
    { name: 'Lamentations', start: 607, end: 607, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Lamentations", group: "Bible Books Time Period" },
    { name: 'Ezekiel', start: 613, end: 591, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ezekiel", group: "Bible Books Time Period" },
    { name: 'Daniel', start: 618, end: 536, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Daniel", group: "Bible Books Time Period" },
    { name: 'Hosea', start: 804, end: 745, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hosea", group: "Bible Books Time Period" },
    { name: 'Joel', start: 820, end: 820, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Joel", group: "Bible Books Time Period" },
    { name: 'Amos', start: 804, end: 804, tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amos", group: "Bible Books Time Period" },
    { name: 'Obadiah', start: 607, end: 607, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Obadiah", group: "Bible Books Time Period" },
    { name: 'Jonah', start: 844, end: 844, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jonah", group: "Bible Books Time Period" },
    { name: 'Micah', start: 777, end: 717, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Micah", group: "Bible Books Time Period" },
    { name: 'Nahum', start: 632, end: 632, tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nahum", group: "Bible Books Time Period" },
    { name: 'Habakkuk', start: 628, end: 628, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Habakkukl", group: "Bible Books Time Period" },
    { name: 'Zephaniah', start: 648, end: 648, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zephaniah", group: "Bible Books Time Period" },
    { name: 'Haggai', start: 520, end: 520, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Haggai", group: "Bible Books Time Period" },
    { name: 'Zechariah', start: 520, end: 518, tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zechariah", group: "Bible Books Time Period" },
    { name: 'Malachi', start: 443, end: 443, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Malachi", group: "Bible Books Time Period" },
];
var kingsOfJudah = [
    { name: 'Rehoboam', start: 997, end: 980, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Rehoboam", group: "Kings of Judah" },
    { name: 'Abijah', start: 980, end: 978, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Abijah", group: "Kings of Judah" },
    { name: 'Asa', start: 978, end: 937, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Asa", group: "Kings of Judah" },
    { name: 'Jehoshaphat', start: 937, end: 913, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoshaphat", group: "Kings of Judah" },
    { name: 'Jehoram', start: 913, end: 906, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoram", group: "Kings of Judah" },
    { name: 'Ahaziah', start: 906, end: 905, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaziah", group: "Kings of Judah" },
    { name: 'Athaliah', start: 905, end: 898, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Athaliah", group: "Kings of Judah" },
    { name: 'Jehoash', start: 898, end: 858, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoash", group: "Kings of Judah" },
    { name: 'Amaziah', start: 858, end: 829, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amaziah", group: "Kings of Judah" },
    { name: 'Uzziah', start: 829, end: 777, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Uzziah", group: "Kings of Judah" },
    { name: 'Jotham', start: 777, end: 762, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jotham", group: "Kings of Judah" },
    { name: 'Ahaz', start: 762, end: 746, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaz", group: "Kings of Judah" },
    { name: 'Hezekiah', start: 746, end: 716, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hezekiah", group: "Kings of Judah" },
    { name: 'Manasseh', start: 716, end: 661, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Manasseh", group: "Kings of Judah" },
    { name: 'Amon', start: 661, end: 659, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amon", group: "Kings of Judah" },
    { name: 'Josiah', start: 659, end: 628, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Josiah", group: "Kings of Judah" },
    { name: 'Jehoahaz', start: 628, end: 628, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoahaz", group: "Kings of Judah" },
    { name: 'Jehoiakim', start: 628, end: 618, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoiakim", group: "Kings of Judah" },
    { name: 'Jehoiachin', start: 618, end: 617, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoiachin", group: "Kings of Judah" },
    { name: 'Zedekiah', start: 617, end: 607, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zedekiah", group: "Kings of Judah" },
];
var kingsOfSamaria = [
    { name: 'Jeroboam', start: 997, end: 976, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeroboam", group: "Kings of Samaria" },
    { name: 'Nadab', start: 976, end: 975, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nadab", group: "Kings of Samaria" },
    { name: 'Baasha', start: 975, end: 952, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Baasha", group: "Kings of Samaria" },
    { name: 'Elah', start: 952, end: 951, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elah", group: "Kings of Samaria" },
    { name: 'Zimri', start: 951, end: 951, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zimri", group: "Kings of Samaria" },
    { name: 'Tibni', start: 951, end: 947, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Tibni", group: "Kings of Samaria" },
    { name: 'Omri', start: 951, end: 940, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Omri", group: "Kings of Samaria" },
    { name: 'Ahab', start: 940, end: 920, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahab", group: "Kings of Samaria" },
    { name: 'Ahaziah', start: 920, end: 917, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaziah", group: "Kings of Samaria" },
    { name: 'Jehoram', start: 917, end: 905, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoram", group: "Kings of Samaria" },
    { name: 'Jehu', start: 905, end: 876, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehu", group: "Kings of Samaria" },
    { name: 'Jehoahaz', start: 876, end: 859, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoahaz", group: "Kings of Samaria" },
    { name: 'Jehoash', start: 862, end: 844, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoash", group: "Kings of Samaria" },
    { name: 'Jeroboam II', start: 844, end: 803, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeroboam", group: "Kings of Samaria" },
    { name: 'Zechariah', start: 803, end: 791, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zechariah", group: "Kings of Samaria" },
    { name: 'Shallum', start: 791, end: 791, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Shallum", group: "Kings of Samaria" },
    { name: 'Menahem', start: 791, end: 780, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Menahem", group: "Kings of Samaria" },
    { name: 'Pekahiah', start: 780, end: 778, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Pekahiah", group: "Kings of Samaria" },
    { name: 'Pekah', start: 778, end: 758, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Pekah", group: "Kings of Samaria" },
    { name: 'Hoshea', start: 758, end: 740, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hoshea", group: "Kings of Samaria" },
];
var prophets = [
    { name: 'Elijah', start: 940, end: 905, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elijah", group: "Prophets" },
    { name: 'Elishah', start: 917, end: 852, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elishah", group: "Prophets" },
    { name: 'Jonah', start: 849, end: 818, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jonah", group: "Prophets" },
    { name: 'Amos', start: 829, end: 803, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amos", group: "Prophets" },
    { name: 'Joel', start: 825, end: 820, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Joel", group: "Prophets" },
    { name: 'Hosea', start: 808, end: 740, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hosea", group: "Prophets" },
    { name: 'Isaiah', start: 780, end: 730, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Isaiah", group: "Prophets" },
    { name: 'Micah', start: 775, end: 716, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Micah", group: "Prophets" },
    { name: 'Zephaniah', start: 659, end: 640, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zephaniah", group: "Prophets" },
    { name: 'Nahum', start: 659, end: 635, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nahum", group: "Prophets" },
    { name: 'Jeremiah', start: 645, end: 570, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeremiah", group: "Prophets" },
    { name: 'Habakkuk', start: 633, end: 623, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Habakkuk", group: "Prophets" },
    { name: 'Obadiah', start: 613, end: 600, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Obadiah", group: "Prophets" },
    { name: 'Ezekiel', start: 610, end: 591, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ezekiel", group: "Prophets" },
    { name: 'Daniel', start: 617, end: 535, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Daniel", group: "Prophets" },
];
var events = [
    { name: 'Destruction of Samaria', start: 740, end: 740, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Destruction%20of%20Samaria", group: "Events" },
    { name: 'Destruction of Jerusalem', start: 607, end: 607, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Destruction%20of%20Jerusalem", group: "Events" },
    { name: 'Freed from Babylonian Captivity', start: 535, end: 535, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Freed%20from%20Babylonian%20Captivity", group: "Events" },
];
//# sourceMappingURL=timeline.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_timeline_actions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TimelineEffects = (function () {
    function TimelineEffects($actions, timelineService) {
        var _this = this;
        this.$actions = $actions;
        this.timelineService = timelineService;
        this.$loadKings = this.$actions
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_timeline_actions__["a" /* INIT */])
            .switchMap(function () {
            return _this.timelineService.getAllItems()
                .map(function (items) { return new __WEBPACK_IMPORTED_MODULE_6__actions_timeline_actions__["f" /* TimelineLoadedAction */](items); });
        });
    }
    return TimelineEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], TimelineEffects.prototype, "$loadKings", void 0);
TimelineEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_7__services__["a" /* TimelineService */]])
], TimelineEffects);

//# sourceMappingURL=timeline.effects.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'DashboardComponent';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: 'DashboardComponent' },
            { title: 'Kings', component: 'KingsComponent' },
            { title: 'Timeline', component: 'TimelineComponent' },
            { title: 'Converter', component: 'ConverterComponent' },
            { title: 'Schedule', component: 'SchedulesComponent' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/michalik/Documents/code/lifegems.github.io/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/michalik/Documents/code/lifegems.github.io/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converter_converter_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kings_kings_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedules_schedules_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timeline_timeline_module__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__converter_converter_module__["ConverterModule"],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["DashboardModule"],
            __WEBPACK_IMPORTED_MODULE_3__kings_kings_module__["KingsModule"],
            __WEBPACK_IMPORTED_MODULE_4__schedules_schedules_module__["SchedulesModule"],
            __WEBPACK_IMPORTED_MODULE_5__timeline_timeline_module__["TimelineModule"],
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return INITLOCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOCALSCHEDULESLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INITREMOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOTESCHEDULESLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return INITDOWNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DOWNLOADSUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SAVELOCALSCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return INITDELETELOCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETELOCALSUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGESCHEDULELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return PINNEDLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return PINNEDLOADEDSUCCESS; });
/* unused harmony export PINNEDLOADEDFAILED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return PINSCHEDULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return PINSCHEDULESSUCCESS; });
/* unused harmony export PINSCHEDULESFAILED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNPINSCHEDULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNPINSCHEDULESSUCCESS; });
/* unused harmony export UNPINSCHEDULESFAILED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChangeScheduleListAction; });
/* unused harmony export InitSchedulesAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return InitLocalSchedulesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return InitRemoteSchedulesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return InitDownloadScheduleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return InitDeleteLocalScheduleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DeleteLocalSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DownloadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RemoteSchedulesLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LocalSchedulesLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SaveLocalScheduleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return PinnedLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return PinnedLoadedSuccessAction; });
/* unused harmony export PinnedLoadedFailedAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return PinScheduleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return PinScheduleSuccessAction; });
/* unused harmony export PinScheduleFailedAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UnpinScheduleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UnpinScheduleSuccessAction; });
/* unused harmony export UnpinScheduleFailedAction */
var INIT = '[Schedules] Init Schedules';
var INITLOCAL = '[Schedules] Init Local Schedules';
var LOCALSCHEDULESLOADED = '[Schedules] Local Schedules Loaded';
var INITREMOTE = '[Schedules] Init Remote Schedules';
var REMOTESCHEDULESLOADED = '[Schedules] Remote Schedules Loaded';
var INITDOWNLOAD = '[Schedules] Init Download Schedules';
var DOWNLOADSUCCESS = '[Schedules] Download Success';
var SAVELOCALSCHEDULE = '[Schedules] Save Local Schedule';
var INITDELETELOCAL = '[Schedules] Init Delete Local Schedule';
var DELETELOCALSUCCESS = '[Schedules] Delete Local Schedule Success';
var CHANGESCHEDULELIST = '[Schedules] Change Schedule List';
var PINNEDLOADED = '[Schedule] Pinned Schedules Loaded';
var PINNEDLOADEDSUCCESS = '[Schedule] Pinned Schedules Loaded Success';
var PINNEDLOADEDFAILED = '[Schedule] Pinned Schedules Loaded Failed';
var PINSCHEDULES = '[Schedule] Pin Schedule';
var PINSCHEDULESSUCCESS = '[Schedule] Pin Schedule Success';
var PINSCHEDULESFAILED = '[Schedule] Pin Schedule Failed';
var UNPINSCHEDULES = '[Schedule] Unpin Schedule';
var UNPINSCHEDULESSUCCESS = '[Schedule] Unpin Schedule Success';
var UNPINSCHEDULESFAILED = '[Schedule] Unpin Schedule Failed';
var ChangeScheduleListAction = (function () {
    function ChangeScheduleListAction(payload) {
        this.payload = payload;
        this.type = CHANGESCHEDULELIST;
    }
    return ChangeScheduleListAction;
}());

var InitSchedulesAction = (function () {
    function InitSchedulesAction() {
        this.type = INIT;
    }
    return InitSchedulesAction;
}());

var InitLocalSchedulesAction = (function () {
    function InitLocalSchedulesAction() {
        this.type = INITLOCAL;
    }
    return InitLocalSchedulesAction;
}());

var InitRemoteSchedulesAction = (function () {
    function InitRemoteSchedulesAction() {
        this.type = INITREMOTE;
    }
    return InitRemoteSchedulesAction;
}());

var InitDownloadScheduleAction = (function () {
    function InitDownloadScheduleAction(payload) {
        this.payload = payload;
        this.type = INITDOWNLOAD;
    }
    return InitDownloadScheduleAction;
}());

var InitDeleteLocalScheduleAction = (function () {
    function InitDeleteLocalScheduleAction(payload) {
        this.payload = payload;
        this.type = INITDELETELOCAL;
    }
    return InitDeleteLocalScheduleAction;
}());

var DeleteLocalSuccessAction = (function () {
    function DeleteLocalSuccessAction(payload) {
        this.payload = payload;
        this.type = DELETELOCALSUCCESS;
    }
    return DeleteLocalSuccessAction;
}());

var DownloadSuccessAction = (function () {
    function DownloadSuccessAction(payload) {
        this.payload = payload;
        this.type = DOWNLOADSUCCESS;
    }
    return DownloadSuccessAction;
}());

var RemoteSchedulesLoadedAction = (function () {
    function RemoteSchedulesLoadedAction(payload) {
        this.payload = payload;
        this.type = REMOTESCHEDULESLOADED;
    }
    return RemoteSchedulesLoadedAction;
}());

var LocalSchedulesLoadedAction = (function () {
    function LocalSchedulesLoadedAction(payload) {
        this.payload = payload;
        this.type = LOCALSCHEDULESLOADED;
    }
    return LocalSchedulesLoadedAction;
}());

var SaveLocalScheduleAction = (function () {
    function SaveLocalScheduleAction(payload) {
        this.payload = payload;
        this.type = SAVELOCALSCHEDULE;
    }
    return SaveLocalScheduleAction;
}());

var PinnedLoadedAction = (function () {
    function PinnedLoadedAction() {
        this.type = PINNEDLOADED;
    }
    return PinnedLoadedAction;
}());

var PinnedLoadedSuccessAction = (function () {
    function PinnedLoadedSuccessAction(payload) {
        this.payload = payload;
        this.type = PINNEDLOADEDSUCCESS;
    }
    return PinnedLoadedSuccessAction;
}());

var PinnedLoadedFailedAction = (function () {
    function PinnedLoadedFailedAction() {
        this.type = PINNEDLOADEDFAILED;
    }
    return PinnedLoadedFailedAction;
}());

var PinScheduleAction = (function () {
    function PinScheduleAction(payload) {
        this.payload = payload;
        this.type = PINSCHEDULES;
    }
    return PinScheduleAction;
}());

var PinScheduleSuccessAction = (function () {
    function PinScheduleSuccessAction(payload) {
        this.payload = payload;
        this.type = PINSCHEDULESSUCCESS;
    }
    return PinScheduleSuccessAction;
}());

var PinScheduleFailedAction = (function () {
    function PinScheduleFailedAction() {
        this.type = PINSCHEDULESFAILED;
    }
    return PinScheduleFailedAction;
}());

var UnpinScheduleAction = (function () {
    function UnpinScheduleAction(payload) {
        this.payload = payload;
        this.type = UNPINSCHEDULES;
    }
    return UnpinScheduleAction;
}());

var UnpinScheduleSuccessAction = (function () {
    function UnpinScheduleSuccessAction(payload) {
        this.payload = payload;
        this.type = UNPINSCHEDULESSUCCESS;
    }
    return UnpinScheduleSuccessAction;
}());

var UnpinScheduleFailedAction = (function () {
    function UnpinScheduleFailedAction(payload) {
        this.payload = payload;
        this.type = UNPINSCHEDULESFAILED;
    }
    return UnpinScheduleFailedAction;
}());

//# sourceMappingURL=schedules.actions.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkpointsReducer;
/* unused harmony export getState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLocalCheckpoints; });
/* unused harmony export getRemoteCheckpoitns */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_checkpoints_actions__ = __webpack_require__(60);


var initState = {
    remote: [],
    local: [],
};
function checkpointsReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_checkpoints_actions__["k" /* SAVELOCALSUCCESS */]:
            return Object.assign({}, state, {
                local: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_checkpoints_actions__["h" /* LOCALCHECKPOINTSLOADED */]:
            return Object.assign({}, state, {
                local: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_checkpoints_actions__["j" /* REMOTECHECKPOINTSLOADED */]:
            return Object.assign({}, state, {
                remote: action.payload
            });
        default:
            return Object.assign({}, state);
    }
}
var getState = function (state) { return state.schedules.checkpoints; };
var getLocalCheckpoints = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.local; });
var getRemoteCheckpoitns = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.remote; });
//# sourceMappingURL=checkpoints.reducer.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = schedulesReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDownloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPinned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLocalSchedules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRemoteSchedules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__ = __webpack_require__(50);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initState = {
    remote: [],
    local: [],
    downloading: [],
    list: 'pinned',
    pinned: []
};
function schedulesReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["a" /* CHANGESCHEDULELIST */]:
            return __assign({}, state, { list: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["i" /* INITDOWNLOAD */]:
            var newDownloading = Object.assign([], state.downloading);
            newDownloading.push(action.payload.id);
            return Object.assign({}, state, {
                downloading: newDownloading,
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["d" /* DOWNLOADSUCCESS */]:
            var local = Object.assign([], state.local);
            local.push(action.payload);
            var downloading = Object.assign([], state.downloading);
            return Object.assign({}, state, {
                downloading: downloading.filter(function (id) { return id !== action.payload.schedule.id; }),
                local: local,
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["p" /* LOCALSCHEDULESLOADED */]:
            return Object.assign({}, state, {
                local: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["z" /* REMOTESCHEDULESLOADED */]:
            return Object.assign({}, state, {
                remote: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["c" /* DELETELOCALSUCCESS */]:
            var localSchedules = Object.assign([], state.local);
            return Object.assign({}, state, {
                local: localSchedules.filter(function (s) { return s.schedule.id !== action.payload; })
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["s" /* PINNEDLOADEDSUCCESS */]:
            return __assign({}, state, { pinned: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["u" /* PINSCHEDULESSUCCESS */]:
            return __assign({}, state, { pinned: state.pinned.concat([
                    action.payload
                ]) });
        case __WEBPACK_IMPORTED_MODULE_1__actions_schedules_actions__["E" /* UNPINSCHEDULESSUCCESS */]:
            return __assign({}, state, { pinned: state.pinned.filter(function (p) { return p !== action.payload; }).slice() });
        default:
            return Object.assign({}, state);
    }
}
var getState = function (state) { return state.schedules.schedules; };
var getDownloading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.downloading; });
var getList = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.list; });
var getPinned = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.pinned; });
var getLocalSchedules = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.local; });
var getRemoteSchedules = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createSelector */])(getState, function (state) { return state.remote; });
//# sourceMappingURL=schedules.reducer.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INITLOCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOCALCHECKPOINTSLOADED; });
/* unused harmony export INITREMOTE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REMOTECHECKPOINTSLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INITSAVELOCALCHECKPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SAVELOCALSUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InitCheckpointsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return InitLocalCheckpointsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return InitRemoteCheckpointsAction; });
/* unused harmony export RemoteCheckpointsLoadedAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LocalCheckpointsLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return InitSaveLocalCheckpointAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SaveLocalSuccessAction; });
var INIT = '[Checkpoints] Init Checkpoints';
var INITLOCAL = '[Checkpoints] Init Local Checkpoints';
var LOCALCHECKPOINTSLOADED = '[Checkpoints] Local Checkpoints Loaded';
var INITREMOTE = '[Checkpoints] Init Remote Checkpoints';
var REMOTECHECKPOINTSLOADED = '[Checkpoints] Remote Checkpoints Loaded';
var INITSAVELOCALCHECKPOINT = '[Checkpoints] Init Save Local Checkpoint';
var SAVELOCALSUCCESS = '[Checkpoints] Save Local Success';
var InitCheckpointsAction = (function () {
    function InitCheckpointsAction() {
        this.type = INIT;
    }
    return InitCheckpointsAction;
}());

var InitLocalCheckpointsAction = (function () {
    function InitLocalCheckpointsAction() {
        this.type = INITLOCAL;
    }
    return InitLocalCheckpointsAction;
}());

var InitRemoteCheckpointsAction = (function () {
    function InitRemoteCheckpointsAction() {
        this.type = INITREMOTE;
    }
    return InitRemoteCheckpointsAction;
}());

var RemoteCheckpointsLoadedAction = (function () {
    function RemoteCheckpointsLoadedAction(payload) {
        this.payload = payload;
        this.type = REMOTECHECKPOINTSLOADED;
    }
    return RemoteCheckpointsLoadedAction;
}());

var LocalCheckpointsLoadedAction = (function () {
    function LocalCheckpointsLoadedAction(payload) {
        this.payload = payload;
        this.type = LOCALCHECKPOINTSLOADED;
    }
    return LocalCheckpointsLoadedAction;
}());

var InitSaveLocalCheckpointAction = (function () {
    function InitSaveLocalCheckpointAction(payload) {
        this.payload = payload;
        this.type = INITSAVELOCALCHECKPOINT;
    }
    return InitSaveLocalCheckpointAction;
}());

var SaveLocalSuccessAction = (function () {
    function SaveLocalSuccessAction(payload) {
        this.payload = payload;
        this.type = SAVELOCALSUCCESS;
    }
    return SaveLocalSuccessAction;
}());

//# sourceMappingURL=checkpoints.actions.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADDAUXMEASUREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGEAUXMEASURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGEAUXVALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGEBASEMEASURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHANGEBASEVALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGETYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MEASURESLOADED; });
/* unused harmony export MEASURESFAILED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SETTYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddAuxMeasurementAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ChangeAuxMeasureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ChangeAuxValueAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ChangeBaseMeasureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ChangeBaseValueAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ChangeTypeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return InitMeasuresAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MeasuresLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return MeasuresFailedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TypesSetAction; });
var ADDAUXMEASUREMENT = '[Measures] Add Auxilary Measurement';
var CHANGEAUXMEASURE = '[Measures] Change Auxilary Measure';
var CHANGEAUXVALUE = '[Measures] Change Auxilary Value';
var CHANGEBASEMEASURE = '[Measures] Change Base Measure';
var CHANGEBASEVALUE = '[Measures] Change Base Value';
var CHANGETYPE = '[Measures] Change Type';
var INIT = '[Measures] Init Measures';
var MEASURESLOADED = '[Measures] Loaded Measures';
var MEASURESFAILED = '[Measures] Failed to load Measures';
var SETTYPES = '[Measures] Measurement Types Set';
var AddAuxMeasurementAction = (function () {
    function AddAuxMeasurementAction() {
        this.type = ADDAUXMEASUREMENT;
    }
    return AddAuxMeasurementAction;
}());

var ChangeAuxMeasureAction = (function () {
    function ChangeAuxMeasureAction(payload) {
        this.payload = payload;
        this.type = CHANGEAUXMEASURE;
    }
    return ChangeAuxMeasureAction;
}());

var ChangeAuxValueAction = (function () {
    function ChangeAuxValueAction(payload) {
        this.payload = payload;
        this.type = CHANGEAUXVALUE;
    }
    return ChangeAuxValueAction;
}());

var ChangeBaseMeasureAction = (function () {
    function ChangeBaseMeasureAction(payload) {
        this.payload = payload;
        this.type = CHANGEBASEMEASURE;
    }
    return ChangeBaseMeasureAction;
}());

var ChangeBaseValueAction = (function () {
    function ChangeBaseValueAction(payload) {
        this.payload = payload;
        this.type = CHANGEBASEVALUE;
    }
    return ChangeBaseValueAction;
}());

var ChangeTypeAction = (function () {
    function ChangeTypeAction(payload) {
        this.payload = payload;
        this.type = CHANGETYPE;
    }
    return ChangeTypeAction;
}());

var InitMeasuresAction = (function () {
    function InitMeasuresAction() {
        this.type = INIT;
    }
    return InitMeasuresAction;
}());

var MeasuresLoadedAction = (function () {
    function MeasuresLoadedAction(payload) {
        this.payload = payload;
        this.type = MEASURESLOADED;
    }
    return MeasuresLoadedAction;
}());

var MeasuresFailedAction = (function () {
    function MeasuresFailedAction() {
        this.type = MEASURESFAILED;
    }
    return MeasuresFailedAction;
}());

var TypesSetAction = (function () {
    function TypesSetAction(payload) {
        this.payload = payload;
        this.type = SETTYPES;
    }
    return TypesSetAction;
}());

//# sourceMappingURL=measurements.actions.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PREV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SETKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KINGSLOADED; });
/* unused harmony export KINGSFAILED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TOGGLESONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TOGGLEPRIESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TOGGLEPROPHETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NextAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PrevAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InitKingsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return KingsLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return KingsFailedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SetKingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TogglePriestsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ToggleProphetsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ToggleSonsAction; });
var INIT = '[Kings] Init Kings';
var NEXT = '[Kings] Next King';
var PREV = '[Kings] Previous King';
var SETKING = '[Kings] Set King';
var KINGSLOADED = '[Kings] Kings loaded';
var KINGSFAILED = '[Kings] Kings Failed to load';
var TOGGLESONS = '[Kings] Toggle view sons';
var TOGGLEPRIESTS = '[Kings] Toggle view priests';
var TOGGLEPROPHETS = '[Kings] Toggle view prophets';
var NextAction = (function () {
    function NextAction() {
        this.type = NEXT;
    }
    return NextAction;
}());

var PrevAction = (function () {
    function PrevAction() {
        this.type = PREV;
    }
    return PrevAction;
}());

var InitKingsAction = (function () {
    function InitKingsAction() {
        this.type = INIT;
    }
    return InitKingsAction;
}());

var KingsLoadedAction = (function () {
    function KingsLoadedAction(payload) {
        this.payload = payload;
        this.type = KINGSLOADED;
    }
    return KingsLoadedAction;
}());

var KingsFailedAction = (function () {
    function KingsFailedAction() {
        this.type = KINGSFAILED;
    }
    return KingsFailedAction;
}());

var SetKingAction = (function () {
    function SetKingAction(payload) {
        this.payload = payload;
        this.type = SETKING;
    }
    return SetKingAction;
}());

var TogglePriestsAction = (function () {
    function TogglePriestsAction() {
        this.type = TOGGLEPRIESTS;
    }
    return TogglePriestsAction;
}());

var ToggleProphetsAction = (function () {
    function ToggleProphetsAction() {
        this.type = TOGGLEPROPHETS;
    }
    return ToggleProphetsAction;
}());

var ToggleSonsAction = (function () {
    function ToggleSonsAction() {
        this.type = TOGGLESONS;
    }
    return ToggleSonsAction;
}());

//# sourceMappingURL=kings.actions.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkpoints_service__ = __webpack_require__(335);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__checkpoints_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedules_service__ = __webpack_require__(339);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__schedules_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.js.map