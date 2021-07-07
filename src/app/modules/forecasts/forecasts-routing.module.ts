import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from '@modules/forecasts/components/forecast/forecast.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastsRoutingModule { }
