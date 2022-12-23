import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SacItem } from './SacItem.model';
import { SacItemViewTable } from './SacItemViewTable.model';


@Injectable({
  providedIn: 'root'
})
export class SacItemService {

  private baseURL = environment.api;
  private endpoint = 'sacitem';


  constructor(
    private router: Router,
    private httpSacItem: HttpClient,
    private matSnackBar: MatSnackBar,
  
  ) { }


  /**
  * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
  * @param sacMaster number contem o codigo do Atendimento do SAC que se deseja listar os produtos
  * @param page number O numero da página que se deseja buscar
  * @param size number A quantidade de registros por página que será entregue na consulta
  * @param sort string Um texto com o nome da coluna do Objeto de SacItemDTO que representará a ordenação de acordo com o mesmo
  * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
  * @returns Observable<SacItem[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
  * @author Paulo Roberto da Silva
  * @version 1.0.0
  */
  list(sacMaster: number, page: number, size: number, sort: any = null, direction: any = null): Observable<SacItemViewTable[]> {
    if (sort !== null && direction !== null)
      return this.httpSacItem.get<SacItemViewTable[]>(`${this.baseURL}/${this.endpoint}?sacMaster=${sacMaster}&page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    return this.httpSacItem.get<SacItemViewTable[]>(`${this.baseURL}/${this.endpoint}?sacMaster=${sacMaster}&page=${page}&size=${size}`).pipe();
  }

    /**
  * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
  * @param sacMaster number contem o codigo do Atendimento do SAC que se deseja listar os produtos
  * @param page number O numero da página que se deseja buscar
  * @param size number A quantidade de registros por página que será entregue na consulta
  * @param sort string Um texto com o nome da coluna do Objeto de SacItemDTO que representará a ordenação de acordo com o mesmo
  * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
  * @returns Observable<SacItem[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
  * @author Paulo Roberto da Silva
  * @version 1.0.0
  */
     listSacItemViewTable(sacMaster: number, page: number, size: number, sort: any = null, direction: any = null): Observable<SacItemViewTable[]> {
      if (sort !== null && direction !== null)
        return this.httpSacItem.get<SacItemViewTable[]>(`${this.baseURL}/${this.endpoint}/viewtable?sacMaster=${sacMaster}&page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
      return this.httpSacItem.get<SacItemViewTable[]>(`${this.baseURL}/${this.endpoint}/viewtable?sacMaster=${sacMaster}&page=${page}&size=${size}`).pipe();
    }

  /**
 * Busca um SacIteme pelo codigo do SIA
 * @param id 
 * @returns 
 */
  findId(id: number): Observable<SacItem> {
    return this.httpSacItem.get<SacItem>(`${this.baseURL}/${this.endpoint}/${id}`).pipe();
  }
}
