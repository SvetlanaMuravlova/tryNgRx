import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IweatherState } from '../../store/general-weather/weather.reducer';
import {GetConditionsByKey } from '../../store/general-weather/weather.actions'
import { weatherSelector } from '../../store/general-weather/weather.selectors';
import { Observable } from 'rxjs';
import { CommonService } from '@services/common.service';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  conditions$: Observable<IweatherState> = this.store$.pipe(select(weatherSelector))
  state;
  constructor(
    private store$: Store<IweatherState>,
    public commonService: CommonService
  ) { 
    this.conditions$.subscribe(res => {
      this.state = res;
      console.log(res)
    })
  }

  ngOnInit(): void {
    this.getConditions();


    

  }

  getConditions() {
    console.log(this.state.keys[0])
    // this.store$.dispatch(GetConditionsByKey({key: this.state.keys[0]}))
  }

  onClickBtn() {
    // this.store$.dispatch(WeatherAddLocation())
    this.commonService.updateStoreWithGeneralLocations(['1', '2', '3'])
  }

}
