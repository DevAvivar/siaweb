import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailListRoutingModule } from './email-list-routing.module';
import { EmailListComponent } from './email-list.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    EmailListComponent
  ],
  imports: [
    CommonModule,
    EmailListRoutingModule,
    SharedModule
  ]
})
export class EmailListModule { }
