import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimoFerramentasRoutingModule } from './emprestimo-ferramentas-routing.module';
import { EmprestimoFerramentasComponent } from './emprestimo-ferramentas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    EmprestimoFerramentasComponent
  ],
  imports: [
    CommonModule,
    EmprestimoFerramentasRoutingModule,
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
    SharedModule,
    MatTabsModule,
    MatRadioModule
  ]
})
export class EmprestimoFerramentasModule { }
