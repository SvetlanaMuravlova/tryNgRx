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
@NgModule({
  declarations: [AutoCompleteComponent, ItemConditionComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    ButtonModule,
    RippleModule,
    EffectsModule
  ],
  exports:[
    AutoCompleteComponent,
    ItemConditionComponent
  ],
})
export class SharedModule { }
