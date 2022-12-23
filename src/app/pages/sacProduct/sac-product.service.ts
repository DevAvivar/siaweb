import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductService } from '../product/product.service';
import { ReasonComplaintService } from '../reasonComplaint/reason-complaint.service';
import { SacProduct } from './SacProduct.model';
import { SacProductViewTable } from './SacProductViewTable.model';

@Injectable({
  providedIn: 'root'
})
export class SacProductService {

  private baseURL = environment.api;
  private endpoint = 'sacproduct';

   sacProductViewTable$!: SacProductViewTable[];

  constructor(
    private router: Router,
    private httpSacProduct: HttpClient,
    private matSnackBar: MatSnackBar,
    private productService: ProductService,
    private reasonComplaintService: ReasonComplaintService
  ) { }


  /**
  * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
  * @param sacMaster number contem o codigo do Atendimento do SAC que se deseja listar os produtos
  * @param page number O numero da página que se deseja buscar
  * @param size number A quantidade de registros por página que será entregue na consulta
  * @param sort string Um texto com o nome da coluna do Objeto de SacProductDTO que representará a ordenação de acordo com o mesmo
  * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
  * @returns Observable<SacProduct[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
  * @author Paulo Roberto da Silva
  * @version 1.0.0
  */
  list(sacMaster: number, page: number, size: number, sort: any = null, direction: any = null): Observable<SacProduct[]> {
    if (sort !== null && direction !== null)
      return this.httpSacProduct.get<SacProduct[]>(`${this.baseURL}/${this.endpoint}?sacMaster=${sacMaster}&page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    return this.httpSacProduct.get<SacProduct[]>(`${this.baseURL}/${this.endpoint}?sacMaster=${sacMaster}&page=${page}&size=${size}`).pipe();
  }

    /**
  * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
  * @param sacMaster number contem o codigo do Atendimento do SAC que se deseja listar os produtos
  * @param page number O numero da página que se deseja buscar
  * @param size number A quantidade de registros por página que será entregue na consulta
  * @param sort string Um texto com o nome da coluna do Objeto de SacProductDTO que representará a ordenação de acordo com o mesmo
  * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
  * @returns Observable<SacProduct[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
  * @author Paulo Roberto da Silva
  * @version 1.0.0
  */
     listSacProductViewTable(sacMaster: number, page: number, size: number, sort: any = null, direction: any = null): Observable<SacProductViewTable[]> {
      if (sort !== null && direction !== null)
        return this.httpSacProduct.get<SacProductViewTable[]>(`${this.baseURL}/${this.endpoint}/viewtable?sacMaster=${sacMaster}&page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
      return this.httpSacProduct.get<SacProductViewTable[]>(`${this.baseURL}/${this.endpoint}/viewtable?sacMaster=${sacMaster}&page=${page}&size=${size}`).pipe();
    }

  /**
 * Busca um SacProducte pelo codigo do SIA
 * @param id 
 * @returns 
 */
  findId(id: number): Observable<SacProduct> {
    return this.httpSacProduct.get<SacProduct>(`${this.baseURL}/${this.endpoint}/${id}`).pipe();
  }



  


}
