import { Action } from "@ngrx/store";

export enum weatherActionsType {
    add = '[WEATHER] add location'
}

export class WeatherAddLocation implements Action {
    readonly type = weatherActionsType.add;
    constructor(public payload: {num: number}) {

    }
}

export type WeatherActions = WeatherAddLocation;