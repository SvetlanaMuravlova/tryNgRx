import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IweatherState, WEATHER_REDUCER_NODE } from '../../store/general-weather/weather.reducer';

export const weatherFeatureSelector = createFeatureSelector<IweatherState>(WEATHER_REDUCER_NODE);
export const weatherSelector = createSelector(weatherFeatureSelector, state => state)