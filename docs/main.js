(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vs/Project/tryNgrx/src/main.ts */"zUnb");


/***/ }),

/***/ "13Yy":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/general-weather/store/general-weather/weather.effects.ts ***!
  \**********************************************************************************/
/*! exports provided: WeatherEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherEffects", function() { return WeatherEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generalStore/weather.actions */ "6eAF");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/api.service */ "H+bZ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_count_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/count-apis.service */ "kVn3");









class WeatherEffects {
    constructor(actions$, apiService, store$, apiCounts) {
        this.actions$ = actions$;
        this.apiService = apiService;
        this.store$ = store$;
        this.apiCounts = apiCounts;
        this.loadConditionss$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["GetConditionsByKey"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => (this.apiService.getConditionBykey(action.key))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.apiCounts.updateAmount();
            return { type: _generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["weatherActionsType"].loaddedSuccessCondition, payload: { response: response[0], key: action.key } };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["SetLoading"])({ value: false })))))));
        this.loadLocation$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["GetLocationByKey"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => (this.apiService.getLocationBykey(action.key))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.apiCounts.updateAmount();
            return { type: _generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["weatherActionsType"].loaddedSuccessLocation, payload: response };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["SetLoading"])({ value: false })))))));
    }
}
WeatherEffects.ɵfac = function WeatherEffects_Factory(t) { return new (t || WeatherEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_count_apis_service__WEBPACK_IMPORTED_MODULE_6__["CountApisService"])); };
WeatherEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherEffects, factory: WeatherEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _services_count_apis_service__WEBPACK_IMPORTED_MODULE_6__["CountApisService"] }]; }, null); })();


/***/ }),

/***/ "2au9":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/item-condition/item-condition.component.ts ***!
  \***************************************************************************/
/*! exports provided: ItemConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConditionComponent", function() { return ItemConditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");








function ItemConditionComponent_div_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-button", 7);
} }
const _c0 = function () { return { width: "100%" }; };
function ItemConditionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ItemConditionComponent_div_0_ng_template_11_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx_r0.getTitleOfCard())("subheader", ctx_r0.getDate());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.initeImgUrl(ctx_r0.item.conditions.WeatherIcon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.conditions.WeatherText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("current t ", ctx_r0.item.conditions.Temperature.Metric.Value, " \u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Wind ", ctx_r0.item.conditions.Wind.Speed.Metric.Value, " ", ctx_r0.item.conditions.Wind.Speed.Metric.Unit, "");
} }
class ItemConditionComponent {
    // conditions$: Observable<IweatherState> = this.store$.pipe(select(weatherSelector));
    // state;
    constructor(datePipe, store$) {
        this.datePipe = datePipe;
        this.store$ = store$;
        // this.conditions$.subscribe(res => {
        //   this.state = res;
        //   console.log('item state',res)
        // })
    }
    ngOnInit() {
        // console.log('ITEM', this.item);
        // console.log(this.location)
    }
    initeImgUrl(icon) {
        const iconNum = icon < 10 ? `0${icon}` : icon;
        return `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`;
    }
    getTitleOfCard() {
        return `${this.location.Type} ${this.location.LocalizedName}, ${this.location.Country}`;
    }
    getDate() {
        return this.datePipe.transform(this.item.LocalObservationDateTime, 'EEEE, MMMM d, y');
    }
}
ItemConditionComponent.ɵfac = function ItemConditionComponent_Factory(t) { return new (t || ItemConditionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ItemConditionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemConditionComponent, selectors: [["app-item-condition"]], inputs: { item: "item", location: "location" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])], decls: 1, vars: 1, consts: [["class", "item-box h-100", 4, "ngIf"], [1, "item-box", "h-100"], ["styleClass", "p-card-shadow", 3, "header", "subheader"], [1, "img_box"], ["alt", "Card", 3, "src"], [1, "information_box"], ["pTemplate", "footer"], ["label", "Delete", "icon", "pi pi-trash", "styleClass", "p-button-secondary"]], template: function ItemConditionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemConditionComponent_div_0_Template, 12, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item && ctx.item.conditions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], primeng_card__WEBPACK_IMPORTED_MODULE_3__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"]], styles: [".item-box[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2l0ZW0tY29uZGl0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpREFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tY29uZGl0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYm94IHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggMHB4IHJnYigzNCA2MCA4MCAvIDIwJSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemConditionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-condition',
                templateUrl: './item-condition.component.html',
                styleUrls: ['./item-condition.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6eAF":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/general-weather/store/general-weather/weather.actions.ts ***!
  \**********************************************************************************/
/*! exports provided: weatherActionsType, GetConditionsByKey, GetLocationByKey, LocationLoaddedSuccess, ConditionLoaddedSuccess, SetLoading, UpdateKeysLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherActionsType", function() { return weatherActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConditionsByKey", function() { return GetConditionsByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLocationByKey", function() { return GetLocationByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationLoaddedSuccess", function() { return LocationLoaddedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionLoaddedSuccess", function() { return ConditionLoaddedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLoading", function() { return SetLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateKeysLocation", function() { return UpdateKeysLocation; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var weatherActionsType;
(function (weatherActionsType) {
    weatherActionsType["updateKeys"] = "[WEATHER] add key";
    weatherActionsType["getConditions"] = "[WEATHER] get condition by key";
    weatherActionsType["loaddedSuccessCondition"] = "[WEATHER] conditions by key loadded success";
    weatherActionsType["loading"] = "[WEATHER] loading spinner";
    weatherActionsType["getLocation"] = "[WEATHER] get location by key";
    weatherActionsType["loaddedSuccessLocation"] = "[WEATHER] location by key loadded success";
})(weatherActionsType || (weatherActionsType = {}));
const GetConditionsByKey = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(weatherActionsType.getConditions, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetLocationByKey = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(weatherActionsType.getLocation, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LocationLoaddedSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(weatherActionsType.loaddedSuccessLocation, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ConditionLoaddedSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(weatherActionsType.loaddedSuccessCondition, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const SetLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(weatherActionsType.loading, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UpdateKeysLocation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(weatherActionsType.updateKeys, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "9vc0":
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ErrorService {
    constructor() {
        this.errorSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(''));
    }
    createError(message) {
        this.errorSource.next(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(message));
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    environment: 'development',
    API_URL: 'http://dataservice.accuweather.com',
    API_KEY: 'CbJeA81oG4jcAezAQnwdV5GVsUnd6qJo'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DaKK":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/loading-spinner/loading-spinner.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");



class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 2, vars: 0, consts: [[1, "back_drop", "w-100", "h-100"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-progressSpinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_progressspinner__WEBPACK_IMPORTED_MODULE_1__["ProgressSpinner"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auto-complete/auto-complete.component */ "JRUh");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _item_condition_item_condition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-condition/item-condition.component */ "2au9");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "bYgl");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "tEvg");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "DaKK");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");


















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_11__["MenubarModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"], _item_condition_item_condition_component__WEBPACK_IMPORTED_MODULE_5__["ItemConditionComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__["LoadingSpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"],
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_11__["MenubarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"]], exports: [_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"],
        _item_condition_item_condition_component__WEBPACK_IMPORTED_MODULE_5__["ItemConditionComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__["LoadingSpinnerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"], _item_condition_item_condition_component__WEBPACK_IMPORTED_MODULE_5__["ItemConditionComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__["LoadingSpinnerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"],
                    primeng_menubar__WEBPACK_IMPORTED_MODULE_11__["MenubarModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
                    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"]
                ],
                exports: [
                    _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"],
                    _item_condition_item_condition_component__WEBPACK_IMPORTED_MODULE_5__["ItemConditionComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                    _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__["LoadingSpinnerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
        this.key = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_KEY;
    }
    getConditionBykey(key) {
        return this.http.get(`${this.apiUrl}/currentconditions/v1/${key}`, {
            params: {
                apikey: this.key,
                details: 'true'
            }
        });
    }
    getLocationByAutoComplete(value) {
        return this.http.get(`${this.apiUrl}/locations/v1/cities/autocomplete`, {
            params: {
                apikey: this.key,
                details: 'true',
                q: value
            }
        });
    }
    getLocationBykey(key) {
        return this.http.get(`${this.apiUrl}/locations/v1/${key}`, {
            params: {
                apikey: this.key,
                details: 'true'
            }
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JRUh":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/auto-complete/auto-complete.component.ts ***!
  \*************************************************************************/
/*! exports provided: AutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api.service */ "H+bZ");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/common.service */ "OlR4");
/* harmony import */ var _services_count_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/count-apis.service */ "kVn3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function AutoCompleteComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoCompleteComponent_div_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.addAddresse(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r2.Type, ", ", item_r2.LocalizedName, ", ", item_r2.Country.LocalizedName, " ");
} }
function AutoCompleteComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoCompleteComponent_div_6_div_1_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class AutoCompleteComponent {
    constructor(apiService, commonServ, apiCounts) {
        this.apiService = apiService;
        this.commonServ = commonServ;
        this.apiCounts = apiCounts;
        this.placeHolder = 'pi pi-search';
        this.disabled = false;
        this.items = [];
    }
    ngOnInit() {
    }
    updateValue() {
        if (this.value && this.value.length > 4) {
            this.setInputSettings(true);
            this.apiService.getLocationByAutoComplete(this.value).subscribe((res) => {
                this.items = res;
                this.setInputSettings(false);
                this.apiCounts.updateAmount();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
                this.setInputSettings(false);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            });
        }
        else {
            this.items = [];
            this.setInputSettings(false);
        }
    }
    setInputSettings(disabled) {
        this.placeHolder = disabled ? 'pi pi-spin pi-spinner' : 'pi pi-search';
        this.disabled = disabled;
    }
    addAddresse(item) {
        this.value = `${item.Type}, ${item.LocalizedName}, ${item.Country.LocalizedName}`;
        this.commonServ.addGeneralLocation(item.Key);
        this.items = [];
    }
}
AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) { return new (t || AutoCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonForGeneralLocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_count_apis_service__WEBPACK_IMPORTED_MODULE_5__["CountApisService"])); };
AutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutoCompleteComponent, selectors: [["app-auto-complete"]], inputs: { type: "type" }, decls: 7, vars: 5, consts: [[1, "select__box", 2, "width", "100%"], [1, "p-input-icon-left"], ["type", "text", "pInputText", "", 3, "disabled", "ngModel", "ngModelChange", "keyup"], ["class", "select__items_box", 4, "ngIf"], [1, "select__items_box"], ["class", "select__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "select__item", 3, "click"]], template: function AutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add new location into your list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutoCompleteComponent_Template_input_ngModelChange_5_listener($event) { return ctx.value = $event; })("keyup", function AutoCompleteComponent_Template_input_keyup_5_listener() { return ctx.updateValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutoCompleteComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.placeHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items && ctx.items.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: [".select__items_box[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 20px 0;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  border-radius: 0 0 6px 6px;\n}\n.select__item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px 20px;\n  border-bottom: 1px solid #1f2d4026;\n}\n.select__item[_ngcontent-%COMP%]:hover {\n  background-color: #1f2d400d;\n}\n.select__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLDBCQUFBO0FBQVI7QUFHSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBRFI7QUFHUTtFQUNJLDJCQUFBO0FBRFo7QUFJUTtFQUNJLG1CQUFBO0FBRloiLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Qge1xuICAgICZfX2l0ZW1zX2JveCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDBweCByZ2IoMzQgNjAgODAgLyAyMCUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWYyZDQwMjY7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZDQwMGQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auto-complete',
                templateUrl: './auto-complete.component.html',
                styleUrls: ['./auto-complete.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonForGeneralLocationsService"] }, { type: _services_count_apis_service__WEBPACK_IMPORTED_MODULE_5__["CountApisService"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "OlR4":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonForGeneralLocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonForGeneralLocationsService", function() { return CommonForGeneralLocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _generalStore_weather_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generalStore/weather.selectors */ "TSE+");
/* harmony import */ var _generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generalStore/weather.actions */ "6eAF");






class CommonForGeneralLocationsService {
    constructor(store$) {
        this.store$ = store$;
        this.KEY_FOR_GENERAL_LOCATIONS = 'GeneralWeatherLocations';
        if (this.checkSessionLocations()) {
            this.initGeneralLocation(this.getGeneralLocations());
        }
        else {
            this.subscribeOnStoreGeneralLocations();
        }
    }
    initGeneralLocation(value) {
        this.keysGeneralLocation = value;
        this.saveGeneralLocations();
        this.updateStoreWithGeneralKeys();
        console.log('Subscription', this.generalLocations$);
        if (!this.generalLocations$) {
            this.subscribeOnStoreGeneralLocations();
        }
    }
    addGeneralLocation(key) {
        if (!this.keysGeneralLocation.includes(key)) {
            this.keysGeneralLocation.push(key);
            this.updateStoreWithGeneralKeys();
        }
    }
    subscribeOnStoreGeneralLocations() {
        this.generalLocations$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_generalStore_weather_selectors__WEBPACK_IMPORTED_MODULE_2__["GWLocationsKeySelector"])).subscribe(res => {
            if (res && res.length) {
                console.log('common service keys', res);
                this.keysGeneralLocation = Object.assign([], res);
                this.checkStoreGeneralLocationsWithKeys();
                this.saveGeneralLocations();
            }
        });
    }
    updateStoreWithGeneralKeys() {
        this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateKeysLocation"])({ keys: this.keysGeneralLocation }));
    }
    getGeneralLocationWithKey(key) {
        this.setLoading(true);
        this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["GetLocationByKey"])({ key }));
        this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["GetConditionsByKey"])({ key }));
    }
    checkStoreGeneralLocationsWithKeys() {
        this.generalLocations$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_generalStore_weather_selectors__WEBPACK_IMPORTED_MODULE_2__["GWLocationsSelector"])).subscribe(res => {
            console.log('general locations common service', res);
            const keyForUpdating = this.keysGeneralLocation.find(key => !(res === null || res === void 0 ? void 0 : res[key]));
            if (!keyForUpdating) {
                return;
            }
            this.getGeneralLocationWithKey(keyForUpdating);
        });
    }
    saveGeneralLocations() {
        window.sessionStorage.setItem(this.KEY_FOR_GENERAL_LOCATIONS, JSON.stringify(this.keysGeneralLocation));
    }
    checkSessionLocations() {
        return !!window.sessionStorage.getItem(this.KEY_FOR_GENERAL_LOCATIONS);
    }
    getGeneralLocations() {
        return JSON.parse(window.sessionStorage.getItem(this.KEY_FOR_GENERAL_LOCATIONS));
    }
    setLoading(value) {
        this.store$.dispatch(Object(_generalStore_weather_actions__WEBPACK_IMPORTED_MODULE_3__["SetLoading"])({ value }));
    }
}
CommonForGeneralLocationsService.ɵfac = function CommonForGeneralLocationsService_Factory(t) { return new (t || CommonForGeneralLocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
CommonForGeneralLocationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonForGeneralLocationsService, factory: CommonForGeneralLocationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonForGeneralLocationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shared/nav-bar/nav-bar.component */ "bYgl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_shared_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/shared/error/error.component */ "tEvg");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-error");
    } }, directives: [_modules_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _modules_shared_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TSE+":
/*!************************************************************************************!*\
  !*** ./src/app/modules/general-weather/store/general-weather/weather.selectors.ts ***!
  \************************************************************************************/
/*! exports provided: weatherFeatureSelector, weatherSelector, GWLocationsKeyFeatureSelector, GWLocationsKeySelector, GWLocationsFeatureSelector, GWLocationsSelector, GWKeysFeatureSelector, GWKeysSelector, GWLoadingFeatureSelector, GWKLoadingSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherFeatureSelector", function() { return weatherFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherSelector", function() { return weatherSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GWLocationsKeyFeatureSelector", function() { return GWLocationsKeyFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GWLocationsKeySelector", function() { return GWLocationsKeySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GWLocationsFeatureSelector", function() { return GWLocationsFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GWLocationsSelector", function() { return GWLocationsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GWKeysFeatureSelector", function() { return GWKeysFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GWKeysSelector", function() { return GWKeysSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GWLoadingFeatureSelector", function() { return GWLoadingFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GWKLoadingSelector", function() { return GWKLoadingSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generalStore/weather.reducer */ "XaLY");


const weatherFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_1__["WEATHER_REDUCER_NODE"]);
const weatherSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(weatherFeatureSelector, state => state);
const GWLocationsKeyFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_1__["WEATHER_REDUCER_NODE"]);
const GWLocationsKeySelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(GWLocationsKeyFeatureSelector, state => state.keys);
const GWLocationsFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_1__["WEATHER_REDUCER_NODE"]);
const GWLocationsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(GWLocationsFeatureSelector, state => state.generalLocations);
const GWKeysFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_1__["WEATHER_REDUCER_NODE"]);
const GWKeysSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(GWKeysFeatureSelector, state => state.keys);
const GWLoadingFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_generalStore_weather_reducer__WEBPACK_IMPORTED_MODULE_1__["WEATHER_REDUCER_NODE"]);
const GWKLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(GWLoadingFeatureSelector, state => state.loading);


/***/ }),

/***/ "XaLY":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/general-weather/store/general-weather/weather.reducer.ts ***!
  \**********************************************************************************/
/*! exports provided: WEATHER_REDUCER_NODE, weatherReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEATHER_REDUCER_NODE", function() { return WEATHER_REDUCER_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherReducer", function() { return weatherReducer; });
/* harmony import */ var _weather_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.actions */ "6eAF");

const WEATHER_REDUCER_NODE = 'weather';
const intialStateCurrentConditions = {
    date: new Date().toString(),
    keys: ['323903', '324505', '325343'],
    loading: false
};
const weatherReducer = (incomState = intialStateCurrentConditions, action) => {
    switch (action.type) {
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__["weatherActionsType"].updateKeys:
            console.log('key reducer add', action.keys);
            return Object.assign(Object.assign({}, incomState), { keys: action.keys });
            break;
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__["weatherActionsType"].loaddedSuccessCondition:
            return Object.assign(Object.assign({}, incomState), { generalLocations: editegeneralLocationConditions(incomState, action) });
            break;
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__["weatherActionsType"].loaddedSuccessLocation:
            return Object.assign(Object.assign({}, incomState), { generalLocations: editeGeneralLocations(incomState, action) });
            break;
        default:
            return incomState;
    }
};
function editeLocation(value) {
    return {
        Type: value.Type,
        LocalizedName: value.LocalizedName,
        Country: value.Country.LocalizedName,
        GeoPosition: {
            Longitude: value.GeoPosition.Longitude,
            Latitude: value.GeoPosition.Latitude
        }
    };
}
function editeGeneralLocations(incomState, action) {
    return Object.assign(Object.assign({}, incomState.generalLocations), { [action.payload.Key]: editeLocation(action.payload) });
}
function editeCondition(value) {
    return {
        WeatherIcon: value.WeatherIcon,
        WeatherText: value.WeatherText,
        Temperature: {
            Metric: {
                Value: value.Temperature.Metric.Value
            }
        },
        Wind: {
            Speed: {
                Metric: {
                    Value: value.Wind.Speed.Metric.Value
                }
            }
        },
        LocalObservationDateTime: value.LocalObservationDateTime
    };
}
function editegeneralLocationConditions(incomState, action) {
    return Object.assign(Object.assign({}, incomState.generalLocations), { [action.payload.key]: Object.assign(Object.assign({}, incomState.generalLocations[action.payload.key]), { conditions: editeCondition(action.payload.response) }) });
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _generalStore_weather_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @generalStore/weather.effects */ "13Yy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_interceptors_headers_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/interceptors/headers-interceptor */ "nIbK");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptors/error-interceptor */ "yE1y");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                useClass: src_app_interceptors_headers_interceptor__WEBPACK_IMPORTED_MODULE_12__["HeadersInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorsInterceptor"],
                multi: true
            }
        ]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot(),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_generalStore_weather_effects__WEBPACK_IMPORTED_MODULE_10__["WeatherEffects"]]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}, {
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true
                        }
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot(),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_generalStore_weather_effects__WEBPACK_IMPORTED_MODULE_10__["WeatherEffects"]]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
                ],
                providers: [
                    [
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                            useClass: src_app_interceptors_headers_interceptor__WEBPACK_IMPORTED_MODULE_12__["HeadersInterceptor"],
                            multi: true
                        },
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                            useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorsInterceptor"],
                            multi: true
                        }
                    ]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bYgl":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/nav-bar/nav-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_services_count_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/count-apis.service */ "kVn3");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");







class NavBarComponent {
    constructor(primengConfig, countApis, cdr) {
        this.primengConfig = primengConfig;
        this.countApis = countApis;
        this.cdr = cdr;
        this.notDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.countApis.valueSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.notDestroy$)).subscribe(res => {
            this.apiAmount = res;
        });
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
        this.items = [
            {
                label: 'Current weather',
                url: '/general',
                icon: 'pi pi-fw pi-sun'
            },
            {
                label: 'Favourite locations',
                url: '/general/favourite',
                icon: 'pi pi-fw pi-cloud'
            }
        ];
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        this.notDestroy$.complete();
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_count_apis_service__WEBPACK_IMPORTED_MODULE_4__["CountApisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 3, vars: 2, consts: [[3, "model"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Amount apis ", ctx.apiAmount, "");
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["Menubar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"] }, { type: src_app_services_count_apis_service__WEBPACK_IMPORTED_MODULE_4__["CountApisService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "kVn3":
/*!************************************************!*\
  !*** ./src/app/services/count-apis.service.ts ***!
  \************************************************/
/*! exports provided: CountApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountApisService", function() { return CountApisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class CountApisService {
    constructor() {
        this.SESSION_KEY = 'ApiAmount';
        this.value = {
            amount: 0,
            date: `${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()}`
        };
        this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.value.amount);
        this.initAmount();
    }
    set amount(value) {
        window.sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(value));
    }
    initAmount() {
        if (this.amount &&
            this.amount.date === this.value.date) {
            this.value = this.amount;
        }
        if (!this.amount ||
            (this.amount && this.amount.date !== this.value.date)) {
            this.amount = this.value;
        }
        this.valueSource.next(this.value.amount);
    }
    get amount() {
        return JSON.parse(window.sessionStorage.getItem(this.SESSION_KEY));
    }
    updateAmount() {
        this.value.amount++;
        this.valueSource.next(this.value.amount);
        this.amount = this.value;
    }
}
CountApisService.ɵfac = function CountApisService_Factory(t) { return new (t || CountApisService)(); };
CountApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountApisService, factory: CountApisService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountApisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nIbK":
/*!*****************************************************!*\
  !*** ./src/app/interceptors/headers-interceptor.ts ***!
  \*****************************************************/
/*! exports provided: HeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersInterceptor", function() { return HeadersInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");



class HeadersInterceptor {
    constructor() {
        this.key = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_KEY;
    }
    intercept(req, next) {
        req.clone({
            setParams: {
                apikey: this.key
            }
        });
        return next.handle(req);
    }
}
HeadersInterceptor.ɵfac = function HeadersInterceptor_Factory(t) { return new (t || HeadersInterceptor)(); };
HeadersInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeadersInterceptor, factory: HeadersInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadersInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "tEvg":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/error/error.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/error.service */ "9vc0");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");






const _c0 = ["template"];
function ErrorComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
} }
class ErrorComponent {
    constructor(errorServ, modalService) {
        this.errorServ = errorServ;
        this.modalService = modalService;
        this.notDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.checkError();
    }
    checkError() {
        this.errorServ.errorSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(res => res)).subscribe(res => {
            if (res) {
                this.errorMessage = res;
                this.openModal(this.template);
            }
        });
    }
    openModal(template) {
        if (!this.modalService.getModalsCount()) {
            this.modalRef = this.modalService.show(template);
        }
    }
    ngOnDestroy() {
        this.notDestroy$.complete();
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], viewQuery: function ErrorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 2, vars: 0, consts: [["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorComponent_ng_template_0_Template, 8, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return [{ type: _services_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }]; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['template']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'general',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-general-weather-general-weather-module */ "modules-general-weather-general-weather-module").then(__webpack_require__.bind(null, /*! ./modules/general-weather/general-weather.module */ "YORG")).then(m => m.GeneralWeatherModule)
            }
        ]
    },
    {
        path: 'favourite',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-favourite-cities-favourite-cities-module */ "modules-favourite-cities-favourite-cities-module").then(__webpack_require__.bind(null, /*! ./modules/favourite-cities/favourite-cities.module */ "ktA7")).then(m => m.FavouriteCitiesModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'general'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yE1y":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error-interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorsInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsInterceptor", function() { return ErrorsInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/error.service */ "9vc0");





class ErrorsInterceptor {
    constructor(errorServ) {
        this.errorServ = errorServ;
    }
    intercept(req, next) {
        return next.handle(req).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                errorMessage = `Error: ${error.error.message}`;
            }
            else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            this.errorServ.createError(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
}
ErrorsInterceptor.ɵfac = function ErrorsInterceptor_Factory(t) { return new (t || ErrorsInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"])); };
ErrorsInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorsInterceptor, factory: ErrorsInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorsInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map