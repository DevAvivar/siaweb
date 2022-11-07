import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportAmountBarcodeCameraRoutingModule } from './report-amount-barcode-camera-routing.module';
import { ReportAmountBarcodeCameraComponent } from './report-amount-barcode-camera.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ReportAmountBarcodeCameraComponent
  ],
  imports: [
    CommonModule,
    ReportAmountBarcodeCameraRoutingModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ReportAmountBarcodeCameraModule { }
