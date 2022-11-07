import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarrasListRoutingModule } from './barras-list-routing.module';
import { BarrasListComponent } from './barras-list.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    BarrasListComponent
  ],
  imports: [
    CommonModule,
    BarrasListRoutingModule,
    SharedModule
  ]
})
export class BarrasListModule { }
