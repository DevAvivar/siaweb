import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxCaptureService } from 'ngx-capture';
// import * as puppeteer from 'puppeteer';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { EmailSignatureService } from './email-signature.service';

@Component({
  selector: 'app-email-signature',
  templateUrl: './email-signature.component.html',
  styleUrls: ['./email-signature.component.scss']
})

export class EmailSignatureComponent implements OnInit {

  nameContent: string = 'Assinatura de Email';

  // @Output() getValues = new EventEmitter();// recebe uma função para capturar o valor do input
  // @Output() generate = new EventEmitter();//recebe o evento de click do botão 
  registrationField!: number;
  nameField!: string;
  functionField!: string;
  phoneField!: string;
  emailField!: string;
  celPhoneField!: string;
  img!: any;
 

  exportAsConfig: ExportAsConfig = {
    type: 'png', // the type you want to download
    elementIdOrContent: 'signature', // the id of html/table element
  }

  constructor(
    private exportAsService: ExportAsService,
    private ngCaptureService: NgxCaptureService,
    private emailSignatureService: EmailSignatureService,
    public matSnackBar: MatSnackBar) { }

  //captura o elemento no DOM
  @ViewChild('registration', { static: true })
  registration!: ElementRef;

  @ViewChild('name', { static: true })
  name!: ElementRef;

  @ViewChild('function', { static: true })
  function!: ElementRef;

  @ViewChild('celPhone', { static: true })
  celPhone!: ElementRef;

  @ViewChild('phone', { static: true })
  phone!: ElementRef;

  @ViewChild('email', { static: true })
  email!: ElementRef;

  @ViewChild('signature', { static: true })
  signature!: ElementRef;

  @ViewChild('downloadImg', { static: true })
  downloadImg!: ElementRef;


  ngOnInit(): void {
  }


  /**
 * Captura o valor que está no input de nome
 */
   getRegistration() 
   {
    let term = 0;
    if(this.registration.nativeElement.value > 0)
      term = this.registration.nativeElement.value;
    
    this.emailSignatureService.findDataSignature(term).subscribe({
      next:(collaborator)=>
      {
        console.log("Meu nome:  "+collaborator.name);
          this.nameField = collaborator.name;
          this.name.nativeElement.value = collaborator.name;
          this.functionField = collaborator.occupation;
          this.function.nativeElement.value = collaborator.occupation;
     
          
      },
      error:(e)=>
      {
        this.matSnackBar.open("Não foi possível fazer a consulta. Contate a Ti. ", '', {
          duration: 5000,
          panelClass: "black-snackbar",
        });
      },
      complete:()=>{console.info('complete')}
    });

  }

  /**
 * Captura o valor que está no input de nome
 */
  getName() {
    this.nameField = this.name.nativeElement.value;

  }

  /**
   *Captura o valor que está no input de cargo 
   */
  getFunction() {
    this.functionField = this.function.nativeElement.value;
  }

  /**
  * Captura o valor que está no input de telefone
  */
  getCelPhone() {
    this.celPhoneField = this.celPhone.nativeElement.value;
  }

  /**
   * Captura o valor que está no input de telefone
   */
  getPhone() {
    this.phoneField = this.phone.nativeElement.value;
  }

  /**
 * Captura o valor que está no input de telefone
 */
  getEmail() {
    this.emailField = this.email.nativeElement.value;
  }

  cleanFields()
  {
    this.registration.nativeElement.value = '';
    this.name.nativeElement.value = '';
    this.nameField = '';
    this.function.nativeElement.value = '';
    this.functionField = '';
    this.celPhone.nativeElement.value = '';
    this.celPhoneField = '';
    this.phone.nativeElement.value = '';
    this.phoneField = '';
    this.email.nativeElement.value = '';
    this.emailField = '';
  }

  //  async capture(){
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");
  //   const video = document.createElement("video");

  //   try {
  //     const captureStream = await navigator.mediaDevices.getDisplayMedia();
  //     video.srcObject = captureStream;
  //     context.drawImage(video, 0, 0, window.width, window.height);
  //     const frame = canvas.toDataURL("image/png");
  //     captureStream.getTracks().forEach(track => track.stop());
  //     window.location.href = frame;
  //   } catch (err) {
  //     console.error("Error: " + err);
  //   }
  // };


  //  /**
  //   * Envia tudo para o pumppter e gera a assinatura em formato de png
  //   */
  generateSignature() {
    this.ngCaptureService.getImage(this.signature.nativeElement, true)
      .subscribe({
        next: (item) => {
          this.img = item;
          setTimeout(() => {
            this.downloadImg.nativeElement.click();
          }, 2000);

          console.log("imagem: " + item);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => { console.info('Complete') }
      });

  }//fim generateSignature()


  //  generateSignature()
  //  {

  //   (async () => {
  //     const browser = await puppeteer.launch();
  //     const page = await browser.newPage();
  //     await page.goto("https://example.com");
  //     await page.screenshot({ path: "example.png" });

  //     await browser.close();
  //   })();
  // }


  // generateSignature() {
  //   // download the file using old school javascript method
  //   this.exportAsService.save(this.exportAsConfig, 'MinhaPrimeiraAssinaturaEmail').subscribe((item) => {
  //     // save started
  //     console.log("Teste Salvando: "+item);
  //   });
  //   // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  //   this.exportAsService.get(this.exportAsConfig).subscribe((content: any) => {
  //     console.log("Conteudo: "+content);
  //   });
  // }

  // generateSignature()
  // {
  //   console.log("Disparou a função");
  //   window.print();
  // }

  // generateSignature()
  // {
  //   this.emailSignatureService.signatureGet("Hello World Paulo!!!").subscribe(
  //     {
  //       next:(response: any)=>{
  //         console.log(response);
  //       },
  //       error:(err: any)=>{
  //         console.log(err);
  //       },
  //       complete:()=>{}
  //     }
  //   );
  // }

  // /**
  //  * Usando o html to image com nodejs
  //  */
  // generateSignature() {
  //   const nodeHtmlToImage = require('node-html-to-image')
  //   nodeHtmlToImage({
  //     output: './image.png',
  //     html: '<html><body>Hello world!</body></html>'
  //   })
  //     .then(() => console.log('The image was created successfully!'))

  // }
 


}
