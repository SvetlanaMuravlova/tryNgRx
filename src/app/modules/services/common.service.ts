import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IweatherState } from 'src/app/modules/general-weather/store/general-weather/weather.reducer';
import { GWLocationsSelector } from 'src/app/modules/general-weather/store/general-weather/weather.selectors';
import { AddKeyLocation } from 'src/app/modules/general-weather/store/general-weather/weather.actions'

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
    // this.currentLocations.general = Object.assign([], value);
    this.currentLocations.general = value;

    this.updateStoreWithGeneralLocations(value);
    this.saveLocations();
    if (!this.generalLocations$) {
      this.subscribeOnStoreGeneralLocations();
    }
  }

  addGeneralLocation(key: string) {
    if (this.currentLocations.general && this.currentLocations.general.length > 2) {
      this.currentLocations.general.unshift(key);
      this.currentLocations.general.splice(this.currentLocations.general.length-1, 1)
    } else {
      this.currentLocations.general.push(key)
    }
    this.updateStoreWithGeneralLocations(this.currentLocations.general);
  }

  subscribeOnStoreGeneralLocations() {
    this.generalLocations$ = this.store$.pipe(select(GWLocationsSelector)).subscribe(res => {
      if (res && res.length) {
        this.currentLocations.general = Object.assign([], res);
        this.saveLocations();
      }
    })
  }

  updateStoreWithGeneralLocations(value: string[]) {
    this.store$.dispatch(AddKeyLocation({keys: value}))
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
