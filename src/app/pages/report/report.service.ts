import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = environment.reports;
  private endpoint = 'relatorio/leitura/barras';

  constructor(private httpClient: HttpClient) { }

     /**
      * Função para gerar um PDF com todas as quantidades de barras lidas por todas as Câmeras, criado em  nova aba passando apenas duas datas como parametro
      * @param dateInitial String com a data do inicio do intervalo
      * @param dateFinal String com a data do final do intervalo
      * @author Paulo Roberto da Silva
      * @version 1.0.0
      */
      listAllQuantityReadByCamera(dateInitial: string, dateFinal: string ) :Observable<any> {
        return this.httpClient.get<any>(`${this.baseURL}/${this.endpoint}/contagem/${dateInitial}/${dateFinal}`).pipe();
      }

      /**
       * Função para gerar um PDF contendo apenas as barras lidas pela camera correspodente ao IP informado e agrupado juntamente com o intervalo de datas
       * @param cameraIp String contendo o ip da camera alvo na geracao do formulário
       * @param dateInitial String com a data do inicio do intervalo
       * @param dateFinal Stirng com a data do final do intervalo 
       * @author Paulo Roberto da Silva
       * @version 1.0.0
       */
      listReadGroupByCamera(cameraIp: string, dateInitial: string, dateFinal: string ){
        return this.httpClient.get<any>(`${this.baseURL}/${this.endpoint}/grupo/${cameraIp}/${dateInitial}/${dateFinal}`).pipe();
      }

}
