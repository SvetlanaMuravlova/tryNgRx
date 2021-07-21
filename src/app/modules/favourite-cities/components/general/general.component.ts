import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
// import { IweatherState } from '@generalStore/weather.reducer';
import { IFavCitiesState } from '@fav-cities/favourite-cities.reducer';
import { addKey } from '@fav-cities/favourite-cities.actions';
import { currentStateSelector } from '@fav-cities/favourite-cities.selectors';

// import {GetConditionsByKey, GetLocationByKey } from '@generalStore/weather.actions'
// import { weatherSelector, GWConditionsListSelector, GWLocationsSelector } from '@generalStore/weather.selectors';
import { Observable } from 'rxjs';
// import { CommonService } from '@services/common.service';
import { ApiService } from '@services/api.service';
import { ICondition } from '@interfaces/interfaces';
import { IweatherState } from '@generalStore/weather.reducer';
import {GWLocationsSelector, weatherSelector} from '@generalStore/weather.selectors';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralFavComponent implements OnInit {
  type = 'favourite';
  objectKeys = Object.keys;
  // conditions$: Observable<IFavCitiesState> = this.store$.pipe(select(weatherSelector))
  // list$: Observable<ICondition[]> = this.store$.pipe(select(GWConditionsListSelector))
  // generalLocations$: Observable<any> = this.store$.pipe(select(GWLocationsSelector))
  currentState$: Observable<IFavCitiesState> = this.store$.pipe(select(currentStateSelector));
  currentWeatherState$: Observable<any> = this.storeWeather$.pipe(select(GWLocationsSelector));


  state: IFavCitiesState;
  list: ICondition[];
  generalLocations: any;
  constructor(
    private store$: Store<IFavCitiesState>,
    // public commonService: CommonService,
    public apiService: ApiService,
    private storeWeather$: Store<IweatherState>,
  ) {
    this.currentState$.subscribe(res => {
      this.state = res;
    });

    this.currentWeatherState$.subscribe(res => {
      console.log('check locations in another module', res);
    });
  }

  ngOnInit(): void {
    // this.getConditions();
  }

  // getConditions() {
  //   // let keysObserv = [];
  //   // console.log(this.state.keys[0]);
  //   this.state.keys.forEach(key => {
  //     // keysObserv.push(this.apiService.getConditionBykey(key));
  //     // this.store$.dispatch(GetLocationByKey({key}))
  //     // this.store$.dispatch(GetConditionsByKey({key}))
  //   })
  //
  //     // this.store$.dispatch(GetLocationByKey({key: this.state.keys[0]}))
  //     // this.store$.dispatch(GetConditionsByKey({key: this.state.keys[0]}))
  //
  //   // this.store$.dispatch(GetConditionsByKey({key: this.state.keys[0]}))
  // }

  // onClickBtn() {
  //   // this.store$.dispatch(WeatherAddLocation())
  //   this.commonService.updateStoreWithGeneralLocations(['1', '2', '3'])
  // }

  // getLocationFromLink(link: string) {
  //   let key = link.split('/').find(item => this.state.keys.includes(item));
  //   return this.generalLocations[key.toString()]
  // }

}
