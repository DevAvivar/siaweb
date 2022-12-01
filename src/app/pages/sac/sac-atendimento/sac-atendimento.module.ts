import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SacAtendimentoRoutingModule } from './sac-atendimento-routing.module';
import { SacAtendimentoComponent } from './sac-atendimento.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
// import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    SacAtendimentoComponent
  ],

  imports: [
    CommonModule,
    SacAtendimentoRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    SharedModule,
    MatTabsModule,
    MatRadioModule
  ]
})
export class SacAtendimentoModule { }

