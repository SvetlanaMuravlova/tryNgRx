import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IweatherState, WEATHER_REDUCER_NODE } from '@generalStore/weather.reducer';

export const weatherFeatureSelector = createFeatureSelector<IweatherState>(WEATHER_REDUCER_NODE);
export const weatherSelector = createSelector(weatherFeatureSelector, state => state);

export const GWLocationsKeyFeatureSelector = createFeatureSelector<IweatherState>(WEATHER_REDUCER_NODE);
export const GWLocationsKeySelector = createSelector(GWLocationsKeyFeatureSelector, state => state.keys);

// export const GWConditionsListFeatureSelector = createFeatureSelector<IweatherState>(WEATHER_REDUCER_NODE);
// export const GWConditionsListSelector = createSelector(GWConditionsListFeatureSelector, state => state.list);

export const GWLocationsFeatureSelector = createFeatureSelector<IweatherState>(WEATHER_REDUCER_NODE);
export const GWLocationsSelector = createSelector(GWLocationsFeatureSelector, state => state.generalLocations);

export const GWKeysFeatureSelector = createFeatureSelector<IweatherState>(WEATHER_REDUCER_NODE);
export const GWKeysSelector = createSelector(GWKeysFeatureSelector, state => state.keys);
