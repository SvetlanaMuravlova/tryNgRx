import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralFavComponent } from './components/general/general.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GeneralFavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteCitiesRoutingModule { }
