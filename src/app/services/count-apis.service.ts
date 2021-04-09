import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountApisService {
  SESSION_KEY = 'ApiAmount';
  value = {
    amount: 0,
    date: `${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()}`
  }
  valueSource: BehaviorSubject<number> = new BehaviorSubject(this.value.amount)
  constructor() { 
    this.initAmount()
  }

  set amount(value) {
    window.sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(value));
  }

  initAmount() {
    if(this.amount && 
      this.amount.date === this.value.date){
        this.value = this.amount;
    }

    if (!this.amount || 
    (this.amount && this.amount.date !== this.value.date)) {
      this.amount = this.value;
    }
    this.valueSource.next(this.value.amount);
  }

  get amount() {
    return JSON.parse(window.sessionStorage.getItem(this.SESSION_KEY))
  }

  updateAmount() {
    this.value.amount ++;
    this.valueSource.next(this.value.amount);
    this.amount = this.value;
  }
}
