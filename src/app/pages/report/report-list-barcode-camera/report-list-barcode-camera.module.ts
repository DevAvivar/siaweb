import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportListBarcodeCameraRoutingModule } from './report-list-barcode-camera-routing.module';
import { ReportListBarcodeCameraComponent } from './report-list-barcode-camera.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ReportListBarcodeCameraComponent
  ],
  imports: [
    CommonModule,
    ReportListBarcodeCameraRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class ReportListBarcodeCameraModule { }
