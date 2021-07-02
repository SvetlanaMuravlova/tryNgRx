(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-favourite-cities-favourite-cities-module"],{

/***/ "CLEJ":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/favourite-cities/components/general/general.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _fav_cities_favourite_cities_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fav-cities/favourite-cities.selectors */ "gUFC");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api.service */ "H+bZ");






class GeneralComponent {
    constructor(store$, 
    // public commonService: CommonService,
    apiService) {
        this.store$ = store$;
        this.apiService = apiService;
        this.type = 'favourite';
        this.objectKeys = Object.keys;
        // conditions$: Observable<IFavCitiesState> = this.store$.pipe(select(weatherSelector))
        // list$: Observable<ICondition[]> = this.store$.pipe(select(GWConditionsListSelector))
        // generalLocations$: Observable<any> = this.store$.pipe(select(GWLocationsSelector))
        this.currentState$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_fav_cities_favourite_cities_selectors__WEBPACK_IMPORTED_MODULE_2__["currentStateSelector"]));
        this.currentState$.subscribe(res => {
            this.state = res;
        });
    }
    ngOnInit() {
        this.getConditions();
    }
    getConditions() {
        // let keysObserv = [];
        // console.log(this.state.keys[0]);
        this.state.keys.forEach(key => {
            // keysObserv.push(this.apiService.getConditionBykey(key));
            // this.store$.dispatch(GetLocationByKey({key}))
            // this.store$.dispatch(GetConditionsByKey({key}))
        });
        // this.store$.dispatch(GetLocationByKey({key: this.state.keys[0]}))
        // this.store$.dispatch(GetConditionsByKey({key: this.state.keys[0]}))
        // this.store$.dispatch(GetConditionsByKey({key: this.state.keys[0]}))
    }
    // onClickBtn() {
    //   // this.store$.dispatch(WeatherAddLocation())
    //   this.commonService.updateStoreWithGeneralLocations(['1', '2', '3'])
    // }
    getLocationFromLink(link) {
        let key = link.split('/').find(item => this.state.keys.includes(item));
        return this.generalLocations[key.toString()];
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
GeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 0, vars: 0, template: function GeneralComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general',
                templateUrl: './general.component.html',
                styleUrls: ['./general.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "NQ8e":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/favourite-cities/store/favourite-cities/favourite-cities.reducer.ts ***!
  \*********************************************************************************************/
/*! exports provided: FAV_CITIES_REDUCER_NODE, favCitiesrReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAV_CITIES_REDUCER_NODE", function() { return FAV_CITIES_REDUCER_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favCitiesrReducer", function() { return favCitiesrReducer; });
/* harmony import */ var _fav_cities_favourite_cities_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fav-cities/favourite-cities.actions */ "PxFr");

// import { on } '@ngrx/effects';
const FAV_CITIES_REDUCER_NODE = 'favCities';
const intialStateCurrentConditions = {
    date: new Date().toString(),
    list: {},
    keys: ['323903', '324505', '325343'],
    loading: false,
    error: '',
    favLocations: {
        323903: {
            Type: "City",
            LocalizedName: "Kharkiv",
            Country: "Ukraine",
            GeoPosition: {
                Longitude: '11111',
                Latitude: '111111'
            }
        },
        324505: {
            Type: "City",
            LocalizedName: "Kharkiv",
            Country: "Ukraine",
            GeoPosition: {
                Longitude: '11111',
                Latitude: '111111'
            }
        },
        325343: {
            Type: "City",
            LocalizedName: "Kharkiv",
            Country: "Ukraine",
            GeoPosition: {
                Longitude: '11111',
                Latitude: '111111'
            }
        }
    }
};
const favCitiesrReducer = (state = intialStateCurrentConditions, action) => {
    switch (action.type) {
        case _fav_cities_favourite_cities_actions__WEBPACK_IMPORTED_MODULE_0__["weatherActionsType"].add:
            return Object.assign(Object.assign({}, state), { keys: action.keys });
            break;
        default:
            return state;
    }
};


/***/ }),

/***/ "PxFr":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/favourite-cities/store/favourite-cities/favourite-cities.actions.ts ***!
  \*********************************************************************************************/
/*! exports provided: weatherActionsType, addKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherActionsType", function() { return weatherActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addKey", function() { return addKey; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var weatherActionsType;
(function (weatherActionsType) {
    weatherActionsType["add"] = "[favLocations] add location";
})(weatherActionsType || (weatherActionsType = {}));
const addKey = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(weatherActionsType.add, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "gUFC":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/favourite-cities/store/favourite-cities/favourite-cities.selectors.ts ***!
  \***********************************************************************************************/
/*! exports provided: currentStateFeatureSelector, currentStateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentStateFeatureSelector", function() { return currentStateFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentStateSelector", function() { return currentStateSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _fav_cities_favourite_cities_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fav-cities/favourite-cities.reducer */ "NQ8e");


const currentStateFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_fav_cities_favourite_cities_reducer__WEBPACK_IMPORTED_MODULE_1__["FAV_CITIES_REDUCER_NODE"]);
const currentStateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(currentStateFeatureSelector, state => state);


/***/ }),

/***/ "hBuh":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/favourite-cities/favourite-cities-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FavouriteCitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteCitiesRoutingModule", function() { return FavouriteCitiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/general.component */ "CLEJ");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_general_general_component__WEBPACK_IMPORTED_MODULE_2__["GeneralComponent"]
    }
];
class FavouriteCitiesRoutingModule {
}
FavouriteCitiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FavouriteCitiesRoutingModule });
FavouriteCitiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FavouriteCitiesRoutingModule_Factory(t) { return new (t || FavouriteCitiesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavouriteCitiesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouriteCitiesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ktA7":
/*!*********************************************************************!*\
  !*** ./src/app/modules/favourite-cities/favourite-cities.module.ts ***!
  \*********************************************************************/
/*! exports provided: FavouriteCitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteCitiesModule", function() { return FavouriteCitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _favourite_cities_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourite-cities-routing.module */ "hBuh");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.component */ "CLEJ");
/* harmony import */ var _fav_cities_favourite_cities_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fav-cities/favourite-cities.reducer */ "NQ8e");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/shared/shared.module */ "FpXt");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _fav_cities_favourite_cities_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fav-cities/favourite-cities.effects */ "vlug");












class FavouriteCitiesModule {
}
FavouriteCitiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FavouriteCitiesModule });
FavouriteCitiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FavouriteCitiesModule_Factory(t) { return new (t || FavouriteCitiesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _favourite_cities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FavouriteCitiesRoutingModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_fav_cities_favourite_cities_effects__WEBPACK_IMPORTED_MODULE_8__["FavCitiesEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_fav_cities_favourite_cities_reducer__WEBPACK_IMPORTED_MODULE_4__["FAV_CITIES_REDUCER_NODE"], _fav_cities_favourite_cities_reducer__WEBPACK_IMPORTED_MODULE_4__["favCitiesrReducer"]),
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavouriteCitiesModule, { declarations: [_components_general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _favourite_cities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FavouriteCitiesRoutingModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreFeatureModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouriteCitiesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _favourite_cities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FavouriteCitiesRoutingModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_fav_cities_favourite_cities_effects__WEBPACK_IMPORTED_MODULE_8__["FavCitiesEffects"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_fav_cities_favourite_cities_reducer__WEBPACK_IMPORTED_MODULE_4__["FAV_CITIES_REDUCER_NODE"], _fav_cities_favourite_cities_reducer__WEBPACK_IMPORTED_MODULE_4__["favCitiesrReducer"]),
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vlug":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/favourite-cities/store/favourite-cities/favourite-cities.effects.ts ***!
  \*********************************************************************************************/
/*! exports provided: FavCitiesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavCitiesEffects", function() { return FavCitiesEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/api.service */ "H+bZ");




class FavCitiesEffects {
    constructor(actions$, apiService) {
        this.actions$ = actions$;
        this.apiService = apiService;
    }
}
FavCitiesEffects.ɵfac = function FavCitiesEffects_Factory(t) { return new (t || FavCitiesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
FavCitiesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavCitiesEffects, factory: FavCitiesEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavCitiesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-favourite-cities-favourite-cities-module.js.map