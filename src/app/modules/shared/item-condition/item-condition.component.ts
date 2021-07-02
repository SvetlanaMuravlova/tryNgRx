import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IweatherState } from '@generalStore/weather.reducer';
import { Store } from '@ngrx/store';
import { deleteLocation } from '@generalStore/weather.actions';
@Component({
  selector: 'app-item-condition',
  templateUrl: './item-condition.component.html',
  styleUrls: ['./item-condition.component.scss'],
  providers: [DatePipe]
})
export class ItemConditionComponent {
  @Input() item: any;
  @Input() key: string;

  constructor(
    private datePipe: DatePipe,
    private store$: Store<IweatherState>
  ) {}

  initeImgUrl(icon: number): string {
    const iconNum = icon < 10 ? `0${icon}` : icon;
    return `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`;
  }

  getTitleOfCard(): string {
    return `${this.item.Type} ${this.item.LocalizedName}, ${this.item.Country}`
  }

  getDate(): string {
    return this.datePipe.transform(this.item.LocalObservationDateTime, 'EEEE, MMMM d, y')
  }

  deleteLocation() {
    this.store$.dispatch(deleteLocation({key: this.key}));
  }

}
