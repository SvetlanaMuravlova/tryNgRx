import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {
    console.log(sessionStorage.getItem('redirect'));
    this.check404redirect();
  }

  check404redirect(): void {
    if (!sessionStorage.getItem('redirect')) {
      return;
    }

    this.router.navigate[sessionStorage.getItem('redirect')];
  }
}
