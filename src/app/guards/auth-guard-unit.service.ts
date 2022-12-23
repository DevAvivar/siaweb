import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Unit } from '../pages/unit/Unit.model';
import { UserSiaService } from '../pages/userSia/user-sia.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUnitService implements CanActivate{

  localStorageKey: string = "unitLogged";

  constructor(private userSiaService: UserSiaService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean{
      return this.isUnitLogged();
    }

     /**
     * Função para verificar se existe algum usuário logado nesse cliente
     *
     */
      isUnitLogged()
      {
        let unit: Unit = JSON.parse( localStorage.getItem(this.localStorageKey)! );
        if( unit == null )
        {
          this.router.navigate(['/usuario/sessao/unidade']);
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

