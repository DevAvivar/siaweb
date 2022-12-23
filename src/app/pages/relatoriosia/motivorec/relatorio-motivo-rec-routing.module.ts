import { RelatorioMotivoRecComponent } from './relatorio-motivo-rec.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', component:RelatorioMotivoRecComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioMotivoRecRoutingModule { }
