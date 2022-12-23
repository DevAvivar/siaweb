import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasImpressoraComponent } from './despesas-impressora.component';

const routes: Routes = [
  {path:'', component:DespesasImpressoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasImpressoraRoutingModule { }
