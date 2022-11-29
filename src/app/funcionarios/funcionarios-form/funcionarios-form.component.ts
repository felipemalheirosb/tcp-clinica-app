import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FuncionariosService } from './../../funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  funcionario: Funcionario;
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor(
    private service: FuncionariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.funcionario = new Funcionario();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getFuncionarioById(this.id)
          .subscribe({
            next: response => {
              this.funcionario = response;
            },
            error: errorResponse => {
              this.funcionario = new Funcionario();
            }
          })
      }
    })
  }

  voltarParaLista() {
    this.router.navigate(['/funcionarios/lista'])
  }

  onSubmit() {
    if (this.id) {
      this.service
        .atualizar(this.funcionario)
        .subscribe({
          next: response => {
            this.success = true;
            this.errors = [];
          },
          error: errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar o Funcionario.']
          }
        })
    } else {
      this.service
        .salvar(this.funcionario)
        .subscribe({
          next: response => {
            this.success = true;
            this.errors = [];
            this.funcionario = response;
          },
          error: errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          }
        })
    }
  }
}
