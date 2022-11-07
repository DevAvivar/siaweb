import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryPasswordRoutingModule } from './recovery-password-routing.module';
import { RecoveryPasswordComponent } from './recovery-password.component';


@NgModule({
  declarations: [
    RecoveryPasswordComponent
  ],
  imports: [
    CommonModule,
    RecoveryPasswordRoutingModule
  ]
})
export class RecoveryPasswordModule { }
