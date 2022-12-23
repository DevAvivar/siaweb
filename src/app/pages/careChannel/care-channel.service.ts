import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CareChannel } from './CareChannel.model';

@Injectable({
  providedIn: 'root'
})
export class CareChannelService {

  private baseURL = environment.api;
  private endpoint = 'carechannel';

  constructor(
    private router: Router,
    private httpCareChannel: HttpClient,
    private matSnackBar: MatSnackBar
  ) { }

  /**
    * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
    * @param page number O numero da página que se deseja buscar
    * @param size number A quantidade de registros por página que será entregue na consulta
    * @param sort string Um texto com o nome da coluna do Objeto de CareChannelDTO que representará a ordenação de acordo com o mesmo
    * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
    * @returns Observable<CareChannel[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
    * @author Paulo Roberto da Silva
    * @version 1.0.0
    */
   list(page: number, size: number, sort: any = null, direction: any = null): Observable<CareChannel[]>{
    if (sort !== null && direction !== null)
      return this.httpCareChannel.get<CareChannel[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    return this.httpCareChannel.get<CareChannel[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}`).pipe();
  }

  /**
 * Busca um CareChannele pelo codigo do SIA
 * @param id 
 * @returns 
 */
   findId(id: number): Observable<CareChannel> {
    return this.httpCareChannel.get<CareChannel>(`${this.baseURL}/${this.endpoint}/${id}`).pipe();
  }
}
