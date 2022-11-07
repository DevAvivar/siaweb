import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailRegisterComponent } from './email-register.component';

const routes: Routes = [
  {path:'', component: EmailRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRegisterRoutingModule { }
