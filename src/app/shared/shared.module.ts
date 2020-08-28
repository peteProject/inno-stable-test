import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  declarations: [
  ],
  exports: [
    PrimeNgModule,
    FormsModule
  ]
})
export class SharedModule { }
