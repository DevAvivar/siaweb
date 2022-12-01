import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SacAtendimentoComponent } from './sac-atendimento.component';

const routes: Routes = [
  {path:'', component:SacAtendimentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SacAtendimentoRoutingModule { }
