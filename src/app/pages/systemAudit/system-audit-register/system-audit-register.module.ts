import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAuditRegisterRoutingModule } from './system-audit-register-routing.module';
import { SystemAuditRegisterComponent } from './system-audit-register.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SystemAuditRegisterComponent
  ],
  imports: [
    CommonModule,
    SystemAuditRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class SystemAuditRegisterModule { }
