import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  @Input() displayHeaderColumns!: string[];//nome da coluna que será exibido no html usado como rotulo
  @Input() displayedColumns!: string[];//nome da coluna do json que será percorrido
  @Input() dataSource: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend  
  @Input() totalElements!: number;//recebe a quantidade total dos dados que estão no servidor
  @Input() listAllFunction: any;//recebe uma função para consultar algum endpoint contendo uma pagina com o modelo do Objeto que se deseja preencher a tabela 
  @Input() loading!: boolean;//controla a exibição do spinner quando true => mostra e false => esconde
  valueClick: number  = 0;//recebe o valor do codigo atual do registro  que foi clicado
  @Output() searchAll = new EventEmitter();// recebe uma função para pesquisar em algum endpoint contendo uma pagina com o modelo do Objeto que foi filtrado na consulta
  @Output() getSort = new EventEmitter();//recebe um EventEmitter para ser passado valores do component filho para um component Pai no caso o objeto de MatSort
  @Output() getPaginator = new EventEmitter();//recebe um EventEmitter para ser passado valores do component filho para um component Pai no caso o objeto de MatPaginator
  floatButtons: boolean = false;
  @Output() routerEdit = new EventEmitter();//recebe o evento de click do botão flutuante para redirecionar para area de edição do registro da tabela 
  @Output() routerDelete = new EventEmitter();//recebe o evento de click do batão flutuante para dispara uma função para remover o registro do banco dados
  @Output() routerCreate = new EventEmitter();//recebe o evento de click do batão flutuante para dispara uma função para criar o registro do banco dados
  @Input() showButtons!: boolean;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }//contrutor com uma propriedade usada na ordenação do conteudo já carregado na table

  //captura o elemento no DOM
  @ViewChild(MatSort, {static: true})
    sort!: MatSort | '';

    //captura o elemento no DOM
    @ViewChild(MatPaginator, {static: true})
    paginator!: MatPaginator;

    //captura o elemento no DOM
    @ViewChild('search', {static: true})
    search!: ElementRef;

    //captura o elemento no DOM
    @ViewChild('edit', {static: true})
    edit!: ElementRef;

    //captura o elemento no DOM
    @ViewChild('delete', {static: true})
    delete!: ElementRef;

    //captura o elemento no DOM
    @ViewChild('plus', {static: true})
    plus!: ElementRef;
    
  /**
   * Dispara quando o component for renderizado
   */
  ngOnInit(){ 

   this.valueClick = 0;
   this.floatButtons = false;
   
  }

  /**
   * função para capturar o objeto do tipo MatSort quando uma coluna para ordenação for clicada
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.2.0
   */ 
  getMatSort()
  {
    this.getSort.emit(this.sort);
  }

  /**
   * 
   */
  getMatPaginator()
  {

    this.getPaginator.emit(this.paginator);
    // console.log("Paginacao interna:  "+this.paginator.pageSize);
  }

  /**
   * 
   * @param element 
   */
  getRow(element: any){

    // console.log("Valida Click  "+element.id);
    if(typeof element.id !== "undefined")
    {
      if( this.valueClick > 0 && this.valueClick === element.id)
      {
        this.valueClick = 0;
        this.floatButtons = false;
      }
      else
      {
        this.valueClick = element.id;  
        this.floatButtons = true;
      }

    }
    else{

    if( this.valueClick > 0 && this.valueClick === element.code)
    {
      this.valueClick = 0;
      this.floatButtons = false;

    }
      
    else
    {
      this.valueClick = element.code;  
      this.floatButtons = true;

    }

  }
    
          

    // this.valueClick == 0 ? this.floatButtons = false : this.floatButtons = true;
  }


  /**
   * Função que devide entre a coluna possível para representar a chave primaria 
   * ex: No model de barras convenção usada foi ID no nome da coluna do Objeto json
   * sendo que deveria ser CODE como os demais.
   * @param el 
   * @returns Contem o valor da coluna que representa a chave primaria 
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   */
//   resolveColumn(el: any)
// {
//   console.log("Teste Click   "+el.code);
//     if((el?.code  === 'undefined') && ( el?.id  === 'undefined') )
//       return 0;

//     else if(el?.id  === 'undefined' )
//       return el.code;

//     return el.id;
// }

  /**
   * 
   */
  getSearchAll()
  {
    this.searchAll.emit(this.search.nativeElement.value);
  }

  /**
   * 
   */
  getRouterEdit()
  {
    this.routerEdit.emit(this.valueClick);
  }

  /**
   * 
   */
  getRouterDelete()
  {
    this.routerDelete.emit(this.valueClick);
  }

  /**
   * 
   */
  getRouterCreate()
  {
    this.routerCreate.emit(this.valueClick);
  }


}
