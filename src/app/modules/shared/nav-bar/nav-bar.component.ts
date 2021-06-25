import {AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { CountApisService } from 'src/app/services/count-apis.service';
import { takeUntil } from 'rxjs/operators';
import {from, Subject} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewChecked, OnDestroy {
  items: MenuItem[];
  apiAmount: number;
  notDestroy$ = new Subject();
  constructor(
    private primengConfig: PrimeNGConfig,
    public countApis: CountApisService,
    private cdr: ChangeDetectorRef
  ) {
    this.countApis.valueSource.pipe(
      takeUntil(this.notDestroy$)
    ).subscribe(res => {
      this.apiAmount = res;
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Current weather',
        url: '/general',
        icon: 'pi pi-fw pi-sun'
      },
      {
        label: 'Favourite locations',
        url: '/general/favourite',
        icon: 'pi pi-fw pi-cloud'
      }
    ];
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.notDestroy$.complete();
  }
}
