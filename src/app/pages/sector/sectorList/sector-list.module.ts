import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectorListRoutingModule } from './sector-list-routing.module';
import { SectorListComponent } from './sector-list.component';


@NgModule({
  declarations: [
    SectorListComponent
  ],
  imports: [
    CommonModule,
    SectorListRoutingModule
  ]
})
export class SectorListModule { }
