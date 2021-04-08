import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GeneralWeatherRoutingModule } from './general-weather-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { StoreModule } from '@ngrx/store';
import { WEATHER_REDUCER_NODE, weatherReducer } from '../general-weather/store/general-weather/weather.reducer';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/general-weather/weather.effects';
import { SharedModule } from '@modules/shared/shared.module'
@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    GeneralWeatherRoutingModule,
    StoreModule.forFeature(WEATHER_REDUCER_NODE, weatherReducer),
    ButtonModule,
    RippleModule,
    EffectsModule.forFeature([WeatherEffects]),
    HttpClientModule,
    SharedModule
  ]
})
export class GeneralWeatherModule { }
