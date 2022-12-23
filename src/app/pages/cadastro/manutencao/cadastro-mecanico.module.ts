import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroMecanicoRoutingModule } from './cadastro-mecanico-routing.module';
import { CadastroMecanicoComponent } from './cadastro-mecanico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    CadastroMecanicoComponent
  ],
  imports: [
    CommonModule,
    CadastroMecanicoRoutingModule,
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
export class CadastroMecanicoModule { }
