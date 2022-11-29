import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PacientesService } from './../../pacientes.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent implements OnInit {

  paciente: Paciente;
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor(
    private service: PacientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.paciente = new Paciente();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getPacienteById(this.id)
          .subscribe({
            next: response => {
              this.paciente = response;
            },
            error: errorResponse => {
              this.paciente = new Paciente();
            }
          })
      }
    })
  }

  voltarParaLista() {
    this.router.navigate(['/pacientes/lista'])
  }

  onSubmit() {
    if (this.id) {
      this.service
        .atualizar(this.paciente)
        .subscribe({
          next: response => {
            this.success = true;
            this.errors = [];
          },
          error: errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar o cliente.']
          }
        })
    } else {
      this.service
        .salvar(this.paciente)
        .subscribe({
          next: response => {
            this.success = true;
            this.errors = [];
            this.paciente = response;
          },
          error: errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          }
        })
    }
  }
}
