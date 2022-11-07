import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Barras } from './barras.model';

@Injectable({
  providedIn: 'root'
})
export class BarrasService {

  private baseURL = environment.api;
  private endpoint = 'barras';

  private httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      'Authorization': JSON.stringify(localStorage.getItem("token"))
    })
  }

    constructor(private httpClient: HttpClient) { }

    /**
  * Função para buscar o token que esteja armazenado em localStorage
  * @author Paulo Roberto da Silva
  * @version 1.2.0
  */
  getToken()
  {
    return localStorage.getItem("Authorization");
  }

 
 /**
   * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
   * @param page number O numero da página que se deseja buscar
   * @param size number A quantidade de registros por página que será entregue na consulta
   * @param sort string Um texto com o nome da coluna do Objeto de UserSiaDTO que representará a ordenação de acordo com o mesmo
   * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
   * @returns Observable<UserSia[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
   * @author Paulo Roberto da Silva
   * @version 1.0.0
   */
  list(page: number, size: number, sort: any = null, direction: any = null): Observable<Barras[]>{
    if(sort !== null && direction !== null)
      return this.httpClient.get<Barras[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    return this.httpClient.get<Barras[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}`).pipe();
  }

    /**
   * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
   * @param page number O numero da página que se deseja buscar
   * @param size number A quantidade de registros por página que será entregue na consulta
   * @param sort string Um texto com o nome da coluna do Objeto de UserSiaDTO que representará a ordenação de acordo com o mesmo
   * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
   * @param term string opcional para fazer uma pesquisa em outro endpoint usando a mesma function para ser usada com o component generico de table
   * @returns Observable<UserSia[]> Um observable contendo dados paginados e ordenados referente a uma lista de usuários do sistema
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.0.0
   */
     listBarrasPagingAndSearching(page: number, size: number, sort: any = null, direction: any = null, term: string ): Observable<Barras[]>{
        return this.httpClient.get<Barras[]>(`${this.baseURL}/${this.endpoint}/search/${term}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    }

       /**
     * 
     * @param id 
     * @returns 
     */
        findId(id: number): Observable<Barras>{
          return this.httpClient.get<Barras>(`${this.baseURL}/${this.endpoint}/${id}`).pipe();
        }

        delete(id: number):Observable<any> {
          return this.httpClient.get(`${this.baseURL}/${this.endpoint}/delete/${id}`);
        }


}
