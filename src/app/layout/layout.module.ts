import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderBarComponent } from '../layout/header-bar/header-bar.component';
import { NavBarComponent } from '../layout/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HeaderBarComponent,
    NavBarComponent,
  ],
  exports: [
    HeaderBarComponent,
    NavBarComponent
  ]
})
export class LayoutModule { }
