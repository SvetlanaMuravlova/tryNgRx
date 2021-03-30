import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralWeatherRoutingModule } from './general-weather-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { StoreModule } from '@ngrx/store';
import { WEATHER_REDUCER_NODE, weatherReducer } from '../general-weather/store/general-weather/weather.reducer';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    GeneralWeatherRoutingModule,
    StoreModule.forFeature(WEATHER_REDUCER_NODE, weatherReducer),
    ButtonModule,
    RippleModule
  ]
})
export class GeneralWeatherModule { }
