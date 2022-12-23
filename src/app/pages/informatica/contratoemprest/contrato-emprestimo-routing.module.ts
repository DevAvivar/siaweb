import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoEmprestimoComponent } from './contrato-emprestimo.component';

const routes: Routes = [
  { path:'', component:ContratoEmprestimoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratoEmprestimoRoutingModule { }
