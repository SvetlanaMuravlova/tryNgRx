import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FORECAST_REDUCER_NODE, IForecastState } from '@modules/forecasts/store/forecasts/forecast.reducer';

export const forecastFeatureSelector = createFeatureSelector<IForecastState>(FORECAST_REDUCER_NODE);
export const forecastSelector = createSelector(forecastFeatureSelector, state => state);

export const FGetKeysFeatureSelector = createFeatureSelector<IForecastState>(FORECAST_REDUCER_NODE);
export const FGetKeysSelector = createSelector(FGetKeysFeatureSelector, state => state.keys);
