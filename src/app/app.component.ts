import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { CountApisService } from 'src/app/services/count-apis.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[];
  constructor(
    private primengConfig: PrimeNGConfig,
    public countApis: CountApisService
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [{
      label: 'Current weather',
      url: '/general',
      icon: 'pi pi-fw pi-sun'
  },
  {
      label: 'Favourite locations',
      url: '/general/favourite',
      icon: 'pi pi-fw pi-cloud'
  }];
  }
}
