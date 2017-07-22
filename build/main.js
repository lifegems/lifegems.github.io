webpackJsonp([0],{

/***/ 101:
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

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_kings_list_modal__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_kings_reducer__ = __webpack_require__(201);
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_kings_list_modal__["a" /* KingsListModal */], { kings: this.kings$, selectedKing: this.selectedKing$ });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], KingsComponent.prototype, "slides", void 0);
KingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',
        template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Kings of Judah</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager paginationType=\"progress\" centeredSlides=\"true\" (ionSlideDidChange)=\"updateKingNumber($event)\">\n    <ion-slide *ngFor=\"let king of (kings$ | async)\">\n      <app-person-card [king]=\"king\" \n        [toggleSons]=\"showSons$ | async\" (toggleSonsChange)=\"toggleSons()\"\n        [togglePriests]=\"showPriests$ | async\" (togglePriestsChange)=\"togglePriests()\"\n        [toggleProphets]=\"showProphets$ | async\" (toggleProphetsChange)=\"toggleProphets()\">\n      </app-person-card>\n    </ion-slide>\n  </ion-slides>\n  <ion-fab right bottom>\n    <button ion-fab color=\"primary\" (click)=\"showKingsListModal()\">\n      <ion-icon name=\"md-albums\"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button [disabled]=\"(selectedKing$ | async) == 1\" (click)=\"prevKing()\" block small ion-button icon-only clear>\n            <ion-icon name=\"arrow-back\"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button [disabled]=\"(selectedKing$ | async) == 20\" (click)=\"nextKing()\" block small ion-button icon-only clear>\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]])
], KingsComponent);

//# sourceMappingURL=kings.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KingsListModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], KingsListModal);

//# sourceMappingURL=kings-list.modal.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = kingsReducer;
/* unused harmony export getState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getKings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedKing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getShowPriests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getShowProphets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getShowSons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_kings_actions__ = __webpack_require__(101);


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
var getKings = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createSelector */])(getState, function (state) { return state.kings; });
var getSelectedKing = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createSelector */])(getState, function (state) { return state.selectedKing; });
var getShowPriests = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createSelector */])(getState, function (state) { return state.showPriests; });
var getShowProphets = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createSelector */])(getState, function (state) { return state.showProphets; });
var getShowSons = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createSelector */])(getState, function (state) { return state.showSons; });
//# sourceMappingURL=kings.reducer.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_kings_kings_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_kings_list_modal__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_person_card_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_expander_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_kings_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_kings_effects__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_store__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reducers_kings_reducer__ = __webpack_require__(201);
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__containers_kings_kings_component__["a" /* KingsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_person_card_component__["a" /* PersonCardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_expander_component__["a" /* ExpanderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_kings_list_modal__["a" /* KingsListModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_12__ngrx_store__["c" /* StoreModule */].forRoot({ kings: __WEBPACK_IMPORTED_MODULE_14__reducers_kings_reducer__["f" /* kingsReducer */] }),
            __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_9__effects_kings_effects__["a" /* KingsEffects */]]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__containers_kings_kings_component__["a" /* KingsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_kings_list_modal__["a" /* KingsListModal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__services_kings_service__["a" /* KingsService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_kings_kings_component__ = __webpack_require__(196);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__containers_kings_kings_component__["a" /* KingsComponent */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Kings', component: __WEBPACK_IMPORTED_MODULE_4__containers_kings_kings_component__["a" /* KingsComponent */] }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/michalik/Documents/code/kings/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/michalik/Documents/code/kings/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], PersonCardComponent.prototype, "toggleSonsChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], PersonCardComponent.prototype, "togglePriests", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], PersonCardComponent.prototype, "togglePriestsChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], PersonCardComponent.prototype, "toggleProphets", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
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

/***/ 286:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KingsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_kings_actions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_kings_service__ = __webpack_require__(202);
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

/***/ })

},[204]);
//# sourceMappingURL=main.js.map