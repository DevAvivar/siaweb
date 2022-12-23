import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserSiaService } from '../userSia/user-sia.service';
import { UserSia } from '../userSia/UserSia.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  nameContent: string = 'Perfil';
  user!: UserSia;
  formGroup!: UntypedFormGroup;

  constructor(
    private matSnackBar: MatSnackBar,
    private formBuilder: UntypedFormBuilder,
    private userSiaService: UserSiaService
  ) { }

  ngOnInit(): void {
    this.user = this.userSiaService.getLocalStorageUser();
    this.formGroup = new UntypedFormGroup({
      userCode: new UntypedFormControl(this.user.code),//seta o codigo do usuario logado 
      passwordOld: new UntypedFormControl('', Validators.required),
      passwordNew: new UntypedFormControl('', Validators.required),
      passwordConfirm: new UntypedFormControl('', Validators.required)//esse input não será utilizado no backend
    })
  }

   updatePassword() 
   {
     if(this.formGroup.getRawValue().passwordNew !== this.formGroup.getRawValue().passwordConfirm)
     {
      this.matSnackBar.open("A confirmação de senha está diferente da nova senha.", '', {
        duration: 5000,
        panelClass: "green-snackbar",
      });
      return;
     }
    this.userSiaService.updatePassword(this.formGroup.getRawValue()).subscribe(
      {
        next: (res) => {
          if(res)// se for true ...
          {
            this.matSnackBar.open("Senha alterada com sucesso!", '', {
              duration: 5000,
              panelClass: "green-snackbar",
            });
            
          }
          else
          {
            this.matSnackBar.open("Não foi possível alterar a senha.", '', {
              duration: 5000,
              panelClass: "yellow-snackbar",
            });

          }
          

        },
        error: (e) => {
          this.matSnackBar.open("Erro ao alterar a senha", '', {
            duration: 5000,
            panelClass: "red-snackbar",
          });
        },
        complete: () => { console.info('Complete') }
      });
  }

  /**
   * Função para fazer logout do sistema
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.0.0
   */
  logoutSystem() {
    console.log("Executou o click !!", this.user.code);
    this.userSiaService.getOut(this.user.code);
  }

}
