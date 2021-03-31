import { Action } from "@ngrx/store";

export enum weatherActionsType {
    add = '[WEATHER] add location'
}

export class WeatherAddLocation implements Action {
    readonly type = weatherActionsType.add;
    constructor() {}
}

export type WeatherActions = WeatherAddLocation;