import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSiaService } from '../pages/userSia/user-sia.service';
import { UserSia } from '../pages/userSia/UserSia.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionADMINGuardService implements CanActivateChild{

  localStorageKey: string = "userLogged";
  levelADMIN = "ADMIN";
  userRole: any;
  constructor(
    private userSiaService: UserSiaService, 
    private router: Router,
    public matSnackBar: MatSnackBar) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean{
      return this.isUserLoggedPermissionADMIN();
    }

  /**
     * Função para verificar se existe algum usuário logado nesse cliente
     *
     */
  isUserLoggedPermissionADMIN()
  {
    let user: UserSia = JSON.parse( localStorage.getItem(this.localStorageKey)! );
    //SE O NIVEL DE PERMISSÃO FOR MENOR QUE ADMINISTRADOR
    // this.userRole = user.roles;
    console.log("NÍVEL DE ACESSO:   "+this.userRole);
    if( this.userRole !== this.levelADMIN)
    {
      this.matSnackBar.open("Acesso Negado!", '🚷', {
        horizontalPosition: "center",
        verticalPosition: "bottom",
        duration: 3000,
        panelClass: "yellow-snackbar",
    });
      this.router.navigate(['/principal']);
      return false;
    }

    return true;

  }


}
