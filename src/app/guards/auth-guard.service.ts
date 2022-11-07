import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSiaService } from '../pages/userSia/user-sia.service';
import { UserSia } from '../pages/userSia/UserSia.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  localStorageKey: string = "userLogged";

  constructor(private userSiaService: UserSiaService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean{
      return this.isUserLogged();
    }

     /**
     * Função para verificar se existe algum usuário logado nesse cliente
     *
     */
      isUserLogged()
      {
        let user: UserSia = JSON.parse( localStorage.getItem(this.localStorageKey)! );
        if( user == null )
        {
          this.router.navigate(['/login']);
          return false;
        }
  
        // else if(user.logged )
        // {
        //   this.router.navigate(['/relatorio/quantidade/camera']);
        //   return false;
  
        // }
  
        return true;
  
      }
 
}
