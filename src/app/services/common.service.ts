import { Injectable} from '@angular/core';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IweatherState } from '@generalStore/weather.reducer';
import { GWLocationsKeySelector } from '@generalStore/weather.selectors';
import { AddKeyLocation } from '@generalStore/weather.actions'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  generalLocations$: Subscription;
  currentLocations = {
    general: [],
    favourite: []
  }

  constructor(
    private store$: Store<IweatherState>,
  ) {
    if (this.checkSessionLocations()) {
      this.initGeneralLocation(this.getSessionLocations().general);
    } else {
      this.subscribeOnStoreGeneralLocations();
    }

  }

  initGeneralLocation(value: string[]) {
    this.currentLocations.general = value;

    this.updateStoreWithGeneralLocations(value);
    this.saveLocations();
    if (!this.generalLocations$) {
      this.subscribeOnStoreGeneralLocations();
    }
  }

  addGeneralLocation(key: string): void {
    console.log('general list', this.currentLocations)
    if (!this.currentLocations.general.includes(key)) {
      if (this.currentLocations.general && this.currentLocations.general.length > 2) {
        this.currentLocations.general.unshift(key);
        this.currentLocations.general.splice(this.currentLocations.general.length - 1, 1);
      } else {
        this.currentLocations.general.push(key);
      }
      this.updateStoreWithGeneralLocations(this.currentLocations.general);
    }
  }

  subscribeOnStoreGeneralLocations() {
    this.generalLocations$ = this.store$.pipe(select(GWLocationsKeySelector)).subscribe(res => {
      if (res && res.length) {
        this.currentLocations.general = Object.assign([], res);
        this.saveLocations();
      }
    })
  }

  updateStoreWithGeneralLocations(value: string[]): void {
    this.store$.dispatch(AddKeyLocation({keys: value}));
  }

  saveLocations() {
    window.sessionStorage.setItem('WeatherLocations', JSON.stringify(this.currentLocations))
  }

  checkSessionLocations(): boolean {
    return !!window.sessionStorage.getItem('WeatherLocations')
  }

  getSessionLocations() {
    return JSON.parse(window.sessionStorage.getItem('WeatherLocations'));
  }
}
