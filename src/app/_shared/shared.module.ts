import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './myTable/my-table.component';
import { MySelectComponent } from './mySelect/my-select.component';
import { MyDialogComponent } from './myDialog/my-dialog.component';
import { MyCodeNameComponent } from './myCodeName/my-code-name.component';
import { MyHeaderComponent } from './myHeader/my-header.component';
import { MyFooterComponent } from './myFooter/my-footer.component';
import { MyCheckboxComponent } from './myCheckbox/my-checkbox.component';
import { MyButtonComponent } from './myButton/my-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MyToolbarComponent } from './myToolbar/my-toolbar.component';
import { DialogConformationComponent } from './dialogConfirmation/dialog-conformation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogReadFailureComponent } from './dialogReadFailure/dialog-read-failure.component';
import { DialogElementsExampleDialogComponent } from './dialogElementsExampleDialog/dialog-elements-example-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProdutoSacmodComponent } from './produto-sacmod/produto-sacmod.component';
import { ProdListModComponent } from './prod-list-mod/prod-list-mod.component';
import { ClientListModComponent } from './client-list-mod/client-list-mod.component';
import { UserSiaListModComponent } from './user-sia-list-mod/user-sia-list-mod.component';
import { MotivoListModComponent } from './motivo-list-mod/motivo-list-mod.component';
import { SetorListModComponent } from './setor-list-mod/setor-list-mod.component';
import { MidiaSacModComponent } from './midia-sacmod/midia-sac-mod.component';




@NgModule({
  declarations: [
    MyTableComponent,
    MySelectComponent,
    MyDialogComponent,
    MyCodeNameComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyCheckboxComponent,
    MyButtonComponent,
    MyToolbarComponent,
    DialogConformationComponent,
    DialogReadFailureComponent,
    DialogElementsExampleDialogComponent,
    ProdutoSacmodComponent,


    ProdListModComponent,
      ClientListModComponent,
      UserSiaListModComponent,
      MotivoListModComponent,
      SetorListModComponent,
      MidiaSacModComponent,


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatTooltipModule


  ],
  exports: [
    MyTableComponent,
    MySelectComponent,
    MyDialogComponent,
    MyCodeNameComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyCheckboxComponent,
    MyButtonComponent,
    MyToolbarComponent,
    DialogReadFailureComponent,
    DialogElementsExampleDialogComponent,
    ProdutoSacmodComponent,
    ProdListModComponent,
    ClientListModComponent,
    UserSiaListModComponent,
    MotivoListModComponent,
    SetorListModComponent,

  ]
})
export class SharedModule { }
