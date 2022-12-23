import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotinadeManutencaoComponent } from './rotinade-manutencao.component';

const routes: Routes = [
  { path: '', component:RotinadeManutencaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotinadeManutencaoRoutingModule { }
