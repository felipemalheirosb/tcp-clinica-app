import { environment } from './../environments/environments';
import { Paciente } from './pacientes/paciente';
import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  [x: string]: any;

  apiURL: string = environment.apiURLBase + '/api/v1/pacientes';

  constructor(private http: HttpClient ) { }

  salvar(paciente: Paciente) : Observable<Paciente> {
    return this.http.post<Paciente>(`${this.apiURL}`, paciente);
  }

  atualizar(paciente: Paciente) : Observable<any> {
    return this.http.put<Paciente>(`${this.apiURL}/${paciente.id}`, paciente);
  }

  getPacientes() : Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiURL);
  }

  getPacienteById(id: number) : Observable<Paciente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(paciente: Paciente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${paciente.id}`);
  }
}
