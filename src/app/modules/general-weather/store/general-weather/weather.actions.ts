import { Action, createAction, props } from "@ngrx/store";

export enum weatherActionsType {
    updateKeys = '[WEATHER] add key',
    getConditions = '[WEATHER] get condition by key',
    loaddedSuccessCondition = '[WEATHER] conditions by key loadded success',
    loading = '[WEATHER] loading spinner',
    getLocation = '[WEATHER] get location by key',
    loaddedSuccessLocation = '[WEATHER] location by key loadded success',
}

export const GetConditionsByKey = createAction(
    weatherActionsType.getConditions,
    props<{key: string}>()
);

export const GetLocationByKey = createAction(
    weatherActionsType.getLocation,
    props<{key: string}>()
);

export const LocationLoaddedSuccess = createAction(
    weatherActionsType.loaddedSuccessLocation,
    props<{payload: any}>()
);

export const ConditionLoaddedSuccess = createAction(
    weatherActionsType.loaddedSuccessCondition,
    props<{payload: any}>()
);

export const SetLoading = createAction(
    weatherActionsType.loading,
    props<{value: boolean}>()
);

export const UpdateKeysLocation = createAction(
    weatherActionsType.updateKeys,
    props<{keys: string[]}>()
);
