import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';
import { IAutoCompleteItem } from '@interfaces/interfaces';
import { CountApisService } from '@services/count-apis.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {
  value: string;
  placeHolder = 'pi pi-search';
  disabled = false;
  items: IAutoCompleteItem[] = [];

  @Output() addGeneralLocation: EventEmitter<string> = new EventEmitter();

  constructor(
    public apiService: ApiService,
    private apiCounts: CountApisService
  ) { }

  updateValue(): Observable<null> | void {
    if (this.value && this.value.length > 4) {
      this.apiService.getLocationByAutoComplete(this.value).subscribe((res: IAutoCompleteItem[]) => {
        this.items = res;
        this.apiCounts.updateAmount();
      });
    } else {
      this.items = [];
    }
  }

  addAddresse(item: IAutoCompleteItem): void {
    this.value = `${item.Type}, ${item.LocalizedName}, ${item.Country.LocalizedName}`;
    this.addGeneralLocation.emit(item.Key);
    this.items = [];
  }

}
