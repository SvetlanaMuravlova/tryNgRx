import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, switchMap, finalize } from 'rxjs/operators';
import { ApiService } from '@modules/services/api.service';
import { weatherActionsType,  GetConditionsByKey, SetLoading, SetError } from './weather.actions';
import { IweatherState } from '../../store/general-weather/weather.reducer';
import { Store } from "@ngrx/store";


@Injectable()

export class WeatherEffects {
 
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store$: Store<IweatherState>,

  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetConditionsByKey),
      switchMap( (action) => (this.apiService.getConditionBykey(action.key))
        .pipe(
          map(response => {
            this.store$.dispatch(SetError({message: ''}));
            return { type: weatherActionsType.loaddedSuccessCondition, payload: response}
          }),
          catchError((error) => of({ type: weatherActionsType.apiError, payload: error })),
          finalize(() => this.store$.dispatch(SetLoading({value: false})))
        )
      )
    )
  );
}