import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConformationComponent } from 'src/app/_shared/dialogConfirmation/dialog-conformation.component';
import { Email } from '../Email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-register',
  templateUrl: './email-register.component.html',
  styleUrls: ['./email-register.component.scss']
})
export class EmailRegisterComponent implements OnInit {

  nameContent: string = 'Cadastrar  Email';

  formGroup!: UntypedFormGroup;
  emails!: Email;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private emailsService: EmailService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public matDialog: MatDialog,
    public matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    let param_id = this.activatedRoute.snapshot.params["id"];
    if (param_id > 0) {
      this.emailsService.findId(param_id).subscribe(
        {
          next: (item) => {
            this.nameContent = 'Alterar  Email';
            this.emails = item;
            this.fillForm();
          },
          error: (e) => { alert("Não foi possível buscar o Usuário.\n Motivo: " + e.status) },
          complete: () => { console.info('Complete') }
        });
    }//fim if()

    else {
      this.fillForm();
    }


  }// ngOnInit()


  /**
   * funcção para cadastrar ou atulizar um registro no banco de dados
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @sice 1.0.0
   */
  salvar() {
    if (this.emails && this.emails.code) {
      this.emailsService.cadastrar(this.formGroup.value).subscribe(
        {
          next: (userSiaAtualizado) => {
            this.matSnackBar.open("Atualizado com sucesso!", '', {
              duration: 5000,
              panelClass: "green-snackbar",
            });
            this.router.navigateByUrl("/email");
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
      this.emailsService.cadastrar(this.formGroup.value).subscribe(
        {
          next: (userSiaCadastrado) => {
            this.matSnackBar.open("Cadastrado com sucesso!", '', {
              duration: 5000,
              panelClass: "green-snackbar",
            });
            this.router.navigateByUrl("/email");
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




  fillForm() {
    this.formGroup = this.formBuilder.group({
      code: [this.emails && this.emails.code ? this.emails.code : null],
      destinationEmail: [this.emails && this.emails.destinationEmail ? this.emails.destinationEmail : "", Validators.required]
    });
  }//fim fillForm()

}
