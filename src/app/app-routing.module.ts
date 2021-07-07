import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'general',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/general-weather/general-weather.module').then(m => m.GeneralWeatherModule)
      }
    ]
  },
  {
    path: 'forecasts',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/forecasts/forecasts.module').then(m => m.ForecastsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'general'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
