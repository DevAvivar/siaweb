import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRegisterRoutingModule } from './email-register-routing.module';
import { EmailRegisterComponent } from './email-register.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    EmailRegisterComponent
  ],
  imports: [
    CommonModule,
    EmailRegisterRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatSelectModule,
    FormsModule,
    SharedModule
  ]
})
export class EmailRegisterModule { }
