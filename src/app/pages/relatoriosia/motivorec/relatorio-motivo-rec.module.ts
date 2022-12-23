import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioMotivoRecRoutingModule } from './relatorio-motivo-rec-routing.module';
import { RelatorioMotivoRecComponent } from './relatorio-motivo-rec.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    RelatorioMotivoRecComponent
  ],
  imports: [
    CommonModule,
    RelatorioMotivoRecRoutingModule,
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
    SharedModule
  ]
})
export class RelatorioMotivoRecModule { }
