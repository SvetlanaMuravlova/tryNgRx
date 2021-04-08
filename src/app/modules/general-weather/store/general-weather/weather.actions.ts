import { Action, createAction, props } from "@ngrx/store";

export enum weatherActionsType {
    add = '[WEATHER] add location',
    getConditions = '[WEATHER] get condition by key',
    loaddedSuccessCondition = '[WEATHER] conditions by key loadded success',
    apiError = '[WEATHER] api error',
    loading = '[WEATHER] loading spinner'
}

export const GetConditionsByKey = createAction(
    weatherActionsType.getConditions,
    props<{key: string}>()
);

export const ConditionLoaddedSuccess = createAction(
    weatherActionsType.loaddedSuccessCondition,
    props<{payload: any}>()
);

export const SetError = createAction(
    weatherActionsType.apiError,
    props<{message: string}>()
);

export const SetLoading = createAction(
    weatherActionsType.loading,
    props<{value: boolean}>()
);

export const AddKeyLocation = createAction(
    weatherActionsType.add,
    props<{keys: string[]}>()
);
