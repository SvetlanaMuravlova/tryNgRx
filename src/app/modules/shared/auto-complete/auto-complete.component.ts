import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '@services/api.service';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IAutoCompleteItem } from '@interfaces/interfaces';
import { CommonForGeneralLocationsService } from '@services/common.service';
import { CountApisService } from '@services/count-apis.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  @Input() type: string;
  value: string;
  placeHolder = 'pi pi-search';
  disabled = false;
  items: IAutoCompleteItem[] = [];

  constructor(
    public apiService: ApiService,
    public commonServ: CommonForGeneralLocationsService,
    private apiCounts: CountApisService
  ) { }

  ngOnInit(): void {
  }

  updateValue(): Observable<null> | void {
    if (this.value && this.value.length > 4) {
      this.setInputSettings(true);
      this.apiService.getLocationByAutoComplete(this.value).subscribe((res: IAutoCompleteItem[]) => {
        this.items = res;
        this.setInputSettings(false);
        this.apiCounts.updateAmount();
      }), catchError(err => {
        this.setInputSettings(false);
        return of();
      }), finalize(() => {
      });
    } else {
      this.items = [];
      this.setInputSettings(false);
    }
  }

  setInputSettings(disabled: boolean): void {
    this.placeHolder = disabled ? 'pi pi-spin pi-spinner' : 'pi pi-search';
    this.disabled = disabled;
  }

  addAddresse(item: IAutoCompleteItem): void {
    this.value = `${item.Type}, ${item.LocalizedName}, ${item.Country.LocalizedName}`;
    this.commonServ.addGeneralLocation(item.Key);
    this.items = [];
  }

}
