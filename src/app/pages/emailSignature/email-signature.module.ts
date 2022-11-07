import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailSignatureRoutingModule } from './email-signature-routing.module';
import { EmailSignatureComponent } from './email-signature.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  declarations: [
    EmailSignatureComponent
  ],
  imports: [
    CommonModule,
    EmailSignatureRoutingModule,
    SharedModule,
    ExportAsModule
    
  ]
})
export class EmailSignatureModule { }
