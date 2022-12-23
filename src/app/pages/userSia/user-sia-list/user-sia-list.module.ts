import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSiaListRoutingModule } from './user-sia-list-routing.module';
import { UserSiaListComponent } from './user-sia-list.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    UserSiaListComponent
  ],
  imports: [
    CommonModule,
    UserSiaListRoutingModule,
    SharedModule
  ]
})
export class UserSiaListModule { }
