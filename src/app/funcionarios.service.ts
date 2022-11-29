import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Funcionario } from './funcionarios/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  apiURL: string = environment.apiURLBase + '/api/v1/funcionarios';

  constructor(private http: HttpClient ) { }

  salvar(funcionario: Funcionario) : Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.apiURL}`, funcionario);
  }

  atualizar(funcionario: Funcionario) : Observable<any> {
    return this.http.put<Funcionario>(`${this.apiURL}/${funcionario.id}`, funcionario);
  }

  getFuncionarios() : Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiURL);
  }

  getFuncionarioById(id: number) : Observable<Funcionario> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(funcionario: Funcionario) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${funcionario.id}`);
  }
}
