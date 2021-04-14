import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteCitiesRoutingModule { }
