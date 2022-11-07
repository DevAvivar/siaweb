import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoFrontRoutingModule } from './info-front-routing.module';
import { InfoFrontComponent } from './info-front.component';


@NgModule({
  declarations: [
    InfoFrontComponent
  ],
  imports: [
    CommonModule,
    InfoFrontRoutingModule
  ]
})
export class InfoFrontModule { }
