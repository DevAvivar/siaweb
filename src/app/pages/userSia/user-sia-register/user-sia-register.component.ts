import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConformationComponent } from 'src/app/_shared/dialogConfirmation/dialog-conformation.component';
import { UserSiaService } from '../user-sia.service';
import { UserSia } from '../UserSia.model';

//USADA PARA REPRESENTAR O ENUM DE ROLES USADO NO USUARIO DO SISTEMA
interface RolesSelect {
  value: number;//valor do Enum 
  viewNames: string;// String que recebe o name do Enum vindo do servidor 
  viewShow: string;//String para mostrar o rotulo que representa cada Enum do servidor
}

@Component({
  selector: 'app-user-sia-register',
  templateUrl: './user-sia-register.component.html',
  styleUrls: ['./user-sia-register.component.scss']
})
export class UserSiaRegisterComponent implements OnInit {

  nameContent: string = 'Cadastrar  Usuário';//valor default
  formGroup!: UntypedFormGroup;
  userSia!: UserSia;

  //Select para Enum Roles
  rolesSelect: RolesSelect[] = [
    { value: 0, viewNames: "USER", viewShow: "USUÁRIO" },
    { value: 1, viewNames: "OPERATOR", viewShow: "OPERADOR" },
    { value: 2, viewNames: "ADMIN", viewShow: "ADMINISTRADOR" }
  ];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private userSiaService: UserSiaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public matDialog: MatDialog,
    public matSnackBar: MatSnackBar
  ) { }

  /*

Mínimo de oito caracteres, pelo menos uma letra e um número:

"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

Mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial:

"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

Mínimo de oito caracteres, pelo menos, uma letra maiúscula, uma letra minúscula, um número e um caractere especial:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

Mínimo oito e máximo 10 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

no mínimo uma letra minúscula, uma maiúscula, um número e um caracter especial, sendo de 6 a 50 caracteres
(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,50}$).*$

*/

  ngOnInit() {

    let param_id = this.activatedRoute.snapshot.params["id"];
    if(param_id > 0)
    {
      this.userSiaService.findId(param_id).subscribe(
        {
          next: (item) => {
            this.nameContent = 'Alterar  Usuário';
            this.userSia = item;
            this.fillForm();
          },
          error: (e) => {alert("Não foi possível buscar o Usuário.\n Motivo: "+e.status)},
          complete: () => {console.info('Complete')}
        });
      }//fim if()
  
      this.fillForm();  
    
  } //fim ngOnInit()


  /**
   * funcção para cadastrar ou atulizar um registro no banco de dados
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @sice 1.0.0
   */
  salvar() {
    if (this.userSia && this.userSia.code) {
      this.userSiaService.cadastrar(this.formGroup.value).subscribe(
        {
          next: (userSiaAtualizado) => {
            this.matSnackBar.open("Atualizado com sucesso!", '', {
              duration: 5000,
              panelClass: "green-snackbar",
            });
            this.router.navigateByUrl("/usuario");
          },
          error: (e) => {
            this.matSnackBar.open("Erro ao atualizar", '', {
              duration: 5000,
              panelClass: "red-snackbar",
            });
          },
          complete: () => { console.info('complete') }        
        });

    }//fim if() 
    else {
      this.userSiaService.cadastrar(this.formGroup.value).subscribe(
        {
          next: (userSiaCadastrado) => {
            this.matSnackBar.open("Cadastrado com sucesso!", '', {
              duration: 5000,
              panelClass: "green-snackbar",
            });
            this.router.navigateByUrl("/usuario");
          },

          error: (e) => {
            this.matSnackBar.open("Erro ao cadastrar", '', {
              duration: 5000,
              panelClass: "red-snackbar",
            });
          },
          complete: () => { console.info('Complete') }
        });

    }//fim else

  }//fim salvar()

  /**
   * Fução para  preencher um formulario automaticamente 
   * de acordo com tipo de create ou update de Usuário
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.0.0
   */
  fillForm()
  {
    this.formGroup = this.formBuilder.group({
      code: [this.userSia && this.userSia.code ? this.userSia.code : null],
      roles: [this.userSia && this.userSia.roles ? this.userSia.roles : null],
      name: [this.userSia && this.userSia.name ? this.userSia.name : "", Validators.required],
      login: [
        this.userSia && this.userSia.login ? this.userSia.login : "",
        Validators.required,
      ],
      password: [
        this.userSia && this.userSia.password ? this.userSia.password : "",
        [Validators.required]
      ],
      logged: [this.userSia && this.userSia.logged ? this.userSia.logged : false], //PORTA DEFAULT PARA CADA STATUS DE USUÁRIO LOGADO
      // roles: [this.userSia.roles],
    });
  }

}//fim component
