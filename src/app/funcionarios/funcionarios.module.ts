import { FuncionariosComponent } from './funcionarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FormsModule } from '@angular/forms';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';



@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionariosFormComponent,
    FuncionariosListaComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    FormsModule
  ],
  exports: [
    FuncionariosComponent,
    FuncionariosFormComponent,
    FuncionariosListaComponent
  ]
})
export class FuncionariosModule { }
