import { Consulta } from './../consulta';
import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/consulta.service';
import { ConsultaBusca } from './consultaBusca';

@Component({
  selector: 'app-consultas-lista',
  templateUrl: './consultas-lista.component.html',
  styleUrls: ['./consultas-lista.component.css']
})
export class ConsultasListaComponent implements OnInit {
  nome!: string;
  mes!: number;
  meses: number[];
  lista!: ConsultaBusca[];
  message!: string;
  consultaBuscaSelecionado!: ConsultaBusca;
  mensagemSucesso! : string;
  mensagemError! : string;

  constructor(
    private service: ConsultaService
  ) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {

  }

  consultar() {
    this.service
      .buscar(this.nome, this.mes)
      .subscribe(response => {
        this.lista = response;
        if (this.lista.length <= 0) {
          this.message = "Nenhum registro encontrado."
        }else{
          this.message = ''
        }
      });
  }

  preparaDelecao(consulta: ConsultaBusca){
    this.consultaBuscaSelecionado = consulta;
  }

  deletarConsultaBusca(){
    this.service
    .deletar(this.consultaBuscaSelecionado)
    .subscribe({
      next: response => {
        this.mensagemSucesso = 'Consulta deletada com sucesso.';
        this.ngOnInit();
        this.mensagemError = '';
      },
      error: errorResponse => {
        this.mensagemError = 'Ocorreu um erro ao deletar o consulta.';
        this.mensagemSucesso = '';
      }
    })
  }

}
