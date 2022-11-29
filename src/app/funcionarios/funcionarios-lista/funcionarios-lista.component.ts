import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.css']
})
export class FuncionariosListaComponent implements OnInit {


  funcionarios: Funcionario[] = [];
  funcionarioSelecionado!: Funcionario;
  mensagemSucesso! : string;
  mensagemError! : string;

  constructor(
    private service: FuncionariosService,
    private router: Router) { }

    ngOnInit(): void {
      this.service
      .getFuncionarios()
      .subscribe(response => this.funcionarios = response)
    }

    novoCadastro(){
      this.router.navigate(['/funcionarios/form'])
    }

    preparaDelecao(funcionario: Funcionario){
      this.funcionarioSelecionado = funcionario;
    }

    deletarFuncionario(){
      this.service
      .deletar(this.funcionarioSelecionado)
      .subscribe({
        next: response => {
          this.mensagemSucesso = 'Funcionario deletado com sucesso.';
          this.ngOnInit();
          this.mensagemError = '';
        },
        error: errorResponse => {
          this.mensagemError = 'Ocorreu um erro ao deletar o funcionario.';
          this.mensagemSucesso = '';
        }
      })
    }
}
