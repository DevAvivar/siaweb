import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraListComponent } from './camera-list.component';

const routes: Routes = [
  {path:'', component: CameraListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraListRoutingModule { }
