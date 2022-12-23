import { RelatorioProdutoMotComponent } from './relatorio-produto-mot.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', component:RelatorioProdutoMotComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioProdutoMotRoutingModule { }
