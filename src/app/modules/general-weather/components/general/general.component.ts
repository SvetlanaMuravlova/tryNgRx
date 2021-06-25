import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IweatherState } from '@generalStore/weather.reducer';
import {GetConditionsByKey, GetLocationByKey } from '@generalStore/weather.actions';
import {
  weatherSelector,
  GWLocationsSelector,
  GWKeysSelector
} from '@generalStore/weather.selectors';
import { Observable } from 'rxjs';
import { CommonService } from '@services/common.service';
import { ApiService } from '@services/api.service';
import { ICondition } from '@interfaces/interfaces';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  objectKeys = Object.keys;
  conditions$: Observable<IweatherState> = this.store$.pipe(select(weatherSelector));
  generalLocations$: Observable<any> = this.store$.pipe(select(GWLocationsSelector));
  keys$: Observable<string[]> = this.store$.pipe(select(GWKeysSelector));

  type = 'general';
  state: IweatherState;
  list: ICondition[];
  generalLocations: any;

  constructor(
    private store$: Store<IweatherState>,
    public apiService: ApiService
  ) {
    this.conditions$.subscribe(res => {
      this.state = res;
    });

    this.generalLocations$.subscribe(res => {
      this.generalLocations = res;
    });

    this.keys$.subscribe(res => {
      this.checkForKeysChanges();
    });
  }

  ngOnInit(): void {
    this.getConditions();
  }

  getConditions(): void {
    const keys = Object.keys(this.state.generalLocations);
    keys.forEach(key => {
      this.store$.dispatch(GetLocationByKey({key}));
      this.store$.dispatch(GetConditionsByKey({key}));
    });
  }

  checkForKeysChanges(): void {
    const conditionsKeys = Object.keys(this.state.generalLocations);
    if (!this.state.keys?.length || !conditionsKeys.length) {
      return;
    }
    if (JSON.stringify(this.state.keys) !== JSON.stringify(conditionsKeys)) {
      console.log('need update')
      const key = this.state.keys.find(keyItem => !conditionsKeys.includes(keyItem));
      console.log('key for update', key);
      this.store$.dispatch(GetLocationByKey({ key }));
      this.store$.dispatch(GetConditionsByKey({ key }));
    }
  }

  getLocationFromLink(link: string): any[] {
    const key = link.split('/').find(item => this.state.keys.includes(item));
    return this.generalLocations[key.toString()];
  }

}
