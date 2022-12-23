import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReasonComplaintListRoutingModule } from './reason-complaint-list-routing.module';
import { ReasonComplaintListComponent } from './reason-complaint-list.component';


@NgModule({
  declarations: [
    ReasonComplaintListComponent
  ],
  imports: [
    CommonModule,
    ReasonComplaintListRoutingModule
  ]
})
export class ReasonComplaintListModule { }
