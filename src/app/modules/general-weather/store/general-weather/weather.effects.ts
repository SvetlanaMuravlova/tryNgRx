import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, finalize } from 'rxjs/operators';
import { ApiService } from '@services/api.service';
import { weatherActionsType,  GetConditionsByKey, SetLoading, GetLocationByKey } from '@generalStore/weather.actions';
import { IweatherState } from '@generalStore/weather.reducer';
import { Store } from '@ngrx/store';
import { CountApisService } from '@services/count-apis.service';


@Injectable()

export class WeatherEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store$: Store<IweatherState>,
    private apiCounts: CountApisService
  ) {}

  loadConditionss$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetConditionsByKey),
      mergeMap( (action) => (this.apiService.getConditionBykey(action.key))
        .pipe(
          map(response => {
            this.apiCounts.updateAmount();
            return { type: weatherActionsType.loaddedSuccessCondition, payload: {response: response[0], key: action.key}};
          }),
          finalize(() => this.store$.dispatch(SetLoading({value: false})))
        )
      )
    )
  );

  loadLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetLocationByKey),
      mergeMap( (action) => (this.apiService.getLocationBykey(action.key))
        .pipe(
          map(response => {
            this.apiCounts.updateAmount();
            return { type: weatherActionsType.loaddedSuccessLocation, payload: response};
          }),
          finalize(() => this.store$.dispatch(SetLoading({value: false})))
        )
      )
    )
  );
}
