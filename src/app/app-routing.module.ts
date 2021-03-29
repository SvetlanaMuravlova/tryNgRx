import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'general',
    children:[
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/general-weather/general-weather.module').then(m => m.GeneralWeatherModule)
      },
      {
        path: 'favourite',
        pathMatch: 'full',
        loadChildren: () => import('./modules/favourite-cities/favourite-cities.module').then(m => m.FavouriteCitiesModule)
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
