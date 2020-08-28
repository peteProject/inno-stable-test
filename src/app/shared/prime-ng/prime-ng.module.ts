import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';

export const primeNgModules = [
    ButtonModule,
    CardModule,
    CommonModule,
    ToolbarModule,
    InputTextModule
];

@NgModule({
  imports: primeNgModules,
  declarations: [],
  exports: primeNgModules
})
export class PrimeNgModule { }
