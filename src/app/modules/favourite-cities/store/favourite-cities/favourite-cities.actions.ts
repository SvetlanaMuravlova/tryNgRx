import { Action, createAction, props } from "@ngrx/store";

export enum weatherActionsType {
    add = '[favLocations] add location',

}

export const addKey = createAction(
    weatherActionsType.add,
    props<{key: string}>()
);


