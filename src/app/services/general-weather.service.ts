import { Injectable} from '@angular/core';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IweatherState } from '@generalStore/weather.reducer';
import { GWLocationsKeySelector, GWLocationsSelector } from '@generalStore/weather.selectors';
import { GetConditionsByKey, GetLocationByKey, SetLoading, UpdateKeysLocation } from '@generalStore/weather.actions';

@Injectable({
  providedIn: 'root'
})
export class CommonForGeneralLocationsService {
  generalLocations$: Subscription;
  keysGeneralLocation: string[];
  KEY_FOR_GENERAL_LOCATIONS = 'GeneralWeatherLocations';

  constructor(
    private store$: Store<IweatherState>,
  ) {
    if (this.checkSessionLocations()) {
      this.initGeneralLocation(this.getGeneralLocations());
    } else {
      this.subscribeOnStoreGeneralLocations();
    }
  }

  initGeneralLocation(value: string[]): void {
    this.keysGeneralLocation = value;
    this.saveGeneralLocations();
    this.updateStoreWithGeneralKeys();
    if (!this.generalLocations$) {
      this.subscribeOnStoreGeneralLocations();
    }
  }

  addGeneralLocation(key: string): void {
    if (!this.keysGeneralLocation.includes(key)) {
      this.keysGeneralLocation.push(key);
      this.updateStoreWithGeneralKeys();
    }
  }

  subscribeOnStoreGeneralLocations(): void {
    this.generalLocations$ = this.store$.pipe(select(GWLocationsKeySelector)).subscribe(res => {
      if (res && res.length) {
        this.keysGeneralLocation = Object.assign([], res);
        this.checkStoreGeneralLocationsWithKeys();
        this.saveGeneralLocations();
      }
    });
  }

  updateStoreWithGeneralKeys(): void {
    this.store$.dispatch(UpdateKeysLocation({keys: this.keysGeneralLocation}));
  }

  getGeneralLocationWithKey(key: string): void {
    this.setLoading(true);
    this.store$.dispatch(GetLocationByKey({ key }));
    this.store$.dispatch(GetConditionsByKey({ key }));
  }

  checkStoreGeneralLocationsWithKeys(): void {
    this.generalLocations$ = this.store$.pipe(select(GWLocationsSelector)).subscribe(res => {
      const keyForUpdating = this.keysGeneralLocation.find(key => !res?.[key]);
      if (!keyForUpdating) {
        return;
      }

      this.getGeneralLocationWithKey(keyForUpdating);
    });
  }

  saveGeneralLocations(): void {
    window.sessionStorage.setItem(this.KEY_FOR_GENERAL_LOCATIONS, JSON.stringify(this.keysGeneralLocation));
  }

  checkSessionLocations(): boolean {
    return !!window.sessionStorage.getItem(this.KEY_FOR_GENERAL_LOCATIONS);
  }

  getGeneralLocations(): string[] {
    return JSON.parse(window.sessionStorage.getItem(this.KEY_FOR_GENERAL_LOCATIONS));
  }

  setLoading(value): void {
    this.store$.dispatch(SetLoading({value}));
  }
}
