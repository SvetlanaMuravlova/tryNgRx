(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-general-weather-general-weather-module"],{

/***/ "IJ2u":
/*!***************************************************************************!*\
  !*** ./src/app/modules/general-weather/general-weather-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: GeneralWeatherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralWeatherRoutingModule", function() { return GeneralWeatherRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/general.component */ "ul+i");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_general_general_component__WEBPACK_IMPORTED_MODULE_2__["GeneralComponent"]
    }
];
class GeneralWeatherRoutingModule {
}
GeneralWeatherRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralWeatherRoutingModule });
GeneralWeatherRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralWeatherRoutingModule_Factory(t) { return new (t || GeneralWeatherRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralWeatherRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralWeatherRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "YORG":
/*!*******************************************************************!*\
  !*** ./src/app/modules/general-weather/general-weather.module.ts ***!
  \*******************************************************************/
/*! exports provided: GeneralWeatherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralWeatherModule", function() { return GeneralWeatherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _general_weather_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-weather-routing.module */ "IJ2u");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/general.component */ "ul+i");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @generalStore/weather.reducer */ "XaLY");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _generalStore_weather_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @generalStore/weather.effects */ "13Yy");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/shared/shared.module */ "FpXt");















class GeneralWeatherModule {
}
GeneralWeatherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralWeatherModule });
GeneralWeatherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralWeatherModule_Factory(t) { return new (t || GeneralWeatherModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _general_weather_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralWeatherRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_6__["WEATHER_REDUCER_NODE"], _generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_6__["weatherReducer"]),
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_generalStore_weather_effects__WEBPACK_IMPORTED_MODULE_10__["WeatherEffects"]]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralWeatherModule, { declarations: [_components_general_general_component__WEBPACK_IMPORTED_MODULE_4__["GeneralComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _general_weather_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralWeatherRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsFeatureModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralWeatherModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_general_general_component__WEBPACK_IMPORTED_MODULE_4__["GeneralComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _general_weather_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralWeatherRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_6__["WEATHER_REDUCER_NODE"], _generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_6__["weatherReducer"]),
                    primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_generalStore_weather_effects__WEBPACK_IMPORTED_MODULE_10__["WeatherEffects"]]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ul+i":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/general-weather/components/general/general.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generalStore/weather.actions */ "6eAF");
/* harmony import */ var _generalStore_weather_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generalStore/weather.selectors */ "TSE+");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/api.service */ "H+bZ");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/common.service */ "OlR4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/loading-spinner/loading-spinner.component */ "DaKK");
/* harmony import */ var _shared_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/auto-complete/auto-complete.component */ "JRUh");
/* harmony import */ var _shared_item_condition_item_condition_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/item-condition/item-condition.component */ "2au9");












function GeneralComponent_div_0_div_11_app_item_condition_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-item-condition", 8);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r2.generalLocations[item_r3])("location", ctx_r2.generalLocations[item_r3]);
} }
function GeneralComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralComponent_div_0_div_11_app_item_condition_1_Template, 1, 2, "app-item-condition", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.objectKeys(ctx_r1.generalLocations));
} }
function GeneralComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your honest weather guide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-auto-complete", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Current conditions for your locations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GeneralComponent_div_0_div_11_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, ctx_r0.state.date, "MMM d, y"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.generalLocations);
} }
class GeneralComponent {
    constructor(store$, apiService, generalServ) {
        this.store$ = store$;
        this.apiService = apiService;
        this.generalServ = generalServ;
        this.objectKeys = Object.keys;
        this.conditions$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_generalStore_weather_selectors__WEBPACK_IMPORTED_MODULE_3__["weatherSelector"]));
        this.generalLocations$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_generalStore_weather_selectors__WEBPACK_IMPORTED_MODULE_3__["GWLocationsSelector"]));
        this.keys$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_generalStore_weather_selectors__WEBPACK_IMPORTED_MODULE_3__["GWKeysSelector"]));
        this.type = 'general';
        this.conditions$.subscribe(res => {
            this.state = res;
            console.log('general state', this.state);
        });
        this.generalLocations$.subscribe(res => {
            this.generalLocations = res;
        });
        this.keys$.subscribe(res => {
            // this.checkForKeysChanges();
        });
    }
    ngOnInit() {
        // this.getConditions();
    }
    getConditions() {
        const keys = Object.keys(this.state.generalLocations);
        keys.forEach(key => {
            this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_2__["GetLocationByKey"])({ key }));
            this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_2__["GetConditionsByKey"])({ key }));
        });
    }
    checkForKeysChanges() {
        var _a;
        const conditionsKeys = Object.keys(this.state.generalLocations);
        if (!((_a = this.state.keys) === null || _a === void 0 ? void 0 : _a.length) || !conditionsKeys.length) {
            return;
        }
        if (JSON.stringify(this.state.keys) !== JSON.stringify(conditionsKeys)) {
            const key = this.state.keys.find(keyItem => !conditionsKeys.includes(keyItem));
            this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_2__["GetLocationByKey"])({ key }));
            this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_2__["GetConditionsByKey"])({ key }));
        }
    }
    getLocationFromLink(link) {
        const key = link.split('/').find(item => this.state.keys.includes(item));
        return this.generalLocations[key.toString()];
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonForGeneralLocationsService"])); };
GeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 3, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "pi", "pi-fw", "pi-sun"], [3, "type"], ["class", "main row", 4, "ngIf"], [1, "main", "row"], ["class", "col-4 mb-3", 3, "item", "location", 4, "ngFor", "ngForOf"], [1, "col-4", "mb-3", 3, "item", "location"]], template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralComponent_div_0_Template, 12, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loading-spinner");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.conditions$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"], _shared_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_item_condition_item_condition_component__WEBPACK_IMPORTED_MODULE_9__["ItemConditionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general',
                templateUrl: './general.component.html',
                styleUrls: ['./general.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonForGeneralLocationsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-general-weather-general-weather-module.js.map