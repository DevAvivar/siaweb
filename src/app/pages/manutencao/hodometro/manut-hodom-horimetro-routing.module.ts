import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManutHodomHorimetroComponent } from './manut-hodom-horimetro.component';

const routes: Routes = [
  { path: '', component:ManutHodomHorimetroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutHodomHorimetroRoutingModule { }
