import { createAction, props } from '@ngrx/store';

export enum forecastActionsType {
  updateKeys = '[FORECAST] update keys'
}

export const UpdateLocationKeys = createAction(
  forecastActionsType.updateKeys,
  props<{keys: string[]}>()
);
