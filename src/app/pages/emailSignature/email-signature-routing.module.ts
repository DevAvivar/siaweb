import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSignatureComponent } from './email-signature.component';

const routes: Routes = [
  {path:'', component: EmailSignatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailSignatureRoutingModule { }
