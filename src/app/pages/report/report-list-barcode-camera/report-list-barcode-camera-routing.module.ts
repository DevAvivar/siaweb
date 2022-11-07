import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportListBarcodeCameraComponent } from './report-list-barcode-camera.component';

const routes: Routes = [
  {path:'', component: ReportListBarcodeCameraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportListBarcodeCameraRoutingModule { }
