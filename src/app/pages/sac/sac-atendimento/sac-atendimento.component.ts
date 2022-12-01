
import { ClientListModComponent } from 'src/app/_shared/client-list-mod/client-list-mod.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ProdutoSacmodComponent } from 'src/app/_shared/produto-sacmod/produto-sacmod.component';
import { ClientService } from '../../client/client.service';
import { ProductService } from '../../product/product.service';
import { ReasonComplaintService } from '../../reasonComplaint/reason-complaint.service';
import { SectorService } from '../../sector/sector.service';
import { UserSiaService } from '../../userSia/user-sia.service';
import { Sac } from '../Sac.model';
import { SacService } from '../sac.service';

@Component({
  selector: 'app-sac-atendimento',
  templateUrl:'./sac-atendimento.component.html',
  styleUrls: ['./sac-atendimento.component.scss']
})
export class SacAtendimentoComponent implements OnInit {

  nameContent: string = 'Cadastro Atendimento SAC';//my-toolbar
  sacMaster!: Sac;
  /*
     Colocando os dados para receber os inputs properties produto
     */
     displayedColumnsPr: string[] = ['code', 'lastSectorSent', 'nameClient', 'clientContactDateView', 'statusColumnTable'];//nome da coluna do json que será percorrido
     dataSourcePr: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
     displayHeaderColumnsPr: string[] = ['CODIGO', 'NOME', 'NF-e', 'QUANTIDADE RECLAMADA', 'MOTIVO'];//nome da coluna que será exibido no html usado como rotulo
     pageablePr: any;//recebe o conteudo da paginação a cada requisição
     totalElementsPr!: number;
     loadingPr = false;
     sortPr!: MatSort;
     paginatorPr: any;
     termPr!: string;//recebe o termo da pesquisa dentro do input da tabela.
     editPr: any;//recebe a url para tela de edição do usuario
     deletePr: any;//recebe uma função
     createPr: any;//recebe a url para tela de criação do usuario

     /*Colocando os dados para receber os inputs properties- midia
     */
     displayedColumnsMd: string[] = ['code', 'nameClient', 'nameTipo','clientContactDateView'];//nome da coluna do json que será percorrido
     dataSourceMd: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
     displayHeaderColumnsMd: string[] = ['Codigo', 'Nome', 'Tipo', 'Data Anexo'];//nome da coluna que será exibido no html usado como rotulo
     pageableMd: any;//recebe o conteudo da paginação a cada requisição
     totalElementsMd!: number;
     loadingMd = false;
     sortMd!: MatSort;
     paginatorMd: any;
     termMd!: string;//recebe o termo da pesquisa dentro do input da tabela.
     editMd: any;//recebe a url para tela de edição do usuario
     deleteMd: any;//recebe uma função
     createMd: any;//recebe a url para tela de criação do usuario


    /*Colocando os dados para receber os inputs properties- valores
     */
    displayedColumnsVr: string[] = ['code', 'nameClient', 'nameTipo','clientContactDateView'];//nome da coluna do json que será percorrido
    dataSourceVr: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
    displayHeaderColumnsVr: string[] = ['Código', 'Nome', 'Tipo', 'Valor'];//nome da coluna que será exibido no html usado como rotulo
    pageableVr: any;//recebe o conteudo da paginação a cada requisição
    totalElementsVr!: number;
    loadingVr = false;
    sortVr!: MatSort;
    paginatorVr: any;
    termVr!: string;//recebe o termo da pesquisa dentro do input da tabela.
    editVr: any;//recebe a url para tela de edição do usuario
    deleteVr: any;//recebe uma função
    createVr: any;//recebe a url para tela de criação do usuario

      /*Colocando os dados para receber os inputs properties- andamento
     */
      displayedColumnsAn: string[] = ['code', 'nameClient', 'nameTipo','clientContactDateView'];//nome da coluna do json que será percorrido
      dataSourceAn: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
      displayHeaderColumnsAn: string[] = ['Codigo', 'Setor', 'Usuário Responsavel', 'Status'];//nome da coluna que será exibido no html usado como rotulo
      pageableAn: any;//recebe o conteudo da paginação a cada requisição
      totalElementsAn!: number;
      loadingAn = false;
      sortAn!: MatSort;
      paginatorAn: any;
      termAn!: string;//recebe o termo da pesquisa dentro do input da tabela.
      editAn: any;//recebe a url para tela de edição do usuario
      deleteAn: any;//recebe uma função
      createAn: any;//recebe a url para tela de criação do usuario


      /**
       * bloco dos checks classificação  classificationCheck
       */
      ckbQuality: boolean = false;
      ckbDevolution: boolean = false;
      ckbOccurrence: boolean = false;
      ckbOthers: boolean = false;
      ckbFfo: boolean = false;
      ckbInformative: boolean = false;
      ckbExport: boolean = false;

/**
 * Tratando a aba atendidimento para eventos dos elementos html
 */
    //captura o elemento no DOM
    @ViewChild('codeAtt', { static: true })
    codeAtt!: ElementRef;//contem o valor do input



     constructor(
      private matSnackBar: MatSnackBar,
      private router: Router,
      public matDialog: MatDialog,
      private sacService: SacService,
      private clientService: ClientService,
      private productService: ProductService,
      private userSiaService: UserSiaService,
      private reasonComplaintService: ReasonComplaintService,
      private sectorService : SectorService

  ) { }

  ngOnInit(): void {
    // this.();
  }

testemodal(){
  this.matDialog.open (ProdutoSacmodComponent);
}
  /**
   * Captura o valor que está no input
   */
// getCodeAtt(event: any)
// {

//   console.log(this.codeAtt.nativeElement.value = event.target.value);

// }


// save()
// {
//   this.sacMaster.code = this.codeAtt.nativeElement.value;
//   console.log("codigo do SAC : "+this.sacMaster.code);


// }

  /**
   * Eventos para os inputs da aba Atendimento
   *
   */
getValueCodeAtt()
{

}


  /**
   * Destinado somente a Produto
   */
/**
   * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
   * @returns MatSort
   */
 getMatSortPr(event: any) {
  this.sortPr = event;
  console.log("Ecoando na Ordenação:   " + this.sortPr?.direction);
  // this.listSac();
}

getMatPaginatorPr(event: any) {

  this.paginatorPr = event;
  console.log("Ecoando na Paginação:   " + this.paginatorPr?.page);
  // this.listSac();
}


getSearchAllPr(event: any) {
  this.termPr = event;
  console.log("Captura da Pesquisa : " + this.termPr);
  // this.listSac();
}

getRouterEditPr(event: any) {
  this.editPr = event;
  this.router.navigateByUrl("/sac/alterar/" + this.editPr);

}

getRouterDeletePr(event: any) {
  this.deletePr = event;
  //   this.remove(this.delete);
}

getRouterCreatePr(event: any) {
  this.createPr = event;
  this.router.navigateByUrl("/sac/cadastro");
}






/**
 * Destinado somente a midia
 */

/**
   * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
   * @returns MatSort
   */
 getMatSortMd(event: any) {
  this.sortMd = event;
  console.log("Ecoando na Ordenação:   " + this.sortMd?.direction);
  // this.listSac();
}

getMatPaginatorMd(event: any) {

  this.paginatorMd = event;
  console.log("Ecoando na Paginação:   " + this.paginatorMd?.page);
  // this.listSac();
}


getSearchAllMd(event: any) {
  this.termMd = event;
  console.log("Captura da Pesquisa : " + this.termMd);
  // this.listSac();
}

getRouterEditMd(event: any) {
  this.editMd = event;
  this.router.navigateByUrl("/sac/alterar/" + this.editMd);

}

getRouterDeleteMd(event: any) {
  this.deleteMd = event;
  //   this.remove(this.delete);
}

getRouterCreateMd(event: any) {
  this.createMd = event;
  this.router.navigateByUrl("/sac/cadastro");
}


/**
 * Destinado somente a valores
 */

/**
   * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
   * @returns MatSort
   */
 getMatSortVr(event: any) {
  this.sortVr = event;
  console.log("Ecoando na Ordenação:   " + this.sortVr?.direction);
  // this.listSac();
}

getMatPaginatorVr(event: any) {

  this.paginatorVr = event;
  console.log("Ecoando na Paginação:   " + this.paginatorVr?.page);
  // this.listSac();
}


getSearchAllVr(event: any) {
  this.termVr = event;
  console.log("Captura da Pesquisa : " + this.termVr);
  // this.listSac();
}

getRouterEditVr(event: any) {
  this.editVr = event;
  this.router.navigateByUrl("/sac/alterar/" + this.editVr);

}

getRouterDeleteVr(event: any) {
  this.deleteVr = event;
  //   this.remove(this.delete);
}

getRouterCreateVr(event: any) {
  this.createVr = event;
  this.router.navigateByUrl("/sac/cadastro");
}


/**
 * Destinado somente a andamento
 */

/**
   * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
   * @returns MatSort
   */
 getMatSortAn(event: any) {
  this.sortAn = event;
  console.log("Ecoando na Ordenação:   " + this.sortAn?.direction);
  // this.listSac();
}

getMatPaginatorAn(event: any) {

  this.paginatorAn = event;
  console.log("Ecoando na Paginação:   " + this.paginatorAn?.page);
  // this.listSac();
}


getSearchAllAn(event: any) {
  this.termAn = event;
  console.log("Captura da Pesquisa : " + this.termAn);
  // this.listSac();
}

getRouterEditAn(event: any) {
  this.editAn = event;
  this.router.navigateByUrl("/sac/alterar/" + this.editAn);

}

getRouterDeleteAn(event: any) {
  this.deleteAn = event;
  //   this.remove(this.delete);
}

getRouterCreateAn(event: any) {
  this.createAn = event;
  this.router.navigateByUrl("/sac/cadastro");
}


openModalClient()
{
      this.matDialog.open (ClientListModComponent);
}

defaultValueCheck()
{
  this.ckbQuality = false;
  this.ckbDevolution = false;
  this.ckbOccurrence = false;
  this.ckbOthers = false;
  this.ckbFfo = false;
  this.ckbInformative = false;
  this.ckbExport = false;

}

   //classificação eventos de checkboxes

  getValueCkbQuality(value: boolean) {
    this.defaultValueCheck();
    this.ckbQuality = value;

}
getValueCkbDevolution(value: boolean) {
  this.defaultValueCheck();
    this.ckbDevolution = value;
}
getValueCkbOccurrence(value: boolean) {
  this.defaultValueCheck();
    this.ckbOccurrence = value;
}
getValueCkbOthers(value: boolean) {
  this.defaultValueCheck();
    this.ckbOthers = value;
}
getValueCkbFfo(value: boolean) {
  this.defaultValueCheck();
    this.ckbFfo = value;
}
getValueCkbInformative(value: boolean) {
  this.defaultValueCheck();
    this.ckbInformative = value;
}
getValueCkbExport(value: boolean) {
  this.defaultValueCheck();
    this.ckbExport = value;
}


}
