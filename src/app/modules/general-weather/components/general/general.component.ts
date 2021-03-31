import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IweatherState } from '../../store/general-weather/weather.reducer';
import { WeatherAddLocation } from '../../store/general-weather/weather.actions'
import { weatherSelector } from '../../store/general-weather/weather.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  conditions$: Observable<IweatherState> = this.store$.pipe(select(weatherSelector))
  constructor(
    private store$: Store<IweatherState>
  ) { }

  ngOnInit(): void {
    this.conditions$.subscribe(res => {
      console.log(res)
    })
  }

  onClickBtn() {
    this.store$.dispatch(new WeatherAddLocation())
  }

}
