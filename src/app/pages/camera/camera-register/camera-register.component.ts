import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera } from '../camera.model';
import { CameraService } from '../camera.service';
import * as moment from "moment";


//criando uma interface para manupular os dados do select não necessário vir do bando de dados atraves de uma API
interface LocalTunnel {
  value: number;
  viewValue: string;
}

interface shiftSelect {
    value: number;
    viewNumber: string;
  }

@Component({
  selector: 'app-camera-register',
  templateUrl: './camera-register.component.html',
  styleUrls: ['./camera-register.component.scss']
})
export class CameraRegisterComponent implements OnInit {

  nameContent: string = 'Cadastrar Camera';
  formGroup!: UntypedFormGroup;
  item!: Camera;
  camera_started = false;//propriedade para bloquear o acesso aos campos e botoes do formulário caso a camera esteja iniciada.
  
  localTunnel: LocalTunnel[] = [
    {value: 0, viewValue: 'Entrada'},
    {value: 1, viewValue: 'Saída'}
  ];

  shiftSelect: shiftSelect[] = [
      {value: 0, viewNumber: ''},
      {value: 1, viewNumber: "1"},
      {value: 2, viewNumber: "2"}
    ];

  constructor(
      private formBuilder: UntypedFormBuilder,
      private cameraService: CameraService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      public matDialog: MatDialog,
      public matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {

    let param_id = this.activatedRoute.snapshot.params["id"];
    if( param_id > 0 )
    {
      this.cameraService.findId(param_id).subscribe(
        {
          next: (item) =>{
            this.nameContent = 'Alterar Camera';
            this.item = item;
            this.camera_started = item.started;//atualiza o estado da camera se ela está iniciada ou desligada
            //verifica se existe algum valor no campo de data de produção para ser tratado antes de enviar para o component do Datepicker
            if(this.item.productionDate !== null || this.item.productionDate !== "")
            {
              console.log("TESTE DE DATA:   "+this.item.productionDate);
                let newDateProduction: moment.Moment = moment.utc(this.item.productionDate);
                this.item.productionDate = newDateProduction.format("MM-DD-YYYY");//foi invertido para poder ser exibido os valores vindo do banco 
            }
            this.fillForm();
          },
          error: (e) => {alert("Não foi possível buscar o Usuário.\n Motivo: "+e.status)},
          complete: () => {console.info('Complete')}
        })
    }
    else
    {
      this.fillForm();
    }
     
     
  }

  /**
   * 
   */
  salvar() {
      if (this.item && this.item.code) {
          let newDateProduction: moment.Moment = moment.utc(this.formGroup.value.productionDate);
          this.formGroup.value.productionDate = newDateProduction.format("YYYY-MM-DD");
          this.cameraService.cadastrar(this.formGroup.value).subscribe(
            {
              next: (userSiaAtualizado) => {
                this.matSnackBar.open("Atualizado com sucesso!", '', {
                  duration: 5000,
                  panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/camera");
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
          this.cameraService.cadastrar(this.formGroup.value).subscribe(
            {
              next: (cameraCadastrado) => {
                this.matSnackBar.open("Cadastrado com sucesso!", '', {
                  duration: 5000,
                  panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/camera");
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
  }

  /**
   * Função
   */
  fillForm()
  {
    this.formGroup = this.formBuilder.group({
        code: [this.item && this.item.code ? this.item.code : null],
        name: [this.item && this.item.name ? this.item.name : "", Validators.required],
        ip: [this.item && this.item.ip ? this.item.ip : "", Validators.required],
        port: [this.item && this.item.port ? this.item.port : "51236"],//PORTA DEFAULT PARA CADA CAMERA INSERIDA
        inactive: [this.item && this.item.inactive ? this.item.inactive : false],
        localTunnel: [this.item && this.item.localTunnel >= 0 ? this.item.localTunnel : null, Validators.required],
        shift: [this.item && this.item.shift ? this.item.shift : 0],
        started: [this.item && this.item.started ? this.item.started : false],
        productionDate: [this.item && this.item.productionDate !== null ? new Date(this.item.productionDate) : null]
    });
  }

 

}
