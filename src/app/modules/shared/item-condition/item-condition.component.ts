import { Component, OnInit, Input } from '@angular/core';
import { ICondition } from '@interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { IweatherState } from '@generalStore/weather.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { weatherSelector } from '@generalStore/weather.selectors';



@Component({
  selector: 'app-item-condition',
  templateUrl: './item-condition.component.html',
  styleUrls: ['./item-condition.component.scss'],
  providers: [DatePipe]
})
export class ItemConditionComponent implements OnInit {
  @Input() item: any;
  @Input() location: any;
  // conditions$: Observable<IweatherState> = this.store$.pipe(select(weatherSelector));
  // state;
  constructor(
    private datePipe: DatePipe,
    private store$: Store<IweatherState>
  ) {
    // this.conditions$.subscribe(res => {
    //   this.state = res;
    //   console.log('item state',res)
    // })
  }

  ngOnInit(): void {
    // console.log('ITEM', this.item);
    // console.log(this.location)

  }

  initeImgUrl(icon: number): string {
    const iconNum = icon < 10 ? `0${icon}` : icon;
    return `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`;
  }

  getTitleOfCard(): string {
    return `${this.location.Type} ${this.location.LocalizedName}, ${this.location.Country}`
  }

  getDate(): string {
    return this.datePipe.transform(this.item.LocalObservationDateTime, 'EEEE, MMMM d, y')
  }

}
