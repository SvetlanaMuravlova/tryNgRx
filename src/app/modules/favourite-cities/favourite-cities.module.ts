import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteCitiesRoutingModule } from './favourite-cities-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { FAV_CITIES_REDUCER_NODE, favCitiesrReducer} from '@fav-cities/favourite-cities.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@modules/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { FavCitiesEffects } from '@fav-cities/favourite-cities.effects'

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    FavouriteCitiesRoutingModule,
    EffectsModule.forFeature([FavCitiesEffects]),
    StoreModule.forFeature(FAV_CITIES_REDUCER_NODE, favCitiesrReducer),
    SharedModule
  ]
})
export class FavouriteCitiesModule { }
