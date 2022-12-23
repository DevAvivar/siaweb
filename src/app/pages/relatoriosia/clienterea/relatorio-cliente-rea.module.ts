import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioClienteReaRoutingModule } from './relatorio-cliente-rea-routing.module';
import { RelatorioClienteReaComponent } from './relatorio-cliente-rea.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    RelatorioClienteReaComponent
  ],
  imports: [
    CommonModule,
    RelatorioClienteReaRoutingModule,
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
export class RelatorioClienteReaModule { }
