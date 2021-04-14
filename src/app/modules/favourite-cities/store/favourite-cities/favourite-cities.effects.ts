import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, switchMap, finalize } from 'rxjs/operators';
import { ApiService } from '@services/api.service';
// import { weatherActionsType,  GetConditionsByKey, SetLoading, SetError, GetLocationByKey } from './weather.actions';
// import { IweatherState } from '@generalStore/weather.reducer';
import { Store } from "@ngrx/store";


@Injectable()

export class FavCitiesEffects {
 
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    // private store$: Store<IweatherState>,

  ) {}

  // loadConditionss$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(GetConditionsByKey),
  //     mergeMap( (action) => (this.apiService.getConditionBykey(action.key))
  //       .pipe(
  //         map(response => {
  //           this.store$.dispatch(SetError({message: ''}));
  //           return { type: weatherActionsType.loaddedSuccessCondition, payload: {response: response[0], key: action.key}}
  //         }),
  //         catchError((error) => of({ type: weatherActionsType.apiError, payload: error })),
  //         finalize(() => this.store$.dispatch(SetLoading({value: false})))
  //       )
  //     )
  //   )
  // );

  
}