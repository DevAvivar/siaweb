import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParqueInformaticaComponent } from './parque-informatica.component';

const routes: Routes = [
  {path:'', component:ParqueInformaticaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParqueInformaticaRoutingModule { }
