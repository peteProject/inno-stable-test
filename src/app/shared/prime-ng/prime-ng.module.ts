import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';

export const primeNgModules = [
    ButtonModule,
    CardModule,
    CommonModule,
    ToolbarModule,
    InputTextModule,
    SidebarModule
];

@NgModule({
  imports: primeNgModules,
  declarations: [],
  exports: primeNgModules
})
export class PrimeNgModule { }
