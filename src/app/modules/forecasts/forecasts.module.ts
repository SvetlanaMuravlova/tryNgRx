import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastsRoutingModule } from '@modules/forecasts/forecasts-routing.module';
import { FORECAST_REDUCER_NODE, forecastReducer } from '@modules/forecasts/store/forecasts/forecast.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    ForecastsRoutingModule,
    StoreModule.forFeature(FORECAST_REDUCER_NODE, forecastReducer),

  ]
})
export class ForecastsModule { }
