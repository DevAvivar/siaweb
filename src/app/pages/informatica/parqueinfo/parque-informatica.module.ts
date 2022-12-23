import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueInformaticaRoutingModule } from './parque-informatica-routing.module';
import { ParqueInformaticaComponent } from './parque-informatica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    ParqueInformaticaComponent
  ],
  imports: [
    CommonModule,
    ParqueInformaticaRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    SharedModule
  ]
})
export class ParqueInformaticaModule { }
