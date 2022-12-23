import { RelatorioClienteReaComponent } from './relatorio-cliente-rea.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', component:RelatorioClienteReaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioClienteReaRoutingModule { }
