import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ItemConditionComponent } from './item-condition/item-condition.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { EffectsModule } from '@ngrx/effects';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { ErrorComponent } from './error/error.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [AutoCompleteComponent, ItemConditionComponent, NavBarComponent, ErrorComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    ButtonModule,
    RippleModule,
    EffectsModule,
    MenubarModule,
    ModalModule.forRoot(),
    ProgressSpinnerModule
  ],
  exports: [
    AutoCompleteComponent,
    ItemConditionComponent,
    NavBarComponent,
    ErrorComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
