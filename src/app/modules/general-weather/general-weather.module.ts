import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GeneralWeatherRoutingModule } from './general-weather-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from '@generalStore/weather.effects';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    GeneralWeatherRoutingModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class GeneralWeatherModule { }
