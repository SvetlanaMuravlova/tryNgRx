import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutoCompleteComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule
  ],
  exports:[
    AutoCompleteComponent
  ]
})
export class SharedModule { }
