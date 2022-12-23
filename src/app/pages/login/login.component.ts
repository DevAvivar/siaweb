import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSiaService } from '../userSia/user-sia.service';
import { UserSia } from '../userSia/UserSia.model';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  token: string = "token";
  userLogged: string = "userLogged";
  unitLogged: string = "unitLogged";
  showSpinner = false;
  userSia!: UserSia;
  userSia$!: Observable<UserSia>;
  formLogin!: UntypedFormGroup;

  constructor(
    private router: Router,
    private userSiaService: UserSiaService,
    public matDialog: MatDialog,
    public matSnackBar: MatSnackBar,
) {}

ngOnInit(): void {
  this.formLogin =  new UntypedFormGroup({
    username: new UntypedFormControl('', Validators.required),
   password: new UntypedFormControl('', Validators.required)


      //=>validação de força de senha ainda faltando ser implementada : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]^.{6,}$/
      /*
Explicando em mais detalhes:

/^
(?=.*\d)              // deve conter ao menos um dígito
(?=.*[a-z])           // deve conter ao menos uma letra minúscula
(?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
(?=.*[$*&@#])         // deve conter ao menos um caractere especial
[0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
$/
 */
  });
}

sigin(): void {
  this.userSiaService.login(this.formLogin.getRawValue()).subscribe(
    {
      next: (userAuthenticate) => {
          if (userAuthenticate.token != null)
          {
            console.log(userAuthenticate.token);
              localStorage.setItem(this.userLogged, JSON.stringify(userAuthenticate.userLogged));
              localStorage.setItem(this.unitLogged, JSON.stringify(userAuthenticate.unitLogged))
              localStorage.setItem(this.token, userAuthenticate.token);

          this.matSnackBar.open("Usuário autenticado com sucesso!", '', {
              duration: 5000,
              panelClass: "green-snackbar",
          });
          this.router.navigateByUrl("/");
        }
          else{
            this.matSnackBar.open("Usuário inexistente ou senha inválida!", '', {
              duration: 5000,
              panelClass: "yellow-snackbar",
          });

          }
      },
      error: (error) => {
          this.matSnackBar.open("Erro ao autenticar usuário", '', {
              duration: 5000,
              panelClass: "red-snackbar",
          });
      },
      complete: () => {console.info('Complete')}
    });//fim subscribe
}

/**
* Função para validar o nível de senha
* @param value
* @returns
*/
passwordLevel(value:string):boolean
{
let validateExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
if(!validateExpression.test(value))
{
alert("Requisito de senha não atingido. Ex: A1b2c3");
return false;
}
return true;
}


}// fim class
