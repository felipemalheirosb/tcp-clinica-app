import { ConsultaService } from './../../consulta.service';
import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { Funcionario } from 'src/app/funcionarios/funcionario';
import { PacientesService } from 'src/app/pacientes.service';
import { Paciente } from 'src/app/pacientes/paciente';
import { Consulta } from '../consulta';

@Component({
  selector: 'app-consultas-form',
  templateUrl: './consultas-form.component.html',
  styleUrls: ['./consultas-form.component.css']
})
export class ConsultasFormComponent implements OnInit {

  pacientes: Paciente[] = [];
  funcionarios: Funcionario[] = [];
  consulta: Consulta;
  success: boolean = false;
  errors!: String[];

  constructor(
    private pacienteService: PacientesService,
    private funcionarioService: FuncionariosService,
    private consultaService: ConsultaService
  ) {
    this.consulta = new Consulta();
  }

  ngOnInit(): void {
      this.pacienteService
        .getPacientes()
        .subscribe(
          response => this.pacientes = response),

      this.funcionarioService
      .getFuncionarios()
      .subscribe(
        response => this.funcionarios = response)
  }

  onSubmit(){
    this.consultaService
    .salvar(this.consulta)
    .subscribe({
      next: response => {
        this.success = true;
        this.errors = [];
        this.consulta = new Consulta();
      },
      error: errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    })
  }

}
