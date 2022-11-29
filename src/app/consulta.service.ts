import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta } from './consultas/consulta';
import { ConsultaBusca } from './consultas/consultas-lista/consultaBusca';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  apiURL: string = environment.apiURLBase + '/api/v1/consultas';

  constructor(private http: HttpClient) { }

  salvar(consulta: Consulta) : Observable<Consulta> {
    return this.http.post<Consulta>(`${this.apiURL}`, consulta);
  }

  buscar(nome: string, mes: number) : Observable<ConsultaBusca[]> {
    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes ? mes.toString() : '');

    console.log(httpParams);

    return this.http.get<any>(`${this.apiURL}` + "?" + httpParams);
  }

  deletar(consultaBusca: ConsultaBusca) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${consultaBusca.id}`);
  }
}
