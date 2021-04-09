import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IweatherState } from '../../store/general-weather/weather.reducer';
import {GetConditionsByKey, GetLocationByKey } from '../../store/general-weather/weather.actions'
import { weatherSelector, GWConditionsListSelector, GWLocationsSelector } from '../../store/general-weather/weather.selectors';
import { Observable } from 'rxjs';
import { CommonService } from '@services/common.service';
import { ApiService } from '@services/api.service';
import { ICondition } from 'src/app/modules/interfaces/interfaces';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  objectKeys = Object.keys;
  conditions$: Observable<IweatherState> = this.store$.pipe(select(weatherSelector))
  list$: Observable<ICondition[]> = this.store$.pipe(select(GWConditionsListSelector))
  generalLocations$: Observable<any> = this.store$.pipe(select(GWLocationsSelector))

  state: IweatherState;
  list : ICondition[];
  generalLocations: any;
  constructor(
    private store$: Store<IweatherState>,
    public commonService: CommonService,
    public apiService: ApiService
  ) { 
    this.conditions$.subscribe(res => {
      this.state = res;
    })

    this.list$.subscribe(res => {
      this.list = res;
    })

    this.generalLocations$.subscribe(res => {
      this.generalLocations = res;
      console.log('general locations', this.generalLocations)
    })
  }

  ngOnInit(): void {
    this.getConditions();
  }

  getConditions() {
    // let keysObserv = [];
    // console.log(this.state.keys[0]);
    this.state.keys.forEach(key => {
      // keysObserv.push(this.apiService.getConditionBykey(key));
      // this.store$.dispatch(GetLocationByKey({key}))
      // this.store$.dispatch(GetConditionsByKey({key}))
    })

      // this.store$.dispatch(GetLocationByKey({key: this.state.keys[0]}))
      // this.store$.dispatch(GetConditionsByKey({key: this.state.keys[0]}))

    // this.store$.dispatch(GetConditionsByKey({key: this.state.keys[0]}))
  }

  // onClickBtn() {
  //   // this.store$.dispatch(WeatherAddLocation())
  //   this.commonService.updateStoreWithGeneralLocations(['1', '2', '3'])
  // }

  getLocationFromLink(link: string) {
    let key = link.split('/').find(item => this.state.keys.includes(item));
    return this.generalLocations[key.toString()]
  }

}
