import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitUserSessionRoutingModule } from './unit-user-session-routing.module';
import { UnitUserSessionComponent } from './unit-user-session.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    UnitUserSessionComponent
  ],
  imports: [
    CommonModule,
    UnitUserSessionRoutingModule,
    SharedModule
  ]
})
export class UnitUserSessionModule { }
