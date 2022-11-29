import { PacientesRoutingModule } from './pacientes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { FormsModule } from '@angular/forms';
import { PacientesListaComponent } from './pacientes-lista/pacientes-lista.component'


@NgModule({
  declarations: [
    PacientesComponent,
    PacientesFormComponent,
    PacientesListaComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    FormsModule
  ],
  exports: [
    PacientesComponent,
    PacientesFormComponent,
    PacientesListaComponent
  ]
})
export class PacientesModule { }
