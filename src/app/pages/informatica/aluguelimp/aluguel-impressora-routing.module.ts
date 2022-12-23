import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AluguelImpressoraComponent } from './aluguel-impressora.component';

const routes: Routes = [
  {path: '', component:AluguelImpressoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AluguelImpressoraRoutingModule { }
