import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralWeatherRoutingModule } from './general-weather-routing.module';
import { GeneralComponent } from './components/general/general.component';


@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    GeneralWeatherRoutingModule
  ]
})
export class GeneralWeatherModule { }
