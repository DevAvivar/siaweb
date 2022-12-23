import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Interceptor} from './app.interceptor.module';
import { AppComponent } from './app.component';
import { SharedModule } from './_shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserSiaService } from './pages/userSia/user-sia.service';
import { PermissionADMINGuardService } from './guards/permission-adminguard.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxCaptureModule } from 'ngx-capture';


@NgModule({
  declarations: [
    AppComponent,
    //adicionando as paginas que usam components genéricos aqui ...
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    Interceptor,
    RouterModule,
    NgxCaptureModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    UserSiaService, AuthGuardService, PermissionADMINGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
