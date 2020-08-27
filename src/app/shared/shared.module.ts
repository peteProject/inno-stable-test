import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  declarations: [
  ],
  exports: [
    PrimeNgModule
  ]
})
export class SharedModule { }
