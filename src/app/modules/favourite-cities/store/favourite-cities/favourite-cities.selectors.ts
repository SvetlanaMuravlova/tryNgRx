import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFavCitiesState, FAV_CITIES_REDUCER_NODE } from '@fav-cities/favourite-cities.reducer';

export const currentStateFeatureSelector = createFeatureSelector<IFavCitiesState>(FAV_CITIES_REDUCER_NODE);
export const currentStateSelector = createSelector(currentStateFeatureSelector, state => state);
