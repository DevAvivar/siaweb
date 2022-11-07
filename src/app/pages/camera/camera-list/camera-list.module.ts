import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraListRoutingModule } from './camera-list-routing.module';
import { CameraListComponent } from './camera-list.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    CameraListComponent
  ],
  imports: [
    CommonModule,
    CameraListRoutingModule,
    SharedModule
  ]
})
export class CameraListModule { }
