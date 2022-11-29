import { PacientesService } from './../../pacientes.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { Router } from '@angular/router';
import { ConsultaService } from 'src/app/consulta.service';

@Component({
  selector: 'app-pacientes-lista',
  templateUrl: './pacientes-lista.component.html',
  styleUrls: ['./pacientes-lista.component.css']
})
export class PacientesListaComponent implements OnInit {

  pacientes: Paciente[] = [];
  pacienteSelecionado!: Paciente;
  mensagemSucesso! : string;
  mensagemError! : string;
  mes!: string;

  constructor(
    private service: PacientesService,
    private consultaService: ConsultaService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getPacientes()
    .subscribe(response => this.pacientes = response)
  }

  novoCadastro(){
    this.router.navigate(['/pacientes/form'])
  }

  preparaDelecao(paciente: Paciente){
    this.pacienteSelecionado = paciente;
  }

  deletarPaciente(){
    this.service
    .deletar(this.pacienteSelecionado)
    .subscribe({
      next: response => {
        this.mensagemSucesso = 'Paciente deletado com sucesso.';
        this.ngOnInit();
        this.mensagemError = '';
      },
      error: errorResponse => {
        this.mensagemError = 'Ocorreu um erro ao deletar o paciente.';
        this.mensagemSucesso = '';
      }
    })
  }
}
