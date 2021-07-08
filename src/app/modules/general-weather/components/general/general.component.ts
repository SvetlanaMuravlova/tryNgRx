import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IweatherState } from '@generalStore/weather.reducer';
import {GetConditionsByKey, GetLocationByKey, SetLoading, deleteLocation} from '@generalStore/weather.actions';
import {
  weatherSelector,
  GWLocationsSelector,
  GWKLoadingSelector
} from '@generalStore/weather.selectors';
import { Observable } from 'rxjs';
import { CommonForGeneralLocationsService } from '@services/common.service';
import { ApiService } from '@services/api.service';
import { ICondition } from '@interfaces/interfaces';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnDestroy {
  objectKeys = Object.keys;

  conditions$: Observable<IweatherState> = this.store$.pipe(select(weatherSelector));
  generalLocations$: Observable<any> = this.store$.pipe(select(GWLocationsSelector));
  loading$: Observable<boolean> = this.store$.pipe(select(GWKLoadingSelector));
  notDestroy$ = new Subject();

  type = 'general';
  state: IweatherState;
  list: ICondition[];
  generalLocations: any;

  constructor(
    private store$: Store<IweatherState>,
    public apiService: ApiService,
    public generalServ: CommonForGeneralLocationsService
  ) {
    this.conditions$.
    pipe(
      takeUntil(this.notDestroy$)
    ).
    subscribe(res => {
      this.state = res;
    });

    this.generalLocations$.
    pipe(
      takeUntil(this.notDestroy$)
    ).
    subscribe(res => {
      this.generalLocations = res;
    });

    this.loading$.
    pipe(
      takeUntil(this.notDestroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.notDestroy$.complete();
  }

}
