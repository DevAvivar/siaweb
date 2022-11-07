import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAuditListRoutingModule } from './system-audit-list-routing.module';
import { SystemAuditListComponent } from './system-audit-list.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    SystemAuditListComponent,
    
  ],
  imports: [
    CommonModule,
    SystemAuditListRoutingModule,
    SharedModule
  ]
})
export class SystemAuditListModule { }
