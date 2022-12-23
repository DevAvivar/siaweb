import { RelatorioProdRecComponent } from './relatorio-prod-rec.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', component:RelatorioProdRecComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioProdRecRoutingModule { }
