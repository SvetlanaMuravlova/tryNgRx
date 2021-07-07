import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { IForecastState} from '@modules/forecasts/store/forecasts/forecast.reducer';
import { Subscription } from 'rxjs';
import { UpdateLocationKeys } from '@modules/forecasts/store/forecasts/forecast.actions';
import { FGetKeysSelector } from '@modules/forecasts/store/forecasts/forecast.selectors';
import { SharedModule } from '@modules/shared/shared.module';
import { BsDatepickerInlineConfig } from '../models/config_for_initing_keys';

@Injectable({
  providedIn: SharedModule
})

export class ForecastService {
  KEY_FOR_FORECAST_KEYS = 'forecast_key';
  forecastKeys: string[];
  forecastLocations$: Subscription;

  constructor(
    private store$: Store<IForecastState>,
    private configs: BsDatepickerInlineConfig
  ) {
    if (this.checkSessionForecastLocation()) {
      this.initForecastLocation(this.getSessionForecastLocation());
    } else {
      this.subscribeOnStoreForecastLocations();
    }
  }

  initForecastLocation(value: string[]): void {
    this.forecastKeys = value;
    this.saveSessionForecastLocation();
    this.updateStoreWithForecastKeys();
    if (!this.forecastLocations$) {
      this.subscribeOnStoreForecastLocations();
    }
  }

  subscribeOnStoreForecastLocations(): void {
    this.forecastLocations$ = this.store$.pipe(select(FGetKeysSelector)).subscribe(res => {
      if (res && res.length) {
        this.forecastKeys = Object.assign([], res);
        this.checkSessionForecastLocation();
        this.saveSessionForecastLocation();
      }
    });
  }

  updateStoreWithForecastKeys(): void {
    this.store$.dispatch(UpdateLocationKeys({keys: this.forecastKeys}));
  }

  checkSessionForecastLocation(): boolean {
    return !!window.sessionStorage.getItem(this.KEY_FOR_FORECAST_KEYS);
  }

  getSessionForecastLocation(): string[] {
    return JSON.parse(window.sessionStorage.getItem(this.KEY_FOR_FORECAST_KEYS));
  }

  saveSessionForecastLocation(): void {
    window.sessionStorage.setItem(this.KEY_FOR_FORECAST_KEYS, JSON.stringify(this.forecastKeys));
  }
}
